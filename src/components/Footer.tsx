import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Book,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import teolabLogo from "@/assets/teolab-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer link data
  const footerLinks = [
    {
      title: "Sobre Nós",
      links: [
        { label: "Nossa História", href: "#" },
        { label: "Equipe", href: "#" },
        { label: "Missão e Visão", href: "#" },
        { label: "Contato", href: "#" },
      ],
    },
    {
      title: "Links Úteis",
      links: [
        { label: "FAQs", href: "#" },
        { label: "Suporte", href: "#" },
        {
          label: "Newsletter",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#3ca2fa]" />,
      text: "contato@teolab.com",
      href: "mailto:contato@teolab.com",
    },
    {
      icon: <Phone size={18} className="text-[#3ca2fa]" />,
      text: "+55 (11) 9999-9999",
      href: "tel:+5511999999999",
    },
    {
      icon: <MapPin size={18} className="text-[#3ca2fa]" />,
      text: "São Paulo, Brasil",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Youtube size={20} />, label: "Youtube", href: "#" },
    { icon: <Book size={20} />, label: "Blog", href: "#" },
  ];

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img src={teolabLogo} alt="TeoLab" className="w-8 h-8 object-contain" />
              <span className="text-white text-3xl font-bold">TeoLab</span>
            </div>
            <p className="text-sm leading-relaxed">
              Dedicados ao estudo profundo e à proclamação das verdades bíblicas que transformam vidas e edificam a Igreja de Cristo.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#3ca2fa] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-[#3ca2fa] transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {currentYear} TeoLab. Soli Deo Gloria.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="TeoLab" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
};

export default Footer;