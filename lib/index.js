import deepAssign from 'deep-assign';


export default function defaultconfig(_config) {
  const config = JSON.parse(JSON.stringify(_config));
  return function factory(...configs) {
    return deepAssign(config, ...configs);
  };
}
