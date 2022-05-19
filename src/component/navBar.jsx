import React from 'react'
import "./navBar.css"
import helpIcon from '../assets/helpIcon.png'
import flagIcon from '../assets/flagIcon.png'

export default function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid mx-md-5 mx-0">
                    <a class="navbar-brand main-logo" href="#">LOGO</a>
                    <p className='fw-600 ms-auto m-0 pe-3 fs-14 d-md-none d-block'>open request</p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link text-dark fs-13 fw-500 pe-4" aria-current="page" href="#"><img src={helpIcon} alt="" className='help-icon'/> Help</a>
                            <a class="nav-link text-dark fs-13 fw-500 pe-0" href="#"><img src={flagIcon} alt="" className='flag-icon' /> Deutsch |</a>
                            <a class="nav-link text-dark fs-13 fw-500" href="#">EUR</a>
                            <div className='toggel-wrapper'><i class="fa-solid fa-circle-user fs-20 text-secondary"></i> <i class="fa-solid fa-bars fs-18 text-dark ps-3"></i></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
