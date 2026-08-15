FROM golang:1.26-alpine AS build

WORKDIR /src

COPY go.mod ./
RUN go mod download

COPY cmd ./cmd
COPY internal ./internal
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath -ldflags="-s -w" -o /out/calculator ./cmd/server

FROM alpine:3.23 AS runtime

RUN addgroup -S calculator && adduser -S -G calculator calculator

WORKDIR /app
COPY --from=build --chown=calculator:calculator /out/calculator ./calculator

USER calculator
EXPOSE 8080

ENTRYPOINT ["/app/calculator"]
