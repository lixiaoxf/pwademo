

const vapidKeys = {
  publicKey:'BBTV_sGMbDL47vda7QEleoJiiEV0iBGGHwXPeZFMgFLlr8OTFlF-l-7abUpy5bgQK70_SMVoITkNXPvm4q38pjM',
  privateKey: '3zzzFveCMspYuHuR_SRStLLa0koGgaQciMOc74el6WM'
};
const webpush = require('web-push');
webpush.setVapidDetails(
  'mailto:lixiaomasterk@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const Controller = require('egg').Controller;
let userpushmsg = null
class pwaPushController extends Controller {
  constructor(ctx) {
    super(ctx);  
  }
  async create(params) {
    const { ctx } = this;
    userpushmsg = ctx.request.body
    ctx.body = {
        error:0,
        data:'hahah'
    }
  }
}

module.exports = pwaPushController;


