pipeline {
  agent any

  environment {
    NODE_ENV = 'production'
  }

  stages {
    stage('Clone Node API Repo') {
      steps {
        git branch: 'main',
            url: 'https://github.com/mkv-mkverma/node-api-server.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start Node API') {
      steps {
        // Ensure PM2 is installed globally (run once manually on EC2)
        sh 'pm2 stop node-api || true'
        sh 'pm2 start server.js --name node-api'
      }
    }

    stage('Post Deployment') {
      steps {
        echo '🚀 Node API deployed successfully and running via PM2!'
      }
    }
  }
}
