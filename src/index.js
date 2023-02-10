import app from './app.js'

app.listen(app.get('port'))

console.log('server connected on port', app.get('port'))