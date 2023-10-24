import Spinner from "../components/Spinner";
import styles from "./LoadingFullPage.module.css";

function LoadingFullPage() {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}

export default LoadingFullPage;
