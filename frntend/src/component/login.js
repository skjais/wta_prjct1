import React, { Component } from 'react'
import styles from '../public/login.module.css'

export default class login extends Component {
    render() {
        return (
            <div>
               <div className={styles.login_body} >

<div className={styles.logo}>
    <h3>LOGIN </h3>
</div>

  
  <form  className={styles.login_box} >    
  <div>           
      <label className={styles.label_txt}> username: </label>

      <br/>
      <input type="text"  className={styles.box} />
      <br/>
      <br/>
       <label className={styles.label_txt} >password:</label>
       <br/>
      <input type="password" className={styles.box}/>
      <br/>
      <br/>
      <br/>
      
      <button  style={{fontSize:25 ,color:"white",backgroundColor:"green",width:150,height:50,textAlign:"center" ,marginLeft:"40%"}}>  Login</button>
      <br/>
      <br/>
      <p style={{marginLeft:120}}>register if you do not have account <a href="#">register</a>
      </p>
      <br/>
      <br/>
    
      </div>   
  </form>
  <div className={styles.footer}>
  <footer >
   <small >&copy; Copyright 2020 Love2Dev. All Rights Reserved</small>
  </footer>

  </div>


</div>

                
            </div>
        )
    }
}
