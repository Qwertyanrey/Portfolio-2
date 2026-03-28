import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
