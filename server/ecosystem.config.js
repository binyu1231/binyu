module.exports = {
  apps : [{
    name: "binyu-blog-back-service",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}