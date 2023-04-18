import styled from 'styled-components';

const BottomBarPresenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  div {
    &:first-child {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BottomClickChangePresenter = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: skyblue;
`;

const BottomUserImagePresenter = styled.img`
  height: ${props => props.giveHeight}rem;
  width: ${props => props.giveWidth}rem;
  margin: ${props => props.giveMargin}rem;
`;

const BottomUserSeveralInfoPresenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin: 0;
    &:first-child {
      font-weight: bold;
    }
    &:last-child {
      color: gray;
    }
  }
`;

const BottomRecomForUserPresenter = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: bold;
    margin: 0;
    &:first-child {
      color: gray;
      font-size: 1.1rem;
    }
    &:last-child {
      font-size: 0.9rem;
    }
  }
`;

const BottomRecomandSmallPresenter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export {
  BottomBarPresenter,
  BottomUserImagePresenter,
  BottomUserSeveralInfoPresenter,
  BottomRecomForUserPresenter,
  BottomClickChangePresenter,
  BottomRecomandSmallPresenter,
};
