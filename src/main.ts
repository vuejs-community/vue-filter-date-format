import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { dateFormatFilter } from './filters/dateFormat';

export { dateFormatFilter } from './filters/dateFormat';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('dateFormat', dateFormatFilter);
  },
  version
};
