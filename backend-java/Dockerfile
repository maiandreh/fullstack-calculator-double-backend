FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /src

COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src src
RUN ./mvnw package

FROM eclipse-temurin:21-jre-alpine AS runtime

RUN addgroup -S calculator && adduser -S -G calculator calculator

WORKDIR /app
COPY --from=build --chown=calculator:calculator /src/target/calculator-java-backend-0.0.1-SNAPSHOT.jar ./calculator.jar

USER calculator
EXPOSE 8081

ENTRYPOINT ["java", "-jar", "/app/calculator.jar"]
