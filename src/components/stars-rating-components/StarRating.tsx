"use client";
import styles from "./star.rating.module.css";
import {FC, useState} from "react";

type StarsRatingProps = {
    totalStars?: number;
    initialRating?: number;
    onRatingChange?: (value: number) => void;
    mode?: 'full' | 'compact';
}
const StarRating: FC<StarsRatingProps> = ({
    totalStars = 5,
    initialRating = 0,
    onRatingChange,
    mode = 'full'}) => {

    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (star: number) => {
        setRating(star);
        if (onRatingChange) {
            onRatingChange(star)
        }
    };

    if (mode === 'compact') {
        return <div>
                    <span>★</span>
                    <span>{initialRating.toFixed(1)}</span>
               </div>
    }

    return (
        <div className={styles.starRating}>
            {Array.from({length: totalStars}, (_, index) => {
               const starValue = index + 1;

               return(
                   <span
                       key={starValue}
                       className={`styles.star ${starValue <= (hover || rating) ? styles.starFilled : ''}`}
                       onClick={() => handleClick(starValue)}
                       onMouseEnter={() => setHover(starValue)}
                       onMouseLeave={() => setHover(0)}
                   >
                       ★
                   </span>
               );
            })}
        </div>
    );
};

export default StarRating;
