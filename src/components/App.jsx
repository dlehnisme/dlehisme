import React, { Component } from 'react'
import '../style.css'
import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home/Home'
import About from './Home/About'
import Portofolio from './Home/Portofolio'


export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/'  component={About}/>
                    {/* <Route path='/'  component={Portofolio}/> */}
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
