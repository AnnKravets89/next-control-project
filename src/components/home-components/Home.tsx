import React from 'react';
import styles from "@/components/home-components/home.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <div className={styles.popularContainer}>
                    <h2>Popular Movies</h2>
                    <div className={styles.popularMovies}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
