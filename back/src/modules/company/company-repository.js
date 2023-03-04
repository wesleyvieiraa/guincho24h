const pool = require("../../database/pool");
const Company = require("./company-model");

class CompanyRepository {

  constructor() {}

  async getCompaniesList() {
    try {
      const companies = await this.genericListBy(sql, []);
      return companies;
    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar a lista de empresas.');
    }
  }

  async getCompaniesListByCity(idCity) {
    try {
      const sql = 
        `SELECT 
          pj.id_pessoa id_company,
          pj.nome "name",
          pj.id_estado id_state,
          pj.id_cidade id_city,
          pj.descricao description,
          pj.phone
        FROM gno.pessoa_juridica pj 
        WHERE
          pj.id_cidade = $1
          AND pj.ativo IS TRUE;`;
      const companies = await this.genericListBy(sql, [idCity]);
      return companies;
    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar a lista de empresas pelas cidades.');
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
    var companies = [];
    rows.forEach((row) => {
      var company = new Company(row);
      companies.push(company);
    });
    return companies;
  }
}

module.exports = CompanyRepository;
