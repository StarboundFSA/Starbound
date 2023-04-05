import Link from "next/link";
import styles from "@/styles/Home.module.css";
import robStyles from "@/styles/robsStyles/About.module.css";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Image from "next/image";
import Img4 from "../../public/Imgs/Img4.jpg";

const About = () => {
  return (
    <>
      {/* <h1>About page</h1> */}
      <div className={robStyles.abtBox}>
        <p>
          We are the premier space tourism company for those seeking a truly
          out-of-this-world experience.
        </p>
        <br></br>
        <p>
          Our mission is to make space travel accessible and safe for everyone,
          so that you can experience the thrill of exploring the cosmos for
          yourself. At Starbound, we offer a range of exciting and unforgettable
          space travel experiences, from short suborbital flights to longer
          stays aboard the International Space Station.
        </p>
        <br></br>
        <p>
          Our state-of-the-art spacecraft are designed for maximum comfort and
          safety, so you can relax and enjoy the ride while our experienced crew
          takes care of everything else. Whether you’re a space enthusiast
          looking to fulfill a lifelong dream, an adventurer seeking a new
          challenge, or simply looking to experience the awe-inspiring beauty of
          the universe, Galactic Adventures has a space travel package that’s
          perfect for you. Our team of experts will guide you through every step
          of the process, from pre-flight training to your actual space flight,
          to ensure that you have a safe, enjoyable, and truly unforgettable
          experience.
        </p>
        <br></br>
        <p>
          So why wait? Contact us today to start planning your journey to the
          stars with Starbound!
        </p>
        <br></br>
        <br></br>
        <Image src={Img4} alt="/" width={3121}></Image>
        {/* <br></br>
        <div className={robStyles.btnStyle}>
          <Link href="/aboutus">
            <p className={styles.btnStyle}>
              Meet the Founders Click Here? <BsFillRocketTakeoffFill />
            </p>
          </Link>
        </div> */}
      </div>

      <div className="main"></div>
    </>
  );
};
export default About;
