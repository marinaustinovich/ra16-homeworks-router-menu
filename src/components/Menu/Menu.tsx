import { NavLink } from "react-router-dom";

import "./menu.css";

export const Menu = () => {
  const activeClassName = "menu__item menu__item-active";

  return (
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? activeClassName : "menu__item"
        }
        end
      >
        Главная
      </NavLink>
      <NavLink
        to="/drift"
        className={({ isActive }) =>
          isActive ? activeClassName : "menu__item"
        }
        end
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        to="/timeattack"
        className={({ isActive }) =>
          isActive ? activeClassName : "menu__item"
        }
        end
      >
        Time Attack
      </NavLink>
      <NavLink
        to="/forza"
        className={({ isActive }) =>
          isActive ? activeClassName : "menu__item"
        }
        end
      >
        Forza Karting
      </NavLink>
    </nav>
  );
};
