import React, { Component } from 'react'
import styles from '../public/stuLoginLogout.module.css'

export default class stuLoginLogout extends Component {
    render() {
        return (
            <div className={styles.loginsection}>
                
                <button>STUDENT LOGIN</button>
                <button>STUDENT REGISTER</button>
            </div>
        )
    }
}
