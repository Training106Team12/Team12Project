import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingMenu = ({
  cartCount = 0,
  favoriteCount = 0,
  isDarkMode = false,
  onToggleTheme,
  cartPath = "/Cart",
  favoritePath = "/Wishlist",
  loginPath = "/Login",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleOutsideClick
      );
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const goTo = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const actions = [
    {
      label: "Shop Cart  ",
      icon: "bi-cart3",
      color: "#4f7cff",
      count: cartCount,
      onClick: () => goTo(cartPath),
    },
    {
      label: "Favorite",
      icon: "bi-heart",
      color: "#f04472",
      count: favoriteCount,
      onClick: () => goTo(favoritePath),
    },
   
    {
      label: " up ",
      icon: "bi-arrow-up",
      color: "#16a085",
      onClick: scrollToTop,
    },
    {
      label: "Login ",
      icon: "bi-person",
      color: "#f59e0b",
      onClick: () => goTo(loginPath),
    },
  ];

  return (
    <>
      

      <div
        ref={menuRef}
        className={`fm-root ${isOpen ? "is-open" : ""}`}
      >
        <button
          type="button"
          className={`fm-main ${isOpen ? "is-open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح قائمة الاختصارات"}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <i
            className="bi bi-plus-lg fm-main-icon"
            aria-hidden="true"
          />
        </button>

        <div className="fm-items">
          {actions.map((action) => (
            <button
              type="button"
              key={action.label}
              className="fm-item"
              onClick={action.onClick}
              tabIndex={isOpen ? 0 : -1}
              aria-label={action.label}
            >
              <span className="fm-label">
                {action.label}
              </span>

              <span
                className="fm-circle"
                style={{ "--item-color": action.color }}
              >
                <i
                  className={`bi ${action.icon}`}
                  aria-hidden="true"
                />

                {action.count > 0 && (
                  <span className="fm-count">
                    {action.count > 99 ? "99+" : action.count}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;