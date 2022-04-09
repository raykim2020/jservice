import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './style.css'
import { BrowserRouter as Router } from 'react-router-dom'



const root = document.getElementById('root')

ReactDOM.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>, root)