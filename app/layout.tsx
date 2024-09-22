import type { Metadata } from "next"
import localFont from "next/font/local"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import "./globals.css"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"

const prompt = localFont({
  src: "./fonts/Prompt-Regular.ttf",
  variable: "--font-prompt",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Pet B&B",
  description: "Where pets vacation while you're away",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.variable}`}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
