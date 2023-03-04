const pool = require("../../database/pool");
const Image = require("./images-model");

class ImageRepository {

  constructor() {}

  async getImageByIdCompany(idCompany) {
    try {
      const sql = 
        `SELECT 
          i.id_imagem id_image,
          i.id_pessoa id_company,
          i.caminho "path",
          i.nome_arquivo file_name
        FROM gno.imagens i 
        WHERE i.id_pessoa = $1;`;
      return (await this.genericListBy(sql, [idCompany]))[0];

    } catch (error) {
      throw new Error('Ocorreu um erro inesperado ao consultar as imagens.');
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
    var images = [];
    rows.forEach((row) => {
      var image = new Image(row);
      images.push(image);
    });
    return images;
  }
}

module.exports = ImageRepository;
