import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

const Logo = () => {
    return (
        <div>
            <Link href="/" className={styles.logo} >
                <div className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                    />
                    <p>Movie App</p>
                </div>
            </Link>
        </div>
    );
};

export default Logo;
