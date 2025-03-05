pipeline {
    agent {
        docker {
            image 'cypress/browsers' 
            args '--entrypoint=""'
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test cas 1') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post{
        always{
            archiveArtifacts artifacts: 'cypress/reports/**/*.*', fingerprint: true
        }
    }

}

