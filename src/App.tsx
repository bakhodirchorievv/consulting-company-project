import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import Update from "./Update";
// import Container from "./Container";

const Cases = lazy(() => import("./Components/Cases/Cases"));
const Contacts = lazy(() => import("./Components/Contacts/Contacts"));
const MainPage = lazy(() => import("./Components/MainPage/MainPage"));
const Services = lazy(() => import("./Components/Services/Services"));
const PrivacyPolicy = lazy(
	() => import("./Components/PrivacyPolicy/PrivacyPolicy")
);

const App = () => {
	return (
		<Router>
			<div>
				{/* <Container> */}
				<Header />
				{/* <Update /> */}
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/Cases" element={<Cases />} />
						<Route path="/Contacts" element={<Contacts />} />
						<Route path="/Services" element={<Services />} />
						<Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
					</Routes>
				</Suspense>

				<Footer />
				{/* </Container> */}
			</div>
		</Router>
	);
};

export default App;
