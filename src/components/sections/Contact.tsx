"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, AtSign, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0533 366 54 46",
    href: "tel:05333665446",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Hemen Yaz",
    href: "https://wa.me/905333665446",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@eksenakademi_bahcesehir",
    href: "https://instagram.com/eksenakademi_bahcesehir",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Bahçeşehir 1. Kısım, Ebalid Sk. Dafra 03 No",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt–Cmt: 09:00 – 21:00",
    href: null,
  },
];

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="iletisim" className="bg-[#F4F7FF] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[#FFB800]"
            >
              İletişim
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-black text-[#1B3A6B] md:text-5xl"
            >
              Hayalindeki okul
              <br />
              <span className="text-[#FFB800]">bir adım uzağında.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-md text-slate-500"
            >
              Ücretsiz ön görüşme için hemen ulaşın. Öğrencimizin mevcut durumunu değerlendirelim ve birlikte bir yol haritası belirleyelim.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:05333665446"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1B3A6B] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#142d55]"
              >
                <Phone className="h-4 w-4" />
                Hemen Ara
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/905333665446"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFB800] px-6 py-3 text-sm font-bold text-[#1B3A6B] transition-all hover:bg-[#FFB800]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp'tan Yaz
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-[#1B3A6B]/30 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B3A6B]">
                      <item.icon className="h-5 w-5 text-[#FFB800]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                      <div className="text-sm font-bold text-[#1B3A6B] group-hover:text-[#FFB800] transition-colors">
                        {item.value}
                      </div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-slate-300 transition-all group-hover:text-[#FFB800] group-hover:translate-x-1" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1B3A6B]">
                      <item.icon className="h-5 w-5 text-[#FFB800]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{item.label}</div>
                      <div className="text-sm font-bold text-[#1B3A6B]">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
