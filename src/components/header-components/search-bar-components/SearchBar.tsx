"use client";
import Image from "next/image";
import styles from "./search-bar.module.css";
import {FC, useState} from "react";
import {useRouter} from "next/navigation";

type SearchBarProps = {
    initialQuery?: string;
}
const SearchBar: FC<SearchBarProps> = ({initialQuery}) => {
    const [query, setQuery] = useState(initialQuery || '');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?query=${query}`);
            setQuery('');
        }

    }
    return (
        <form onSubmit={handleSubmit}  className={styles.searchBar}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
