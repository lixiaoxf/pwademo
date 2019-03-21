'use strict';

const Controller = require('egg').Controller;

class SomeController extends Controller {
  async index() {
    const { ctx } = this;
    await this.ctx.render('some/one/index.html');
  }
  async two() {
    const { ctx } = this;
    await this.ctx.render('some/two/index.html');
  }
}

module.exports = SomeController;