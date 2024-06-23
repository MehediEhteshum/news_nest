import { ReactNode } from "react";
import {
  Theme,
  ThemeProviderContext,
  ThemeProviderState,
  useThemeProvider,
} from "./ThemeProvider.hooks";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const value: ThemeProviderState = useThemeProvider(storageKey, defaultTheme);

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
