import styled from 'styled-components';
import { NavLink as Nav } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const StyleItemLink = styled(Nav)`
  text-decoration: none;
`;

export const Item = styled.li`
  padding: 5px;
  border-radius: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: calc((100% / 2) - 16px);
  }
  @media screen and (min-width: 1080px) {
    width: calc((100% / 3) - 18px);
  }
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,
      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;
    transform: scale(1.03);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ImgSize = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  padding-top: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h3`
  font-size: 24px;
  color: #000;
`;
export const InfoForMovie = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700;
`;
