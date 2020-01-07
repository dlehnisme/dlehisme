import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div style={{color:'grey', paddingTop:100}} className='background-footer'>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-center'>Dlehisme</div>
                    <div className='d-flex justify-content-around'>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                        <h4>Home</h4>
                        <h4>About</h4>
                        <h4>Portofolio</h4>
                        <h4>Blog</h4>
                        <h4></h4>
                        <h4></h4>
                        <h4></h4>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div style={{color:'grey'}}>
                            <i class="fab fa-instagram fa-5x"></i>
                        </div>
                        <div style={{color:'grey'}}>
                            <i class="fab fa-github fa-5x"></i>
                        </div>
                        <div style={{color:'grey'}}>
                            <i class="fab fa-linkedin fa-5x"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                    © 2019 Elwin Johan Sibarani. All rights reserved.
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
