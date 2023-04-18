import styled from 'styled-components';

const StoryScrollPresenter = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  overflow: scroll;
  width: 44rem;
  margin: 2rem 0rem 3rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StoryBoxPresenter = styled.img`
  background-color: #eeeeee;
  border-radius: 70%;
  margin: 0.75rem;
  width: 4rem;
  height: 4rem;
`;

const StoryBoxOuterPresenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryArrowButtonPresenter = styled.div`
  position: absolute;
  ${props => props.heading}
`;

export {
  StoryScrollPresenter,
  StoryBoxPresenter,
  StoryArrowButtonPresenter,
  StoryBoxOuterPresenter,
};
