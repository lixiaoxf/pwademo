import './js/index'
import './style/index.scss'
import 'rem';
import loadsw from '@/common/js/loadsw';
loadsw('/sw-ssr.js','/ssr')
import '@/component/layout/index'