import Image from "next/image";
import styles from "./search-bar.module.css";

const SearchBar = () => {
    return (
        <form  className={styles.searchBar}>
            <input
                type="text"

                placeholder={'Search movies...'}

            />
            <button type={"submit"}>
                <Image
                    src="/icon-search.png"
                    alt="icon-search"
                    width={20}
                    height={20}
                />
            </button>
        </form>
    );
};

export default SearchBar;
