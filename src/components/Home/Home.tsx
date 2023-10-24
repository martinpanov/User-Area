import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { DomainsSVG, EmailMarketingSVG, HostingSVG, WebsitesSVG } from './WebsitesAndServicesSVGs';
import { HeroSVGBug, HeroSVGSecurity } from './HeroSVGs';
import { Arrow, Backup, BecomeAffiliate, Collaborators, DomainPrivacy, InviteFriends, Malware, NextWebsiteAndNewDomain, TransferDomains, TransferWebsite, UnauthorizedAccess } from './TipsAndSuggestionsSVG';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';


export default function Home() {
    return (
        <main>
            <Hero />
            <WebsitesAndServices />
            <TipsAndSuggestions />
            <RecentBlogPosts />
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
        <section id={styles["websites-and-services"]} className={styles["section--standard"]}>
            <h2 className={styles["websites-and-services__heading"]}>My websites and services</h2>
            <div className={styles["websites-and-services__wrapper"]}>
                <div className={styles["websites-and-services__card"]}>
                    <WebsitesSVG />
                    <h3 className={styles["websites-and-services__card__heading"]}>Websites</h3>
                    <p className={styles["websites-and-services__card__text"]}>You have 8 websites</p>
                    <button className={styles["websites-and-services__card__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <HostingSVG />
                    <h3 className={styles["websites-and-services__card__heading"]}>Hosting</h3>
                    <span className={styles["websites-and_services__card__text"]}>GoGeek</span>
                    <p className={styles["websites-and-services__card__text"]}>Expires on Jul 3, 2024</p>
                    <button className={styles["websites-and-services__card__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <DomainsSVG />
                    <h3 className={styles["websites-and-services__card__heading"]}>Domains</h3>
                    <p className={styles["websites-and-services__card__text"]}>You have 3 domains</p>
                    <button className={styles["websites-and-services__card__button"]}>Manage</button>
                </div>
                <div className={styles["websites-and-services__card"]}>
                    <EmailMarketingSVG />
                    <h3 className={styles["websites-and-services__card__heading"]}>Email Marketing</h3>
                    <p className={styles["websites-and-services__card__text"]}>You have no Email Marketing plans</p>
                    <button className={styles["websites-and-services__card__button"]}>Learn More</button>
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
        <section id={styles["tips-and-suggestions"]} className={styles["section--standard"]}>
            <h2 className={styles["tips-and-suggestions__heading"]}>Success Tips and Suggestions</h2>
            <div className={styles["tips-and-suggestions__wrapper"]}>
                {TipsAndSuggestionsInfo.slice(0, 4).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card__heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card__text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card__link-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card__link-text"]}>{card.link}</span>
                            <Arrow />
                        </Link>
                    </div>
                ))}
                {isLoadMore[0] && TipsAndSuggestionsInfo.slice(4, 8).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card__heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card__text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card__link-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card__link-text"]}>{card.link}</span>
                            <Arrow />
                        </Link>
                    </div>
                ))
                }
                {isLoadMore[1] && TipsAndSuggestionsInfo.slice(8).map(card => (
                    <div className={styles["tips-and-suggestions__card"]}>
                        {card.svg}
                        <h3 className={styles["tips-and-suggestions__card__heading"]}>{card.heading}</h3>
                        <p className={styles["tips-and-suggestions__card__text"]}>{card.text}</p>
                        <Link className={styles["tips-and-suggestions__card__link-arrow"]} to="">
                            <span className={styles["tips-and-suggestions__card__link-text"]}>{card.link}</span>
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

function RecentBlogPosts() {
    const windowWidth = useWindowSize();

    return (
        <section id={styles["recent-blog-posts"]} className={styles["section--standard"]}>
            <h2 className={styles["recent-blog-posts__heading"]}>Recent Blog Posts</h2>
            <div className={styles["recent-blog-posts__wrapper"]}>
                <div className={styles["recent-blog-posts__card"]}>
                    <div className={styles["recent-blog-posts__card__image-container"]}>
                        <img src="https://newblog.siteground.com/en/wp-content/uploads/sites/2/2023/10/Response_to_HTTP2_Rapid_Reset-752x342.jpg" alt="http2" />
                    </div>
                    <div className={styles["recent-blog-posts__card__text-container"]}>
                        <h4 className={styles["recent-blog-posts__card__heading"]}>
                            Response to HTTP/2 Rapid Reset: SiteGround's Swift Action Against a Novel Vulnerability
                        </h4>
                        {windowWidth > 800 ? (
                            <p className={styles["recent-blog-posts__card__text"]}>
                                In the dynamic world of cybersecurity, it's not unusual to encounter new challenges. Recently, a novel vulnerability, dubbed the "HTTP/2 Rapid Reset" attack, was discovered. Given that HTTP/2 is considered a relatively new protocol, we see more modern and more clever ways to perform attacks every day. But this latest vulnerability has the potential to…
                            </p>
                        ) : null
                        }
                    </div>
                    <div className={styles["recent-blog-posts__card__time-link-container"]}>
                        <time className={styles["recent-blog-posts__card__time"]}>10/11/2023</time>
                        <Link className={styles["recent-blog-posts__card__link"]} to="">Read this post</Link>
                    </div>
                </div>
                <div className={styles["recent-blog-posts__card"]}>
                    <div className={styles["recent-blog-posts__card__image-container"]}>
                        <img src="https://newblog.siteground.com/en/wp-content/uploads/sites/2/2023/10/Exim-security-vulnerability_1400x700-752x342.jpg" alt="exim" />
                    </div>
                    <div className={styles["recent-blog-posts__card__text-container"]}>
                        <h4 className={styles["recent-blog-posts__card__heading"]}>
                            Exim's Mail Vulnerability: A Tale of Swift Action and Unaffected SiteGround Clients
                        </h4>
                        {windowWidth > 800 ? (
                            <p className={styles["recent-blog-posts__card__text"]}>
                                Picture this: a lively party, a toddler's bedtime routine, a road trip - this is what three of our security engineers were in the middle of on that particular Saturday, September 30th. Suddenly, their phones beep at the same time in unison, even though far apart, cutting through the noise of the party, the hush…
                            </p>
                        ) : null
                        }
                    </div>
                    <div className={styles["recent-blog-posts__card__time-link-container"]}>
                        <time className={styles["recent-blog-posts__card__time"]}>10/11/2023</time>
                        <Link className={styles["recent-blog-posts__card__link"]} to="">Read this post</Link>
                    </div>
                </div>
                <div className={styles["recent-blog-posts__card"]}>
                    <div className={styles["recent-blog-posts__card__image-container"]}>
                        <img src="https://newblog.siteground.com/en/wp-content/uploads/sites/2/2023/10/tw_chat_recap_email_marketing-752x342.jpg" alt="expert-chat" />
                    </div>
                    <div className={styles["recent-blog-posts__card__text-container"]}>
                        <h4 className={styles["recent-blog-posts__card__heading"]}>
                            [Expert Chat] Getting Started with Email Marketing
                        </h4>
                        {windowWidth > 800 ? (
                            <p className={styles["recent-blog-posts__card__text"]}>
                                Whether you have a small personal or portfolio site, an eCommerce store, or are just starting up a small business website, there is one thing that can effectively boost your online presence at every stage - email marketing. To help you get started and grow your email marketing efforts, right on time for the upcoming…
                            </p>
                        ) : null
                        }
                    </div>
                    <div className={styles["recent-blog-posts__card__time-link-container"]}>
                        <time className={styles["recent-blog-posts__card__time"]}>10/11/2023</time>
                        <Link className={styles["recent-blog-posts__card__link"]} to="">Read this post</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}