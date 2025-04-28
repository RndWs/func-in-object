
import generateLaptopJSX from "./generateLaptopJSX.jsx";
import generateSmartphoneJSX from "./generateSmartphoneJSX.jsx";
import generateTabletJSX from "./generateTabletJSX.jsx";

const typeMapping = {
  laptop: {
    fields: ["name", "description", "price", "inStock"],
    generateJSX: generateLaptopJSX,
  },
  smartphone: {
    fields: ["name", "manufacturer", "features", "price", "inStock"],
    generateJSX: generateSmartphoneJSX,
  },
  tablet: {
    fields: ["name", "screenSize", "batteryLife", "price", "inStock"],
    generateJSX: generateTabletJSX,
  },
};
export default typeMapping;