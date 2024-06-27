import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-head">
				<div className="footer-header-left">
					<img src="/Sources/red-circle.png" alt="" className="red-circle" />
					<div className="nextToRedCircle">
						<h2 className="footer-header-title">Neurocast</h2>
						<p className="footer-header-desc">Production</p>
					</div>
				</div>
				<ul className="footer-header-items">
					<li className="footer-header-item">О нас</li>
					<Link to={"/Cases"}>
						<li className="footer-header-item">Услуги</li>
					</Link>
					<li className="footer-header-item">Портфолио</li>
					<Link to={"/Contacts"}>
						<li className="footer-header-item">Контакты</li>
					</Link>
				</ul>
				<div className="footer-header-right">
					<img
						src="/Sources/header-phone.png"
						alt=""
						className="footer-header-phone"
					/>
					<p className="footer-header-number">8 (903)403-26-02</p>
				</div>
			</div>

			<div className="footer-center">
				<p className="footer-networks">Соц.сети</p>
				<div className="footer-apps">
					<img
						src="/Sources/first-footer-app.png"
						alt=""
						className="footer-app"
					/>
					<img
						src="/Sources/second-footer-app.png"
						alt=""
						className="footer-app"
					/>
					<img
						src="/Sources/third-footer-app.png"
						alt=""
						className="footer-app"
					/>
					<img
						src="/Sources/fourth-footer-app.png"
						alt=""
						className="footer-app"
					/>
				</div>
			</div>

			<div className="footer-foot">
				<Link to={"/PrivacyPolicy"}>
					<p className="footer-foot-desc">Политика конфиденциальности</p>
				</Link>
				<p className="footer-foot-desc">Neurocast 2020-2024</p>
				<p className="footer-foot-desc">
					Сайт разработан в студии <span className="underline">Webstore</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
