import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Header extends Component {
    render() {
        return (
            <div className='fixed-top mt-3 container-fluid'>
                <div>
                </div>
                <div className='d-flex flex-md-row justify-content-around' style={{color:'white'}}>
                    <h4></h4>
                    <h4></h4>
                        <Link className='unlinks'>
                            <h4 >Home</h4>
                        </Link>
                        <Link className='unlinks'>
                            <h4>About</h4>
                        </Link>
                        <Link className='unlinks'>
                            <h4>Portofolio</h4>
                        </Link>
                        <Link className='unlinks'>
                            <h4>Blog</h4>
                        </Link>
                    <h4></h4>
                    <h4></h4>
                </div>
            </div>
        )
    }
}

export default Header
