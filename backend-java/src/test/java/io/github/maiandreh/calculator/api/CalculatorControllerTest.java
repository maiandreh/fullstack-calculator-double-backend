package io.github.maiandreh.calculator.api;

import static org.hamcrest.Matchers.nullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.options;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
class CalculatorControllerTest {
    private static final String INVALID_REQUEST_MESSAGE =
            "A non-empty expression of at most 256 characters is required";

    @Autowired
    private MockMvc mockMvc;

    @Test
    void returnsExactSuccessfulResponse() throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"(2 + 3) * 4\"}"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.result").value(20))
                .andExpect(jsonPath("$.length()").value(1));
    }

    @Test
    void resultIsJsonNumberRatherThanString() throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"0.1 + 0.2\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").isNumber());
    }

    @Test
    void rejectsMissingNullNonStringEmptyAndTooLongExpressions() throws Exception {
        String[] bodies = {
            "{}",
            "{\"expression\":null}",
            "{\"expression\":42}",
            "{\"expression\":\"\"}",
            "{\"expression\":\"   \"}",
            "{\"expression\":\"" + "1".repeat(257) + "\"}"
        };

        for (String body : bodies) {
            mockMvc.perform(post("/api/calculate")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(body))
                    .andExpect(status().isBadRequest())
                    .andExpect(jsonPath("$.code").value("INVALID_REQUEST"))
                    .andExpect(jsonPath("$.message").value(INVALID_REQUEST_MESSAGE))
                    .andExpect(jsonPath("$.length()").value(2));
        }
    }

    @Test
    void acceptsExpressionAtUnicodeCharacterLimit() throws Exception {
        String expression = "(".repeat(127) + "12" + ")".repeat(127);

        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"" + expression + "\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.result").value(12));
    }

    @Test
    void rejectsMalformedJsonAsInvalidRequest() throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"2 + 3\""))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.code").value("INVALID_REQUEST"))
                .andExpect(jsonPath("$.message").value(INVALID_REQUEST_MESSAGE));
    }

    @Test
    void mapsRepresentativeDomainErrorsExactly() throws Exception {
        assertError("2 +", "INVALID_EXPRESSION", "Expression is invalid");
        assertError("1 / -0", "DIVISION_BY_ZERO", "Division by zero is not allowed");
        assertError("sqrt(-1)", "INVALID_DOMAIN", "Expression is outside the supported real-number domain");
        assertError("10 ^ 1000", "NON_FINITE_RESULT", "Expression result is not finite");
    }

    @Test
    void permitsOnlyTheLocalViteDevelopmentOrigin() throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .header("Origin", "http://localhost:5173")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"2 + 3\"}"))
                .andExpect(status().isOk())
                .andExpect(header().string("Access-Control-Allow-Origin", "http://localhost:5173"));

        mockMvc.perform(post("/api/calculate")
                        .header("Origin", "https://example.com")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"2 + 3\"}"))
                .andExpect(status().isForbidden())
                .andExpect(header().string("Access-Control-Allow-Origin", nullValue()));
    }

    @Test
    void supportsVitePreflight() throws Exception {
        mockMvc.perform(options("/api/calculate")
                        .header("Origin", "http://localhost:5173")
                        .header("Access-Control-Request-Method", "POST")
                        .header("Access-Control-Request-Headers", "Content-Type"))
                .andExpect(status().isOk())
                .andExpect(header().string("Access-Control-Allow-Origin", "http://localhost:5173"))
                .andExpect(header().string("Access-Control-Allow-Methods", "POST"))
                .andExpect(header().string("Access-Control-Allow-Headers", "Content-Type"));
    }

    @Test
    void rejectsUnsupportedMediaType() throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.TEXT_PLAIN)
                        .content("2 + 3"))
                .andExpect(status().isUnsupportedMediaType());
    }

    private void assertError(String expression, String code, String message) throws Exception {
        mockMvc.perform(post("/api/calculate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{\"expression\":\"" + expression + "\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.code").value(code))
                .andExpect(jsonPath("$.message").value(message))
                .andExpect(jsonPath("$.length()").value(2));
    }
}
