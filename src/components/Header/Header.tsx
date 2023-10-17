import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import HeaderLogoMobile from './HeaderLogoMobile';
import HeaderLogo from './HeaderLogo';
import { Link } from 'react-router-dom';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
        <header className={styles["header"]}>
            <div className={styles["header__wrapper"]}>
                <div className={styles["header__logo-drawer-wrapper"]}>
                    {windowWidth >= 1024 ? (
                        <Link onClick={() => setActiveLink('home')} className={styles["header__logo-link"]} to="/" >
                            <HeaderLogo />
                        </Link>
                    ) : (
                        <>
                            <button className={styles["header__drawer"]}>
                                <FontAwesomeIcon icon={faBars} className={styles["header__drawer-icon"]} />
                            </button>
                            <Link className={styles["header__logo-link"]} to="/">
                                <HeaderLogoMobile />
                            </Link>
                        </>
                    )}
                </div>
                {windowWidth >= 1024 && (
                    <>
                        <nav className={styles["header__navigation"]}>
                            <ul className={styles["header__list-items"]} role='list'>
                                <li onClick={() => setActiveLink('home')} className={`${styles["header__list-item"]} ${activeLink === 'home' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/">Home</Link></li>
                                <li onClick={() => setActiveLink('websites')} className={`${styles["header__list-item"]} ${activeLink === 'websites' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/websites/list">Websites</Link></li>
                                <li onClick={() => setActiveLink('services')} className={`${styles["header__list-item"]} ${activeLink === 'services' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/services/hosting">Services</Link></li>
                                <li onClick={() => setActiveLink('billing')} className={`${styles["header__list-item"]} ${activeLink === 'billing' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/billing/details">Billing</Link></li>
                                <li onClick={() => setActiveLink('referrals')} className={`${styles["header__list-item"]} ${activeLink === 'referrals' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/referral/program">Referrals</Link></li>
                                <li onClick={() => setActiveLink('marketplace')} className={`${styles["header__list-item"]} ${activeLink === 'marketplace' ? styles["header__list-item--active"] : ''}`}><Link className={styles["header__nav-link"]} to="/marketplace/hosting">Marketplace</Link></li>
                            </ul>
                        </nav>
                        <div className={styles["header__spacer"]}></div>
                    </>
                )}
                <div className={styles["header__question-mark-avatar"]}>
                    <div className={styles["header__question-mark-wrapper"]}>
                        <span className={styles["header__question-mark"]}>?</span>
                    </div>
                    {windowWidth >= 1024 && (
                        <div className={styles["header__avatar-wrapper"]}>
                            <span>MP</span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}