import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahava Law Firm",
  description: "Ahava Law Firm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-[100vh] overflow-x-hidden`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
