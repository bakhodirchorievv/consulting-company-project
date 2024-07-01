import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
	return (
		<div className="services-wrapper">
			<div className="our-services">
				<h2 className="generalTitle-services our-service-title">Наши услуги</h2>
				<div className="our-service">
					<div className="our-service-left">
						<img
							src="/consulting-company-project/Sources/services-img1.png"
							alt=""
							className="our-service-img"
						/>

						<div className="service-info-wrapper">
							<h3 className="service-img-title">Фото и видео съемка</h3>
							<p className="service-img-desc">
								Профессиональная фото - и видеосъемка любой направленности, будь
								то музыкальный клип, репортаж или иное видео
							</p>
							<div className="service-img-foot">
								<p className="service-img-price">От 5.000р</p>
							</div>
						</div>
					</div>

					<div className="our-service-right">
						<div className="right-service-head">
							<h3 className="right-service-title">Фото и видео съемка</h3>
							<div className="head-right">
								<img
									src="/consulting-company-project/Sources/stars.png"
									alt=""
									className="stars"
								/>
								<span className="enterToReview">перейти к отзывам </span>
							</div>
						</div>

						<p className="service-right-desc">
							Хотите представить свой бизнес с лучшей стороны и привлечь новых
							клиентов? Наша команда видеопродюсеров и фотографов готова помочь
							вам создать профессиональный контент, который поразит ваших
							потенциальных партнеров и клиентов. Мы специализируемся на съемке
							видео презентаций, корпоративных мероприятий, рекламных роликов и
							других видов контента, который поможет вашему бизнесу выделиться
							на фоне конкурентов.
						</p>
						<p className="service-right-desc">
							Наши специалисты имеют огромный опыт работы с коммерческими
							проектами и знают, как создать контент, который привлечет внимание
							аудитории и поможет достичь поставленных целей. Мы используем
							современное оборудование и методы обработки, чтобы каждое видео и
							фотография были высокого качества и соответствовали вашим
							требованиям.
						</p>

						<div className="service-right-foot">
							<button className="service-right-button">ОБСУДИТЬ ПРОЕКТ</button>
							<Link to={"/Cases"}>
								<div className="watch-cases">
									СМОТРЕТЬ КЕЙСЫ{" "}
									<img
										src="/consulting-company-project/Sources/red-arrow.png"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="our-service">
					<div className="our-service-left">
						<img
							src="/consulting-company-project/Sources/services-img2.png"
							alt=""
							className="our-service-img"
						/>

						<div className="service-info-wrapper">
							<h3 className="service-img-title">Реклама</h3>
							<p className="service-img-desc">
								Дает мощный импульс вашему бизнесу. Наши специалисты
								проанализирут ваш бизнес, найдут конкурентов и на основе этого
								подберут концепцию рекламного ролика
							</p>
							<div className="service-img-foot">
								<p className="service-img-price">От 5.000р</p>
							</div>
						</div>
					</div>

					<div className="our-service-right">
						<div className="right-service-head">
							<h3 className="right-service-title">Съемка рекламных роликов</h3>
							<div className="head-right">
								<img
									src="/consulting-company-project/Sources/stars.png"
									alt=""
									className="stars"
								/>
								<span className="enterToReview">перейти к отзывам </span>
							</div>
						</div>

						<p className="service-right-desc">
							Хотите создать эффективный и запоминающийся рекламный ролик для
							вашего продукта или услуги? Наша команда специалистов по
							видеопродакшену готова помочь вам воплотить в жизнь ваши идеи и
							привлечь внимание вашей целевой аудитории. Мы специализируемся на
							съемке рекламных роликов, которые будут выделить ваш бренд среди
							конкурентов и повысить узнаваемость вашего продукта.
						</p>
						<p className="service-right-desc">
							Наши профессионалы имеют обширный опыт работы в создании рекламных
							видеороликов различной сложности. Мы готовы воплотить в жизнь ваши
							идеи, предложить креативные концепции и помочь вам провести
							качественную съемку. Мы уделяем особое внимание деталям, качеству
							изображения и звука, чтобы ваш рекламный ролик был на высшем
							уровне и вызывал интерес у вашей аудитории.
						</p>

						<div className="service-right-foot">
							<button className="service-right-button">ОБСУДИТЬ ПРОЕКТ</button>
							<Link to={"/Cases"}>
								<div className="watch-cases">
									СМОТРЕТЬ КЕЙСЫ{" "}
									<img
										src="/consulting-company-project/Sources/red-arrow.png"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="our-service">
					<div className="our-service-left">
						<img
							src="/consulting-company-project/Sources/services-img3.png"
							alt=""
							className="our-service-img"
						/>

						<div className="service-info-wrapper">
							<h3 className="service-img-title">Контент для соц.сетей</h3>
							<p className="service-img-desc">
								Специалисты из отдела Neurocast Media возьмут всю ответсвенность
								за наполнение ваших социальных сетей reels, фото и видео. А
								также наши smm специалисты помогут с написанием постов и их
								публикацией
							</p>
							<div className="service-img-foot">
								<p className="service-img-price">От 5.000р</p>
							</div>
						</div>
					</div>

					<div className="our-service-right">
						<div className="right-service-head">
							<h3 className="right-service-title">
								Съемка контента для социальных сетей
							</h3>
							<div className="head-right">
								<img
									src="/consulting-company-project/Sources/stars.png"
									alt=""
									className="stars"
								/>
								<span className="enterToReview">перейти к отзывам </span>
							</div>
						</div>

						<p className="service-right-desc">
							Хотите создать качественный и привлекательный контент для своих
							социальных сетей? Наша команда специалистов по видеопродакшену
							готова помочь вам воплотить в жизнь идеи и создать ролики, которые
							привлекут внимание вашей аудитории в социальных медиа.
						</p>
						<p className="service-right-desc">
							Мы специализируемся на съемке контента для социальных сетей,
							который выделит ваш бизнес среди конкурентов и поможет увеличить
							вовлеченность вашей целевой аудитории. Наши профессионалы имеют
							обширный опыт работы с социальными платформами и знают, как
							создать контент, который будет привлекать внимание пользователей.
						</p>
						<p className="service-right-desc">
							Мы гарантируем внимательное отношение к деталям, высокое качество
							изображения и звука для того, чтобы ваш контент был на высшем
							уровне и максимально эффективно взаимодействовал с вашей
							аудиторией в социальных сетях.
						</p>

						<div className="service-right-foot">
							<button className="service-right-button">ОБСУДИТЬ ПРОЕКТ</button>
							<Link to={"/Cases"}>
								<div className="watch-cases">
									СМОТРЕТЬ КЕЙСЫ{" "}
									<img
										src="/consulting-company-project/Sources/red-arrow.png"
										alt=""
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="case-submission">
				<div className="case-submission-left">
					<img
						src="/consulting-company-project/Sources/main-image.png"
						alt=""
						className="caseSubmissionImg"
					/>
				</div>
				<form className="submission-card">
					<h2 className="form-title">
						Скоро, здесь будет кейс вашей компании{" "}
					</h2>
					<div className="inputs-wrapper">
						<input type="text" className="input-item name" placeholder="Имя" />
						<input
							type="email"
							className="input-item email"
							placeholder="E-mail"
						/>
						<input
							type="number"
							className="input-item phone"
							placeholder="Номер телефона"
						/>
					</div>
					<div className="label-wrapper">
						<input id="submissionLabel" type="checkbox" className="checkbox" />
						<label htmlFor="submissionLabel" className="theLabel">
							Я даю согласие на обработку персональных данных и согласен с
							политикой конфеденциальности
						</label>
					</div>
					<button className="submission-btn">ОБСУДИТЬ ПРОЕКТ</button>
				</form>
			</div>

			<div className="our-clients">
				<h2 className="generalTitle-services our-clients-title">
					Наши клиенты
				</h2>
				<div className="our-clients-body">
					<div className="our-clients-item">
						<img
							src="/consulting-company-project/Sources/adidas.png"
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
						<img
							src="/consulting-company-project/Sources/ourClientsItem2.png"
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
