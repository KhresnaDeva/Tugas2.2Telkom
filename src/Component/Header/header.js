import "./Header.module.css";
import IconSearch from "../../Assets/search-icon.svg";
import IconMessage from "../../Assets/message-icon.svg";
import IconWarning from "../../Assets/warning-icon.svg";

function Header() {
    const icons = [
      { icon: IconSearch },
      { icon: IconMessage },
      { icon: IconWarning },
    ];
    return (
      <div class="container">
        {icons.map((icon, idx) => {
          if (icon.icon == MessageIcon) {
            return (
              <div key={idx}>
                <img src={icon.icon} alt={icon.icon} />
              </div>
            );
          }
          return (
            <div key={idx}>
              <img src={icon.icon} alt={icon.icon} />
            </div>
          );
        })}
      </div>
    );
  }
  
  export default Header;
  