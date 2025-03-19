const fs = require("fs");
const path = require("path");

// Custom root font size (e.g., 10px)
const rootFontSize = 16;

// Convert pixels to rem based on custom root font size
const pxToRem = (px) => {
  const remValue = parseFloat(px) / rootFontSize;
  return `${remValue}rem`;
};

// Convert Tailwind classes with pixel values to rem, including calc expressions
const convertTailwindClasses = (content) => {
  return content
    .replace(
      /(m|p|h|w|left|right|top|bottom|text|leading|tracking|rounded|border|shadow|space|gap|divide)-(?:\[(\d+(\.\d+)?px)\])/g,
      (match, className, pxValue) => {
        return `${className}-[${pxToRem(pxValue)}]`;
      }
    )
    .replace(
      /(h|w)-\[calc\((.*?px.*?)\)\]/g,
      (match, className, calcContent) => {
        const updatedCalcContent = calcContent.replace(
          /(\d+(\.\d+)?)px/g,
          (pxMatch) => {
            return pxToRem(pxMatch);
          }
        );
        return `${className}-[calc(${updatedCalcContent})]`;
      }
    );
};

// Process a single file
const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const updatedContent = convertTailwindClasses(content);
  fs.writeFileSync(filePath, updatedContent, "utf8");
  console.log(`Converted pixel values to rem in ${filePath}`);
};

// Recursively process all .tsx files in a directory
const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith(".tsx")) {
      processFile(filePath);
    }
  });
};

// Main function to start the conversion
const main = () => {
  const targetDir = path.resolve(__dirname, "src"); // Adjust this path to your project's src directory
  processDirectory(targetDir);
};

main();
