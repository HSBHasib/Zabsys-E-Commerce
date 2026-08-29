import Link from "next/link";
import { FiPhone, FiClock, FiMail } from "react-icons/fi";
import {
  FOOTER_CONTACT,
  FOOTER_LINK_GROUPS,
  SOCIAL_LINKS,
  PAYMENT_METHODS,
} from "./FooterData";
import FooterLinkColumn from "./FooterLinkColumn";
import IconButton from "./IconButton";
import BrandLogo from "../Navbar/BrandLogo";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D1D8BE] text-[#2D3E2B]">
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand & Contact Info */}
          <div className="flex flex-col gap-4">
            <BrandLogo />

            <p className="text-xs leading-relaxed text-[#4B5E49]">
              Fresh, responsibly sourced grocery delivered same-day across the
              city.
            </p>

            {/* Contact Details */}
            <div className="mt-2 flex flex-col gap-2.5 text-xs text-[#2D3E2B]">
              <Link
                href={`tel:${FOOTER_CONTACT.phone}`}
                className="flex items-center gap-2.5 transition-colors hover:text-[#1D331C]"
              >
                <FiPhone className="h-4 w-4 text-[#4B5E49]" />
                <span className="font-medium">{FOOTER_CONTACT.phone}</span>
              </Link>
              <div className="flex items-center gap-2.5">
                <FiClock className="h-4 w-4 text-[#4B5E49]" />
                <span>{FOOTER_CONTACT.hours}</span>
              </div>
              <Link
                href={`mailto:${FOOTER_CONTACT.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-[#1D331C]"
              >
                <FiMail className="h-4 w-4 text-[#4B5E49]" />
                <span>{FOOTER_CONTACT.email}</span>
              </Link>
            </div>
          </div>

          {/* Information & Customer Service */}
          {FOOTER_LINK_GROUPS.map((group) => (
            <FooterLinkColumn
              key={group.title}
              title={group.title}
              links={group.links}
            />
          ))}

          {/* Follow Us & Payment Method Icons */}
          <div className="flex flex-col gap-6">
            {/* Follow Us */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3E2B]">
                FOLLOW US
              </h4>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <IconButton
                      key={social.name}
                      ariaLabel={social.name}
                      href={social.href}
                    >
                      <IconComponent className="h-4 w-4" />
                    </IconButton>
                  );
                })}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3E2B]">
                WE ACCEPT
              </h4>
              <div className="flex flex-wrap items-center gap-2">
                {PAYMENT_METHODS.map((method) => {
                  const PaymentIcon = method.icon;
                  return (
                    <span
                      key={method.name}
                      title={method.name}
                      className="flex h-9 w-12 items-center justify-center rounded-lg bg-[#C5CEBA] text-xl text-[#1D331C] transition-transform hover:scale-105"
                    >
                      <PaymentIcon />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/*Bottom Segment - Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#C5CEBA] py-6 text-xs text-[#5C6E5A] sm:flex-row">
          <p>© 2026 Verda Grocers · All rights reserved.</p>
          <p className="font-medium">Same-day delivery · Free over 1500 Tk</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
