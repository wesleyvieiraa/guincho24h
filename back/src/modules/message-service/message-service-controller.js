const axios = require("axios");

class MessageServiceController {

  async sendMessage(req, res) {
    try {

      const company = req.body;

      // console.log(process.env.WZAP_TOKEN)
      var options = {
        method: 'POST',
        url: 'https://api.wzap.chat/v1/messages',
        headers: {
          'Content-Type': 'application/json',
          Token: process.env.WZAP_TOKEN
        },
        data: {
          phone: `+55${company.phone}`, 
          message: `Olá, ${company.name}!\n\nUm cliente acessou seu perfil em nosso site 😄`
        }
      };

      axios.request(options).then(function (response) {
        console.log('Mensagem de confirmação de busca enviada.');
      }).catch(function (error) {
        throw new Error(error)
      });

      return res.status(200).send({ status: true });

    } catch (error) {
      console.log(error);
      return res.status(400).send({ status: false });
    }
  }

}

module.exports = new MessageServiceController();
