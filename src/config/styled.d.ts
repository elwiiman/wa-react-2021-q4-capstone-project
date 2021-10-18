// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            contrastText: string;
        };
        tertiary: {
            main: string;
            contrast: string;
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
    }
}
