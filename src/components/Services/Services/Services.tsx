import SecondNavigation from "../../SecondNavigation/SecondNavigation";
import ServicesDomains from "../ServicesDomains/ServicesDomains";
import ServicesEmailMarketing from "../ServicesEmailMarketing/ServicesEmailMarketing";
import ServicesHosting from "../ServicesHosting/ServicesHosting";

export default function Services() {
    const initialTab = "hosting";
    const tabs = [
        {
            name: "hosting",
            link: "/services/hosting"
        },
        {
            name: "domains",
            link: "/services/domains"
        },
        {
            name: "email marketing",
            link: "/services/emailmarketing"
        }
    ];
    const button = [true, "New Hosting Plan"];
    return (
        <>
            <SecondNavigation initialTab={initialTab} tabs={tabs} button={button} />
            <ServicesHosting />
            <ServicesDomains />
            <ServicesEmailMarketing />
        </>
    );
}