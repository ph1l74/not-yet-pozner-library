import headerLogo from "@/assets/header-logo.svg";
import Navigation from "@/components/Navigation";
import "./style.css";

const Header = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          className="w-12 h-12 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${headerLogo})` }}
        ></div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
