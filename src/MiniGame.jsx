// src/MiniGame.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Palette,
  ShieldCheck,
  Rocket,
  Timer,
  Gem,
  PiggyBank,
  Users,
} from "lucide-react";

/* Вопросы и иконки */
const QUIZ = [
  {
    q: "Что вам нужнее всего?",
    options: [
      { label: "Новый дизайн", icon: <Palette className="w-5 h-5 text-pink-500" /> },
      { label: "Автотесты & QA", icon: <ShieldCheck className="w-5 h-5 text-violet-500" /> },
      { label: "Больше клиентов", icon: <Rocket className="w-5 h-5 text-red-500" /> },
    ],
  },
  {
    q: "Что для вас критично?",
    options: [
      { label: "Быстрый запуск", icon: <Timer className="w-5 h-5 text-blue-500" /> },
      { label: "Качество продукта", icon: <Gem className="w-5 h-5 text-cyan-500" /> },
      { label: "Минимизация затрат", icon: <PiggyBank className="w-5 h-5 text-emerald-500" /> },
    ],
  },
  {
    q: "Если проект — ракета, что важнее всего?",
    options: [
      { label: "Двигатель (конверсия)", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
      { label: "Управление (тестирование)", icon: <ShieldCheck className="w-5 h-5 text-indigo-500" /> },
      { label: "Оболочка (бренд)", icon: <Users className="w-5 h-5 text-pink-500" /> },
    ],
  },
];

/* Точка внутри круга */
function pointInCircle(x, y, circleRect) {
  const cx = circleRect.left + circleRect.width / 2;
  const cy = circleRect.top + circleRect.height / 2;
  const r = circleRect.width / 2;
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

/* Безопасно получаем координаты указателя */
function getPointerXY(evt, info) {
  if (info && info.point && typeof info.point.x === "number") {
    return { x: info.point.x, y: info.point.y };
  }
  if (evt && evt.changedTouches && evt.changedTouches[0]) {
    const t = evt.changedTouches[0];
    return { x: t.clientX, y: t.clientY };
  }
  if (evt && typeof evt.clientX === "number") {
    return { x: evt.clientX, y: evt.clientY };
  }
  return { x: 0, y: 0 };
}

export default function MiniGame() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [resetKey, setResetKey] = useState(0);

  const areaRef = useRef(null);
  const dropRef = useRef(null);

  const question = QUIZ[step];

  const finish = (finalAnswers) => {
    const list = finalAnswers.map((a) => `- ${a}`).join("\n");
    const email = window.prompt(
      `Готово! Ваши ответы:\n${list}\n\nА теперь оставьте email, и я вышлю план:`,
      "you@example.com"
    );
    if (email && /\S+@\S+\.\S+/.test(email)) {
      window.alert(`Спасибо! Я свяжусь с вами на ${email}`);
    } else if (email !== null) {
      window.alert("Похоже, это не email. Можно попробовать ещё раз.");
    }
    setStep(0);
    setAnswers([]);
    setResetKey((k) => k + 1);
  };

  const accept = (label) => {
    const next = [...answers, label];
    if (step < QUIZ.length - 1) {
      setAnswers(next);
      setStep((s) => s + 1);
      setResetKey((k) => k + 1);
    } else {
      finish(next);
    }
  };

  return (
    <section id="quiz" className="px-6 md:px-12 py-16">
      {/* Центрированный заголовок */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-3 flex items-center justify-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" />
          <span>Мини-игра</span>
        </h2>
        <p className="text-neutral-500 mb-6">{question.q}</p>
      </div>

      {/* Игровая зона */}
      <div
        ref={areaRef}
        className="relative mx-auto max-w-4xl rounded-3xl border border-neutral-200 bg-white p-10"
        style={{ minHeight: 360 }}
      >
        {/* Круг-цель */}
        <div
          ref={dropRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-neutral-400/70"
        />

        {/* Стикеры */}
        <div className="absolute inset-x-0 bottom-6 flex flex-wrap items-end justify-center gap-6">
          {question.options.map((opt) => (
            <motion.div
              key={`${resetKey}-${opt.label}`}
              drag
              dragConstraints={areaRef}
              dragElastic={0.12}
              dragMomentum={false}
              dragSnapToOrigin
              whileDrag={{ scale: 1.06 }}
              onDragEnd={(evt, info) => {
                const { x, y } = getPointerXY(evt, info);
                const circleRect = dropRef.current?.getBoundingClientRect();
                if (circleRect && pointInCircle(x, y, circleRect)) {
                  dropRef.current.animate(
                    [
                      { transform: "translate(-50%, -50%) scale(1)" },
                      { transform: "translate(-50%, -50%) scale(1.08)" },
                      { transform: "translate(-50%, -50%) scale(1)" },
                    ],
                    { duration: 220, easing: "ease-out" }
                  );
                  accept(opt.label);
                }
              }}
              onClick={() => accept(opt.label)} // на мобилках можно просто нажать
              className="select-none cursor-grab rounded-2xl border border-neutral-300 bg-white/95 px-5 py-3 shadow-sm
                         hover:border-blue-500 hover:shadow-md transition flex items-center gap-2"
            >
              {opt.icon}
              <span className="text-sm font-medium">{opt.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="absolute left-1/2 bottom-2 -translate-x-1/2 text-sm text-neutral-400">
          Перетащите стикер в круг (или просто нажмите)
        </p>
      </div>
    </section>
  );
}
