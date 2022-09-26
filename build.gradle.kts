plugins {
    kotlin("js") version "1.7.10"
}

group = "me.jmfayard"
version = "1.0-SNAPSHOT"

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}

kotlin {
    js(IR) {
        binaries.executable()
        nodejs {

        }
    }
}