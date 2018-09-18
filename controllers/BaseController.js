const tryAwait = require("../utils/tryAwait");

module.exports = class BaseController {
  constructor(model) {
    this.model = model;
  }

  async list() {
    tryAwait(this.model.find(), data => data);
  }

  router() {
    return [
      {
        method: "GET",
        path: "/",
        handler: async (request, h) => {
          let response = await this.list();
          return response;
        }
      }
    ];
  }
};
