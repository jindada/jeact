/** Jeact元素
 * @type 类型
 * @props JeactElementProps
 */
interface JeactElement {
  type: string;
  props: JeactElementProps;
}

/** JeactElementProps
 * @id 索引
 * @children Jeact元素数组
 */
interface JeactElementProps {
  id: string | 'TEXT ELEMENT';
  children?: JeactElement[] | string[];
}
