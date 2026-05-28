import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ["node_modules/**", "node_modules_broken_*/**", ".next/**", ".next-*/**"]
  }
];

export default eslintConfig;
