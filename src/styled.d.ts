import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      magenta: string;
      magentaDark: string;
      text: string;
      card: string;
      accent: string;
    };
  }
}