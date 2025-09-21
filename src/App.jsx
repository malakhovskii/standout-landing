import StandOutHero from "./StandOutHero";
import MiniGame from "./MiniGame.jsx";
import { Services, Projects, Contact } from "./Sections.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <header className="flex items-center justify-between px-6 md:px-12 py-6">
        <div className="font-black tracking-wider text-xl">Малаховский•Евгений</div>
        <nav className="hidden md:flex gap-8 text-sm text-neutral-500">
          <a href="#services" className="hover:text-neutral-900 transition">Услуги</a>
          <a href="#projects" className="hover:text-neutral-900 transition">Проекты</a>
          <a href="#quiz" className="hover:text-neutral-900 transition">Мини-игра</a>
          <a href="#contact" className="hover:text-neutral-900 transition">Контакты</a>
        </nav>
      </header>

      <StandOutHero />
      <Services />
      <Projects />

      {/* 🔹 Мини-игра */}
      <section id="quiz" className="px-6 md:px-12 py-16 bg-neutral-50">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Выбери приоритет и я дам план</h2>
        <MiniGame />
      </section>

      <Contact />

      <footer className="px-6 md:px-12 py-12 text-xs text-neutral-400">
        © {new Date().getFullYear()} — Сделаю бизнес заметным & STAND OUT
      </footer>
    </div>
  );
}
