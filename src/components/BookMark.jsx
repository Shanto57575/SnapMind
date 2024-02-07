import { useContext } from "react";
import { AuthContext } from "./ContextProvider";

const BookMark = () => {
	const { AddedBlogs, readingTime } = useContext(AuthContext);
	console.log(AddedBlogs);

	return (
		<div className="w-full md:w-1/3 mx-auto font-serif text-center ml-5 pt-5 px-5">
			<div className="bg-gray-200 border p-4 font-bold rounded-lg">
				Spent time on read : {0} min
			</div>
			<div className="bg-gray-200 mt-5 p-4 rounded-lg">
				<h1 className="mb-3 font-bold">
					Bookmarked Blogs : {AddedBlogs.length}
				</h1>
				<div className="font-serif font-bold mx-3">
					{AddedBlogs?.map((blog, idx) => (
						<div className="bg-white mt-2 border-none rounded-lg p-4" key={idx}>
							{blog.title}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BookMark;
