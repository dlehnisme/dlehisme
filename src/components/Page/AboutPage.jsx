import React, { Component } from 'react'
import foto from '../../image/elwin.jpeg'

export class AboutPage extends Component {
    render() {
        return (
            <div style={{background:'whitesmoke'}}>
                <div className='container-fluid'>
                    <div className='row'>

                        <div className='col-lg-6 col-md-12' >
                            <div className='bg-aboutPage'></div>
                        </div>

                        <div className='col-lg-6 mt-5 pt-5 col-md-12' >
                            <h1>Hello, my name is Elwin Johan Sibarani</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officia adipisci, expedita vel consequatur harum eos minima iure inventore obcaecati?</h5>
                        </div>

                        <div className=' col-lg-12'>
                        <div className='col-lg-12 mt-5'>
                            <center>
                                <h2 className='text-center'>
                                    Life Journey
                                </h2>
                                <h5> What do you want to know?</h5>
                                <select className='form-control col-lg-4'>
                                    <option value="">Study</option>
                                    <option value="">Life</option>
                                    <option value="">Organiztion</option>
                                </select>
                            </center>
                        </div>
                        
                        <div className='col-lg-4'>
                        </div>
                        <div className='col-lg-4'>
                        
                        </div>
                        <div className='col-lg-4'></div>
                        </div>
{/* ================================================================================================================= */}
                        <div className='col-lg-5 mt-4'>
                            <h5 style={{textAlign:'right', fontWeight:'bolder'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, magni.</h5>
                        </div>

                        <div className='col-lg-1'></div>

                        <div className='col-lg-1 lines'>
                            <div className='contents mt-3'>
                                <span className='circle bg-warning'><i class="fas fa-baby fa-3x ml-3 mt-2"></i></span>
                            </div>
                        </div>

                        <div className='col-lg-5 mt-4'>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam!
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nobis tempora velit repellendus minus, incidunt praesentium magni eaque consectetur eum fugiat temporibus laudantium voluptates expedita amet dolorem laboriosam iure cupiditate nulla facilis iusto natus et. Hic odio sunt iure quos at sint illum necessitatibus quis ullam ipsum. Ipsam, fugiat sequi.
                            </h5>
                        </div>
{/* ================================================================================================================= */}
                        
                        <div className='bg-testimoni'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <center>
                                            <h5>Do you know Elwin ?</h5>
                                            <h6>Help Elwin to knowing himself</h6>
                                        </center>
                                    </div>
                                    <div className='col-lg-4'>
                                        <center>
                                        <img className='img-testimoni' src={foto} alt="foto_elwin"/>
                                        </center>
                                    </div>
                                    <div className='col-lg-4'>
                                        <form action="">
                                            Name : <br/>
                                            <input className='form-control' type="text"/><br/>
                                            Your Job : <br/>
                                            <input className='form-control' type="text"/><br/>
                                            Your Relathionship With Elwin
                                            <input className='form-control' type="text"/>
                                        </form>
                                    </div>
                                    <div className='col-lg-4'>
                                        <textarea className='form-control mt-4' placeholder='How do you think about Elwin?' name="" id="" cols="30" rows="5"></textarea>
                                        <button className='btn btn-success my-3'>Submit</button>
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

export default AboutPage
