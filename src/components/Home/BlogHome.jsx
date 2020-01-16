import React, { Component } from 'react'
import foto from '../../image/blog.jpg'

export class BlogHome extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center'>My Mind</h1>
                    </div>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <div className='container-blog'>
                            <img className='img-blog' src={foto} alt=""/>
                            <div className='card div-sizing'>
                                <div className='card-body overflow-hidden'>
                                    <h3>What is Dlehisme?</h3>
                                    <h6 >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum! Atque quas, distinctio itaque ullam nam ab eos ipsum quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h6>
                                </div>
                                <div className='card-footer'>
                                    <a href="/blog">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        )
    }
}

export default BlogHome
