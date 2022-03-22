import { DropdownList } from '../styles/Header.styled';
import { MenuItems } from './MenuItems';

export const Dropdown = ({ submenus, depthLevel, dropdown }) => {
  // depthLevel = depthLevel + 1;
  // const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <>
      <DropdownList dropdown={dropdown}>
        {submenus.map((submenu, index) => (
          <>
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            <hr />
          </>
        ))}
      </DropdownList>
    </>
  );
};
