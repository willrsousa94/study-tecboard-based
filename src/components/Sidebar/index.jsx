import { NavigationLink } from "../NavigationLink";
import { NavigationMenuItems } from "../NavigationMenuItems";
import "./sidebar.style.css";

export function Sidebar({ navigationItems, changeMainContent, sidebarRef }) {
  return (
    <aside className="sidebar-navigation" ref={sidebarRef}>
      <nav>Menu</nav>
      <ul className="menu-list">
        {navigationItems.map((item) => {
          return (
            <NavigationMenuItems key={item.id} name={item.name} title={item.name}>
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
