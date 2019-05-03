import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { IDateFormatConfig, dateFormat } from './filters/dateFormat';

export { dateFormat } from './filters/dateFormat';

export default {
  install(Vue: VueConstructor, baseConfig: Partial<IDateFormatConfig>): void {
    Vue.filter('dateFormat', (date: Date, format: string, config: Partial<IDateFormatConfig> = {}) => {
      if (!(date instanceof Date)) return "";
      return dateFormat(date, format, { ...config, ...baseConfig });
    });
  },
  version
};
