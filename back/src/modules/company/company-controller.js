const ImageRepository = require("../imagens/images-repository");
const CompanyRepository = require("./company-repository");

class CompanyController {

  async getCompaniesList(req, res) {
    try {

      const companyRepository = new CompanyRepository();
      const companies = await companyRepository.getCompaniesList();
      
      if (!companies) throw "Nada encontrado";

      return res.status(200).send({ companies: companies });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: "Aconteceu um erro ao tentar listar as empresas." }],
      });
    }
  }

  async getCompaniesListByCity(req, res) {
    try {

      const companyRepository = new CompanyRepository();
      const imageRepository = new ImageRepository();
      const companies = await companyRepository.getCompaniesListByCity(req.params.idCity);

      for (let i  = 0; i < companies.length; i++) {
        companies[i].image = await imageRepository.getImageByIdCompany(companies[i].idCompany)
      }
      
      if (!companies) throw "Nada encontrado";

      return res.status(200).send({ companies: companies });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: "Aconteceu um erro ao tentar listar as empresas pelas cidades." }],
      });
    }
  }
}

module.exports = new CompanyController();
