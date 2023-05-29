import styles from './MyButton.module.css';

const MyButton = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};
export default MyButton;
