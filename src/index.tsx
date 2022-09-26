import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { materialUiTheme } from "./styles/MaterialUiTheme";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={materialUiTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
