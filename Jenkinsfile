pipeline {
    agent {
        docker {
            image "cypress/browsers" 
            args "--entrypoint=''"
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


