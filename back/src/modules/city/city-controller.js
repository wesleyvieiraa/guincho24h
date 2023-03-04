const CityRepository = require("./city-repository");

class CityController {

  async getCitiesList(req, res) {
    try {

      const cityRepository = new CityRepository();
      const cities = await cityRepository.getCitiesList();

      if (!cities) throw "Nada encontrado";

      return res.status(200).send({ cities: cities });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: "Aconteceu um erro ao tentar listar as cidades." }],
      });
    }
  }

  async getCompaniesCityByIdUf(req, res) {
    try {

      const cityRepository = new CityRepository();
      const cities = await cityRepository.getCompaniesCityByIdUf(req.params.idUf);

      if (!cities) throw "Nada encontrado";

      return res.status(200).send({ cities: cities });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: `Aconteceu um erro ao tentar buscar as cidades dos clientes pela UF: ${req.params.idUf}.` }],
      });
    }
  }
}

module.exports = new CityController();
