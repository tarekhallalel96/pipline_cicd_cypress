pipeline {
    agent {
        docker {
            image 'cypress/browsers' 
            args '--entrypoint=""'
        }
    }
    parameters {
        string(name: 'CYPRESS_TAG', defaultValue: 'tc001', description: 'Tag à utiliser pour exécuter les tests Cypress')
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test cas 1') {
            steps {
                sh "npx cypress run --env grep=@tc001"
            }
        }
    }

    post{
        always{
            archiveArtifacts artifacts: 'cypress/reports/**/*.*', fingerprint: true
        }
    }

}

