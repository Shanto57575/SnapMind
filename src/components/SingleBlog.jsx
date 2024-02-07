import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { AuthContext } from "./ContextProvider";

const SingleBlog = ({ blog }) => {
	const { handleBookmark, handleMarkedReading } = useContext(AuthContext);

	const {
		id,
		title,
		blog_img,
		author_img,
		author_name,
		hashtags,
		published_date,
		reading_time,
	} = blog;

	return (
		<div className="font-serif space-y-3">
			<img className="h-96 w-full mt-5" src={blog_img} alt="blog_cover" />
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-1">
					<img
						className="w-12 h-12 rounded-full mr-3"
						src={author_img}
						alt=""
					/>
					<div>
						<h1 className="md:font-bold font-serif">{author_name}</h1>
						<h3>{published_date}</h3>
					</div>
				</div>
				<div className="flex items-center gap-x-1 text-gray-500">
					<p>{reading_time} min read</p>
					<button onClick={() => handleBookmark(blog, reading_time)}>
						<FaRegBookmark />
					</button>
				</div>
			</div>
			<h1 className="font-bold text-xl md:text-3xl">{title}</h1>
			<div className="flex items-center gap-x-3 text-sm md:text-lg text-blue-600">
				{hashtags.map((hash, idx) => (
					<p key={idx}>#{hash}</p>
				))}
			</div>
			<button
				onClick={() => handleMarkedReading(id)}
				className="font-bold text-purple-600 underline"
			>
				Mark as read
			</button>
		</div>
	);
};

export default SingleBlog;
