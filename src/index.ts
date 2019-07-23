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

  /**
   * value 需要过滤的字符串
   * i: true 忽略大小写 default false
   */
  addKey(value: string, i: boolean = false) {
    this.list.push(value)
    if (i) {
      this.list.push(value.toLowerCase());
    }
  }

  hasKey(obj: any) {
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
