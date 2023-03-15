import styled from 'styled-components';
import { NavLink as Nav } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  display: block;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  img {
    border-radius: 10px;
    width: 100%;
    object-fit: cover;
  }
`;

export const CastReviewsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-left: 20px;
  gap: 20px;
`;

export const NavStyled = styled(Nav)`
  font-size: 24px;
  text-decoration: none;
  color: #000;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
export const ButtonBackTo = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  :hover,
  :focus {
    text-decoration: underline;
  }
`;
