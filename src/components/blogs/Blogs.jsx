import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookmark, handleTime }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);

  return (
    <div>
      {data.map((blog) => (
        <Blog
          key={blog.id}
          handleBookmark={handleBookmark}
          handleTime={handleTime}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  handleTime: PropTypes.func,
};

export default Blogs;
