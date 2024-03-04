import { Poppins } from "next/font/google";
import "./globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700', '800'],
  style: ['normal'],
  display: 'swap',
});

export const metadata = {
  title: "Cyber Police",
  description: "Cyber Police description",
};


import { LayoutProvider } from './context'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <LayoutProvider>
          { children }
        </LayoutProvider>
      </body>
    </html>
  );
}
