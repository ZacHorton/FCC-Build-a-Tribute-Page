// "Note: React 18 has known incompatibilities with the tests for this project (see issue #45922)"
// React 18

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// React 17
import React from 'react'
import ReactDOM from "react-dom";
import App from './App.jsx'

ReactDOM.render(<App />,  document.getElementById("root"));
