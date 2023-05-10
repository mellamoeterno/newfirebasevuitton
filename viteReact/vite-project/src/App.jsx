import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//vite imports ^^^^ 

//app.jsx is the component main application component or the top-level component of a particular feature or section of the application.^
//
//typically contains other components and acts as a container for them, handling their layout and rendering.
//
//also handle state management, data fetching, and other logic that is specific to the feature or section it represents.
//
//App.jsx is often the starting point of a React application, 
//and is usually mounted onto the DOM using ReactDOM.render() in the main.jsx file.

function App() {
  const [count, setCount] = useState(0) 
  
//hook called useState to declare a state variable count and a function setCount to update the value of the count variable. The initial value of count is set to 0.

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* the button element calls the setCount function when it is clicked, updating the value of count. The value of count is then displayed in the button text. */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}




//jsx component that can be only used in .jsx files ^^^^

export default App

// The component ends with an export statement, exporting the App component as the default export of the file, which can be imported and used in other parts of the project.