import HeroSVGBug from './HeroSVGBug';
import HeroSVGSecurity from './HeroSVGSecurity';
import styles from './Home.module.css';
import { DomainsSVG, EmailMarketingSVG, HostingSVG, WebsitesSVG } from './WebsitesAndServicesSVGs';

export default function Home() {
    return (
        <main className={styles["main"]}>
            <Hero />
            <WebsitesAndServices />
        </main>
    );
}

function Hero() {
    return (
        <section id={styles["hero"]}>
            <HeroSVGBug />
            <div className={styles["hero__wrapper"]}>
                <h3 className={styles["hero__subheading"]}>Cyber Security Month Offer</h3>
                <h1 className={styles["hero__heading"]}>3 Months Free Site Scanner</h1>
                <p className={styles["hero__paragraph"]}>Ensure your website's safety with our top-selling malware protection service Site Scanner.</p>
                <button className={styles["hero__button"]}>See Plans</button>
            </div>
            <HeroSVGSecurity />
        </section>
    );
}

function WebsitesAndServices() {
    return (
        <section id={styles["websites-and-services"]}>
            <h2 className={styles["websites-and-services__heading"]}>My websites and services</h2>
            <div className={styles["websites-and-services__wrapper"]}>
                <div className={styles["websites-and-services__card"]}>
                    <div className={styles["websites-and-services__card-wrapper"]}>
                        <WebsitesSVG />
                        <h3 className={styles["websites-and-services__card-heading"]}>Websites</h3>
                        <p className={styles["websites-and-services__card-text"]}>You have 8 websites</p>
                        <button className={styles["websites-and-services__button"]}>Manage</button>
                    </div>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <div className={styles["websites-and-services__card-wrapper"]}>
                        <HostingSVG />
                        <h3 className={styles["websites-and-services__card-heading"]}>Hosting</h3>
                        <span className={styles["websites-and_services__card-text"]}>GoGeek</span>
                        <p className={styles["websites-and-services__card-text"]}>Expires on Jul 3, 2024</p>
                        <button className={styles["websites-and-services__button"]}>Manage</button>
                    </div>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <div className={styles["websites-and-services__card-wrapper"]}>
                        <DomainsSVG />
                        <h3 className={styles["websites-and-services__card-heading"]}>Domains</h3>
                        <p className={styles["websites-and-services__card-text"]}>You have 3 domains</p>
                        <button className={styles["websites-and-services__button"]}>Manage</button>
                    </div>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <div className={styles["websites-and-services__card-wrapper"]}>
                        <EmailMarketingSVG />
                        <h3 className={styles["websites-and-services__card-heading"]}>Email Marketing</h3>
                        <p className={styles["websites-and-services__card-text"]}>You have no Email Marketing plans</p>
                        <button className={styles["websites-and-services__button"]}>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}