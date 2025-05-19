import React from 'react';

const About = () => {
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            maxWidth: '800px',
            margin: 'auto',
        },
        header: {
            color: '#003366', // כחול כהה
        },
        subHeader: {
            color: '#00509e', // כחול בינוני
            marginTop: '20px',
        },
        paragraph: {
            margin: '10px 0',
            color: '#333',
        },
        link: {
            color: '#007bff', // כחול בהיר לקישורים
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About Us</h1>
            <p style={styles.paragraph}>Welcome to our Recipe Website!</p>
            <p style={styles.paragraph}>
                Our mission is to provide you with a diverse collection of delicious recipes 
                that you can easily prepare at home. Whether you're a novice cook or a seasoned chef, 
                our site offers something for everyone.
            </p>
            <h2 style={styles.subHeader}>Our Story</h2>
            <p style={styles.paragraph}>
                Our journey began with a passion for cooking and sharing meals with loved ones. 
                We started this website to connect food enthusiasts and inspire creativity in the kitchen. 
                Join us as we explore new flavors and cooking techniques together!
            </p>
            <h2 style={styles.subHeader}>Join Our Community</h2>
            <p style={styles.paragraph}>
                We encourage you to share your own recipes and cooking experiences with us. 
                Together, we can create a vibrant community of food lovers!
            </p>
            <p style={styles.paragraph}>
                For more information, visit our <a href="#" style={styles.link}>contact page</a>.
            </p>
        </div>
    );
}

export default About;



