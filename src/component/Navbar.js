import React from 'react'
import './cssfile/Navbar.css'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between py-4'>
            <a className='navbar-brand ms-5' href='#'>EVENT</a>
            <div className='d-flex'>
                <div className='mx-5'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="">+91 8220870386</a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="">SANKARSV96@GMAIL.COM</a>
                        </li>
                        
                    </ul>
                </div>

                <div className='mx-5'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="">EVENTS</a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="">PUJA</a>
                        </li>
                        <li className='nav-item mx-2'>
                            <a className='nav-link' href="">DONATION</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='me-4'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <button className='btn'>DONATE NOW</button>
                    </li>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar
