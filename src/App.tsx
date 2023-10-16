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

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/websites/list" element={<WebsitesList />} />
            <Route path="/websites/collaborations" element={<WebsitesCollaborations />} />
            <Route path="/services/hosting" element={<ServicesHosting />} />
            <Route path="/services/domains" element={<ServicesDomains />} />
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
        </Routes>
    );
}

export default App;
