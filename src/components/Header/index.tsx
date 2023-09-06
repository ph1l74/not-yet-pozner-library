import headerLogo from "@/assets/header-logo.svg";
import Navigation from "@/components/Navigation";
import "./style.css";

const Header = () => {
  return (
    <div className="xs:h-20 md:h-16 col-span-12">
      <header className="h-full py-2">
        <div className="grid grid-cols-12 h-full ">
          <div className="h-full flex justify-end">
            <div
              className="enpl-header-logo w-14"
              style={{ backgroundImage: `url(${headerLogo})` }}
            ></div>
          </div>
          <div className="col-span-10">
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
