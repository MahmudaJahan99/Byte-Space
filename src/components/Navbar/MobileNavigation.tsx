import { X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Logo from "../../ui/Logo";
import { navLinksCenter, navLinksRight } from "./navigationLinks";
import styles from "./Navbar.module.css";

interface MobileNavigationProps {
  isMenuOpen: boolean;
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  onExitComplete: () => void;
}

const MobileNavigation = ({
  isMenuOpen,
  onClose,
  closeButtonRef,
  onExitComplete,
}: MobileNavigationProps) => {
  const prefersReducedMotion = useReducedMotion();

  const duration = prefersReducedMotion ? 0.01 : 0.6;

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.button
            key="mobile-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(5px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{
              duration,
              ease: prefersReducedMotion ? "linear" : [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-60 h-dvh w-full cursor-default bg-slate-950/40 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence onExitComplete={onExitComplete}>
        {isMenuOpen && (
          <motion.aside
            key="mobile-drawer"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration,
              ease: prefersReducedMotion ? "linear" : [0.16, 1, 0.3, 1],
            }}
            className="fixed right-0 top-0 z-61 flex h-dvh w-[50vw] flex-col overflow-y-auto border-l border-white/10 bg-electric-blue shadow-2xl"
          >
            {/* Header */}
            <div className="flex h-16 shrink-0 items-center justify-between px-4">
              <Logo imageSrc="/logo.png" onClick={onClose} />

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className={styles.iconButton}
              >
                <X aria-hidden="true" className="h-7 w-7" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-1 flex-col px-6 pb-8 pt-8">
              <div className="flex flex-col gap-6">
                {navLinksCenter.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `${styles.navLink} ${styles.mobileLink} ${isActive ? styles.activeLink : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div
                aria-hidden="true"
                className="my-8 h-px w-full bg-white/20"
              />

              <div className="flex flex-col gap-6">
                {navLinksRight.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={onClose}
                    aria-label={to === "/cart" ? label : undefined}
                    className={`${styles.navLink} ${styles.mobileLink}`}
                  >
                    {Icon && <Icon className={styles.icon} />}
                    {to !== "/cart" && label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
