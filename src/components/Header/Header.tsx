import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import HeaderLogoMobile from './HeaderLogoMobile';
import HeaderLogo from './HeaderLogo';
import { Link } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

export default function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const windowWidth = useWindowSize();

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
                                <li className={styles["header__list-item"]}>
                                    <Link
                                        onClick={() => setActiveLink('home')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'home' ? styles["header__link--active"] : ''}`}
                                        to="/"
                                    >Home
                                    </Link>
                                </li>
                                <li className={styles["header__list-item"]}>
                                    <Link
                                        onClick={() => setActiveLink('websites')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'websites' ? styles["header__link--active"] : ''}`}
                                        to="/websites/list"
                                    >Websites
                                    </Link>
                                </li>
                                <li className={styles["header__list-item"]}>
                                    <Link
                                        onClick={() => setActiveLink('services')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'services' ? styles["header__link--active"] : ''}`}
                                        to="/services/hosting"
                                    >Services
                                    </Link>
                                </li>
                                <li className={styles["header__list-item"]}>
                                    <Link
                                        onClick={() => setActiveLink('billing')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'billing' ? styles["header__link--active"] : ''}`}
                                        to="/billing/details"
                                    >Billing
                                    </Link>
                                </li>
                                <li className={styles["header__list-item"]}>
                                    <Link
                                        onClick={() => setActiveLink('referrals')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'referrals' ? styles["header__link--active"] : ''}`}
                                        to="/referral/program"
                                    >Referrals
                                    </Link>
                                </li>
                                <li className={`${styles["header__list-item"]} `}>
                                    <Link
                                        onClick={() => setActiveLink('marketplace')}
                                        className={`${styles["header__nav-link"]} ${activeLink === 'marketplace' ? styles["header__link--active"] : ''}`}
                                        to="/marketplace/hosting"
                                    >Marketplace
                                    </Link>
                                </li>
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