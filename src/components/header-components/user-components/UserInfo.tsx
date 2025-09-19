import Image from "next/image";
import styles from "./user.module.css";

const UserInfo = () => {
    return (
        <div>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <Image
                        src='https://i.pravatar.cc/40'
                        alt='User Avatar'
                        width={40}
                        height={40}
                    />
                </div>
                <p className={styles.name}>User</p>
            </div>
        </div>
    );
};

export default UserInfo;
