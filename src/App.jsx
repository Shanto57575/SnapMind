import Blogs from "./components/Blogs";
import BookMark from "./components/BookMark";
import Header from "./components/Header";

const App = () => {
	return (
		<div className="container max-w-5xl mx-auto mt-3">
			<Header />
			<div className="md:flex justify-between">
				<Blogs />
				<BookMark />
			</div>
		</div>
	);
};

export default App;
