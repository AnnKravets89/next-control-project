import React from 'react';
import styles from "./menu.module.css";
import Link from "next/link";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/movies">Movies</Link>
                </li>
                <li>
                    <Link href="/genres">Genres</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
