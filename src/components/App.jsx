import React, { Component } from 'react'
import '../style.css'
import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'
import Footer from './Footer'


export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>

                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
