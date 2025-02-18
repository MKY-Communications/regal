import "./HomePage.css";
import Header from "../../components/Header";
import Screen, { Section } from "../../components/ui/Containers/Container";
import Footer from "../../components/ui/Footer/Footer";
import { GlobalExposure, HomePageHeaderOne, HomePageHeaderTwo } from "../../assets/images/home-page";
import { RegalStarSVG } from "../../assets/icons/RegalStarSVG";
import { ArcIcon, BottomSnail, TopSnail } from "../../assets/icons";
import ExtendableCard from "../../components/ui/Cards/ExpandableCard";




const HomePage: React.FC = (): JSX.Element => {
    return (
        <Screen>
            <Header />
                <Section
                    className="regal-purple-bg"
                >
                    <div className="top-banner">
                        {/* Left Images */}
                        <div className="top-banner__left-container">
                            <div className="top-banner__left-container-small">
                                {/* Image */}
                                <img
                                    src={HomePageHeaderTwo}
                                    alt="Regal Star"
                                    decoding="async"
                                />
                                {/* Info */}
                                <div className="regal-purple-text">
                                    Trusted by
                                    <br/>
                                    <span>{"\n"} 1000+ Parents</span>
                                </div>
                            </div>
                            <div className="relative top-banner__left-container-large">
                                {/* Image with absolute features */}
                                <RegalStarSVG className="header-star" />
                                <img
                                    src={ArcIcon}
                                    alt="Arc Icon"
                                    decoding="async"
                                    className="header-arc"
                                />
                                <img
                                    src={HomePageHeaderOne}
                                    alt="Header Image"
                                    decoding="async"
                                    className="full-image eight-brightness responsive-20"
                                />
                            </div>
                        </div>
                        {/* Right Content */}
                        <div className="top-banner__details">
                            <h1>
                                Welcome to <span className="regal-orange-text">Regal</span> Cairo International School
                            </h1>
                            <p>
                                A place where you can unlock your child's potential.
                            </p>
                            <p className="top-banner__btn">
                                About us
                            </p>
                        </div>
                    </div>
                </Section>
                <Section
                    className="relative regal-purple-bg"
                    screenHeight
                >
                    {/* Top Snail */}
                    <img
                        src={TopSnail}
                        alt="Top Snail"
                        decoding="async"
                        className="absolute top-snail"
                        loading="lazy"
                    />
                    {/* First Section */}
                    <div className="global-exposure">
                        {/* Title & Paragraph */}
                        <div className="global-exposure__introduction">
                            <p>Global Opportunities and Partnerships</p>
                            <h2>
                                Global Exposure at Regal CIS
                            </h2>
                        </div>
                        {/* Extendable Cards & Images */}
                        <div className="global-opportunities-info">
                            {/* Extendable Cards */}
                            <div className="extendable-card-group">
                                <ExtendableCard
                                    title={<h2>University Pathways & Priority Admissions</h2>}
                                    activeComponent={
                                        <p>
                                            Priority acceptance at universities within the SEK-IES network and an exclusive work immersion experience are offered to students from member schools.
                                        </p>
                                    }
                                />
                                <ExtendableCard
                                    title={<h2>Academic International Exchange</h2>}
                                    activeComponent={
                                        <p>
                                            Study abroad experiences range from short-term to full-year programs at schools within the chain. There’s also a two-week summer camp at St. John's School in the UK, offering English language lessons and afternoon activities.
                                        </p>
                                    }
                                />
                                <ExtendableCard
                                    title={<h2>International Sports Exchange programs</h2>}
                                    activeComponent={
                                        <p>
                                            Real Madrid Football Camp offers students the chance to join clinics or intensive courses at 'Ciudad Real Madrid' in Madrid. They receive elite training from Real Madrid coaches, along with sports and cultural activities at the club's largest sports center.
                                        </p>
                                    }
                                />
                                <ExtendableCard
                                    title={<h2>Cross-Border Learning Initiatives</h2>}
                                    activeComponent={
                                        <p>
                                            The InterSEK cultural exchange program features competitions in various areas, and Green Week, held in Costa Rica, focuses on environmental awareness.
                                        </p>
                                    }
                                />
                            </div>
                            {/* Image Box */}
                            <div className="global-exposure-image-box">
                                <img
                                    src={GlobalExposure}
                                    alt="Global Exposure"
                                    decoding="async"
                                    className="full-image responsive-20"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Second Section */}
                    <div className="global-exposure-secondary">
                        <p>
                        A Safe and Supportive Learning Environment
                        </p>
                        <h2>
                        Our Commitment to Student Well-Being
                        </h2>
                        <p>
                        At Regal CIS, every child is empowered to reach their full potential in an environment where they feel safe, valued, and inspired to succeed.Regal Cairo International School fosters a safe and inclusive environment that promotes student well-being through empathy, respect, and cultural appreciation. We have a zero-tolerance anti-bullying policy and provide emotional and social development support. Every child is empowered to reach their full potential.
                        </p>
                    </div>
                    {/* Bottom Snail*/}
                    <img
                        src={BottomSnail}
                        alt="Bottom Snail"
                        decoding="async"
                        className="absolute bottom-snail"
                        loading="lazy"
                    />
                </Section>
            <Footer />
        </Screen>
    )
}


export default HomePage;