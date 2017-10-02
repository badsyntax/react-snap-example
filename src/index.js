import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  console.log('App: Hydrate');
  hydrate(<App />, rootElement);
} else {
  console.log('App: Render');
  render(<App />, rootElement);
}