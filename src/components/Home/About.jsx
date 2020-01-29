import React, { Component } from 'react'
import  Fade from 'react-reveal/Fade'

// Picture Import
import javascript from  '../../image/skills/javascript.png'
import html from '../../image/skills/html.png'
import css from '../../image/skills/css.png'
import mongodb from '../../image/skills/mongodb.png'
import mysql from '../../image/skills/mysql.png'
import nodejs from '../../image/skills/nodejs.png'
import react from '../../image/skills/react.png'

const logo_skills = [javascript,html,css,mongodb,mysql,nodejs,react]

 class About extends Component {
    renderlogo=()=>{
        let i = 0
        let logo = logo_skills.map((val)=>{
            i++
            return(
                <Fade key={i} right delay={500}>
                    <img  className="img-costumer-filter m-auto" style={{width:'8%'}} src={val} alt="logo val"/>
                </Fade>
            )
        })
        return logo
    }

    render() {
        return (
            <div className='mt-5 container' >
                <div className='row'>

                    <div className='col-lg-12'>
                        <h2 className='text-center'>A Brief Introduction</h2>
                    </div>
                    <div className='col-lg-2'></div>
                        <div className='col-lg-8 mt-4' style={{textAlign:'center'}}>
                            <h6>
                            a hard-worker Management graduate with 3,74 GPA score, problem solving, innovative, and ciritical thinking minded about business development, have much exeperience about leadership, team work, and organizational. For me, team work is an art to achieve a common goals. My life motto is “Incipit Vita Nova” taken from Deutch language, has meaning from now on my life will be better.
                            </h6>
                            </div>  
                    <div className='col-lg-2'></div>
                        <hr className='garis'/>

                    <div className='col-lg-12 my-3'>
                        <h2 className='text-center'>Programming Skills</h2>
                    </div>
                    <div className='col-lg-2'></div>
                        <div className='col-lg-8 mt-4' style={{textAlign:'center'}}>
                            <h6>
                            After graduated from UPN ‘Veteran’ Yogyakarta in March 2019, I joined Purwadhika focusing in Web and Mobile Development I enjoy to develop website and mobile app. I write both front end and back end code. 
                            </h6>
                        </div>  
                    <div className='col-lg-2'></div>
                    <div className="d-flex justify-content-around flex-wrap mt-5 col-lg-12">
                                {this.renderlogo()}
                    </div>
                        <hr className='garis'/>

                </div>
            </div>
        )
    }
}

export default About
