import {useState, useEffect} from 'react';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';
import {
  MainContentBoxPresenter,
  MainContentInnerBoxPresenter,
  MainContentTwoSectionPresenter,
} from '../presenters/MainContentPresenter'; // Main에 들어갈 큰 박스
import {
  StoryScrollPresenter,
  StoryArrowButtonPresenter,
} from '../presenters/StoryPresenter'; // Story 스크롤 이벤트용
import theme from '../styles/theme';
import baseImage from '../styles/images.png';
import dogImage from '../styles/dog.jpg';
import flowerImage from '../styles/flower.jpg';
import spaceImage from '../styles/space.jpg';
import BottomBar from './BottomBar';
import MainCard from './MainCard';
import StoryBox from './StoryBox';

const ImageSet = {dogImage, flowerImage, spaceImage};
const NameList = [
  'suhwan',
  'Clark',
  'gibum',
  'seungHwan',
  'flora',
  'alanSaintMaximan',
];
const OtherUserComments = {
  suhwan: 'this is amazing isnt it?',
  Clack: 'what a wonderful feeds',
  gibum: 'we have to learn from this',
};

const RecommandUserForYou = {
  baseImage1: baseImage,
  baseImage2: baseImage,
  baseImage3: baseImage,
  baseImage4: baseImage,
  baseImage5: baseImage,
};

const UserSelfInfo = {suhwan0818: '김수환'};

function MainContent() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    // PC 태블릿 모바일에 맞춰 가로 길이 재설정
    if (window.innerWidth > theme.sizes.tablet) {
      setWidth('17rem');
    } else if (window.innerWidth > theme.sizes.mobile) {
      setWidth('5rem');
    } else {
      setWidth('0rem');
    }
  };
  useEffect(() => {
    // 화면 사이즈 체크
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // 스크롤 위치 0으로 초기화
    document.getElementById('storyAnimation')?.scrollTo(0, 0);
  });

  const onPressLeft = () => {
    document
      .getElementById('storyAnimation')
      .scrollBy({left: -260, behavior: 'smooth'});
  };

  const onPressRight = () => {
    document
      .getElementById('storyAnimation')
      .scrollBy({left: 260, behavior: 'smooth'});
  };

  return (
    <>
      <MainContentBoxPresenter widthProps={width}>
        <MainContentTwoSectionPresenter>
          <MainContentInnerBoxPresenter growGive={'4'} marginSize={'auto'}>
            <StoryScrollPresenter id="storyAnimation">
              <StoryArrowButtonPresenter
                heading={'margin-left: 1.5rem'}
                onClick={onPressLeft}
              >
                <IoIosArrowDropleftCircle color="white" size={'2rem'} />
              </StoryArrowButtonPresenter>
              <StoryBox nameGiver={'base1'} />
              <StoryBox nameGiver={'base2'} />
              <StoryBox nameGiver={'base3'} />
              <StoryBox nameGiver={'base4'} />
              <StoryBox nameGiver={'base5'} />
              <StoryBox nameGiver={'base6'} />
              <StoryBox nameGiver={'base7'} />
              <StoryBox nameGiver={'base8'} />
              <StoryBox nameGiver={'base9'} />
              <StoryBox nameGiver={'base10'} />
              <StoryBox nameGiver={'base11'} />
              <StoryArrowButtonPresenter
                heading={'margin-left: 40.5rem'}
                onClick={onPressRight}
              >
                <IoIosArrowDroprightCircle color="white" size={'2rem'} />
              </StoryArrowButtonPresenter>
            </StoryScrollPresenter>
            <MainCard
              userName={'base.User'}
              timeSet={'• 2시간'}
              imageSet={baseImage}
              mainImageSet={ImageSet}
              likeNameList={NameList}
              userComments={' 피드를 처음 올려봐요!'}
              otherUserCom={OtherUserComments}
            />
          </MainContentInnerBoxPresenter>
          {theme.sizes.tablet < window.innerWidth ? (
            <MainContentInnerBoxPresenter
              growGive={'3'}
              marginSize={'3rem 0 0 3rem'}
            >
              <BottomBar
                selfName={UserSelfInfo}
                selfImage={baseImage}
                recommandUserForYou={RecommandUserForYou}
              />
            </MainContentInnerBoxPresenter>
          ) : (
            <>123</>
          )}
        </MainContentTwoSectionPresenter>
      </MainContentBoxPresenter>
    </>
  );
}

export default MainContent;
