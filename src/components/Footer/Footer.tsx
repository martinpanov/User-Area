import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { AmericanExpress, MasterCard, Visa } from './FooterSVGs';

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__payment-methods-prices-wrapper"]}>
                <div className={styles["footer__payment-methods"]}>
                    <MasterCard />
                    <Visa />
                    <AmericanExpress />
                </div>
                <div className={styles["footer__prices"]}>
                    <p>Prices exclude VAT. <Link className={styles["footer__link"]} to="">Show prices with VAT</Link></p>
                </div>
            </div>
            <div className={styles["footer__copyright-wrapper"]}>
                <span className={styles["footer__copyright"]}>
                    Copyright &copy; 2023 SiteGround
                </span>
                <div className={styles["footer__link-container"]}>
                    <Link className={styles["footer__link"]} to="">Legal</Link>
                </div>
            </div>
        </footer>
    );
}