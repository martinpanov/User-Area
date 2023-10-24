import SecondNavigation from "../../SecondNavigation/SecondNavigation";
import WebsitesCollaborations from "../WebsitesCollaborations/WebsitesCollaborations";
import WebsitesList from "../WebsitesList/WebsitesList";

export default function Websites() {
    const initialTab = "websites";
    const tabs = [
        {
            name: "websites",
            link: "/websites/list"
        },
        {
            name: "collaborations",
            link: "/websites/collaborations"
        }
    ];
    const button = [true, "New Website"];
    return (
        <>
            <SecondNavigation initialTab={initialTab} tabs={tabs} button={button} />
            <WebsitesCollaborations />
            <WebsitesList />
        </>
    );
}