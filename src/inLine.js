import React from 'react'
import fb from './fb.png'
import google from './google.png'
import ig from './ig.png'
export default function InLine(){
    return(
        <>
            <div style={{
                border: '2px solid black',
                backgroundColor: '#918b93',
                paddingLeft: '5px',
                paddingRight: '5px',
                paddingBottom: '5px',
                color: 'white'
            }}>
                <p style={{textAlign: 'center'}}>
                    <span style={{fontSize: '1.5rem', fontWeight: '100'}}>WELCOME</span><br/>
                    <small>Please Login</small>
                </p>
                <form style={{border: '2px solid white',paddingLeft: '50px',paddingRight: '50px',backgroundColor: 'white',color: 'black',}}>
                    <p style={{fontWeight: '100',paddingTop: '15px'}}>
                        Login:
                    </p>
                    <input type="text" placeholder='Email / User' style={{width: "350px",borderRadius: "5px",height: "25px",padding: "15px",marginBottom: "10px"}}/>
                    <br/>
                    <input type="password" placeholder='Password' style={{width: "350px",borderRadius: "5px",
                        height: "25px",padding: "15px",marginBottom: "10px"}}/>
                        <br/>
                    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', marginTop: '5px'}}>
                        <div>
                            <input type="checkbox" style={{width: '15px', height: '15px'}}/>
                            Remember me
                        </div> 
                        <button style={{padding: '10px',paddingLeft: '20px',paddingRight: '20px'}}>
                            LOGIN
                        </button>
                    </div>
                    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', marginTop: '15px', marginBottom: '20px'}}>
                        <a href='#' style={{textDecoration: 'none', fontSize: '13px'}}>Forgot Password?</a>
                        <a href='#' style={{textDecoration: 'none', fontSize: '13px'}}>Register Now!</a>
                    </div>
                    <hr/>
                    <div>
                        <p style={{fontSize: '10px'}}>Other ways to login:</p>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                            <a href=''><img src={fb} alt='fb' style={{width: '49px', height: '49px'}} /></a>
                            <a href=''><img src={google} alt='fb' style={{width: '73px', height: '73px'}} /></a>
                            <a href=''><img src={ig} alt='fb' style={{width: '45px', height: '45px'}} /></a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}