import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginTailwindCSS from "eslint-plugin-tailwindcss";
import next from "eslint-plugin-next";
import prettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  
  // 기본 ESLint 설정
  pluginJs.configs.recommended,

  // TypeScript 관련 설정
  ...tseslint.configs.recommended,

  // React 관련 설정
  pluginReact.configs.flat.recommended,

  // Next.js 관련 설정
  next.configs.coreWebVitals,

  // Prettier 설정
  prettier,

  // TailwindCSS 관련 설정
  pluginTailwindCSS.configs.recommended,

  {
    rules: {
      "react/react-in-jsx-scope": "off", //jsx파일에서 React를 import 하지 않아도 됨.
      "no-unused-vars": "off", //타입스크립트 사용시 interface의 변수명을 eslint가 잡지 않도록 함.
      "@typescript-eslint/no-unused-vars": "warn", //대신 사용하지 않는 변수는 @typescript/eslint를 통해 잡아줌.
      // TailwindCSS 규칙 추가
      "tailwindcss/classnames-order": [
        "warn",
        {
          "callees": ["cva", "cn"]
        }
      ],
      "tailwindcss/enforces-negative-arbitrary-values": [
        "warn",
        {
          "callees": ["cva", "cn"]
        }
      ],
      "tailwindcss/enforces-shorthand": [
        "warn",
        {
          "callees": ["cva", "cn"]
        }
      ],
      "tailwindcss/no-contradicting-classname": [
        "warn",
        {
          "callees": ["cva", "cn"]
        }
      ],
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          "callees": ["cva", "cn"]
        }
      ],
    },
  },
];