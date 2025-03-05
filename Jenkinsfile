pipeline {
    agent {
        docker {
            image "cypress/browsers" 
        }
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test cas 1 ') {
            steps {
                sh 'npx cypress run --spec "cypress/e2e/affichageDesProduits.cy.js"'
            }
        }

        }
    }
    post {
        always {
            archiveArtifacts allowEmptyArchive: true, artifacts: 'cypress/videos/**/*, cypress/screenshots/**/*'
        }
    }

