import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { dateFormat } from './filters/dateFormat';

export { dateFormat } from './filters/dateFormat';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('date-format', dateFormat);
  },
  version
};
