/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import {getClientConfig} from "./config/client";
import {Analytics} from '@vercel/analytics/react';
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
    title: "AIMaster",
    description: "Your personal AI Bot.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#fafafa"},
        {media: "(prefers-color-scheme: dark)", color: "#151515"},
    ],
    appleWebApp: {
        title: "AIMaster",
        statusBarStyle: "default",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
            <head>
                <meta name="config" content={JSON.stringify(getClientConfig())}/>
                <link rel="manifest" href="/site.webmanifest"></link>
                <script src="/serviceWorkerRegister.js" defer></script>
            </head>
            <body>
              {children}
              <Analytics/>
            </body>
            </html>
        </ClerkProvider>
    );
}
