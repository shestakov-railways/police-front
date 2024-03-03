import { Poppins } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700', '800'],
  style: ['normal'],
  display: 'swap',
});

export const metadata = {
  title: "Cyberpolice",
  description: "Cyberpolice description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
