import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from './FirstApp'

import './style.css'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp nombre='Fredy' apellido='Huachaca' cantPerros={2} daenarys='Daenarys' danna='Danna'/>
    </React.StrictMode>
)