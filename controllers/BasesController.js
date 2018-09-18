const BaseController = require("./BaseController");
const Base = require("../models/Base");
module.exports = class BasesController extends BaseController {
  constructor() {
    super(Base);
    this.path = "/bases";
  }
};
