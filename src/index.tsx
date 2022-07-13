import React from 'react';
import ReactDOM from 'react-dom/client';
import OverlayScrollbars from 'overlayscrollbars';
import './index.css';
import { App } from './App';
import 'overlayscrollbars/css/OverlayScrollbars.min.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <App />
);

document.addEventListener('DOMContentLoaded', function () {
    OverlayScrollbars(document.querySelectorAll('body'), { scrollbars: {autoHide: "scroll" }, });
});