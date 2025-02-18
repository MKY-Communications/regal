import "./HomePage.css";
import "../ShadyPage/ShadyPage.css";
import Header from "../../components/Header";
import Screen, { Section } from "../../components/ui/Containers/Container";
import Footer from "../../components/ui/Footer/Footer";
import { CultivatingCreativity, DevelopingEssential, GlobalExposure, HomePageHeaderOne, HomePageHeaderTwo, NurturingCuriosity, RegalAdvantage, RegalLegacy } from "../../assets/images/home-page";
import { RegalStarSVG } from "../../assets/icons/RegalStarSVG";
import { ArcIcon, BottomSnail, BritishCambridge, GloballyRecognizedCertificate, SekIesApproach, TopSnail } from "../../assets/icons";
import ExtendableCard from "../../components/ui/Cards/ExpandableCard";
import { EducationCard, ImageOverlay, ImageTextCard } from "../ShadyPage/ShadyPage";

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
                <Section screenHeight>
                    <div className="regal-second-section">
                        <ImageTextCard
                            title={
                            <h1 className="image-text-card-title">
                                Regal's Legacy and <span className="orange-title">Global</span>{" "}
                                Reach
                            </h1>
                            }
                            subtitle="For over 132 years, Regal Cairo International School joins a legacy of excellence as the 26th school in the 17th country under SEK-IES management. Offering an internationally recognized Cambridge curriculum, Regal CIS is part of a global network committed to shaping bright minds."
                            image={<img src={RegalLegacy} className="text-card-image" />}
                        />
                        <ImageTextCard
                            title={
                            <h1 className="image-text-card-title">
                                The <span className="orange-title">Regal </span>Advantage
                            </h1>
                            }
                            subtitle="Regal Cairo International School offers an internationally recognized Cambridge curriculum, providing students with a world-class education that prepares them for higher education and future careers."
                            image={<img src={RegalAdvantage} className="text-card-image" />}
                            reverse
                        />
                    </div>
                </Section>
                <Section screenHeight>
                    <div className="regal-third-section">
                        <div className="education-title-container">
                            <p className="education-card-subtitle">
                            Academic Excellence and Global Recognition
                            </p>
                            <h2 className="foundations-title education-title">
                            What Makes Our Education Exceptional?
                            </h2>
                        </div>
                        <div className="education-cards-container">
                            <EducationCard
                            src={BritishCambridge}
                            title="British Cambridge Curriculum"
                            subtitle=" A globally recognized framework that promotes analytical thinking, problem-solving, and research-based learning."
                            subtitleaddcss="education-card-sub-title-max-width-268px "
                            />
                            <EducationCard
                            src={SekIesApproach}
                            title="SEK-IES Approach"
                            subtitle=" A student-centered philosophy that encourages creativity, collaboration, and responsible action through real-world challenges"
                            subtitleaddcss="education-card-sub-title-max-width-307px "
                            titleaddcss="education-card-title-max-width-195px"
                            />
                            <EducationCard
                            src={GloballyRecognizedCertificate}
                            title="Globally Recognized Certification"
                            subtitle="Regal CIS graduates receive internationally accepted qualifications that open doors to top universities worldwide, including institutions in the UK, the US, and Europe."
                            />
                        </div>
                    </div>
                </Section>
                <Section screenHeight>
                    <div className="regal-fourth-section">
                        <div className="foundations-title-container">
                            <h1 className="foundations-title">
                            Building Foundations for Lifelong Success
                            </h1>
                            <p className="foundations-subtitle">
                            At{" "}
                            <span className="orange-p ">Regal Cairo International School</span>{" "}
                            , we believe that the early years are the most critical in shaping a
                            child's future. Our Early years programme is designed to provide a
                            solid foundation for lifelong learning and success. We Lay the
                            Groundwork for Excellence through
                            </p>
                        </div>
                        <ImageTextCard
                            title={
                            <h2 className="card-with-overlay-title">Nurturing Curiosity: </h2>
                            }
                            subtitle="Our play-based curriculum fosters a love of learning, encouraging children to explore,discover and grow."
                            image={
                            <ImageOverlay
                                src={NurturingCuriosity}
                                alt="nurturing"
                                overlay="Nurturing Curiosity"
                            />
                            }
                            addcss="column-reverse-mobile"
                        />
                        <ImageTextCard
                            title={
                            <h2 className="card-with-overlay-title">
                                Developing Essential Skill:{" "}
                            </h2>
                            }
                            subtitle="Developing Essential Skills: We Focus on Building critical Skills like literacy, numeracy, and social-emotional learning, essential for future academic success."
                            image={
                            <ImageOverlay
                                src={DevelopingEssential}
                                alt="skill"
                                overlay="Developing Essential Skill"
                            />
                            }
                            reverse
                            addcss="column-reverse-mobile"
                        />
                        <ImageTextCard
                            title={
                            <h2 className="card-with-overlay-title">
                                Cultivating Creativity and Confidence:
                            </h2>
                            }
                            subtitle="Cultivating Creativity and Confidence: Our experienced teachers foster a supportive environment where children can express themselves, take risks, and build confidence."
                            image={
                            <ImageOverlay
                                src={CultivatingCreativity}
                                alt="cultivating"
                                overlay="Cultivating Creativity and Confidence"
                            />
                            }
                            addcss="column-reverse-mobile"
                        />
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
