'use strict';

const Controller = require('egg').Controller;

class SPAController extends Controller {
  async index() {
    const { ctx } = this;
   
    await this.ctx.render('spa/index.nj');
  }
}

module.exports = SPAController;
