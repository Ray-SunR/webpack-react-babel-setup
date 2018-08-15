import React from 'react';
import ReactDOM from 'react-dom';
import add from './function';
import './index.css';

const Hello = () => <div id="root"><body>Hello World. Result is: {add(1, 1)}</body></div>;

ReactDOM.render(<Hello/>, document.getElementById('app'));
