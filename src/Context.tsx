import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light')

type Props = {
    theme: Theme;
    children: ReactElement;
}

export function ThemeProvider({theme, children}: Props) {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(): Theme {
    return useContext(ThemeContext)
}
