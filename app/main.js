/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(<Greeter salutation='您好@_@!' />, document.getElementById('root'));
