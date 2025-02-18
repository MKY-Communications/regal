import "./ShadyPage.css";

import {
  CultivatingCreativity,
  RegalLegacy,
} from "../../assets/images/home-page";
import { NurturingCuriosity } from "../../assets/images/home-page";
import { RegalAdvantage } from "../../assets/images/home-page";
import { DevelopingEssential } from "../../assets/images/home-page";
const ShadyPage: React.FC = (): JSX.Element => {
  return (
    <div className="shady-page">
      <div className="shady-section">
        <ImageOverlay
          src={NurturingCuriosity}
          overlay="Nurturing Curiosity"
          alt="regal legacy"
        />
      </div>
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
        />
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
}

export const ImageTextCard: React.FC<IImageTextCard> = ({
  image,
  title,
  subtitle,
  reverse = false,
}): JSX.Element => {
  return (
    <div className="image-text-card">
      {reverse ? image : ""}
      <div className="image-text-card-text-container">
        {title}
        <p className="image-text-card-subtitle">{subtitle}</p>
      </div>
      {!reverse ? image : ""}
    </div>
  );
};
