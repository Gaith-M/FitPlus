import styles from './styles.module.scss';

const index = () => {
  return (
    <div>
      <div className={styles.loaderContainer}>
        <span className={styles.firstDot}>.</span>
        <span className={styles.secondDot}>.</span>
        <span className={styles.thirdDot}>.</span>
      </div>
    </div>
  );
};

export default index;
