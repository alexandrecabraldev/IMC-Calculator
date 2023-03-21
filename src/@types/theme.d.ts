import {Globaltheme} from "../global/GlobalTheme";

type CustomTheme = typeof Globaltheme;

declare module "styled-components"{
    export interface DefaultTheme extends CustomTheme {}
}