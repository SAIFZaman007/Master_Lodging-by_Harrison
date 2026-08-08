import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

import { useSiteInfo } from "@/hooks/useProperties";
import { formatPhoneDisplay, telHref } from "@/lib/format";
import { EASE } from "@/lib/motion";

const NAV_LINKS = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/events", label: "Events" },
  { to: "/local-info", label: "Local Info" },
];

/**
 * The header was previously `sticky`, which reserves its own 80px band in the
 * document flow — so it sat *above* the hero on the cream page background, and
 * the cream-on-cream nav text was invisible. It's now `fixed` so it genuinely
 * overlays the hero, and pages that start with a full-bleed hero simply run
 * underneath it.
 *
 * Legibility over arbitrary backgrounds is handled two ways:
 *  - At the top of the page: a soft top-down scrim behind the bar. It's invisible
 *    against dark hero imagery but guarantees contrast even if a hero is bright.
 *  - Once scrolled: the bar transitions to a frosted forest-green panel with a
 *    hairline border, so it stays readable over the cream and white sections below.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: siteInfo } = useSiteInfo();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 32);
  });

  // Lock body scroll while the mobile drawer is open. (The drawer closes itself
  // from each link's onClick rather than from a pathname effect — setting state
  // inside an effect just to react to navigation causes a cascading re-render.)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const phone = siteInfo?.phone ?? "+16024788888";

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Top-of-page scrim: fades out as the solid bar fades in. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 via-black/25 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Frosted panel: only materialises after scroll. */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b transition-all duration-500 ${
          scrolled
            ? "border-brand-cream/10 bg-brand-forest-dark/80 backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-0"
        }`}
      />

      <div className="container-page relative">
        <div
          className={`flex items-center justify-between transition-[height] duration-500 ${
            scrolled ? "h-[68px]" : "h-[88px]"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-brand-gold/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src="/assets/logo/logo.png"
                alt=""
                className="relative h-10 w-10 rounded-full ring-1 ring-brand-gold/30"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] tracking-tight text-brand-cream drop-shadow-sm">
                8888 Masters
              </span>
              <span className="mt-1 text-[9px] tracking-[0.26em] text-brand-gold/90 uppercase">
                The Augusta Operator
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-cream/80 hover:text-brand-cream"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 drop-shadow-sm">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-brand-cream/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={telHref(phone)}
              className="flex items-center gap-2 text-sm text-brand-cream/80 transition-colors hover:text-brand-cream"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="drop-shadow-sm">{formatPhoneDisplay(phone)}</span>
            </a>
            <Link
              to="/inquire"
              className="group relative overflow-hidden rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-forest-dark transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Request availability
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-brand-gold-light transition-transform duration-400 group-hover:translate-x-0" />
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-brand-cream lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative border-t border-brand-cream/10 bg-brand-forest-dark/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-brand-cream/5 py-3.5 font-display text-xl text-brand-cream"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <a href={telHref(phone)} className="text-sm text-brand-cream/70">
                  {formatPhoneDisplay(phone)}
                </a>
                <Link
                  to="/inquire"
                  onClick={() => setMenuOpen(false)}
                  className="w-fit rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-forest-dark"
                >
                  Request availability
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}