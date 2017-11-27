module.exports = {
  apps : [
      {
        name: 'mars',
        script: './server.js',
        watch: false,
        env: {
            'NODE_ENV': 'development'
        },
        env_production: {
            'NODE_ENV': 'production'
        },
        env_mack: {
            'NODE_ENV': 'mack'
        }
      }
  ]
}
