import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp() {
    return(
        <div>
            <h2>custom app</h2>
        </div>
    )
}

// const reactElement = {
//     type:"a" ,
//     props:{
//         href:"https://google.com",
//         target:"_blank"
//     },
//     children:"click me to visit google"
// }

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google'
)
const anotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
)
createRoot(document.getElementById('root')).render(
    <App/>
    
)
