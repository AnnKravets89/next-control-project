"use client";
import styles from "./pagination.module.css";
import {FC} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
}

const Pagination: FC<PaginationProps> = ({currentPage, totalPages}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handlePageChange = (newPage: number) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', newPage.toString());

        router.push(`${pathname}?${newSearchParams.toString()}`);

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
