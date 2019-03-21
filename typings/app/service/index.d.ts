// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportVideo = require('../../../app/service/video');

declare module 'egg' {
  interface IService {
    video: ExportVideo;
  }
}
