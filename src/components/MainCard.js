import {useState, useRef} from 'react';
import {RxDotsHorizontal} from 'react-icons/rx';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {TbMessageCircle2, TbLocation} from 'react-icons/tb';
import {
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
} from '../presenters/MainCardPresenter';
import {
  CardRightArrowPresenter,
  CardLeftArrowPresenter,
} from '../presenters/IconPresenter';

function MainCard({
  userName,
  timeSet,
  imageSet,
  mainImageSet,
  likeNameList,
  userComments,
  otherUserCom,
}) {
  const clickRef = useRef(); // click했을때 움직일 컴포넌트
  const imgRef = useRef(); // img 크기 제기용
  const [heartOn, setHeartOn] = useState(0); // 좋아요 클릭용

  const rightClickEvent = () => {
    // feed 오른쪽 클릭 이벤트
    clickRef.current.scrollBy({
      left: imgRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const leftClickEvent = () => {
    clickRef.current.scrollBy({
      left: -imgRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const heartClickEvent = () => {
    if (heartOn === 0) {
      setHeartOn(1);
    } else {
      setHeartOn(0);
    }
  };
  return (
    <>
      <CardTitlePresenter>
        <CardTitleDividePresenter>
          <CardTitleImagePresenter src={imageSet} />
          <CardTitleNamePresenter>
            <UserName>{userName}</UserName>
          </CardTitleNamePresenter>
          <CardTitleTimePresenter>{timeSet}</CardTitleTimePresenter>
        </CardTitleDividePresenter>
        <CardTitleDividePresenter>
          <RxDotsHorizontal size={'1.2rem'} />
        </CardTitleDividePresenter>
      </CardTitlePresenter>
      <CardMainImageUlPresenter>
        <CardArrowPresenter>
          <button onClick={leftClickEvent}>
            <CardLeftArrowPresenter />
          </button>
          <button onClick={rightClickEvent}>
            <CardRightArrowPresenter />
          </button>
        </CardArrowPresenter>
        <ul ref={clickRef}>
          {Object.values(mainImageSet).map(key => (
            <>
              <CardMainImagePresenter src={`${key}`} ref={imgRef} />
            </>
          ))}
        </ul>
      </CardMainImageUlPresenter>
      <CardHeartCommentSendPresenter>
        <CardEachHCSPresenter onClick={heartClickEvent}>
          {heartOn === 1 ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
        </CardEachHCSPresenter>
        <CardEachHCSPresenter>
          <TbMessageCircle2 />
        </CardEachHCSPresenter>
        <CardEachHCSPresenter>
          <TbLocation />
        </CardEachHCSPresenter>
      </CardHeartCommentSendPresenter>
      <CardLikeListPresenter>
        좋아요 {likeNameList.length + heartOn}개
      </CardLikeListPresenter>
      <CardUserCommentsPresenter>
        <UserName>{userName}</UserName>&nbsp;{userComments}
      </CardUserCommentsPresenter>
      <OtherUserCommentsPresenter>
        댓글 {Object.keys(otherUserCom).length}개 모두 보기
      </OtherUserCommentsPresenter>
    </>
  );
}

export default MainCard;
