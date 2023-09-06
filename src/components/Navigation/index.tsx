import { NavLink } from "react-router-dom";
import { CATEGORIES } from "@/constants";

const Navigation = () => {
  const cats = CATEGORIES;
  return (
    <nav className="h-full flex justify-start">
      <ul className="flex h-full gap-4 items-center justify-start font-semibold lowercase">
        {cats.map((cat, index) => {
          return (
            <li key={`${cat.key}_${index}`}>
              <NavLink to={`/${cat.key}`}>{cat.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
