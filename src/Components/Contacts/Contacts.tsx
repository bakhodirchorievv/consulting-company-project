import "./Contacts.css";

const Contacts = () => {
	return (
		<div className="contacts-wrapper">
			<div className="our-contacts">
				<h2 className="generalTitle-contacts our-contacts-title">
					Наши контакты
				</h2>
				<div className="contacts-body">
					<div className="our-contacts-left">
						<div className="contact-left-item">
							<h3 className="contact-type">Номер телефона</h3>
							<p className="contact-info">8-903-403-2602</p>
						</div>
						<div className="contact-left-item">
							<h3 className="contact-type">E-mail</h3>
							<p className="contact-info">Neurocastprod@gmail.com</p>
						</div>
						<div className="contact-left-item ">
							<h3 className="contact-type">Социальные сети</h3>
							<div className="more-contacts">
								<div className="contact-apps">
									<img src="/Sources/wik.png" alt="" className="contactApp" />
									<img
										src="/Sources/youtube.png"
										alt=""
										className="contactApp"
									/>
									<img
										src="/Sources/telegram.png"
										alt=""
										className="contactApp"
									/>

									<svg
										className="contactApp telephone-icon"
										width="26"
										height="26"
										viewBox="0 0 26 26"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle
											cx="13.0113"
											cy="12.9999"
											r="12.9886"
											fill="black"
										/>
										<path
											d="M18.7403 15.605C18.4446 15.461 16.9841 14.7644 16.7094 14.6655C16.4362 14.5709 16.2365 14.5215 16.0414 14.8095C15.8417 15.096 15.2713 15.749 15.1002 15.9366C14.9291 16.13 14.752 16.1518 14.4548 16.0093C14.159 15.8639 13.1999 15.5614 12.0651 14.5768C11.1794 13.8132 10.5865 12.8679 10.4094 12.5814C10.2383 12.2934 10.3929 12.1392 10.5415 11.9953C10.6721 11.8673 10.8372 11.6578 10.9858 11.4921C11.1359 11.3263 11.1854 11.2041 11.283 11.0121C11.3806 10.8172 11.334 10.6514 11.2605 10.5074C11.1854 10.3635 10.5925 8.94255 10.3418 8.36953C10.1017 7.80379 9.85699 7.88232 9.67386 7.87505C9.50274 7.86487 9.3031 7.86487 9.10346 7.86487C8.9527 7.8685 8.80434 7.90228 8.66769 7.9641C8.53104 8.02592 8.40906 8.11444 8.30939 8.2241C8.0362 8.51206 7.27216 9.2087 7.27216 10.6296C7.27216 12.0505 8.33791 13.4162 8.48802 13.6096C8.63512 13.803 10.5805 16.7103 13.5661 17.9611C14.2716 18.2592 14.827 18.4352 15.2608 18.569C15.9738 18.7901 16.6178 18.7566 17.1312 18.6853C17.7016 18.601 18.8889 17.9872 19.1396 17.3139C19.3858 16.639 19.3858 16.0631 19.3107 15.9424C19.2372 15.8202 19.0375 15.749 18.7403 15.605Z"
											fill="white"
										/>
									</svg>
								</div>
								<p className="or-option contact-info">
									Или @neurocast_production
								</p>
							</div>
						</div>
						<div className="contact-left-item">
							<h3 className="contact-type">Город</h3>
							<p className="contact-info">Ростов-на-Дону</p>
							<p className="extra-info">
								Есть возможность приехать в ваш город, обсуждается индивидуально
							</p>
						</div>
					</div>
					<div className="our-contacts-right">
						<img
							src="/Sources/contacts-main-img.png"
							alt=""
							className="contact-main-img"
						/>
					</div>
				</div>
			</div>

			<div className="case-submission">
				<div className="case-submission-left">
					<img
						src="/Sources/main-image.png"
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
				<h2 className="generalTitle-contacts our-clients-title">
					Наши клиенты
				</h2>
				<div className="our-clients-body">
					<div className="our-clients-item">
						<img src="/Sources/adidas.png" alt="" className="our-clients-img" />
					</div>
					<div className="our-clients-item">
						<img
							src="/Sources/ourClientsItem2.png"
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
						<img
							src="/Sources/ourClientsItem3.png"
							alt=""
							className="our-clients-img"
						/>
					</div>
					<div className="our-clients-item">
						<img src="/Sources/reebok.png" alt="" className="our-clients-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
