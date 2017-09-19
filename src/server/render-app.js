
import { STATIC_PATH } from '../shared/config'

const renderApp = () =>
  `<!doctype html>
<html>
  <head>
    <title>Nasa Pic Du Jour</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <h1>Nasa Pic Du Jour</h1>
  </body>
</html>
`

export default renderApp