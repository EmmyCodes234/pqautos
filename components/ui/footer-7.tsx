import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Services",
    links: [
      { name: "Mechanical Repairs", href: "/services" },
      { name: "Tire Services", href: "/services" },
      { name: "Car Sales", href: "/sales" },
      { name: "Emissions Testing", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/" },
      { name: "Our Team", href: "/" },
      { name: "Gallery", href: "/gallery" },
      { name: "Careers", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "/contact" },
      { name: "Sales", href: "/sales" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/contact" },
    ],
  },
];

// Create icon components without className to avoid TypeScript errors
const InstagramIcon = () => <FaInstagram size={20} />;
const FacebookIcon = () => <FaFacebook size={20} />;
const TwitterIcon = () => <FaTwitter size={20} />;
const LinkedinIcon = () => <FaLinkedin size={20} />;

const defaultSocialLinks = [
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <TwitterIcon />, href: "#", label: "Twitter" },
  { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    src: "/pqlo.png",
    alt: "PQ Autos Logo",
    title: "PQ Autos",
  },
  sections = defaultSections,
  description = "Your one-stop shop for all automotive needs. From expert repairs to quality car sales, we have you covered.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 PQ Autos. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 bg-light border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-12 w-12"
                />
              </a>
              <h2 className="text-xl font-display font-bold text-dark-text">Prestige Quality<br /><span className="text-primary">Automotive LLC</span></h2>
            </div>
            <p className="max-w-[90%] sm:max-w-[70%] text-sm text-light-text">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-light-text">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary transition-colors">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold font-display text-lg text-dark-text">{section.title}</h3>
                <ul className="space-y-3 text-sm text-light-text">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-300 py-8 text-xs font-medium text-gray-500 md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary transition-colors">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};