import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-dev-runtime.js'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return(
    <div>
        <h1>Custom App!</h1>
    </div>
  )
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   childern:'Click me to visit google'
// }

// const anotherElement = {
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// }
const anotherElement = {
 
  link: '<a href="https://google.com" target="_blank">Visit Google</a>'
};
const anotheruser="chai aur code"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotheruser
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <>
  
  //  {/* // <h2>adadfas</h2> */}
  // {/* < App /> */}
  // {/* // <Chai></Chai> */}
  // </> 
  reactElement
  // anotherElement

)
