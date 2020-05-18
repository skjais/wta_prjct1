import React, { Component } from 'react'
import logo from '../image/logo.png';
import Book from '../image/book.jpg';
import Pencil from '../image/pencil.jpeg';
import styles from '../public/header.module.css'

export default class header extends Component {
    render() {
        return ( 
        <div>
       
       <div className={styles.logo}>
       <img  src={Book}   height="250px"/> 
        <img  src={logo} height="250px"  width="60%" style={{marginLeft:150}}/> 
        
        <img  src={Pencil} height="250px"/> 
        </div>

        

        <div className={styles.moving}>
            <marquee scrollamount="15"> welcome to the india's number one online tutor finder website </marquee>
        </div>


        <div align="center" className={styles.menu_bar} >
            <button className={styles.buton}> HOME </button>
            <button className={styles.buton}> TEACHER LOGIN </button>
            <button className={styles.buton}> TEACHER REGISTER</button>
            <button className={styles.buton}> CONTACT-US </button>
        </div>
        </div>
        )
    }
    
}

