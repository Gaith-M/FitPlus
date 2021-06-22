import { useEffect, useLayoutEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  detectMobile,
  isMobileSelector,
} from '../../redux/reducers/isMobile-slice';
import { SmallNav } from './smallNav';
import { LargeNav } from './largeNav';

interface NavbarInterface {
  className?: string;
}

const NavBar: React.FC<NavbarInterface> = ({ className }) => {
  const numberOfItemsInCart = useAppSelector(
    (state) => state.cart.items
  ).length;
  const dispatch = useAppDispatch();
  const smallScreen = useAppSelector(isMobileSelector);

  // ----------Detect screen size--------------
  useLayoutEffect(() => {
    dispatch(detectMobile(window.innerWidth < 900));
  }, []);

  // ----------Detect screen size on dynamic resize--------------
  useEffect(() => {
    let mql = window.matchMedia('(max-width: 900px)');
    mql.addEventListener('change', ({ matches }) => {
      dispatch(detectMobile(matches));
    });
  }, []);
  // -------------------------------------

  return smallScreen ? (
    <SmallNav numberOfItemsInCart={numberOfItemsInCart} className={className} />
  ) : (
    <LargeNav numberOfItemsInCart={numberOfItemsInCart} className={className} />
  );
};

export default NavBar;
