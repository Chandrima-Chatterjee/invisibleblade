import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

import logo from "../../assets/images/invisibleblade.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/blog", label: "Blog" },
      { to: "/about", label: "About" },
    ],
    []
  );

  return (
    <header className="navWrap">
      <div className="container navInner">
        <NavLink to="/" className="brand">
          <img className="brandLogo" src={logo} alt="Invisible Blade" />
          <div className="brandText">
            <div className="brandName">Invisible Blade</div>
            <div className="brandSub">Studio • Music • Stories</div>
          </div>
        </NavLink>

        <nav className="navLinks">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "navA navA--active" : "navA"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="burger"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawerBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="drawer"
              initial={{ y: -16, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="drawerTop">
                <div className="drawerTitle">Menu</div>
                <button
                  className="drawerClose"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="drawerLinks">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className={({ isActive }) =>
                      isActive
                        ? "drawerA drawerA--active"
                        : "drawerA"
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>

              <div className="drawerNote">
                <div className="pill pill--accent">
                  Cinematic
                </div>
                <div className="pill">
                  No WordPress branding
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="dividerGlow" />
    </header>
  );
}