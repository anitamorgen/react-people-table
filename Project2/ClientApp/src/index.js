import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PeopleTable from './PeopleTable';
import { produce } from 'immer';

ReactDom.render(<PeopleTable/>, document.getElementById('root'))