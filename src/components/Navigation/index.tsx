import { NavLink } from "react-router-dom";
import { CATEGORIES } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const cats = CATEGORIES;
  return (
    <NavigationMenu>
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
