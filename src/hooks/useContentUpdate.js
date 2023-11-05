import { useEffect } from "react";

const useContentUpdate = (curPos, nextPos, lastItem) => {
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const sections = mainContent.querySelectorAll(".section");

    sections.forEach((section, index) => {
      section.classList.remove("section--is-active");
      section.classList.remove("section--next");
      section.classList.remove("section--prev");

      if (index === nextPos) {
        section.classList.add("section--is-active");
      } else if (curPos < nextPos) {
        section.classList.add("section--next");
      } else {
        section.classList.add("section--prev");
      }
    });

    const headerCta = document.querySelector(".header--cta");
    if (nextPos !== 0 && nextPos !== lastItem) {
      headerCta.classList.add("is-active");
    } else {
      headerCta.classList.remove("is-active");
    }
  }, [curPos, nextPos, lastItem]);
};

export default useContentUpdate;
