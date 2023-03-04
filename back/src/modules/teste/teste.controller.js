class TesteController {
  

  async teste(req, res) {
    try {
      

      return res.status(200).send({ok: 'OK' });
    } catch (err) {
      

      return res.status(400).send({
        errors: [{ msg: "Não conseguiu encontrar o fornecedor" }],
      });
    }
  }


}

module.exports = new TesteController();
