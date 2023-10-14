import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type ErrorPageType = {
  error: number;
};

type DescriptionType = {
  [key: number]: string;
};

export const ErrorPage: React.FC<ErrorPageType> = (props) => {
  const descriptions: DescriptionType = {
    404: "Такой страницы у нас нет, поэтому советуем вернуться на главную или перейти на предыдущую страницу.",
  };

  const navigate = useNavigate();

  const buttonHomeHandler = () => {
    navigate("/");
  };
  const buttonBackHandler = () => {
    navigate(-1);
  };

  return (
    <section className="text-gray-400  body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Упс, ошибка {props.error}.
          </h1>
          <p className="mb-8 leading-relaxed">{descriptions[props.error]}</p>
          <div className="flex justify-center gap-4">
            <Button className="justify-between" onClick={buttonBackHandler}>
              Назад
            </Button>
            <Button className="justify-between" onClick={buttonHomeHandler}>
              На главную
            </Button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
      </div>
    </section>
  );
};
