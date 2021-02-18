import { useCallback, useEffect } from "react";
import { createGlobalState } from "react-use";
import common from "../public/static/locales/common";
import en from "../public/static/locales/en";
import it from "../public/static/locales/it";

const useGlobalValue = createGlobalState("it");

export default function useLanguage() {
  const [language, setLanguage] = useGlobalValue();

  useEffect(() => {
    const language =
      localStorage.getItem("lang") ||
      navigator.language.substring(0, 2) ||
      "it";
    setLanguage(language);
  }, []);

  const updateLanguage = useCallback((lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);

  const t = useCallback(
    (keyString) => {
      switch (language) {
        case "it":
          return it[keyString] || common[keyString] || "";
        case "en":
          return en[keyString] || common[keyString] || "";
        default:
          return "";
      }
    },
    [language]
  );

  return { t, language, setLanguage: updateLanguage };
}
// const useGlobalValue = createGlobalState("it");

// export default function useLanguage() {
//   const [language, setLanguage] = useGlobalValue();

//   useEffect(() => setLanguage(navigator.language.substring(0, 2)), []);

//   useEffect(() => localStorage.setItem("lang", language), [language]);

//   const t = useCallback(
//     (keyString) => {
//       console.log(language);
//       switch (language) {
//         case "it":
//           return it[keyString] || common[keyString] || "";
//         case "en":
//           return en[keyString] || common[keyString] || "";
//         default:
//           return "";
//       }
//     },
//     [language]
//   );

//   return { t, language, setLanguage };
// }
