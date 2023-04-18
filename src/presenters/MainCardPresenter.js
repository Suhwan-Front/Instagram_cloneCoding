import styled from 'styled-components';

const CardTitlePresenter = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CardTitleImagePresenter = styled.img`
  border-radius: 70%;
  width: 2rem;
  height: 2rem;
`;

const CardTitleDividePresenter = styled.div`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const CardTitleNamePresenter = styled.div`
  font-size: 1rem;
  margin: 0 0.5rem;
`;

const CardTitleTimePresenter = styled.div`
  font-size: 1rem;
  color: gray;
`;

const CardMainImageUlPresenter = styled.div`
  list-style: none;
  ul {
    width: 30rem;
    display: flex;
    overflow-x: scroll;
    padding: 0;
    margin: 0;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CardMainImagePresenter = styled.img`
  object-fit: cover;
  min-width: 30rem;
  max-height: 37rem;
`;

const CardHeartCommentSendPresenter = styled.div`
  display: flex;
  width: 30rem;
  font-size: 1.6rem;
`;

const CardEachHCSPresenter = styled.div`
  margin: 0.5rem 0.5rem 0 0;
  :hover {
    cursor: pointer;
  }
`;

const CardLikeListPresenter = styled.div`
  display: flex;
  font-size: 0.9rem;
  margin: 0.25rem 0;
  width: 30rem;
  font-weight: bold;
`;

const CardUserCommentsPresenter = styled.div`
  display: flex;
  width: 30rem;
`;
const UserName = styled.a`
  font-weight: bold;
`;

const OtherUserCommentsPresenter = styled.div`
  display: flex;
  width: 30rem;
  font-size: 0.9rem;
  margin: 0.25rem 0;
  color: gray;
  :hover {
    cursor: pointer;
  }
`;

const CardArrowPresenter = styled.div`
  position: absolute;
  width: 30rem;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    border: 0;
    background: none;
    outline: 0;
    cursor: pointer;
  }
`;

export {
  UserName,
  CardTitlePresenter,
  CardTitleImagePresenter,
  CardTitleDividePresenter,
  CardTitleNamePresenter,
  CardTitleTimePresenter,
  CardMainImageUlPresenter,
  CardMainImagePresenter,
  CardHeartCommentSendPresenter,
  CardEachHCSPresenter,
  CardLikeListPresenter,
  CardUserCommentsPresenter,
  OtherUserCommentsPresenter,
  CardArrowPresenter,
};
