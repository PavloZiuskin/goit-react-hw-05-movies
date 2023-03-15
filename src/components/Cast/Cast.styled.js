import styled from 'styled-components';
export const Castlist = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  width: calc((100% / 3) - 12px);
  @media screen and (min-width: 768px) {
    width: calc((100% / 10) - 12px);
  }
`;

export const CintainetCastImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
