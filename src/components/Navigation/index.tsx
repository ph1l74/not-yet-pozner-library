import { NavLink } from "react-router-dom";
import { CATEGORIES } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const cats = CATEGORIES;
  return (
    <NavigationMenu className="flex flex-wrap items-center text-base justify-center">
      <NavigationMenuList>
        {cats.map((cat, index) => {
          return (
            <NavigationMenuItem key={`${cat.key}_${index}`}>
              <NavLink
                to={`/${cat.key}`}
                className={navigationMenuTriggerStyle()}
              >
                {cat.title}
              </NavLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
