import React from 'react'
import NavBar from '../component/navBar'
import "./home.css"
import bgLight from '../assets/bgLight.png'
import bgDark from '../assets/bgDark.png'
import faqIcon from '../assets/faqIcon.png'
import travelIcon from '../assets/travelIcon.png'
import chatIcon from '../assets/chatIcon.png'
import telegramIcon from '../assets/telegramIcon.png'
import whatsaapIcon from '../assets/whatsaapIcon.png'
import livechatIcon from '../assets/freshchatIcon.png'
import socialIcon from '../assets/socialIcon.png'
import facebookIcon from '../assets/FacebookIcon.png'
import instagramIcon from '../assets/InstagramIcon.png'
import twitterIcon from '../assets/twitterIcon.png'
import linkedinIcon from '../assets/linkedinIcon.png'
import messageIcon from '../assets/messageIcon.png'

export default function Home() {
    return (
        <>
            <NavBar />
            <div className='header' >
                <p className='heading'>Hello, how can we help you?</p>
                <p className='sub-heading'>Find Travel guide, FAQ, chat,</p>
            </div>
            <section className='section-1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='faq-box-wrapper'>
                                <div>
                                    <img src={faqIcon} alt="" className='icon' />
                                </div>
                                <div>
                                    <p className='fw-700 m-0 fs-16'>FAQ</p>
                                    <p className='fw-500 text-secondary fs-16 m-0'>Lorem ipsum doolor sit amet</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='faq-box-wrapper'>
                                <div>
                                    <img src={travelIcon} alt="" className='icon pe-2' />
                                </div>
                                <div>
                                    <p className='fw-700 m-0 fs-16'>Travel Guide</p>
                                    <p className='fw-500 text-secondary fs-16 m-0'>Lorem ipsum doolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item ">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <div>
                                    <img src={chatIcon} alt="" className='collapsicon ' />
                                </div>
                                <div>
                                    <p className='fw-700 m-0 mb-2 fs-16 text-dark'>Chat</p>
                                    <p className='fw-500 text-secondary fs-16 m-0'>Lorem ipsum doolor sit amet</p>
                                </div>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='d-flex justify-content-center w-100'>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column '>
                                        <img src={telegramIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>Telegram</p>
                                    </div>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column '>
                                        <img src={whatsaapIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>whatsApp</p>
                                    </div>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column '>
                                        <img src={livechatIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>Live chat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div class="accordion-item ">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div>
                                    <img src={socialIcon} alt="" className='collapsicon ' />
                                </div>
                                <div>
                                    <p className='fw-700 m-0 mb-2 fs-16 text-dark'>Social</p>
                                    <p className='fw-500 text-secondary fs-16 m-0'>Lorem ipsum doolor sit amet</p>
                                </div>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='d-flex justify-content-center w-100'>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column '>
                                        <img src={facebookIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>Facebook</p>
                                    </div>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column'>
                                        <img src={instagramIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>Instagram</p>
                                    </div>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column'>
                                        <img src={twitterIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500 pt-2'>Twitter</p>
                                    </div>
                                    <div className='px-md-4 px-2 d-flex align-items-center justify-content-center  flex-column'>
                                        <img src={linkedinIcon} alt="" className='social-icon' />
                                        <p className='fs-11 fw-500'>Linkedin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item ">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div>
                                    <img src={messageIcon} alt="" className='collapsicon ' />
                                </div>
                                <div>
                                    <p className='fw-700 m-0 mb-2 fs-16 text-dark'>Send Query</p>
                                    <p className='fw-500 text-secondary fs-16 m-0'>Lorem ipsum doolor sit amet</p>
                                </div>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <div className='message-box-wrapper'>
                               <div className='container'>
                                   <div className='row'>
                                       <div className='col-md-6'>
                                           <label htmlFor="" className='fs-14 fw-400 pt-3'>Name</label>
                                         <input type="text" className='msg-input'/>
                                         <label htmlFor="Name" className='fs-14 fw-400 pt-3'>Subject</label>
                                         <input type="text" className='msg-input'/>
                                       </div>
                                       <div className='col-md-6'>
                                           <label htmlFor="" className='fs-14 fw-400 pt-3'>Email</label>
                                       <input type="text" className='msg-input'/>
                                       <label htmlFor="" className='fs-14 fw-400 pt-3'>Order no.</label>
                                       <input type="text" className='msg-input'/>
                                        </div>
                                        <div className='col-12'>
                                        <label htmlFor="" className='fs-14 fw-400 pt-3'>Your Query</label>
                                         <input type="text" className='your-qury-input'/>
                                         <div className='text-center'>
                                            <button className='btn  submit-btn'>Submit</button>
                                        </div>
                                        </div>
                                   </div>
                               </div>
                               </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            <br /><br /><br /><br /><br /><br />
        </>
    )
}
