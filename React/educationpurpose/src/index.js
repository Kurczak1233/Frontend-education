import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer/Footer';
import Heading from './Heading/Heading';

const CompanyData = {
  name: "Rocksoft",
  street: "Katowicka",
}

ReactDOM.render(
  <React.StrictMode>
    <Heading headerTitle="Welcome on page"/>
    <App />
    <Footer CompanyData={CompanyData} email="example@com"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
