"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const programs = [
  {
    grade: "5. Sınıf",
    title: "LGS'ye Hazırlık Temeli",
    desc: "Ortaokul geçişiyle birlikte sağlam temel oluşturma. Matematik ve Türkçe odaklı çalışmalar.",
    subjects: ["Matematik", "Türkçe", "Fen Bilimleri"],
    badge: "Temel",
    badgeBg: "bg-blue-100 text-blue-700",
    accent: "#1B3A6B",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
  },
  {
    grade: "6. & 7. Sınıf",
    title: "Gelişim & Sıçrama Paketi",
    desc: "LGS puanını belirleyen kritik yıllar. Konu pekiştirme, deneme analizleri ve bireysel gelişim planı.",
    subjects: ["Matematik", "Türkçe", "Fen"],
    badge: "Popüler",
    badgeBg: "bg-[#FFB800]/20 text-[#B87800]",
    accent: "#FFB800",
    img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80",
  },
  {
    grade: "8. Sınıf",
    title: "LGS Yoğun Hazırlık",
    desc: "Sınav odaklı yoğun program. Tüm konular tarama, hızlı tekrar ve haftalık deneme kulübü.",
    subjects: ["Türkçe", "Matematik", "Fen"],
    badge: "Yoğun",
    badgeBg: "bg-red-100 text-red-700",
    accent: "#1B3A6B",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
  },
];

export const Programs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programlar" className="bg-[#F4F7FF] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#FFB800]"
          >
            Programlarımız
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black text-[#1B3A6B] md:text-5xl"
          >
            Her sınıfa özel{" "}
            <span className="text-[#FFB800]">program.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.grade}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-[#1B3A6B]/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.img}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${program.badgeBg}`}>
                    {program.badge}
                  </span>
                  <span className="text-base font-black text-white">{program.grade}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-[#1B3A6B]">{program.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">{program.desc}</p>

                <ul className="mb-6 flex flex-1 flex-col gap-2">
                  {program.subjects.map((subject) => (
                    <li key={subject} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#FFB800]" />
                      {subject}
                    </li>
                  ))}
                </ul>

                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1B3A6B] transition-all hover:text-[#FFB800] hover:gap-3"
                >
                  Detayları Öğren <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
