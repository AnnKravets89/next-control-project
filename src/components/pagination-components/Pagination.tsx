"use client";
import styles from "./pagination.module.css";
import {FC} from "react";
import {useRouter} from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    genreId?: number;
}

const Pagination: FC<PaginationProps> = ({currentPage, totalPages, genreId}) => {
    const router = useRouter();

    const handlePageChange = (newPage: number) => {

        router.push(`/movies/${newPage}`);
    }

    return (
        <div className={styles.paginationContainer}>
            <button
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>

            <p>Page {currentPage}</p>

            <button
                disabled={currentPage >= totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>

        </div>
    );
};

export default Pagination;
