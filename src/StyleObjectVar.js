import React from 'react'
import fb from './fb.png'
import google from './google.png'
import ig from './ig.png'

const mainBox = {
    border: '2px solid black',
    backgroundColor: '#918b93',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '5px',
    color: 'white'
}
const textAlignCenter = {
    textAlign: 'center'
}
const welcomeStyle = {
    fontSize: '1.5rem', 
    fontWeight: '100'
}
const formStyle = {
    border: '2px solid white',
    paddingLeft: '50px',
    paddingRight: '50px',
    backgroundColor: 'white',
    color: 'black'
}
const loginHead ={
    fontWeight: '100',
    paddingTop: '15px'
}
const inputTextBox = {
    width: "350px",
    borderRadius: "5px",
    height: "25px",
    padding: "15px",
    marginBottom: "10px"
}
const firstRow ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5px'
}
const secondRow ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginTop: '15px', 
    marginBottom: '20px'
}
const link ={
    textDecoration: 'none',
    fontSize: '13px'
}
const checkBox={
    width: '15px',
    height: '15px'
}
const loginBtn={
    padding: '10px',
    paddingLeft: '20px',
    paddingRight: '20px'
}
const iconRow = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-evenly'
}
const igIcon={width: '45px', height: '45px'}
const fbIcon={width: '49px', height: '49px'}
const googleIcon={width: '73px', height: '73px'}
const fs_10={fontSize: '10px'}
export default function StyleObjVar(){
    return(
        <div style={mainBox}>
             <p style={textAlignCenter}>
                <span style={welcomeStyle}>WELCOME</span><br/>
                <small>Please Login</small>
            </p>
            <form style={formStyle}>
                    <p style={loginHead}>
                        Login:
                    </p>
                    <input type="text" placeholder='Email / User' style={inputTextBox}/>
                    <br/>
                    <input type="password" placeholder='Password' style={inputTextBox}/>
                        <br/>
                    <div style={firstRow}>
                        <div>
                            <input type="checkbox" style={checkBox}/>
                            Remember me
                        </div> 
                        <button style={loginBtn}>
                            LOGIN
                        </button>
                    </div>
                    <div style={secondRow}>
                        <a href='#' style={link}>Forgot Password?</a>
                        <a href='#' style={link}>Register Now!</a>
                    </div>
                    <hr/>
                    <div>
                        <p style={fs_10}>Other ways to login:</p>
                        <div style={iconRow}>
                            <a href=''><img src={fb} alt='fb' style={fbIcon} /></a>
                            <a href=''><img src={google} alt='fb' style={googleIcon} /></a>
                            <a href=''><img src={ig} alt='fb' style={igIcon} /></a>
                        </div>
                    </div>
                </form>
        </div>
    )
}