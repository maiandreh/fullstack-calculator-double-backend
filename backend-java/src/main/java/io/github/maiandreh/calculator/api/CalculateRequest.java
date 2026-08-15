package io.github.maiandreh.calculator.api;

import com.fasterxml.jackson.databind.JsonNode;

record CalculateRequest(JsonNode expression) {}
