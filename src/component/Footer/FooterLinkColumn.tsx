import Link from "next/link";
import { FooterLinkGroup } from "./FooterData";

const FooterLinkColumn = ({ title, links }: FooterLinkGroup) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D3E2B]">
        {title}
      </h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#3E4F3C] transition-colors hover:text-[#1D331C]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;

