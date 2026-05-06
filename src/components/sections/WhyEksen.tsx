"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Award, BookOpen, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Küçük Sınıflar",
    desc: "Maksimum 8-10 kişilik sınıflarla her öğrenciye bireysel ilgi. Kalabalıkta kaybolmayan bir eğitim.",
  },
  {
    icon: Target,
    title: "LGS Odaklı Müfredat",
    desc: "Yalnızca LGS'ye özel hazırlanan içerikler. Gereksiz konu yok, hedef odaklı öğrenme var.",
  },
  {
    icon: Award,
    title: "Bireysel Gelişim Takibi",
    desc: "Her öğrencinin güçlü ve zayıf yönleri analiz edilerek kişisel gelişim planı oluşturulur.",
  },
  {
    icon: BookOpen,
    title: "Ücretsiz Etüt",
    desc: "Ders saatleri dışında ücretsiz etüt imkânı. Sorularını çözmeden eve gitme.",
  },
  {
    icon: TrendingUp,
    title: "Deneme Sınavı Analizi",
    desc: "Türkiye geneli denemeler ve detaylı karne analiziyle sürekli gelişim takibi.",
  },
  {
    icon: Clock,
    title: "Esnek Program",
    desc: "Hafta içi ve hafta sonu seçenekleriyle aile programına uygun ders saatleri.",
  },
];

export const WhyEksen = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="hakkimizda" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#FFB800]"
            >
              Neden Eksen?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-black text-[#1B3A6B] md:text-5xl"
            >
              Butik kurs,
              <br />
              <span className="text-[#FFB800]">büyük fark.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-slate-500 md:text-right"
          >
            Eksen Akademi'de öğrenci sayısı değil, öğrenci başarısı önceliğimizdir. Her öğrenci burada fark edilir.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all hover:border-[#1B3A6B]/20 hover:shadow-lg hover:shadow-[#1B3A6B]/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1B3A6B]">
                <feature.icon className="h-5 w-5 text-[#FFB800]" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#1B3A6B]">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
