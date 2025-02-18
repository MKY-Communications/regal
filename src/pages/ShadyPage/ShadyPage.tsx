import "./ShadyPage.css";

import {
  CultivatingCreativity,
  RegalLegacy,
} from "../../assets/images/home-page";
import { NurturingCuriosity } from "../../assets/images/home-page";
import { RegalAdvantage } from "../../assets/images/home-page";
import { DevelopingEssential } from "../../assets/images/home-page";

import {
  GloballyRecognizedCertificate,
  SekIesApproach,
  BritishCambridge,
} from "../../assets/icons";
const ShadyPage: React.FC = (): JSX.Element => {
  return (
    <div className="shady-page">
      <div className="shady-section">
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
      <div className="shady-section">
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
      <div className="shady-section">
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
    </div>
  );
};

export default ShadyPage;

interface IImageOverlay {
  src?: string;
  alt?: string;
  overlay?: string;
}

export const ImageOverlay: React.FC<IImageOverlay> = ({
  src,
  alt,
  overlay,
}): JSX.Element => {
  return (
    <div className="image-overlay-card">
      <img src={src} alt={alt} className="image-overlay-image" />
      <h2 className="image-overlay-text">{overlay}</h2>
    </div>
  );
};

interface IImageTextCard {
  image: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  reverse?: boolean;
  addcss?: string;
}

export const ImageTextCard: React.FC<IImageTextCard> = ({
  image,
  title,
  subtitle,
  reverse = false,
  addcss = "",
}): JSX.Element => {
  return (
    <div className={`image-text-card ${reverse ? "reverse" : ""}${addcss}`}>
      {reverse ? image : ""}
      <div className="image-text-card-text-container">
        {title}
        <p className="image-text-card-subtitle">{subtitle}</p>
      </div>
      {!reverse ? image : ""}
    </div>
  );
};

interface IEducationCard {
  src?: string;
  alt?: string;
  title: string;
  subtitle: string;
  subtitleaddcss?: string;
  titleaddcss?: string;
}
export const EducationCard: React.FC<IEducationCard> = ({
  src,
  alt,
  title,
  subtitle,
  subtitleaddcss = "",
  titleaddcss = "",
}): JSX.Element => {
  return (
    <div className="education-card">
      <img src={src} alt={alt} className="education-card-image" />
      <h2 className={`education-card-title ${titleaddcss}`}>{title}</h2>
      <p className={`education-card-subtitle ${subtitleaddcss}`}>{subtitle}</p>
    </div>
  );
};
