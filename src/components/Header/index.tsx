import headerLogo from "@/assets/header-logo.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="xs:h-20 md:h-16">
      <header className="h-full py-2">
        <div className="grid grid-cols-8 h-full ">
          <div className="h-full flex justify-end">
            <div
              className="enpl-header-logo w-14"
              style={{ backgroundImage: `url(${headerLogo})` }}
            ></div>
          </div>
          <div className="col-span-7">
            <nav className="h-full flex justify-start">
              
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
