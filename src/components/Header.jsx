import styles from "./Header.module.css";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="favicon.ico" alt="Logo" />
      </div>
      <div className={styles.title}>Admin Project</div>
      <div className={styles.profile}>
        <CgProfile />
      </div>
    </header>
  );
};

export default Header;
