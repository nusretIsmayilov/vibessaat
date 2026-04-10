import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="light"
      theme={{
        components: {
          Checkbox: {
            defaultProps: {
              icon: IconCheck,
            },
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);