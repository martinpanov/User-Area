import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import WebsitesList from './components/Websites/WebsitesList/WebsitesList';
import WebsitesCollaborations from './components/Websites/WebsitesCollaborations/WebsitesCollaborations';
import ServicesHosting from './components/Services/ServicesHosting/ServicesHosting';
import ServicesDomains from './components/Services/ServicesDomains/ServicesDomains';
import ServicesEmailMarketing from './components/Services/ServicesEmailMarketing/ServicesEmailMarketing';
import BillingDetails from './components/Billing/BillingDetails/BillingDetails';
import BillingPaymentHistory from './components/Billing/BillingPaymentHistory/BillingPaymentHistory';
import BillingRenewals from './components/Billing/BillingRenewals/BillingRenewals';
import ReferralsProgram from './components/Referrals/ReferralsProgram/ReferralsProgram';
import ReferralsAwards from './components/Referrals/ReferralsAwards/ReferralsAwards';
import ReferralsAffiliate from './components/Referrals/ReferralsAffiliate/ReferralsAffiliate';
import MarketplaceHosting from './components/Marketplace/MarketplaceHosting/MarketplaceHosting';
import MarketplaceDomains from './components/Marketplace/MarketplaceDomains/MarketplaceDomains';
import MarketplaceEmailMarketing from './components/Marketplace/MarketplaceEmailMarketing/MarketplaceEmailMarketing';
import MarketplacePerks from './components/Marketplace/MarketplacePerks/MarketplacePerks';
import WebsitesTransferOwnership from './components/Websites/WebsitesTransferOwnership/WebsitesTransferOwnership';
import WebsitesDelete from './components/Websites/WebsitesDelete/WebsitesDelete';
import ServicesChangePrimaryDomain from './components/Services/ServicesChangePrimaryDomain/ServicesChangePrimaryDomain';
import WebsitesUsers from './components/Websites/WebsitesUsers/WebsitesUsers';
import WebsitesManageWebsite from './components/Websites/WebsitesManageWebsite/WebsitesManageWebsite';
import UtilitiesProfile from './components/Utilities/UtilitiesProfile/UtilitiesProfile';
import UtilitiesNotifications from './components/Utilities/UtilitiesNotifications/UtilitiesNotifications';
import UtilitiesUserPreferences from './components/Utilities/UtilitiesUserPreferences/UtilitiesUserPreferences';
import UtilitiesUsers from './components/Utilities/UtilitiesUsers/UtilitiesUsers';
import UtilitiesSFTP from './components/Utilities/UtilitiesSFTP/UtilitiesSFTP';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/websites/list" element={<WebsitesList />} />
                <Route path="/websites/list/:id" element={<WebsitesManageWebsite />} />
                <Route path="/websites/list/:id/users" element={<WebsitesUsers />} />
                <Route path="/transfer-send/:id" element={<WebsitesTransferOwnership />} />
                <Route path="/delete/:id" element={<WebsitesDelete />} />
                <Route path="/websites/collaborations" element={<WebsitesCollaborations />} />

                <Route path="/services/hosting" element={<ServicesHosting />} />
                <Route path="/services/domains" element={<ServicesDomains />} />
                <Route path="/services/domains/:id" element={<ServicesDomains />} />
                <Route path="/services/change-primary-domain/:id" element={<ServicesChangePrimaryDomain />} />
                <Route path="/services/emailmarketing" element={<ServicesEmailMarketing />} />

                <Route path="/billing/details" element={<BillingDetails />} />
                <Route path="/billing/payment-history" element={<BillingPaymentHistory />} />
                <Route path="/billing/renew" element={<BillingRenewals />} />

                <Route path="/referral/program" element={<ReferralsProgram />} />
                <Route path="/referral/awards" element={<ReferralsAwards />} />
                <Route path="/referral/sign-up" element={<ReferralsAffiliate />} />

                <Route path="/marketplace/hosting" element={<MarketplaceHosting />} />
                <Route path="/marketplace/domains" element={<MarketplaceDomains />} />
                <Route path="/marketplace/free-emailmarketing" element={<MarketplaceEmailMarketing />} />
                <Route path="/marketplace/perks" element={<MarketplacePerks />} />

                <Route path="/utilities/profile" element={<UtilitiesProfile />} />
                <Route path="/utilities/notifications" element={<UtilitiesNotifications />} />
                <Route path="/utilities/user-preferences" element={<UtilitiesUserPreferences />} />
                <Route path="/utilities/users" element={<UtilitiesUsers />} />
                <Route path="/utilities/sftp-multisite" element={<UtilitiesSFTP />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
