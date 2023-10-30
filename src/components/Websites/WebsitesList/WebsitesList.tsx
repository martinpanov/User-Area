import { Link } from 'react-router-dom';
import styles from './WebsitesList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBars, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function WebsitesList() {
    return (
        <div className={styles["websites-list"]}>
            <div className={styles["websites-list__wrapper"]}>
                <div className={styles["websites-list__header"]}>
                    <h1 className={styles["websites-list__heading"]}>My Websites</h1>
                    <div className={styles["websites-list__filters-wrapper"]}>
                        <button className={styles["websites-list__filters"]}><FontAwesomeIcon icon={faFilter} /></button>
                        <button className={styles["websites-list__filters"]}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                </div>

                <div className={styles["websites-list__list"]}>
                    <div className={styles["websites-list__card"]}>
                        <div className={styles["websites-list__card__heading-wrapper"]}>
                            <h3 className={styles["websites-list__card__heading"]}>martin.com</h3>
                            <Link className={`${styles["websites-list__card__heading-link"]} ${styles["websites-list--no-decoration"]}`} to="">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </Link>
                        </div>
                        <ul className={styles["websites-list__card__list-items"]}>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__hosting-plan"]}>
                                    <span>Hosting Plan: </span>
                                    <Link className={styles["websites-list__card__hosting-plan-link"]} to="">GoGeek Plan</Link>
                                </div>
                            </li>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__site-created"]}>
                                    <span>Site Created: </span>
                                    <time className={styles["websites-list__card__site-created-time"]}> Sep 24, 2023</time>
                                </div>
                            </li>
                        </ul>
                        <div className={styles["websites-list__card__links"]}>
                            <Link className={`${styles["websites-list__card__primary-link"]} ${styles["websites-list--no-decoration"]}`} to="">Site Tools</Link>
                            <Link className={`${styles["websites-list__card__secondary-link"]} ${styles["websites-list--no-decoration"]}`} to="">All Site Options</Link>
                        </div>
                    </div>
                    <div className={styles["websites-list__card"]}>
                        <div className={styles["websites-list__card__heading-wrapper"]}>
                            <h3 className={styles["websites-list__card__heading"]}>martin.com</h3>
                            <Link className={`${styles["websites-list__card__heading-link"]} ${styles["websites-list--no-decoration"]}`} to="">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </Link>
                        </div>
                        <ul className={styles["websites-list__card__list-items"]}>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__hosting-plan"]}>
                                    <span>Hosting Plan: </span>
                                    <Link className={styles["websites-list__card__hosting-plan-link"]} to="">GoGeek Plan</Link>
                                </div>
                            </li>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__site-created"]}>
                                    <span>Site Created: </span>
                                    <time className={styles["websites-list__card__site-created-time"]}> Sep 24, 2023</time>
                                </div>
                            </li>
                        </ul>
                        <div className={styles["websites-list__card__links"]}>
                            <Link className={`${styles["websites-list__card__primary-link"]} ${styles["websites-list--no-decoration"]}`} to="">Site Tools</Link>
                            <Link className={`${styles["websites-list__card__secondary-link"]} ${styles["websites-list--no-decoration"]}`} to="">All Site Options</Link>
                        </div>
                    </div>
                    <div className={styles["websites-list__card"]}>
                        <div className={styles["websites-list__card__heading-wrapper"]}>
                            <h3 className={styles["websites-list__card__heading"]}>martin.com</h3>
                            <Link className={`${styles["websites-list__card__heading-link"]} ${styles["websites-list--no-decoration"]}`} to="">
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </Link>
                        </div>
                        <ul className={styles["websites-list__card__list-items"]}>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__hosting-plan"]}>
                                    <span>Hosting Plan: </span>
                                    <Link className={styles["websites-list__card__hosting-plan-link"]} to="">GoGeek Plan</Link>
                                </div>
                            </li>
                            <li className={styles["websites-list__card__list-item"]}>
                                <div className={styles["websites-list__card__site-created"]}>
                                    <span>Site Created: </span>
                                    <time className={styles["websites-list__card__site-created-time"]}> Sep 24, 2023</time>
                                </div>
                            </li>
                        </ul>
                        <div className={styles["websites-list__card__links"]}>
                            <Link className={`${styles["websites-list__card__primary-link"]} ${styles["websites-list--no-decoration"]}`} to="">Site Tools</Link>
                            <Link className={`${styles["websites-list__card__secondary-link"]} ${styles["websites-list--no-decoration"]}`} to="">All Site Options</Link>
                        </div>
                    </div>
                    <AddNewSite />
                </div>
            </div>
        </div>
    );
}

function AddNewSite() {
    return (
        <button className={styles["website-list__add-new-site"]}>
            <span className={styles["website-list__add-new-site__plus"]}>+</span>
            <span className={styles["website-list__add-new-site__text"]}>Add New Site</span>
        </button>
    );
}