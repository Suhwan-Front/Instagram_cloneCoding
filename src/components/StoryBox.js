import {
  StoryBoxPresenter,
  StoryBoxOuterPresenter,
} from '../presenters/StoryPresenter';
import baseImg from '../styles/images.png';

function StoryBox(props) {
  return (
    <>
      <StoryBoxOuterPresenter>
        <StoryBoxPresenter src={baseImg} />
        <div>{props.nameGiver}</div>
      </StoryBoxOuterPresenter>
    </>
  );
}

export default StoryBox;
