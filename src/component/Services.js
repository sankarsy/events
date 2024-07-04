import React from 'react'
import './cssfile/Services.css'
import { FaArrowRight } from "react-icons/fa";



function Services() {
    return (
        <section className='services mt-5'>
            <header className=''>
                <p>SERVICES</p>
                <h1>HOW WE CAN HELP</h1>
            </header>

            <div className='container service-container'>
                <div className='row'>
                    <div className='col-md-4 mt-5 px-3'>
                        <div class="card custom-bg-1 service-card custom-bg-1" >
                            <img class="img-fluid " src='' alt="Card image cap" />
                            <div class="card-body">
                                <h3>Prayers</h3>
                                <p>For  peace and happines. For unity and harmony among family members.</p>
                                <div className='d-flex align-items-center'>
                                    <a className='nav-link' href="">LEARN MORE </a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3 px-3'>
                        <div class="card custom-bg-2 service-card custom-bg-2" >
                            <img class="img-fluid" src='' alt="Card image cap" />
                            <div class="card-body">
                                <h3>Praise & Worship</h3>
                                <p>For unity and harmony among family members. For peace and happines.</p>
                                <div className='d-flex align-items-center'>
                                    <a className='nav-link' href="">LEARN MORE </a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 px-3'>
                        <div class="card  custom-bg-3 service-card custom-bg-3" >
                            <img class="img-fluid" src='' alt="Card image cap" />
                            <div class="card-body">
                                <h3>Darshan</h3>
                                <p>Hindus celebrate a number of other important festevels, including diwali,</p>
                                <div className='d-flex align-items-center'>
                                    <a className='nav-link' href="">LEARN MORE </a>
                                    <FaArrowRight size={14} color='' className='ms-2' />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='d-flex align-items-center justify-content-end mt-2'>
                    <a className='nav-link' href="">GET STARTED NOW</a>
                    <FaArrowRight size={14} color='' className='ms-2' />
                </div>
            </div>
        </section>
    )
}

export default Services
