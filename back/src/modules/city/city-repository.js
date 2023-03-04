const pool = require("../../database/pool");
const City = require("./city-model");


class CityRepository {

  constructor() {}

  async getCitiesList() {

    try {
      const rows = await this.genericListBy(/* sql, [
        categoriaDto.nome,
        categoriaDto.mapaSabium,
        categoriaDto.idCategoria,
      ] */);
      return rows;
    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar a lista de cidades.');
    }
  }

  async getCompaniesCityByIdUf(idUf) {
    try {
      const sql = 
        `SELECT DISTINCT ON (c.id_cidade)
          c.id_cidade id_city,
          c.id_estado id_state,
          c.nome "name"
        FROM gno.pessoa_juridica pj
        JOIN gno.cidade c ON pj.id_cidade = c.id_cidade 
        WHERE 
          c.id_estado = $1
          AND pj.ativo IS TRUE;`;
        
      const rows = await this.genericListBy(sql, [idUf]);
      return rows;
    } catch (error) {
      throw new Error(`Ocorreu um erro inesperado ao consultar as cidades dos clientes pela UF: ${idUf}.`);
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
    var cities = [];
    rows.forEach((row) => {
      var city = new City(row);
      cities.push(city);
    });
    return cities;
  }
}

module.exports = CityRepository;
