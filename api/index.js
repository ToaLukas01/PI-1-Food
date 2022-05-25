
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getAllRecetas } = require("../api/src/controllers/getRecipiesAPI");

// Syncing all the models at once.
conn.sync({ force: true })
.then(getAllRecetas, console.log("se guardaron las recetas"))
.then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
