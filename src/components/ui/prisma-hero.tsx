"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Menu } from "lucide-react";
import { useRef, useState } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({ text, className = "", style }: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block"
          style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

const navItems = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Programlar", href: "#programlar" },
  { label: "Sanat Sınıfı", href: "#sanat" },
  { label: "Süreç", href: "#surec" },
  { label: "Başarılar", href: "#basarilar" },
  { label: "İletişim", href: "#iletisim" },
];

export const PrismaHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#1B3A6B]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#FFB800]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-400/20 blur-[100px]" />

      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero image right side */}
      <div className="absolute bottom-0 right-0 hidden h-full w-[45%] lg:block">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&q=80"
          alt="Öğrenci"
          className="h-full w-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A6B] via-[#1B3A6B]/60 to-transparent" />
      </div>

      {/* Navbar */}
      <nav className="relative z-30 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl shadow-lg">
              <Image src="/logo.png" alt="Eksen Akademi Logo" width={44} height={44} className="object-cover" />
            </div>
            <div>
              <div className="text-base font-black text-white leading-none">EKSEN</div>
              <div className="text-[10px] font-semibold tracking-widest text-[#FFB800]">AKADEMİ</div>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-8 md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-[#FFB800]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <a
              href="#iletisim"
              className="hidden rounded-full bg-[#FFB800] px-5 py-2.5 text-sm font-bold text-[#1B3A6B] shadow-lg transition-all hover:bg-yellow-400 md:block"
            >
              Ücretsiz Görüşme
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/20 p-2 text-white md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-white/80 hover:text-[#FFB800]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#iletisim"
              className="mt-3 block rounded-full bg-[#FFB800] px-5 py-2.5 text-center text-sm font-bold text-[#1B3A6B]"
            >
              Ücretsiz Görüşme
            </a>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pb-20 pt-12 md:px-10 md:pt-16 lg:min-h-[calc(100vh-88px)]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 px-4 py-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFB800]" />
          <span className="text-xs font-semibold text-[#FFB800]">2025–2026 Kayıtları Açık · Bahçeşehir</span>
        </motion.div>

        <h1 className="mb-6 font-black leading-[1.05] tracking-tight text-white">
          <WordsPullUp text="Başarıya" className="block text-[clamp(2.5rem,8vw,5.5rem)]" />
          <WordsPullUp
            text="Giden Yol"
            className="block text-[clamp(2.5rem,8vw,5.5rem)] text-[#FFB800]"
          />
          <WordsPullUp text="Eksen'den Geçiyor." className="block text-[clamp(2.5rem,8vw,5.5rem)]" />
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-lg text-base text-white/70 sm:text-lg"
        >
          LGS'ye özel butik kurs anlayışıyla, küçük sınıflar ve bireysel ilgiyle
          her öğrencinin potansiyelini ortaya çıkarıyoruz.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#iletisim"
            className="group inline-flex items-center gap-2 rounded-full bg-[#FFB800] px-7 py-3.5 text-sm font-bold text-[#1B3A6B] shadow-xl shadow-[#FFB800]/30 transition-all hover:bg-yellow-400 hover:shadow-[#FFB800]/50"
          >
            Ücretsiz Görüşme Ayarla
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#programlar"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            Programları Gör
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap gap-8 border-t border-white/10 pt-8"
        >
          {[
            { value: "%98", label: "LGS Giriş Oranı" },
            { value: "8 Kişi", label: "Maks. Sınıf" },
            { value: "45+", label: "Deneme Sınavı" },
            { value: "500+", label: "Mezun Öğrenci" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-[#FFB800]">{s.value}</div>
              <div className="text-xs text-white/50">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
