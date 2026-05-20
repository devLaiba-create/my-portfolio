import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "portfoliored"
  );
  const [activeLink, setActiveLink] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "portfoliored" : "dark"));
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 px-6 shadow-md transition-colors duration-300">
      <div className="flex-1">
        <a href="#home" className="text-xl font-bold text-primary">
          Laiba.dev
        </a>
      </div>

      <div className="hidden gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setActiveLink(link.href)}
            className={`transition ${
              activeLink === link.href
                ? "font-semibold text-primary"
                : "text-base-content hover:text-primary"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex-none">
        <button
          type="button"
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label={`Switch to ${theme === "dark" ? "red" : "dark"} mode`}
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}
