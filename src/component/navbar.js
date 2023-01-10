import React from 'react'

export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Knowledge Base</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Support Tickets</a>
                        </li>
                    </ul>
                    <div class="container overflow-hidden text-center">
                        <div class="row gy-5 profile">
                            <div class="col-6 profileimage">
                                <div class="p-3"><img src={require('./porfileimage.png')} alt='profile' className='profileimage' /></div>
                            </div>
                            <div class="col-6 profilename">
                                <div class="p-3 profilename">Paul Eliot</div>
                            </div>
                            <div class="col-6 profilemail">
                                <div class="p-3"> Paul.Elliott@Fakemail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className='profileopen'>
                        <img className='profiledown' src={require('./assets/icon/arrow-down.png')}></img>
                    </div>
                    {/* <div className='userbox'>
                        <div id='imageandname'>
                            <img src={require('./porfileimage.png')} alt='profile' className='profileimage' />


                            <span class="navbar-text" id='name'>
                                Paul Eliot
                            </span></div>

                        <span class="navbar-text" id='email-id'>
                            Paul.Elliott@Fakemail.com
                        </span>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}