import React from 'react';
import styles from './Home.module.css';
import Notifications from "./Notifications/Notifications";
import { getFooterCopy, getFullYear } from './utils'
//import logo from './assets/ALX+PNG.png';
import { useNavigate } from 'react-router-dom';

function Home() {

    // Use for navigation to Dashboard page (Dashboard.jsx)
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>

                {/* -------------------------------Header Section--------------------------- */}
                <div className={styles.app_header}>
                    {/* Implement the Header Section Here from Introduction to React Task_1 ! */}
                </div>

                {/* ----------------------------- Body Section------------------------------- */}
                <div className={styles.app_body}>
                    {/* Implement the Login logic from Introduction to React Task_1 */}

                </div>




                {/* ---------------------------Footer Section------------------------------- */}
                <div className={styles.app_footer}>
                    {/* Insert utils fuction here */}
                    <p className={styles.button_18}>{getFooterCopy(true)}</p>
                    <p className={styles.button_18}>{getFullYear()}</p>






                </div>
            </div >
        </div >
    );
}

export default Home;
