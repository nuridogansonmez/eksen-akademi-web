"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ value, suffix = "", prefix = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 50, stiffness: 100 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, motionVal, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { value: 98, suffix: "%", label: "LGS'ye Giriş Oranı", desc: "Sınava giren öğrencilerimizin büyük çoğunluğu tercih ettiği okula yerleşti." },
  { value: 8, suffix: "", prefix: "Maks. ", label: "Kişilik Sınıflar", desc: "Kalabalık değil, kaliteli. Her öğrenci görülür, her soru cevaplanır." },
  { value: 45, suffix: "+", label: "Türkiye Geneli Deneme", desc: "Yıl boyunca farklı yayınevlerinden kapsamlı deneme sınavı imkânı." },
  { value: 500, suffix: "+", label: "Mezun Öğrenci", desc: "Bugüne kadar hayallerindeki okullara yerleşen başarılı öğrenci sayısı." },
];

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="basarilar" className="bg-[#FFB800] py-20">
      <div ref={ref} className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-bold uppercase tracking-widest text-[#1B3A6B]/60">
            Rakamlarla Eksen
          </span>
          <h2 className="text-4xl font-black text-[#1B3A6B] md:text-5xl">
            Sonuçlar konuşuyor.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-1 text-5xl font-black text-[#1B3A6B] md:text-6xl">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="mb-2 text-lg font-bold text-[#1B3A6B]/80">{stat.label}</div>
              <p className="text-sm leading-relaxed text-[#1B3A6B]/60">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
