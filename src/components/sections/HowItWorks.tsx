"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ClipboardList, GraduationCap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Ücretsiz Ön Görüşme",
    desc: "Öğrencinin mevcut durumu, hedefleri ve ihtiyaçları değerlendirilir. Aile ile birlikte yol haritası belirlenir.",
  },
  {
    icon: ClipboardList,
    title: "Seviye Tespiti",
    desc: "Kısa bir değerlendirme sınavıyla öğrencinin güçlü ve zayıf alanları tespit edilir.",
  },
  {
    icon: GraduationCap,
    title: "Bireysel Plan & Kayıt",
    desc: "Öğrenciye özel program hazırlanır. Uygun şube ve ders saatleri belirlenerek kayıt tamamlanır.",
  },
  {
    icon: TrendingUp,
    title: "Sürekli Takip & Gelişim",
    desc: "Haftalık raporlar, deneme analizleri ve veli görüşmeleriyle süreç şeffaf biçimde yürütülür.",
  },
];

export const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="surec" className="bg-[#1B3A6B] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#FFB800]"
          >
            Nasıl Çalışır?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black text-white md:text-5xl"
          >
            4 adımda{" "}
            <span className="text-[#FFB800]">başarıya.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="flex flex-col items-start"
            >
              <div className="relative mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <step.icon className="h-7 w-7 text-[#FFB800]" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFB800] text-xs font-black text-[#1B3A6B]">
                  {i + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
