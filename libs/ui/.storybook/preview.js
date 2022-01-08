import { theme } from '../src/lib/theme/theme';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

const withThemeProvider = (Story, context) => {
    return (
        <EmotionThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story {...context} />
            </ThemeProvider>
        </EmotionThemeProvider>
    )
}

export const decorators = [withThemeProvider]