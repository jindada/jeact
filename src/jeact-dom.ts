/**
 * 渲染 => ReactDOM.render
 */
export const render = (element: JeactElement, node: HTMLElement | Text) => {
  /** 获取类型和JeactElementProps对象 */
  const { type, props } = element;
  /** 创建dom */
  /** 是否是文本元素 */
  const isTextElement = type === 'TEXT ELEMENT';
  const dom =  isTextElement ?
    document.createTextNode('') :
    document.createElement(type);
  /** 加入事件监听 */
  Object.keys(props).filter(isListener).forEach(name => {
    // onClick => click
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, props[name]);
  });
  /** 属性赋值 */
  Object.keys(isAttribute).forEach(name => {
    dom[name] = props[name];
  });
  /** 获取子组件 */
  const childrenDoms = props.children || [];
  /** 递归渲染 */
  childrenDoms.forEach(childrenElement => render(childrenElement, dom));
  /** 渲染到根节点 */
  node.appendChild(dom);
}

/** 是否是事件监听属性 on开头的为事件监听属性 */
const isListener = name => name.startsWith('on');

/** 是否是属性
 * 不是事件监听属性 & 不是children
 */
const isAttribute = name => !isListener(name) && name !== 'children';
