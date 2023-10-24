import { Link } from 'react-router-dom';
import styles from './SecondNavigation.module.css';
import { useState } from 'react';

type Tab = {
    name: string;
    link: string;
};

type SecondNavigationProps = {
    initialTab: string;
    tabs: Tab[];
    button: (string | boolean)[];
};

export default function SecondNavigation({ initialTab, tabs, button }: SecondNavigationProps) {
    const [activeTab, setActiveTab] = useState(initialTab);

    return (
        <div className={styles["second-navigation"]}>
            <div className={styles["second-navigation__wrapper"]}>
                <ul className={styles["second-navigation__tabs"]} role="list">
                    {tabs.map(tab => (
                        <li className={styles["second-navigation__tab"]}>
                            <Link
                                className={`${styles["second-navigation__tab__link"]} ${activeTab === tab.name ? styles["second-navigation__tab--active"] : ''}`}
                                to={tab.link}
                                onClick={() => setActiveTab(tab.name)}
                            >
                                {tab.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {button[0] && <button className={styles["second-navigation__button"]}>{button[1]}</button>}
            </div>
        </div>
    );
}