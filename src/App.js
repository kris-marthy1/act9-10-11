import './App.css';
import StyleObjVar from './StyleObjectVar';
import InLine from './inLine';
import React from 'react'
import fb from './fb.png'
import google from './google.png'
import ig from './ig.png'
import {styles} from './SharedStyle'

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 style={{textAlign: "center"}}>Activity 9-11</h1><br/>
      <h2 style={{textAlign: "center"}}>In-line Styling</h2>
      <InLine/>
      <h2 style={{textAlign: "center"}}>Style Object Variable</h2>
      <StyleObjVar/>
      
      <h2 style={{textAlign: "center"}}>Shared Style across components</h2>

        <div style={styles.mainBox}>
              <p style={styles.textAlignCenter}>
                  <span style={styles.welcomeStyle}>WELCOME</span><br/>
                  <small>Please Login</small>
              </p>
              <form style={styles.formStyle}>
                      <p style={styles.loginHead}>
                          Login:
                      </p>
                      <input type="text" placeholder='Email / User' style={styles.inputTextBox}/>
                      <br/>
                      <input type="password" placeholder='Password' style={styles.inputTextBox}/>
                          <br/>
                      <div style={styles.firstRow}>
                          <div>
                              <input type="checkbox" style={styles.checkBox}/>
                              Remember me
                          </div> 
                          <button style={styles.loginBtn}>
                              LOGIN
                          </button>
                      </div>
                      <div style={styles.secondRow}>
                          <a href='#' style={styles.link}>Forgot Password?</a>
                          <a href='#' style={styles.link}>Register Now!</a>
                      </div>
                      <hr/>
                      <div>
                          <p style={styles.fs_10}>Other ways to login:</p>
                          <div style={styles.iconRow}>
                              <a href=''><img src={fb} alt='fb' style={styles.fbIcon} /></a>
                              <a href=''><img src={google} alt='fb' style={styles.googleIcon} /></a>
                              <a href=''><img src={ig} alt='fb' style={styles.igIcon} /></a>
                          </div>
                      </div>
                  </form>
          </div>

    </div>
    
  );
}

export default App;
