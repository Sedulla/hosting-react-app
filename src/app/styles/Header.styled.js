import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #ffffff;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  padding: 18px 104px;
  align-items: center;
`;

const Logo = styled.img`
  width: 136px;
  height: 56px;
  margin-right: 188px;
`;

const MenuContainer = styled.nav`
  display: flex;
  margin-top: 3px;
  margin-right: auto;
  align-self: flex-start;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 48px;
  text-align: center;
  justify-content: end;
`;

const NavMenuItem = styled.li`
  position: relative;
  font-size: 16px;

  & button {
    font-size: inherit;
    border: none;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  /* &:hover {
    -webkit-transition: ease all 0.3s;
    transition: ease all 0.3s;
    opacity: 0.6;
  } */
`;

const DropdownList = styled.ul`
  display: ${(props) => (props.dropdown ? 'block' : 'none')};
  position: absolute;
  left: -47px;
  margin-top: 10px;
  min-width: 10rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  z-index: 9999;
  list-style: none;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);

  /* &::before {
    content: '';
    position: absolute;
    top: -10px;
    transform: translateX(-7px) rotate(-315deg);
    width: 13px;
    height: 13px;
    background: #6b67f5;
    border-radius: 3px;
    z-index: -1;
  } */
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #ffffff;
  background-color: #6b67f5;
  font-size: 14px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;
  border: none;
`;

export {
  HeaderContainer,
  Logo,
  MenuContainer,
  LoginButton,
  NavMenu,
  NavMenuItem,
  DropdownList,
};
