import { TEXT_ELEMENT } from './constant';

const createElement = (type, config, ...args) => {
  // 深拷贝
  const props = Object.assign({}, config);
  const children = args.length > 0 ? [].concat(...args) : [];
  props.children = children
    .filter(c => c != null) // .filter(c => c != null && c !== false)
    .map(c => c instanceof Object ? c : createTextElement(c));
  return { type, props };
}

const createTextElement = value =>
 createElement(TEXT_ELEMENT, { nodeValue: value })

export default {
  createElement
}
