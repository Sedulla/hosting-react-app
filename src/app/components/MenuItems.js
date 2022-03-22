import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import { NavMenuItem } from '../styles/Header.styled';
import { Dropdown } from './Dropdown';
import { MdKeyboardArrowDown as ArrowDownIcon } from 'react-icons/md';

export const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <>
      <NavMenuItem
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.submenu ? (
          <>
            <button
              type="button"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}

              {depthLevel > 0 ? (
                <span>&raquo;</span> // right angle quote
              ) : (
                <ArrowDownIcon
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    width: '24px',
                    height: '24px',
                  }}
                />
              )}
            </button>
            <Dropdown // nav submenu
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </>
        ) : (
          <Link to="/#" class="link">
            {items.title}
          </Link>
        )}
      </NavMenuItem>
    </>
  );
};
