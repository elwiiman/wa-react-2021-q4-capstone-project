// import original module declarations
import 'styled-components';
import { StringMappingType } from 'typescript';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        primary: {
            main: string;
            contrastText: string;
            contrastBorder: string;
        };
        secondary: {
            main: string;
            contrastText: string;
            contrastBorder: string;
        };
        tertiary: {
            main: string;
            contrastText: string;
            contrastBorder: string;
        };
        warn: {
            main: string;
        };
        error: {
            main: string;
            contrastText: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            hint: string;
        };
        line: {
            primary: string;
            secondary: string;
            tertiary: string;
            disabled: string;
            error: string;
            focus: string;
        };
        background: {
            paper: string;
            main: string;
            secondary: string;
            secondary_opac: string;
            tertiary: string;
            contrast: string;
        };
        spinner: {
            main: string;
            back: string;
        };

        input: {
            background: string;
            text: string;
        };
    }
}
