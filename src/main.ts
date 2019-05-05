import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { IDateFormatConfig, dateFormat } from './filters/dateFormat';

export { dateFormat } from './filters/dateFormat';

export default {
  install(Vue: VueConstructor, baseConfig: IDateFormatConfig): void {
    Vue.filter('dateFormat', (date: Date, format: string, config: IDateFormatConfig = {}) => {
      return dateFormat(date, format, { ...baseConfig, ...config });
    });
  },
  version
};
