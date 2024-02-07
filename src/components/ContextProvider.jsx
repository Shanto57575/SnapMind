import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext([]);

const ContextProvider = ({ children }) => {
	const [blogs, setBlogs] = useState([]);
	const [AddedBlogs, setAddedBlogs] = useState([]);
	const [readingTime, setReadingTime] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	const handleBookmark = (blog, time) => {
		setAddedBlogs([...AddedBlogs, blog]);
		setReadingTime(parseInt(readingTime + time));
	};

	const handleMarkedReading = (id) => {
		const remaining = AddedBlogs.filter((blog) => blog.id !== id);
		setAddedBlogs(remaining);
	};

	return (
		<AuthContext.Provider
			value={{
				blogs,
				handleBookmark,
				AddedBlogs,
				readingTime,
				handleMarkedReading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default ContextProvider;
