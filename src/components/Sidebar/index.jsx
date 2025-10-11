import { NavigationLink } from "../NavigationLink";
import { NavigationMenuItems } from "../NavigationMenuItems";
import "./sidebar.style.css";

export function Sidebar({
  navigationItems,
  changeBannerText,
  changeMainContent,
}) {
  return (
    <aside className="sidebar-navigation">
      <nav>Menu</nav>
      <ul className="menu-list">
        {navigationItems.map((item) => {
          return (
            <NavigationMenuItems key={item.id} title={item.title}>
              <NavigationLink
                onClick={(event) => {
                  event.preventDefault();
                  changeBannerText(item.name);
                  changeMainContent(item);
                }}
                href="/"
              >
                {item.name}
              </NavigationLink>
            </NavigationMenuItems>
          );
        })}
      </ul>
    </aside>
  );
}
