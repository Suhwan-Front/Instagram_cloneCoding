import {useState, useEffect} from 'react';
import {
  BottomBarPresenter,
  BottomUserImagePresenter,
  BottomUserSeveralInfoPresenter,
  BottomRecomForUserPresenter,
  BottomClickChangePresenter,
  BottomRecomandSmallPresenter,
} from '../presenters/BottomBarPresenter';
import theme from '../styles/theme';

function BottomBar({selfName, selfImage, recommandUserForYou}) {
  const [width, setWidth] = useState();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {width > theme.sizes.tablet ? (
        <BottomBarPresenter>
          <div>
            <div>
              <BottomUserImagePresenter
                src={selfImage}
                giveWidth={4}
                giveHeight={4}
                giveMargin={'0.75rem 0.75rem 0.75rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(selfName)[0]}</p>
                <p>{Object.values(selfName)[0]}</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>전환</BottomClickChangePresenter>
          </div>
          <BottomRecomForUserPresenter>
            <p>회원님을 위한 추천</p>
            <p>모두 보기</p>
          </BottomRecomForUserPresenter>
          <BottomRecomandSmallPresenter>
            <div>
              <BottomUserImagePresenter
                src={Object.values(recommandUserForYou)[0]}
                giveWidth={2.5}
                giveHeight={2.5}
                giveMargin={'0.5rem 0.5rem 0.5rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(recommandUserForYou)[0]}</p>
                <p>회원님을 위한 추천</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>팔로우</BottomClickChangePresenter>
          </BottomRecomandSmallPresenter>
          <BottomRecomandSmallPresenter>
            <div>
              <BottomUserImagePresenter
                src={Object.values(recommandUserForYou)[1]}
                giveWidth={2.5}
                giveHeight={2.5}
                giveMargin={'0.5rem 0.5rem 0.5rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(recommandUserForYou)[1]}</p>
                <p>회원님을 위한 추천</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>팔로우</BottomClickChangePresenter>
          </BottomRecomandSmallPresenter>
          <BottomRecomandSmallPresenter>
            <div>
              <BottomUserImagePresenter
                src={Object.values(recommandUserForYou)[2]}
                giveWidth={2.5}
                giveHeight={2.5}
                giveMargin={'0.5rem 0.5rem 0.5rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(recommandUserForYou)[2]}</p>
                <p>회원님을 위한 추천</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>팔로우</BottomClickChangePresenter>
          </BottomRecomandSmallPresenter>
          <BottomRecomandSmallPresenter>
            <div>
              <BottomUserImagePresenter
                src={Object.values(recommandUserForYou)[3]}
                giveWidth={2.5}
                giveHeight={2.5}
                giveMargin={'0.5rem 0.5rem 0.5rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(recommandUserForYou)[3]}</p>
                <p>회원님을 위한 추천</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>팔로우</BottomClickChangePresenter>
          </BottomRecomandSmallPresenter>
          <BottomRecomandSmallPresenter>
            <div>
              <BottomUserImagePresenter
                src={Object.values(recommandUserForYou)[4]}
                giveWidth={2.5}
                giveHeight={2.5}
                giveMargin={'0.5rem 0.5rem 0.5rem 0'}
              />
              <BottomUserSeveralInfoPresenter>
                <p>{Object.keys(recommandUserForYou)[4]}</p>
                <p>회원님을 위한 추천</p>
              </BottomUserSeveralInfoPresenter>
            </div>
            <BottomClickChangePresenter>팔로우</BottomClickChangePresenter>
          </BottomRecomandSmallPresenter>
        </BottomBarPresenter>
      ) : (
        <></>
      )}
    </>
  );
}

export default BottomBar;
