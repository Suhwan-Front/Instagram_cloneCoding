import styled, {keyframes} from 'styled-components';
import theme from '../styles/theme';

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const LeftNavPresenter = styled.div`
  display: flex;
  position: fixed;
  background: #fff;
  flex-direction: row;
  height: 100%;
  border-right: 1px solid #d3d3d3;
  justify-content: center;
  align-items: center;
  width: 17rem;
  @media screen and (max-width: ${theme.sizes.PC}px) {
    width: 5rem;
  }
  @media screen and (max-width: ${theme.sizes.tablet}px) {
    flex-direction: column;
    height: 4rem;
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
  }
`;

const NavInnerPresenter = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-content: stretch;
`;

const TitleFontPresenter = styled.img`
  animation-name: ${fadeIn};
  @media screen and (max-width: ${theme.sizes.PC}px) {
    animation-name: ${fadeOut};
  }
`;

const NavItemPresenter = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 1.25rem;
  padding-right: 0.5rem;
  align-items: center;
  font-size: 1.3rem;
  margin: 0.5rem 0 0.5rem;
  &:hover {
    background-color: #eeeeee;
  }
  @media screen and (max-width: ${theme.sizes.PC}px) {
    justify-content: center;
  }
`;

const NavBottomBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

export {
  LeftNavPresenter,
  NavInnerPresenter,
  TitleFontPresenter,
  NavItemPresenter,
  NavBottomBox,
};
