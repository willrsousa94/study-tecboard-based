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
            <NavigationMenuItems key={item.id} name={item.name}>
              <NavigationLink
                onClick={(event) => {
                  event.preventDefault();
                  changeMainContent(item);
                }}
                href="/"
              >
                {item.title}
              </NavigationLink>
            </NavigationMenuItems>
          );
        })}
      </ul>
    </aside>
  );
}
