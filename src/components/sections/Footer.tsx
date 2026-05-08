"use client";

import Image from "next/image";
import { AtSign, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#1B3A6B] py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="Eksen Akademi Logo" width={40} height={40} className="object-cover" />
              </div>
              <div>
                <div className="text-base font-black text-white leading-none">EKSEN</div>
                <div className="text-[10px] font-semibold tracking-widest text-[#FFB800]">AKADEMİ</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              LGS'ye özel butik kurs anlayışıyla Bahçeşehir'in en tercih edilen eğitim merkezi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">Hızlı Linkler</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Hakkımızda", href: "#hakkimizda" },
                { label: "Programlar", href: "#programlar" },
                { label: "Nasıl Çalışır?", href: "#surec" },
                { label: "Başarılar", href: "#basarilar" },
                { label: "İletişim", href: "#iletisim" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#FFB800]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white/40">İletişim</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" />
                0533 366 54 46
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" />
                Bahçeşehir 1. Kısım, Ebalid Sk. Dafra 03 No
              </li>
              <li className="flex items-start gap-2 text-sm text-white/50">
                <AtSign className="mt-0.5 h-4 w-4 shrink-0 text-[#FFB800]" />
                <a
                  href="https://instagram.com/eksenakademi_bahcesehir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FFB800]"
                >
                  @eksenakademi_bahcesehir
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">© 2026 Eksen Akademi. Tüm hakları saklıdır.</p>
          <a
            href="https://www.pusulart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 transition-colors hover:text-[#FFB800]"
          >
            Tasarım & Geliştirme · <span className="font-semibold">Pusulart Creative</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
