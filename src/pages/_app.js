import "@/styles/globals.css";
import MainLayout from "@/components/layouts/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout Children={<Component {...pageProps} />} />
    </>
  );
}
