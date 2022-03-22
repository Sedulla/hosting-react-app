import {
  LoginButton,
  HeaderContainer,
  Logo,
  MenuContainer,
  NavMenu,
} from '../styles/Header.styled';
import { Link } from 'react-router-dom';

import { MenuItems } from './MenuItems';
import { menuItems } from '../utils/menuItems';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo
            src={
              'https://firebasestorage.googleapis.com/v0/b/rendition-prod.appspot.com/o/8f100f04-a19b-4211-81d0-1aef58197d76.svg?alt=media&token=43de7868-7c01-489d-9bb7-49103ec497df'
            }
          />
        </Link>

        {/* Navigation Menu Component */}
        <MenuContainer>
          <NavMenu>
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </NavMenu>
        </MenuContainer>

        <LoginButton>Login</LoginButton>
      </HeaderContainer>
    </>
  );
};
