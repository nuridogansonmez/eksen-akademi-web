"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayşe K.",
    role: "8. Sınıf Öğrenci Velisi",
    text: "Oğlum başta matematik dersinden korkuyordu. Eksen'de bireysel ilgiyle 3 ayda büyük bir değişim yaşandı. LGS'de istediği okulu kazandı.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    school: "→ İTÜ Geliştirme Vakfı Okulu",
  },
  {
    name: "Mehmet D.",
    role: "7. Sınıf Öğrenci Velisi",
    text: "Büyük kurslardan memnun değildik. Eksen'de sınıfın küçük olması sayesinde öğretmen çocuğumuzla birebir ilgilenebiliyor. Fark çok büyük.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    school: "→ 2 sınıf net artışı",
  },
  {
    name: "Fatma Y.",
    role: "6. Sınıf Öğrenci Velisi",
    text: "Deneme sınavı analizleri çok faydalı. Her sınav sonrası öğretmenlerle detaylı görüşebiliyoruz. Süreç tamamen şeffaf yürüyor.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    school: "→ Sürekli gelişen karne",
  },
  {
    name: "Kemal S.",
    role: "8. Sınıf Mezun Öğrenci",
    text: "Eksen'de geçirdiğim son yıl hayatımı değiştirdi. Hocalarım sadece ders anlatmıyor, motive de ediyordu. Teşekkürler Eksen!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    school: "→ Fenerbahçe Anadolu Lisesi",
  },
  {
    name: "Zeynep A.",
    role: "5. Sınıf Öğrenci Velisi",
    text: "5. sınıfta erken başlamanın ne kadar doğru bir karar olduğunu şimdi anlıyoruz. Çocuğumuz hem öğreniyor hem de kursu seviyor.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    school: "→ Sağlam LGS temeli",
  },
  {
    name: "Hasan B.",
    role: "8. Sınıf Öğrenci Velisi",
    text: "Ücretsiz etüt hizmeti sayesinde kızım soru işareti kalmadan çıkıyor kurstan. Bu detay gerçekten çok büyük bir fark yaratıyor.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    school: "→ İstanbul Lisesi kazandı",
  },
];

export const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#FFB800]"
          >
            Öğrenci & Veli Yorumları
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black text-[#1B3A6B] md:text-5xl"
          >
            Aileler ne diyor?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:shadow-md"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-600">"{t.text}"</p>

              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold text-[#1B3A6B]">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
                <div className="mt-3 text-xs font-bold text-[#FFB800]">{t.school}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
