import React, { Component } from 'react'
// Picture Import
import javascript from  '../../image/skills/javascript.png'
import html from '../../image/skills/html.png'
import css from '../../image/skills/css.png'
import mongodb from '../../image/skills/mongodb.png'
import mysql from '../../image/skills/mysql.png'
import nodejs from '../../image/skills/nodejs.png'
import react from '../../image/skills/react.png'

const logo_skills = [javascript,html,css,mongodb,mysql,nodejs,react]

export class About extends Component {
    renderlogo=()=>{
        let logo = logo_skills.map((val)=>{
            return(
                <img key={val} className="col-lg-1 mx-auto col-md-4 my-auto img-costumer-filter" src={val} alt="logo val"/>
                
            )
        })
        return logo
    }

    render() {
        return (
            <div className='my-5 container' >
                <div className='row'>

                    <div className='col-lg-12'>
                        <h2 className='text-center'>A Brief Introduction</h2>
                    </div>
                    <div className='col-lg-2'></div>
                        <div className='col-lg-8 mt-4' style={{textAlign:'center'}}>a hard-worker Management graduate with 3,74 GPA score, problem solving, innovative, and ciritical thinking minded about business development, have much exeperience about leadership, team work, and organizational. For me, team work is an art to achieve a common goals. My life motto is “Incipit Vita Nova” taken from Deutch language, has meaning from now on my life will be better.</div>  
                    <div className='col-lg-2'></div>
                        <hr className='garis'/>

                    <div className='container'>
                        <div className='col-lg-12'>
                            <div style={{backgroundColor:'white'}}>
                            <h2 className='text-center'>Programming Skills</h2>
                                <div className="d-flex flex-row justify-content-around flex-wrap">
                                    {this.renderlogo()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About
