import { STATIC_PATH, WDS_PORT } from './config'
import { isProd } from './util'

const renderApp = () =>
  `<!doctype html>
<html>
  <head>
    <title>Nasa Pic Du Jour</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
   <div id="root"></div>
    <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/public`}/output.js"></script>
  </body>
</html>
`

export default renderApp