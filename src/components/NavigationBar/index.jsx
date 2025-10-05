import { NavigationLink } from "../NavigationLink";
import { NavigationMenu } from "../NavigationMenu";
import { NavigationMenuList } from "../NavigationMenuList";
import "./navigation-bar.style.css";

export function NavigationBar({ navigationItems, changeBannerText }) {
  return (
    <NavigationMenu>
      {navigationItems.map((item) => {
        return (
          <NavigationMenuList key={item.id} title={item.title}>
            <NavigationLink onClick={(event) => {
          event.preventDefault();
          changeBannerText(item.name);
        }} href="/">
              {item.name}
            </NavigationLink>
          </NavigationMenuList>
        );
      })}
    </NavigationMenu>
  );
}
