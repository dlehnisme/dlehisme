import React, { Component } from 'react'
import axios from '../../config/axios'
import {Spinner} from 'reactstrap'
import  Fade from 'react-reveal/Fade'



import elwinTop from '../../image/elwin-kotak.jpeg'
import elwin from '../../image/elabout.JPG'
export class AboutPage extends Component {
    state={
        journey : null,
        filterJourney : null
    }
    componentDidMount(){
        var journeys = this.props.location.search.split('filter=')[1]
        console.log(journeys)

        axios.get('journey')
        .then((res)=>{
            if(journeys !== 'all'){
                var hasil = res.data.filter((val)=>{
                    return val.category == journeys
                })
            }
            this.setState({journey : res.data, filterJourney : hasil ? hasil : res.data})
            // console.log(this.state.journey)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    filterJourney = () =>{
        let journey = this.filter.value
        console.log(journey)
        var hasilFilter = this.state.journey.filter((val)=>{
            return val.category == journey 
        })
        this.setState({filterJourney : hasilFilter})
    }

    onSubmitTestimoni = () =>{
        let nama = this.nama.value
        let job = this.job.value
        let hub = this.hub.value
        let desc = this.desc.value

        axios.post('testimoni',
            {
                nama,job,hub,desc
            }
        ).then((res)=>{
            if(res.data.error) return console.log(res.data.error)
            alert('Thank You For Your Testimoni :)')
        }).catch((err)=>{
            console.log(err)
        })
        this.nama.value = ''
        this.job.value = ''
        this.hub.value = ''
        this.desc.value = ''
    }
    renderJourney = () =>{
        if(this.state.journey === null || this.state.filterJourney === null){
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
        console.log(this.state.filterJourney)
        var showJourney = this.state.filterJourney.map((item)=>{
            return(
            <Fade left delay={2000}>
                <div className='container'>

                <div className='row'>
                    <div className='col-lg-5 col-md-12 mt-4'>
                        <h5 style={{textAlign:'right', fontWeight:'bolder'}}>{item.moment}</h5>
                        </div>

                        <div className='col-lg-1'></div>

                        <div className='col-lg-1 col-md-12 lines'>
                            <div className='contents mt-3'>
                                <span className='circle' style={{background:`${item.color}`}}></span>
                            </div>
                        </div>

                        <div className='col-lg-5 col-md-12 mt-4'>
                            <h5> {item.desc_moment} </h5>
                        </div>
                </div>
                </div>
            </Fade>
            )
        })
        return showJourney
    }


    render() {
        
        return (
            <div style={{background:'whitesmoke'}}>
                <div className='container-fluid'>
                    <div className='row'>

                    <Fade delay={500}>
                        <div className='bg-about'>
                            <div className='col-lg-12 col-md-12'>
                                <center>
                                    <img className='img-elwinTop' src={elwinTop} alt="elwin"/>
                                    <h6 className='w-50 font-weight-bold my-3'>Hello My Name Is Elwin Johan Sibarani</h6>
                                    <h6 className='w-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, harum odit. Voluptas dolorem doloribus consequuntur dolores quaerat odio incidunt reiciendis.</h6>
                                </center>
                            </div>
                        </div>
                    </Fade>

                        <div className=' col-lg-12'>
                        <div className='col-lg-12 mt-5'>
                            <center>
                                <h2 className='text-center'>
                                    Life Journey
                                </h2>
                                <h5> What do you want to know?</h5>
                                <select onChange={this.filterJourney} ref={(input)=>{this.filter = input}} className='form-control col-lg-4'>
                                    <option value="">Select The Journey</option>
                                    <option value="1">All</option>
                                    <option value="2">Study</option>
                                    <option value="3">Organiztion</option>
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
                        {this.renderJourney()}
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
                                        <img className='img-testimoni' src={elwin} alt="foto_elwin"/>
                                        </center>
                                    </div>
                                    <div className='col-lg-4'>
                                        <form action="">
                                            Name : <br/>
                                            <input ref={(input)=>{this.nama = input}} placeholder='Your Name ...' className='form-control' type="text"/><br/>
                                            Your Job : <br/>
                                            <input ref={(input)=>{this.job = input}} placeholder='Your job / activity' className='form-control' type="text"/><br/>
                                            Your Relathionship With Elwin
                                            <input ref={(input)=>{this.hub = input}} placeholder='Who is Elwin ?' className='form-control' type="text"/>
                                        </form>
                                    </div>
                                    <div className='col-lg-4'>
                                        <textarea ref={(input)=>{this.desc = input}} className='form-control mt-4' placeholder='How do you think about Elwin?' name="" id="" cols="30" rows="5"></textarea>
                                        <button onClick={this.onSubmitTestimoni} className='btn btn-success my-3'>Submit</button>
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
