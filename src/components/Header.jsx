import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-[#333] text-[#fff] px-[25px] py-[10px] mb-[15px]">
      <div>
        <img className="h-[40px] rounded-[50%]" src="favicon.ico" alt="Logo" />
      </div>
      <div className="text-[25px]">Admin Project</div>
      <div className="text-[40px]">
        <CgProfile />
      </div>
    </header>
  );
};

export default Header;
