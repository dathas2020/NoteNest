import Hero from "../components/Hero";
import Features from "../components/Features";
import LatestNotes from "../components/LatestNotes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Landing() {

    return (

        <div
            className="
                min-h-screen
                bg-[#0D1117]
                text-white
            "
        >
            <Navbar />

            <Hero />

            <Features />

            <LatestNotes />

            <Footer />
        </div>

    );

}

export default Landing;