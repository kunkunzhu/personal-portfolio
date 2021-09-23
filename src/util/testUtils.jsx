import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { siteTheme } from "../styles/siteTheme";

const Wrapper = ({ children }) => (
    <ThemeProvider theme={siteTheme}> {children} </ThemeProvider>
);

const customRender = ( ui, options) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };