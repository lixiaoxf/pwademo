

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
    async index(params) {
      const { ctx } = this;
      userpushmsg = ctx.request.body
      let error = 0;
      let data = 'success'
      let res = await webpush.sendNotification(userpushmsg, '来自 nodejs 后台 使用FCM推送的信息～ 来企鹅体育吧');
      if([201,200].indexOf(res.statusCode)<0){
        error = -1;
        data = 'error code '+res.statusCode
      }
      ctx.body = {
          error,
          data
      }
    }
    async view(params) {
      await this.ctx.render('ssr/pwapush/index.nj');
    }
    async push(params) {
        const { ctx } = this;
        if(!userpushmsg){
          ctx.body = {
            error:-1,
            data:'没有用户订阅 请先访问 /ssr 授权'
          }
          return ;
        }
        let error = 0;
        let msg = ctx.request.body.msg + '来自 nodejs 后台 使用FCM推送的信息～ 来企鹅体育吧'
        let data = 'success'
        let res = await webpush.sendNotification(userpushmsg, msg);
        if([201,200].indexOf(res.statusCode)<0){
          error = -1;
          data = 'error code '+res.statusCode
        }
        ctx.body = {
            error,
            data
        }
      }
  }
  
  module.exports = pwaPushController;
  
  
  