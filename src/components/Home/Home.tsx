import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { DomainsSVG, EmailMarketingSVG, HostingSVG, WebsitesSVG } from './WebsitesAndServicesSVGs';
import { HeroSVGBug, HeroSVGSecurity } from './HeroSVGs';
import { Arrow, Backup, BecomeAffiliate, Collaborators, DomainPrivacy, InviteFriends, Malware, NextWebsiteAndNewDomain, TransferDomains, TransferWebsite, UnauthorizedAccess } from './TipsAndSuggestionsSVG';
import { useState } from 'react';


export default function Home() {
    return (
        <main className={styles["main"]}>
            <Hero />
            <WebsitesAndServices />
            <TipsAndSuggestions />
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
                    <WebsitesSVG />
                    <h3 className={styles["websites-and-services__card-heading"]}>Websites</h3>
                    <p className={styles["websites-and-services__card-text"]}>You have 8 websites</p>
                    <button className={styles["websites-and-services__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <HostingSVG />
                    <h3 className={styles["websites-and-services__card-heading"]}>Hosting</h3>
                    <span className={styles["websites-and_services__card-text"]}>GoGeek</span>
                    <p className={styles["websites-and-services__card-text"]}>Expires on Jul 3, 2024</p>
                    <button className={styles["websites-and-services__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <DomainsSVG />
                    <h3 className={styles["websites-and-services__card-heading"]}>Domains</h3>
                    <p className={styles["websites-and-services__card-text"]}>You have 3 domains</p>
                    <button className={styles["websites-and-services__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <EmailMarketingSVG />
                    <h3 className={styles["websites-and-services__card-heading"]}>Email Marketing</h3>
                    <p className={styles["websites-and-services__card-text"]}>You have no Email Marketing plans</p>
                    <button className={styles["websites-and-services__button"]}>Learn More</button>
                </div>
            </div>
        </section>
    );
}

const TipsAndSuggestionsInfo = [
    {
        svg: <DomainPrivacy />,
        heading: 'Protect your domain privacy',
        text: 'You\'ve got an unprotected domain! Your personal information is publicly available in the Whois database. To avoid spam and identity theft, hide your details with Domain Privacy.',
        link: 'Get Domain Privacy'
    },
    {
        svg: <UnauthorizedAccess />,
        heading: 'Prevent unauthorized access to your account',
        text: 'Protect your account from hackers and identity thieves by enabling our 2-step login verification. This is the best way to prevent unauthorized access to your data and sites.',
        link: 'Enable 2-Step Verification'
    },
    {
        svg: <TransferDomains />,
        heading: 'Transfer your domains',
        text: 'You\'ve got websites with domains not registered by SiteGround. Bring your domains over so you can manage your domains and hosting from one place.',
        link: 'Transfer Your Domains'
    },
    {
        svg: <Malware />,
        heading: 'Check your site for malware regularly',
        text: 'Let us check your site for malware regularly with our SG Scanner service. You will get alerted in case of a threat so you can take timely measures to protect it.',
        link: 'Get Site Scanner'
    },
    {
        svg: <Backup />,
        heading: 'Backup your site before you make changes',
        text: 'Before making any changes to your website, you may want to save all your previous updates in a backup copy. You can easily revert back in case your updates don\'t work out.',
        link: 'Go To Backup Tool'
    },
    {
        svg: <Collaborators />,
        heading: 'Add collaborators to your site',
        text: 'If you need to give access to designers, developers or others to work on your site, you can invite them as collaborators. The service is available on GrowBig and higher plans.',
        link: 'Invite Collaborators'
    },
    {
        svg: <InviteFriends />,
        heading: 'Invite friends to SiteGround & earn free hosting',
        text: 'Tell your friends about our hosting and help them start their online projects with a solid host. We award you with free hosting for each new referral you send us.',
        link: 'Refer Friends'
    },
    {
        svg: <NextWebsiteAndNewDomain />,
        heading: 'Create your next website',
        text: 'Thinking to start your next project? Create your new website in an existing hosting plan or order a new plan. Every new website is easy to set up with our website wizard.',
        link: 'Get Domain Privacy'
    },
    {
        svg: <NextWebsiteAndNewDomain />,
        heading: 'Get a new domain name',
        text: 'Protect your brand name and book all domain extensions relevant to it. Check out our wide range of extensions at awesome prices!',
        link: 'Register Domains'
    },
    {
        svg: <TransferWebsite />,
        heading: 'Transfer more sites to SiteGround',
        text: 'Having websites hosted elsewhere? Get a professional website transfer done by our experts or automated WordPress migration with an easy to use WordPress plugin.',
        link: 'Start a Transfer'
    },
    {
        svg: <BecomeAffiliate />,
        heading: 'Become an affiliate and start earning today!',
        text: 'You can earn extra income by becoming a SiteGround affiliate. We award the promotional efforts of our affiliates with generous commissions for every sale.',
        link: 'Become an affiliate'
    },
];

function TipsAndSuggestions() {
    const [isLoadMore, setIsLoadMore] = useState([false, false]);

    const clickHandler = () => {
        setIsLoadMore(prevState => prevState[0] ? [true, true] : [true, false]);
    };

    return (
        <section id={styles["tips-and-suggestions"]}>
            <h2 className={styles["tips-and-suggestions__heading"]}>Success Tips and Suggestions</h2>
            <div className={styles["tips-and-suggestions__wrapper"]}>
                {TipsAndSuggestionsInfo.slice(0, 4).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card-heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card-text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card-link-and-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card-link-text"]}>{card.link}</span>
                            <Arrow />
                        </Link>
                    </div>
                ))}
                {isLoadMore[0] && TipsAndSuggestionsInfo.slice(4, 8).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card-heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card-text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card-link-and-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card-link-text"]}>{card.link}</span>
                            <Arrow />
                        </Link>
                    </div>
                ))
                }
                {isLoadMore[1] && TipsAndSuggestionsInfo.slice(8).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card-heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card-text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card-link-and-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card-link-text"]}>{card.link}</span>
                            <Arrow />
                        </Link>
                    </div>
                ))
                }
            </div>
            {!(isLoadMore[0] && isLoadMore[1]) &&
                <button onClick={clickHandler} className={styles["tips-and-suggestions__load-more"]}>Load more</button>
            }
        </section>
    );
}