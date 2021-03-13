import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  detectMobile,
  isMobileSelector,
} from '../../redux/reducers/isMobile-slice';
import { LargeViewNav, SmallViewNav } from './views';

const NavBar = () => {
  const numberOfItemsInCart = useAppSelector((state) => state.cart.items)
    .length;
  const dispatch = useAppDispatch();
  const smallScreen = useAppSelector(isMobileSelector);

  // ----------Detect screen size--------------
  let detectIsMobile = (isSmall) => {
    dispatch(detectMobile(isSmall));
  };

  useEffect(() => {
    let mql = window.matchMedia('(max-width: 900px)');
    mql.addListener(({ matches }) => {
      detectIsMobile(matches);
    });
  }, []);
  // -------------------------------------

  useEffect(() => {
    if (window.innerWidth < 900) {
      detectIsMobile(true);
    }
  }, []);

  return smallScreen ? (
    <SmallViewNav numberOfItemsInCart={numberOfItemsInCart} />
  ) : (
    <LargeViewNav numberOfItemsInCart={numberOfItemsInCart} />
  );
};

export default NavBar;
