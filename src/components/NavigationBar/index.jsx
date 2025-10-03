import { NavigationLink } from "../NavigationLink";
import { NavigationMenu } from "../NavigationMenu";
import { NavigationMenuList } from "../NavigationMenuList";
import "./navigation-bar.style.css";

export function NavigationBar() {
  const navigationItems = [
    {
      id: 1,
      name: "Hollow Knight: Silksong",
      title: "silksong",
    },
    {
      id: 2,
      name: "Clair Obscur - Expedition 33",
      title: "clair-obscur",
    },
    {
      id: 3,
      name: "Hades 2",
      title: "hades-2",
    },
  ];

  return (
    <NavigationMenu>
      {navigationItems.map((item) => {
        return (
          <NavigationMenuList key={item.id} title={item.title}>
            <NavigationLink href="/">{item.name}</NavigationLink>
          </NavigationMenuList>
        );
      })}
    </NavigationMenu>
  );
}
