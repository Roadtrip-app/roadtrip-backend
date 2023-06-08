pipeline {
    agent any
    tools {nodejs "NodeJS"}
	
    stages {
        stage('Dependencies') {
            steps {
                echo 'Installing..'
		sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
		        sh 'npm test'
            }
        }
        stage ("Extract test results") {
            steps {
                cobertura coberturaReportFile: 'output/coverage/cobertura-coverage.xml'
            }
        }
    }
}
