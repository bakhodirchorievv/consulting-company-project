import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left">
				<img src="/Sources/red-circle.png" alt="" className="red-circle" />
				<div className="nextToRedCircle">
					<h2 className="header-title">Neurocast</h2>
					<p className="header-desc">Production</p>
				</div>
			</div>

			<ul className="header-items">
				<li className="header-item">О нас</li>
				<Link to={"/Services"}>
					<li className="header-item">Услуги</li>
				</Link>
				<li className="header-item">Портфолио</li>
				<Link to={"/Contacts"}>
					<li className="header-item">Контакты</li>
				</Link>
			</ul>

			<div className="header-right">
				<img src="/Sources/header-phone.png" alt="" className="header-phone" />
				<p className="header-number">8 (903)403-26-02</p>
			</div>
		</header>
	);
};

export default Header;
