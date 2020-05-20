import config from './config';
import Icon from './icon';
import Button from './button';
import Rate from './rate';
import CellGroup from './cell-group';
import Cell from './cell';

const { prefix } = config;

const components = {
  Icon,
  Button,
  Rate,
  CellGroup,
  Cell,
};

const install = function (Vue: any, config?: object): void {
  const defaults = {
    prefix,
  };
  const installConfig = { ...defaults, ...config };
  Object.keys(components).forEach((key) => {
    Vue.component(installConfig.prefix + key, components[key]);
  });
};

// install
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }

export default {
  install,
  version: typeof VERSION === "undefined" ? "" : VERSION, // eslint-disable-line
  ...components,
};
