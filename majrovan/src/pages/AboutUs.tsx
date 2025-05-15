import Sidebar from "../components/Sidebar";
import styles from "./aboutUs.module.css";


 function AboutUs() {
  return (
    <main className={styles.about}>
      <Sidebar children={undefined} />        {/* återanvänd samma komponent */}
    </main>
  );
}
export default AboutUs