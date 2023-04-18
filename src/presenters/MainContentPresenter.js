import styled from 'styled-components';

const MainContentBoxPresenter = styled.div`
  display: flex;
  padding-top: 4px;
  margin-left: ${props => props.widthProps};
  border: 0;
  width: calc(98vw - ${props => props.widthProps});
  padding-top: 4px;
  justify-content: center;
`;

const MainContentTwoSectionPresenter = styled.div`
  display: flex;
`;

const MainContentInnerBoxPresenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.marginSize};
  flex-grow: ${props => props.growGive};
`;

export {
  MainContentBoxPresenter,
  MainContentInnerBoxPresenter,
  MainContentTwoSectionPresenter,
};
