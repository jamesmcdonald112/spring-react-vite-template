# ---- BUILD STAGE ----
FROM gradle:8.9-jdk21 AS builder
WORKDIR /home/gradle/app
COPY --chown=gradle:gradle . .
RUN gradle clean build -x test
RUN ls /home/gradle/app/build/libs  # 👈 verify jar path

# ---- RUNTIME STAGE ----
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=builder /home/gradle/app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]