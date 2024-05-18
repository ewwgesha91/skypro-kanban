import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../lib/paths";

const PopExit = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logOut = () => {
    setIsAuth(false);
    navigate(paths.LOGIN);
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button className="pop-exit__exit-yes _hover01" id="exitYes">
                <a onClick={logOut}>Да, выйти</a>
              </button>
              <button className="pop-exit__exit-no _hover03" id="exitNo">
                <Link to={paths.MAIN}>Нет, остаться</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopExit;
