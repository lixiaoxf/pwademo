'use strict';

const Controller = require('egg').Controller;

class SomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { list } = await ctx.service.video.getData()
    await this.ctx.render('ssr/index/index.nj',{ list, curType:'index' });
  }
  async news() {
    const { ctx } = this;
    const { list } = await ctx.service.video.getData()
    await this.ctx.render('ssr/news/index.nj',{ list, curType:'news' });
  }
  async detail() {
    const { ctx } = this;
    const { data } = await ctx.service.video.getDetail(ctx.query.id)
    await this.ctx.render('ssr/detail/index.nj',{ data });
  }
}

module.exports = SomeController;