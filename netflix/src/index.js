// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from "react-redux";
// import store from "./redux/store";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>  {/* ✅ Ensure Redux Provider is added */}
//       <App /> 
//     </Provider>
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Ensure your store is correctly imported

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* Redux provider here */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Ensure your store is correctly imported

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}> {/* Redux provider here */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react'; // Ensure React is imported here if using React.StrictMode

console.log("Store object in index.js at root render:", store); // <-- THIS IS CRITICAL
// Look for this output as soon as your app loads, before you navigate anywhere.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
