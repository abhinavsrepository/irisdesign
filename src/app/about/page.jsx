import Image from "next/image";
import styles from "./about.module.css"
const AboutPage = () => {
  return (
    <div>
      <div className={StyleSheet.imgContainer}>
      <Image src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
    </div>
    </div>
  );
};

export default AboutPage;
