const StateRepository = require("./state-repository");

class StateController {

  async getStatesListAll(req, res) {
    try {

      const stateRepository = new StateRepository()
      const states = await stateRepository.getStatesListAll();

      if (!states) throw "Nada encontrado";

      return res.status(200).send({ states: states });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: "Aconteceu um erro ao tentar listar os estados." }],
      });
    }
  }

  async getCustomerStatesList(req, res) {
    try {

      const stateRepository = new StateRepository()
      const states = await stateRepository.getCustomerStatesList();

      if (!states) throw "Nada encontrado";

      return res.status(200).send({ states: states });

    } catch (error) {

      return res.status(400).send({
        errors: [{ msg: "Aconteceu um erro ao tentar listar os estados dos clientes cadastrados." }],
      });
    }
  }
}

module.exports = new StateController();
