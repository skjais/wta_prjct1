import React, { Component } from 'react'
import styles from '../public/body.module.css'
import Leftbar from './leftbar';

export default class body extends Component {
    render() {
        return (
            <div>
            <main>

             <div className={styles.leftbar}>
                 <Leftbar/>
             </div>

            <div className={styles.center}>

            <div className={styles.center_rows}> 
                <button>SEARCH FOR TUTOR </button>
            </div>

            <div className={styles.center_rows}>
                <button>INSTANT BOOKING</button>

            </div>
            <div className={styles.center_rows}>
                <button  > BOOKING STATUS </button>

            </div>
            <div className={styles.center_rows}>
                <button style={{backgroundColor:"red",color:"black", fontSize:30}}>SUBSCRIBE </button>

            </div>

           </div>

          <div class={styles.rightbar}>
          </div>
          </main>
                
        </div>
        )
    }
}
