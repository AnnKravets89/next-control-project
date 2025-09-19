import styles from "./header.module.css";
import Logo from "@/components/header-components/logo-components/Logo";
import Menu from "@/components/header-components/menu-components/Menu";
import SearchBar from "@/components/header-components/search-bar-components/SearchBar";
import UserInfo from "@/components/header-components/user-components/UserInfo";

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>
            <Menu/>
            <SearchBar/>
            <UserInfo/>
        </div>
    );
};

export default Header;
