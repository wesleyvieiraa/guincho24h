const pool = require("../../database/pool");
const State = require("./state-model");

class StateRepository {

  constructor() {}

  async getStatesListAll() {
    try {
      const sql = 
        `SELECT 
          e.id_estado id_state,
          e.uf,
          e.nome "name" 
        FROM gno.estado e;`;
      const states = await this.genericListBy(sql, []);
      return states;
    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar a lista de estados.');
    }
  }

  async getCustomerStatesList() {
    try {
      const sql = 
        `SELECT DISTINCT ON (e.id_estado)
          e.id_estado id_state,
          e.uf,
          e.nome "name" 
        FROM gno.pessoa_juridica pj
        JOIN gno.estado e ON pj.id_estado = e.id_estado
        WHERE pj.ativo IS TRUE;`;

      const states = await this.genericListBy(sql, []);
      return states;
    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar a lista de estados dos clientes cadastrados.');
    }
  }

  async genericListBy(stringQuery, arrayParams) {
    try {
      const { rows } = await pool.query(stringQuery, arrayParams);
      var objects = this.factory(rows);
      return objects;
    } catch (error) {
      throw new Error("Ocorreu um erro na consulta");
    }
  }

  factory(rows) {
    var states = [];
    rows.forEach((row) => {
      var state = new State(row);
      states.push(state);
    });
    return states;
  }
}

module.exports = StateRepository;
