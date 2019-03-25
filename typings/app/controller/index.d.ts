// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportPwapush = require('../../../app/controller/pwapush');
import ExportSome = require('../../../app/controller/some');
import ExportSpa = require('../../../app/controller/spa');
import ExportSsr = require('../../../app/controller/ssr');
import ExportApiDetail = require('../../../app/controller/api/detail');
import ExportApiNews = require('../../../app/controller/api/news');
import ExportApiVideos = require('../../../app/controller/api/videos');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    pwapush: ExportPwapush;
    some: ExportSome;
    spa: ExportSpa;
    ssr: ExportSsr;
    api: {
      detail: ExportApiDetail;
      news: ExportApiNews;
      videos: ExportApiVideos;
    }
  }
}
