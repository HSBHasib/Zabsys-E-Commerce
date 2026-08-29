import { IconType } from "react-icons";
import { FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa6";
import { GiHummingbird } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";
import {  SiVisa, SiMastercard } from "react-icons/si";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: IconType;
}

export interface PaymentMethod {
  name: string;
  icon: IconType;
}

export const FOOTER_CONTACT = {
  phone: "+8801616891871",
  hours: "Available: 8:00 AM – 10:00 PM",
  email: "hasibhsb19@gmail.com",
};

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "INFORMATION",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Delivery Info", href: "/delivery-info" },
    ],
  },
  {
    title: "CUSTOMER SERVICE",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Order Tracking", href: "/tracking" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

// React-Icons list for Socials
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/hasibur-rahman19",
    icon: FaLinkedinIn,
  },
  {
    name: "Email",
    href: `mailto:${FOOTER_CONTACT.email}`,
    icon: IoMailOutline,
  },
  {
    name: "GitHub",
    href: "https://github.com/HSBHasib",
    icon: FaGithub,
  },
  {
    name: "Portfolio",
    href: "https://hasib-portfolio-silk.vercel.app",
    icon: FaGlobe,
  },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { name: "bKash", icon: GiHummingbird },
  { name: "Nagad", icon: GiHummingbird },
  { name: "Visa", icon: SiVisa },
  { name: "Mastercard", icon: SiMastercard },
];