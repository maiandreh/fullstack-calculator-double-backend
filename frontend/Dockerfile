FROM node:24-alpine AS build

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITE_GO_BACKEND_URL=http://localhost:8080
ARG VITE_JAVA_BACKEND_URL=http://localhost:8081
ENV VITE_GO_BACKEND_URL=$VITE_GO_BACKEND_URL
ENV VITE_JAVA_BACKEND_URL=$VITE_JAVA_BACKEND_URL

RUN npm run build

FROM alpine:3.23 AS runtime

RUN apk add --no-cache busybox-extras \
    && addgroup -S calculator \
    && adduser -S -G calculator calculator

WORKDIR /srv
COPY --from=build --chown=calculator:calculator /src/dist ./

USER calculator
EXPOSE 8080

ENTRYPOINT ["/usr/sbin/httpd", "-f", "-p", "8080", "-h", "/srv"]
