import { useContext } from "react";
import SingleBlog from "./SingleBlog";
import { AuthContext } from "./ContextProvider";

const Blogs = () => {
	const { blogs } = useContext(AuthContext);

	return (
		<div className="w-full md:w-2/3 mx-auto">
			{blogs.map((blog, idx) => (
				<SingleBlog key={idx} blog={blog} />
			))}
		</div>
	);
};

export default Blogs;
