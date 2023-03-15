import styled from 'styled-components';
import { NavLink as Nav } from 'react-router-dom';

export const ContainerHeader = styled.div`
  margin-right: auto;
  margin-left: auto;
`;
export const Header = styled.header`
  display: flex;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  background-color: #f3f5f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const Navigate = styled.nav`
  display: flex;
  gap: 20px;
`;
export const StyledNavLink = styled(Nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  text-decoration: none;
  font-size: 18px;

  background-color: #0a782e;
  color: #dbc602;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  &.active {
    background-color: #db8402;
    color: #7d02db;
  }
`;
