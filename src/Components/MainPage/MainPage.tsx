import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
	return (
		<div className="mainPage-wrapper">
			<div className="mainPage-face">
<<<<<<< HEAD
				<img
					src="/consulting-company-project/Sources/main-image.png"
					alt=""
					className="main-image"
				/>
=======
				<img src="/consulting-company-project/Sources/main-image.png" alt="" className="main-image" />
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc

				<div className="absoluteOnMainImage">
					<h2 className="absolte-title">
						Продакшн, который повышает значимость бренда
					</h2>
					<p className="absolute-desc">
						Видео увеличит продажи и усилит бренд. Закажите бесплатную
						консультацию и получите скидку 10% в день обращения.
					</p>
					<div className="absolute-buttons">
						<button className="absolute-btn red-bordered">
							ОБСУДИТЬ ПРОЕКТ
						</button>

						<div className="red-arrow-wrapper">
							<button className="absolute-btn">СМОТРЕТЬ КЕЙСЫ </button>
<<<<<<< HEAD
							<img
								src="/consulting-company-project/Sources/red-arrow.png"
								alt=""
								className="red-arrow"
							/>
=======
							<img src="/consulting-company-project/Sources/red-arrow.png" alt="" className="red-arrow" />
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc
						</div>
					</div>
				</div>
			</div>

			<div className="after-face">
				<div className="after-face-item">
					<h2 className="after-faceTitle">
						<span className="redFont">&gt;</span>1 000 000
					</h2>
					<p className="after-face-desc">
						Просмотровна роликах для наших клиентов
					</p>
				</div>
				<div className="after-face-item">
					<h2 className="after-faceTitle">
						<span className="redFont">25</span> террабайт
					</h2>
					<p className="after-face-desc">Отснятого материала</p>
				</div>
				<div className="after-face-item">
					<h2 className="after-faceTitle">
						<span className="redFont">&gt;</span>5 лет
					</h2>
					<p className="after-face-desc">В индустрии продакшена</p>
				</div>
			</div>

			<div className="portfolio">
<<<<<<< HEAD
				<img
					src="/consulting-company-project/Sources/main-image.png"
					alt=""
					className="portfolio-img"
				/>
=======
				<img src="/consulting-company-project/Sources/main-image.png" alt="" className="portfolio-img" />
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc
				<div className="portfolio-head">
					<h2 className="portfolio-title">Портфолио</h2>
					<p className="portfolio-desc">Бетонный завод ООО «КСМ-1»</p>
				</div>

				<div className="form-wrapper">
					<form className="ofMsubmission-card">
						<h2 className="ofMform-title">
							Скоро, здесь будет кейс вашей компании{" "}
						</h2>
						<div className="ofMinputs-wrapper">
							<input
								type="text"
								className="ofMinput-item name"
								placeholder="Имя"
							/>
							<input
								type="email"
								className="ofMinput-item email"
								placeholder="E-mail"
							/>
							<input
								type="number"
								className="ofMinput-item phone"
								placeholder="Номер телефона"
							/>
						</div>
						<div className="ofMlabel-wrapper">
							<input
								id="submissionLabel"
								type="checkbox"
								className="ofMcheckbox"
							/>
							<label htmlFor="submissionLabel" className="ofMtheLabel">
								Я даю согласие на обработку персональных данных и согласен с
								политикой конфеденциальности
							</label>
						</div>
						<button className="ofMsubmission-btn">ОБСУДИТЬ ПРОЕКТ</button>
					</form>
					<Link to={"/Cases"}>
						<button className="seeCasesBtn">
							СМОТРЕТЬ КЕЙСЫ{"    "}
							<img
								src="/consulting-company-project/Sources/red-arrow.png"
								alt=""
								className="red-arrow seeCaseArrow"
							/>
						</button>
					</Link>
				</div>
			</div>

			<div className="services">
				<h2 className="generalTitle services-title">Услуги</h2>
				<div className="services-body">
					<div className="services-item withInfo">
						<img
							src="/consulting-company-project/Sources/services-img1.png"
							alt=""
							className="services-item-img"
						/>

						<div className="info-wrapper">
							<h3 className="info-title">Фото и видео съемка</h3>
							<p className="info-desc">
								Профессиональная фото- и видеосъемка любой направленности, будь
								то музыкальный клип, репортаж или иное видео
							</p>
							<div className="info-foot">
								<p className="info-price">От 5.000р</p>
								<button className="info-btn">Обсудить</button>
							</div>
						</div>
					</div>
					<div className="services-item">
						<img
							src="/consulting-company-project/Sources/services-img2.png"
							alt=""
							className="services-item-img"
						/>
					</div>
					<div className="services-item">
						<img
							src="/consulting-company-project/Sources/services-img3.png"
							alt=""
							className="services-item-img"
						/>
					</div>
				</div>
			</div>

			<div className="howDoWeWork">
				<div className="howDoWeWork-left">
					<h2 className="generalTitle howDoWeWork-title">Как мы работаем</h2>
					<p className="howDoWeWork-desc">
						Мы профессионально подходим к процессу производства каждого ролика.
					</p>

					<div className="howDoWeWork-item">
						<div className="howDoWeWork-item-num one">1</div>
						<p className="howDoWeWork-item-desc">
							Препродакшн. Важно, чтобы у вас была возможность передать задачу и
							контролировать все процессы. Мы проводим кастинг, поиск локации,
							подбираем реквизит. Клиет постоянно получает отдачу и может
							вносить правки.
						</p>
					</div>
					<div className="howDoWeWork-item">
						<div className="howDoWeWork-item-num">2</div>
						<p className="howDoWeWork-item-desc">
							Продакшн. Вы можете присутствовать на съемке и видеть картинку с
							камеры на большом мониторе, если необходимо. Мы присылаем фото,
							видео и онлайн согласовываем необходимые моменты.
						</p>
					</div>
					<div className="howDoWeWork-item">
						<div className="howDoWeWork-item-num">3</div>
						<p className="howDoWeWork-item-desc">
							На постпродакшене, вы можете следить за процессом монтажа,
							цветокоррекции и разработки графики, видеть все изменения в
							проекте, уточнять и задавать вопросы.
						</p>
					</div>
				</div>
				<div className="howDoWeWork-right">
					<img
						src="/consulting-company-project/Sources/howDoWeWork-img.png"
						alt=""
						className="howDoWeWork-img"
					/>
				</div>
			</div>

			<div className="our-clients">
				<h2 className="generalTitle our-clients-title">Наши клиенты</h2>
				<div className="our-clients-body">
					<div className="our-clients-item">
<<<<<<< HEAD
						<img
							src="/consulting-company-project/Sources/adidas.png"
=======
						<img src="/consulting-company-project/Sources/adidas.png" alt="" className="our-clients-img" />
					</div>
					<div className="our-clients-item">
						<img
							src="/consulting-company-project/Sources/ourClientsItem2.png"
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
						<img
<<<<<<< HEAD
							src="/consulting-company-project/Sources/ourClientsItem2.png"
=======
							src="/consulting-company-project/Sources/ourClientsItem3.png"
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
<<<<<<< HEAD
						<img
							src="/consulting-company-project/Sources/ourClientsItem3.png"
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
						<img
							src="/consulting-company-project/Sources/reebok.png"
							alt=""
							className="our-clients-img"
						/>
=======
						<img src="/consulting-company-project/Sources/reebok.png" alt="" className="our-clients-img" />
>>>>>>> 6099be6af9095c399c7226349191624b798e29fc
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
