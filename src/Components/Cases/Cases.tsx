import "./Cases.css";

const Cases = () => {
	return (
		<div className="cases-wrapper">
			<div className="our-cases">
				<h2 className="generalTitle-cases ourCaseTitle">Наши кейсы</h2>
				<div className="our-cases-body">
					<div className="our-cases-item">
						<h3 className="cases-item-title">
							Бетонный завод ООО «КСМ-1», Ростов-на-Дону
						</h3>
						<div className="case-container">
							<div className="ourCasesLeftItem">
								<img
									src="/consulting-company-project/Sources/videoPlay.png"
									alt=""
									className="videoPlay"
								/>
							</div>
							<div className="ourCasesRightItem">
								<h4 className="case-right-title">Задачи:</h4>
								<p className="case-right-desc">
									Подготовить имиджевый видеоролик с презентацией ключевых
									аспектов производства. Этапов создания продукции (бетона,
									бетонных свой и железобетонных конструкций).{" "}
								</p>
								<p className="case-right-desc">
									Ролик содержит дикторскую закадровую озвучку, также 3D и 2D
									графику.
								</p>
								<p className="case-right-desc">
									Подготовить короткую версию ролика с оптимизацией для главной
									страницы сайта компании.
								</p>
								<p className="case-right-desc">
									Подготовить пул фотографий всех производственных линий,
									оборудования, машин, сотрудников.
								</p>
							</div>
						</div>
					</div>
					<div className="our-cases-item">
						<h3 className="cases-item-title">
							Клиент: ПАО КБ «ЦЕНТР-инвест» (банк)
						</h3>
						<div className="case-container">
							<div className="ourCasesLeftItem">
								<img
									src="/consulting-company-project/Sources/videoPlay.png"
									alt=""
									className="videoPlay"
								/>
							</div>
							<div className="ourCasesRightItem">
								<h4 className="case-right-title">Задачи:</h4>
								<p className="case-right-desc">
									Подготовить оригинальный рекламный ролик с презентацией услуг
									банка для студентов и молодых преподавателей. Ролик игровой, с
									сюжетом, персонажами, несколькими локациями. Был создан
									оригинальный закадровый текст (голос), а также графические
									элементы.
								</p>
								<p className="case-right-desc">
									Подготовить ролик с презентацией запуска программы поддержки
									цифрового рубля. Ролик содержит оригинальные кадры с
									сотрудниками банка, имеет сюжет и сопровождается закадровым
									голосом. В ролики были использованы кадры исторической хроники
									и собственные архивные кадры клиента, органично вписанные в
									общий концепт.
								</p>

								<h3 className="read-more">
									Читать больше{" "}
									<img
										src="/consulting-company-project/Sources/arrowBottom.png"
										alt=""
										className="arrowBottom"
									/>
								</h3>
							</div>
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
				<h2 className="generalTitle-cases our-clients-title">Наши клиенты</h2>
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

export default Cases;
