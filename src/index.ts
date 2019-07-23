import * as _ from 'lodash';

/**
 *  filter class
 */
class Filter {
  // filter List
  list: string[];

  constructor() {
    this.list = [];
  }

  addKey(value) {
    this.list.push(value)
  }

  hasKey(obj) {
    if (_.isPlainObject(obj)) {
      for (let i = 0, l = this.list.length; i < l; i ++ ) {
        if (_.has(obj, this.list[i])) {
          return true;
        }
      }
    }
    return false;
  }
}
export default Filter
