// Style Imports
import "./Container.css";
import { ScrollRestoration } from "react-router-dom";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}): JSX.Element => {
  return <div {...props}>{children}</div>;
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  inlinePadding?: boolean;
  blockPadding?: boolean;
  screenHeight?: boolean;
}

// Reactify Section
export const Section: React.FC<SectionProps> = ({
  className,
  inlinePadding = true,
  blockPadding = true,
  screenHeight = false,
  children,
  ...props
}): JSX.Element => {
  return (
    <section
      className={`${className}  ${blockPadding && "block-padding"} ${inlinePadding && "inline-padding"} ${screenHeight && "screen-height"}`}
      {...props}
    >
      {children}
    </section>
  );
};

// Screen Component
interface ScreensProps {
  children: React.ReactNode;
  additionalCss?: string;
}

const Screen: React.FC<ScreensProps> = ({
  children,
  additionalCss = "",
}) => {
  return (
    <Container className={`screen ${additionalCss}`}>
      {/* Restore Scroll Once using React Router Link Navigation*/}
      <ScrollRestoration />
      {children}
    </Container>
  );
};

export default Screen;