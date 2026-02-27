import Loader from "@/components/Loader";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import RevealProvider from "@/components/RevealProvider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Capability from "@/components/Capability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Nav />
      <RevealProvider>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Collections />
        <div className="divider" />
        <Capability />
        <div className="divider" />
        <Contact />
        <Footer />
      </RevealProvider>
    </>
  );
}
