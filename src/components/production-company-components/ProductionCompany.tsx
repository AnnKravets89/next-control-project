import styles from "./production.company.module.css";
import {IProductionCompany} from "@/models/movie-card-models/ProductionCompanyModel";
import Image from "next/image";

type ProductionCompanyProps = {
    company: IProductionCompany;
}
const ProductionCompany = ({company}:ProductionCompanyProps ) => {
    const fallback = '/company-logo.png'
    const logoUrl = company.logo_path ?
        `https://image.tmdb.org/t/p/w200${company.logo_path}` : fallback;

    return (
        <div className={styles.company}>
            <Image
                src={logoUrl}
                alt={company.name}
                className={styles.companyLogo}
                width={200}
                height={200}
            />
            <div className={styles.companyNameCountry}>
                <p>{company.name}</p>
                <p className={styles.companyCountry}>
                  Country:  {company.origin_country}</p>
            </div>
        </div>
    );
};

export default ProductionCompany;
