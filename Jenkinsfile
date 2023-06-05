pipeline {
    agent any
    stages {
        stage('Dependencies') {
            steps {
                echo 'Installing..'
		nodejs('NodeJS') {
			npm install
		}
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
		nodejs('NodeJS') {
			npm test
		}
            }
        }
    }
}
