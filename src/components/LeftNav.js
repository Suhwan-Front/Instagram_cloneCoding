import {useEffect, useState} from 'react';
import {
  LeftNavPresenter,
  NavBottomBox,
  NavInnerPresenter,
  NavItemPresenter,
  TitleFontPresenter,
} from '../presenters/LeftNavPresenter';
import theme from '../styles/theme';
import {
  CgHomePresenter,
  CgSearchPresenter,
  CgSelectPresenter,
  CgPlayButtonPresenter,
  CgArrowTopRightPresenter,
  CgHeartPresenter,
  CgMathPlusPresenter,
  CgUserPresenter,
  CgLayoutListPresenter,
} from '../presenters/IconPresenter';
import Logo from '../styles/InstaLogo.gif';

function LeftNav() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  if (width > theme.sizes.PC) {
    return (
      <>
        <LeftNavPresenter>
          <NavInnerPresenter>
            <TitleFontPresenter src={Logo} />
            <div>
              <NavItemPresenter>
                <CgHomePresenter />홈
              </NavItemPresenter>
              <NavItemPresenter>
                <CgSearchPresenter />
                검색
              </NavItemPresenter>
              <NavItemPresenter>
                <CgSelectPresenter /> 탐색 탭
              </NavItemPresenter>
              <NavItemPresenter>
                <CgPlayButtonPresenter />
                릴스
              </NavItemPresenter>
              <NavItemPresenter>
                <CgArrowTopRightPresenter />
                메세지
              </NavItemPresenter>
              <NavItemPresenter>
                <CgHeartPresenter />
                알림
              </NavItemPresenter>
              <NavItemPresenter>
                <CgMathPlusPresenter />
                만들기
              </NavItemPresenter>
              <NavItemPresenter>
                <CgUserPresenter />
                프로필
              </NavItemPresenter>
            </div>
            <NavBottomBox>
              <NavItemPresenter>
                <CgLayoutListPresenter />
                view more
              </NavItemPresenter>
            </NavBottomBox>
          </NavInnerPresenter>
        </LeftNavPresenter>
      </>
    );
  }
  if (width > theme.sizes.tablet) {
    return (
      <>
        <LeftNavPresenter>
          <NavInnerPresenter>
            <NavItemPresenter>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="currentColor"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="currentColor"
                />
              </svg>
            </NavItemPresenter>
            <div>
              <NavItemPresenter>
                <CgHomePresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgSearchPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgSelectPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgPlayButtonPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgArrowTopRightPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgHeartPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgMathPlusPresenter />
              </NavItemPresenter>
              <NavItemPresenter>
                <CgUserPresenter />
              </NavItemPresenter>
            </div>
            <div>
              <NavItemPresenter>
                <div>
                  <CgLayoutListPresenter />
                </div>
              </NavItemPresenter>
            </div>
          </NavInnerPresenter>
        </LeftNavPresenter>
      </>
    );
  }
}

export default LeftNav;
