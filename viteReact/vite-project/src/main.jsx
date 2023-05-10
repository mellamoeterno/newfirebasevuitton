import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//main.jsx is the main entry point of a React application,like its name 'main', where the root component 
//of the application is mounted onto the DOM.
//
//the root component is wrapped in a ReactDOM.render() function 
//call and passed to a DOM element where the application will be rendered. main.jsx is where this function call is made.


ReactDOM.createRoot(document.getElementById('root')).render(//.render from app.jsx

//The createRoot() method allows for asynchronous rendering and improves performance. 
//It returns a Root object that represents the root of a React tree.
//
//This code is equivalent to using ReactDOM.render() 
//to mount the App component onto the DOM, but using createRoot() instead allows for improved performance and better handling of asynchronous updates.
//
//createRoot() method is called with the argument document.getElementById('root'), 
//which retrieves the DOM element with the ID of 'root'. This element will serve as the root node of the React tree.
//
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// This is the ReactDOM method createRoot() being used to create a root element for a React application, 
//and then rendering the App component inside it using render().


// -
// -
// -
// -
// -
// -


//about REACT.STRICT MODE ^^^^^^^^
//
//When <React.StrictMode> is used to wrap the top-level component(s) 
//(in this case, App), React will perform additional checks and emit warnings 
//in the console for a number of potential problems. These warnings can help you catch and fix issues such as:

// Deprecated lifecycle methods or APIs
// Unsafe legacy lifecycle methods
// Unsafe state updates in components
// Violations of the recommended data flow practices