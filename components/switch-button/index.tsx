import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { themeSelector, toggleTheme } from '../../redux/reducers/theme-slice';
import styles from './styles.module.scss';

const Switch = () => {
  const dispatch = useAppDispatch();
  const isLightTheme = useAppSelector(themeSelector);
  const handleClick = () => dispatch(toggleTheme(!isLightTheme));

  return (
    <div onClick={handleClick} className={`${styles.switch}`}>
      <div className={styles.switchContainer}>
        <div className={styles.switchCheck}>
          <span>
            <img src='/LightIcon.png' />
          </span>
        </div>
        <div className={styles.switchUncheck}>
          <span>
            <img src='/darkIcon.png' />
          </span>
        </div>
      </div>
      <div
        className={`${styles.switchCircle} ${
          isLightTheme ? styles.moveCricle : null
        }`}
      />
      <input className={styles.switchInput} type='checkbox' />
    </div>
  );
};

export default Switch;
