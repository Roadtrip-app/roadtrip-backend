pipeline {
    agent any
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
    }
}
