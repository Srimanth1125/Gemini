import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt='' />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Srimanth.</span></p>
                    <p>How can I help you today.</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful place</p>
                        <img src={assets.compass_icon} alt=''></img>
                    </div>
                    <div className="card">
                        <p>summarize</p>
                        <img src={assets.bulb_icon} alt=''></img>
                    </div>
                    <div className="card">
                        <p>brainstorm</p>
                        <img src={assets.message_icon} alt=''></img>
                    </div>
                    <div className="card">
                        <p>Improve readability</p>
                        <img src={assets.code_icon} alt=''></img>
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter propmt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        
                        </div>
                    </div>
                    <p className="bottom-info">hello</p>
                </div>
            </div>
        </div>
    )
}

export default Main