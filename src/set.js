import _ from 'lodash';

export default (obj, path, value) => {
  if (_.get(obj, path) !== undefined) {
    _.set(obj, path, value);
  }
  return obj;
};
