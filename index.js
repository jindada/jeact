/** @jsx Jeact.createElement */
import Jeact from './src/jeact';
import JeactDOM from './src/jeact-dom';

const element = (
  <div id="container">
    <input value="foo" type="text" />
    <a href="/bar">bar</a>
    <span onClick={e => alert("Hi")}>
      <a>click me</a>
    </span>
  </div>
);

JeactDOM.render(element, document.getElementById('root'));
