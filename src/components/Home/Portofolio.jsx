import React, { Component } from 'react'
import pic from '../../image/lombok.jpg'

export class Portofolio extends Component {
    render() {
        return (
            <div className='bg-portofolio'>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-3'><h3>Lorem, ipsum dolor.</h3></div>

                        <div className='col-lg-3'>
                            <div className="team-thumb">
                                <img src={pic} className="img-responsive" style={{height:'100%',width:'100%'}} alt=""/>
                                    <div className="team-hover">
                                        <div className="team-item">
                                            <center>
                                                <h3>Vehicle Safety Sensor</h3>
                                            </center>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                        <div className='col-lg-3'>
                            <div className="team-thumb">
                                <img src={pic} className="img-responsive" style={{height:'100%',width:'100%'}} alt=""/>
                                    <div className="team-hover">
                                        <div className="team-item">
                                            <center>
                                                <h3>Vehicle Safety Sensor</h3>
                                            </center>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className="team-thumb">
                                <img src={pic} className="img-responsive" style={{height:'100%',width:'100%'}} alt=""/>
                                    <div className="team-hover">
                                        <div className="team-item">
                                            <center>
                                                <h3>Vehicle Safety Sensor</h3>
                                            </center>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Portofolio
