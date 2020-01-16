import React, { Component } from 'react'
import '../style.css'
import Header from './Header'
import { Route, BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home/Home'
import About from './Home/About'
import Portofolio from './Home/Portofolio'
import Testimoni from './Home/Testimoni'
import AboutPage from './Page/AboutPage'
import PortofolioPage from './Page/PortofolioPage'
import DetailPortofolio from './Page/DetailPortofolio'
import Blog from './Page/Blog'
import BlogHome from './Home/BlogHome'


export class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path='/' exact component={Home}/>
                    <Route exact path='/'  component={About}/>
                    <Route exact path='/'  component={Testimoni}/>
                    <Route exact path='/'  component={Portofolio}/>
                    <Route exact path='/'  component={BlogHome}/>
                    <Route path='/about'  component={AboutPage}/>
                    <Route path='/portofolio'  component={PortofolioPage}/>
                    <Route path='/portofolio-detail'  component={DetailPortofolio}/>
                    <Route path='/blog'  component={Blog}/>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App
