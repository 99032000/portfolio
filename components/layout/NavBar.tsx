import { useRef } from "react";
import { UpdateFollower } from "../../lib/MouseFollower";
import { AiOutlineMenu } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
const NavBar = () => {
  const containerRef = useRef(null);
  return (
    <nav className=" px-4 pt-8 sm:text-2xl text-xl flex justify-between -z-10">
      <div>Damon Chen</div>
      <div className="flex sm:gap-x-8 gap-x-4 items-center sm:mr-4">
        <div className="flex items-center gap-x-1">
          <GrDocumentUser />
          Resume
        </div>
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
