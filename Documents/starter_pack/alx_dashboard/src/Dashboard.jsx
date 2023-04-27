import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dashboard.module.css';
import Notifications from "./Notifications/Notifications";
import logo from './assets/ALX+PNG.png';
import Header from './Header/header';
import Login from './Login/Login';
import Footer from './Footer/Footer';


const Dashboard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.column1}></div>
            <div className={styles.column2}>
                {/* Notification Section Here!! */}
                <div className={styles.header}>
                    {/* Header Section Implementation Here ! */}

                </div>

                {/* Implement the Login Logic Here */}


                {/* Implement the Footer section here! */}

            </div>
        </div>
    );
};



export default Dashboard;
