import { ReactNode } from "react";
import "@mantine/core/styles.css"; // Estilos do Mantine
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

export const metadata = {
  title: "Chatbot Banco Pine",
  description: "Frontend do chatbot do Banco Pine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta 
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        {/* MantineProvider sem withGlobalStyles/withNormalizeCSS no v7 */}
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}