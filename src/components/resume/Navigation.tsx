
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Resume", active: location.pathname === "/" },
    { path: "/portfolio", label: "Portfolio", active: location.pathname === "/portfolio" },
    { path: "/contact", label: "Contact", active: location.pathname === "/contact" },
  ];

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex gap-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              item.active
                ? "bg-white text-black"
                : "text-gray-300 hover:text-white hover:bg-gray-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
