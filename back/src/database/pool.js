const { Pool, types} = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});


// module.exports = {
  //   query: (text, params) => pool.query(text, params)
  // };
  
pool.on('error', (err, client) => {
  console.log('Unexpected error on idle client' + err);
  process.exit(-1);
});

pool.on('connect', () => {
  // console.log('Base de Dados conectado com sucesso!');
});
  
types.setTypeParser(1700, x => parseFloat(x));
module.exports = {
  query: (text, params) => pool.query(text, params)
};