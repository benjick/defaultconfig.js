import deepAssign from 'deep-assign';


export default function defaultconfig(config) {
  return function(...configs) {
    return deepAssign(config, ...configs);
  }
}
