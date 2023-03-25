import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Provider } from "react-redux";
import Store from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import AppRoutes from './routes';
import KiranRoutes from './kiran-routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    {/* <AppRoutes /> */}
    <KiranRoutes/>
  </Provider>
);
