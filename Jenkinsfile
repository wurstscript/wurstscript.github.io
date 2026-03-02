pipeline {
  agent any

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    BUNDLE_PATH = "vendor/bundle"
    JEKYLL_ENV = "production"
  }

  stages {
    stage("Install Dependencies") {
      steps {
        script {
          if (isUnix()) {
            sh """
              set -e
              bundle config set path "${BUNDLE_PATH}"
              bundle install --jobs 4 --retry 3
            """
          } else {
            bat """
              @echo off
              if exist C:\\Ruby34-x64\\bin\\bundle.bat (
                C:\\Ruby34-x64\\bin\\bundle.bat config set path "%BUNDLE_PATH%"
                C:\\Ruby34-x64\\bin\\bundle.bat install --jobs 4 --retry 3
              ) else (
                bundle config set path "%BUNDLE_PATH%"
                bundle install --jobs 4 --retry 3
              )
            """
          }
        }
      }
    }

    stage("Build Site") {
      steps {
        script {
          if (isUnix()) {
            sh "bundle exec jekyll build"
          } else {
            bat """
              @echo off
              if exist C:\\Ruby34-x64\\bin\\bundle.bat (
                C:\\Ruby34-x64\\bin\\bundle.bat exec jekyll build
              ) else (
                bundle exec jekyll build
              )
            """
          }
        }
      }
    }

    stage("Generate Pagefind Index") {
      steps {
        script {
          if (isUnix()) {
            sh "npx -y pagefind --site _site"
          } else {
            bat "npx -y pagefind --site _site"
          }
        }
      }
    }
  }

  post {
    success {
      archiveArtifacts artifacts: "_site/**", fingerprint: true
    }
  }
}
