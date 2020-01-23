import React, { Component } from 'react'
import '../style.css'
import { Fade } from 'reactstrap'

import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home/Home'
import About from './Home/About'
import Portofolio from './Home/Portofolio'
import Testimoni from './Home/Testimoni'
import AboutPage from './Page/AboutPage'
import DetailPortofolio from './Page/DetailPortofolio'


export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Fade>
                        <Route exact path='/' exact component={Home}/>
                        <Route exact path='/'  component={About}/>
                        <Route exact path='/'  component={Testimoni}/>
                        <Route exact path='/'  component={Portofolio}/>
                        <Route path='/about'  component={AboutPage}/>
                        <Route path='/portofolio/detail/:nama'  component={DetailPortofolio}/>
                        <Footer/>
                    </Fade>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
