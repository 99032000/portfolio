import { useRef } from "react";
import { UpdateFollower } from "../../lib/MouseFollower";
import { AiOutlineMenu } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import styles from "./style.module.scss";
const NavBar = () => {
  const containerRef = useRef(null);
  return (
    <nav className=" px-4 pt-8 sm:text-2xl text-xl flex justify-between -z-10">
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code by</p>
          <p className={styles.damon}>Damon</p>
          <p className={styles.chen}>Chen</p>
        </div>
      </div>
      <div className="flex sm:gap-x-8 gap-x-4 items-center sm:mr-4">
        <a href="/resume.pdf" target="_blank">
          <div className="flex items-center gap-x-1 cursor-pointer">
            <GrDocumentUser />
            Resume
          </div>
        </a>
        <UpdateFollower
          mouseOptions={{
            zIndex: -1,
            scale: 5,
            customPosition: containerRef,
          }}
        >
          <div className=" hover:text-white z-50" ref={containerRef}>
            <button className="flex items-center">
              <AiOutlineMenu className=" text-3xl" />
            </button>
          </div>
        </UpdateFollower>
      </div>
    </nav>
  );
};

export default NavBar;
