import { useNavigate, useLocation } from "react-router-dom";


export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string, offset: number = 0, navigateTo: string = "/") => {
    const scrollToElement = (element: HTMLElement) => {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = elementPosition + offset;

      window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    };

    if (location.pathname === navigateTo) {
      const section = document.getElementById(sectionId);
      if (section) scrollToElement(section);
    } else {
      navigate(navigateTo);
      setTimeout(() => {
        const sectionAfterNav = document.getElementById(sectionId);
        if (sectionAfterNav) scrollToElement(sectionAfterNav);
      }, 100); // Adjust timeout if needed
    }
  };

  return { scrollToSection };
};