"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Brush, Frame, Sparkles, ArrowRight } from "lucide-react";

const artCourses = [
  {
    icon: Palette,
    title: "Resim & Suluboya",
    desc: "Temel çizim tekniklerinden suluboya ve akrilik boyaya uzanan kapsamlı resim eğitimi.",
  },
  {
    icon: Brush,
    title: "Desen & Karakalem",
    desc: "Gözlem ve teknik çizim becerileriyle sanatsal algıyı güçlendiren desen dersleri.",
  },
  {
    icon: Frame,
    title: "Portfolyo Hazırlığı",
    desc: "Güzel sanatlar fakülteleri ve sanat liselerine özel portfolyo hazırlık programı.",
  },
  {
    icon: Sparkles,
    title: "Yaratıcı Atölye",
    desc: "Özgün üretimi teşvik eden, farklı malzeme ve tekniklerin keşfedildiği atölye çalışmaları.",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
  "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&q=80",
  "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
];

export const ArtClass = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sanat" className="bg-[#FFF8EE] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Header */}
        <div ref={ref} className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#FFB800]"
            >
              <Palette className="h-4 w-4" />
              Yeni · Sanat Sınıfı
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black text-[#1B3A6B] md:text-5xl"
            >
              Akademik başarının
              <br />
              <span className="text-[#FFB800]">yanında sanat.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-slate-500 md:text-right"
          >
            Eksen Akademi'de yalnızca sınav değil, bütünsel gelişim önemsenir. Sanat sınıfımızla yaratıcılığı keşfet.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Left: gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-52" : "h-36"}`}
              >
                <img
                  src={src}
                  alt={`Sanat atölyesi ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: course cards */}
          <div className="flex flex-col gap-4">
            {artCourses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 rounded-2xl border border-orange-100 bg-white p-5 transition-all hover:shadow-md hover:border-[#FFB800]/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFB800]/10">
                  <course.icon className="h-5 w-5 text-[#FFB800]" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-[#1B3A6B]">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{course.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-2 rounded-2xl bg-[#1B3A6B] p-6 text-white"
            >
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FFB800]">Sanat Sınıfı</div>
              <div className="mb-3 text-lg font-black">Hem LGS'ye hazırlan, hem sanat yap.</div>
              <p className="mb-5 text-sm text-white/60">
                Haftada 1-2 gün, küçük gruplarla yürütülen sanat atölyemize şimdi kayıt yaptır.
              </p>
              <a
                href="#iletisim"
                className="group inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-5 py-2.5 text-sm font-bold text-[#1B3A6B] transition-all hover:bg-yellow-400"
              >
                Bilgi Al
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
