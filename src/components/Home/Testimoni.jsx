import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import axios from '../../config/axios'
import {Spinner} from 'reactstrap'


export class Testimoni extends Component {
    state={
        testimoni : null
    }
    componentDidMount (){
        axios.get('testimoni')
        .then((res)=>{
            this.setState({testimoni : res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        if(this.state.testimoni === null){
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <center>
                                <Spinner type='grow' color='primary' size='xl' />
                            </center>
                        </div>
                    </div>
                </div>
            )
        }
        return (
    <div>
        <div className='container-fluid'>
                <h2 className='tulisan-page-one text-center mb-5'>
                    Our Testimonies
                </h2>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-8'>
                            <Slider autoplay={200} duration={1000} nextButton={''} previousButton={''}>
                                {this.state.testimoni.map((item)=>(
                                    <div>
                                            <blockquote className="blockquote text-center mx-auto" >
                                        <h5>{`'${item.description}'`}</h5>
                                            <footer className="blockquote-footer">
                                            {item.nama} <cite>{item.hub}</cite> <br/>
                                            <h6>{item.job}</h6>
                                            </footer>
                                        </blockquote>
                                    </div>
                                ))}
                            </Slider>
                        <hr className='garis-testi'/>
                            </div>
                            <div className='col-lg-2'></div>
                        
                        </div>
                    </div> 
        </div>


        )
    }
}

export default Testimoni
