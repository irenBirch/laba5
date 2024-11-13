// Статичний масив з даними меню
const menuData = [
  { title: "Головна", link: "home.html" },
  { title: "Про нас", link: "about.html" },
  {
    title: "Послуги",
    submenu: [
      { title: "Курси", link: "courses.html" },
      { title: "Консультації", link: "consulting.html" },
    ],
  },
  { title: "Контакти", link: "contact.html" },
];

// створення меню
function createMenu(menuItems) {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu";

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = item.title;

    if (item.link) {
      menuItem.addEventListener("click", () => loadPage(item.link));
    }

    if (item.submenu) {
      const submenuContainer = document.createElement("div");
      submenuContainer.className = "submenu";

      item.submenu.forEach((subItem) => {
        const submenuItem = document.createElement("div");
        submenuItem.className = "submenu-item";
        submenuItem.textContent = subItem.title;
        submenuItem.addEventListener("click", () => loadPage(subItem.link));
        submenuContainer.appendChild(submenuItem);
      });

      menuItem.appendChild(submenuContainer);
    }

    menuContainer.appendChild(menuItem);
  });

  document.getElementById("menu").appendChild(menuContainer);
}

function loadPage(link) {
  document.getElementById(
    "content"
  ).textContent = `Завантажується сторінка: ${link}`;
}

createMenu(menuData);
