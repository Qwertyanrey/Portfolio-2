import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main 
      className="min-h-screen relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop')"
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl relative z-10">
        <Header />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contacts />
      </div>
    </main>
  );
}
