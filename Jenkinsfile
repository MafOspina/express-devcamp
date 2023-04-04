pipeline {
  agent any

  tools {
      nodejs 'nodejs'
  }

  environment {
      // General Variables for Pipeline
      PROJECT_ROOT = 'express-devcamp'
  }

  stages {
      stage('Hello') {
        steps {
          // First stage is a sample hello-world step to verify correct Jenkins Pipeline
          echo 'Hello World, I am Happy'
          echo 'This is my amazing Pipeline'
        }
      }
      stage('Checkout') {
        steps {
            git branch: 'master', url: 'https://github.com/Mafe4236323123/express-devcamp' }
      }
      
      stage('scan') {
          environment {
            // Previously defined in the Jenkins "Global Tool Configuration"
            scannerHome = tool 'sonarqube'
          }
          steps {
            // "sonarqube" is the server configured in "Configure System"
            withSonarQubeEnv('sonarqube') {
              // Execute the SonarQube scanner with desired flags
              sh "${scannerHome}/bin/sonar-scanner \
                          -Dsonar.projectKey=labsonar3 \
                          -Dsonar.projectName=labsonar3 \
                          -Dsonar.projectVersion=1.0 \
                          -Dsonar.host.url=http://docker-sonarqube-1:9000 \
                          -Dsonar.login=admin \
                          -Dsonar.password=1234 "
            }
            timeout(time: 3, unit: 'MINUTES') {
              // In case of SonarQube failure or direct timeout exceed, stop Pipeline
              waitForQualityGate abortPipeline: qualityGateValidation(waitForQualityGate())
            }
          }
      }
  }
}
