import styled from "styled-components";
import { defaultTheme } from "../themes/deafult";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}