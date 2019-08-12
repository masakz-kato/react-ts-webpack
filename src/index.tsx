import * as React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

render(
  <Header />,
  document.getElementById('header'),
);
render(
  <Main text="Main" children="any contents"/>,
  document.getElementById('main'),
);
render(
  <Footer />,
  document.getElementById('footer'),
);