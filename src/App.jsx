import ContactSection from "./ContactSection/ContactSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import FooterSection from "./FooterSection/FooterSection";
import Header from "./Header/Header"
import HeroSection from "./HeroSection/HeroSection";
import PlansSection from "./PlansSection/PlansSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import ToolsSection from "./ToolsSection/ToolsSection";

function App() {
    return (
        <>
            <Header />
            <HeroSection/>
            <ToolsSection/>
            <FeaturesSection/>
            <ReviewsSection/>
            <PlansSection/>
            <ContactSection/>
            <FooterSection/>
        </>
    );
}

export default App;