import HeroSVGBug from './HeroSVGBug';
import HeroSVGSecurity from './HeroSVGSecurity';
import styles from './Home.module.css';

export default function Home() {
    return (
        <main>
            <Hero />
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