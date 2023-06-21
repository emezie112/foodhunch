import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
} from "@next/font/google"

import './utils.ts'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
