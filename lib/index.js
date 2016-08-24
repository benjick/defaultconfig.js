import deepAssign from 'deep-assign';


export default function defaultconfig(config) {
  return function factory(...configs) {
    return deepAssign(config, ...configs);
  };
}
