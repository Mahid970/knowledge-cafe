import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../../public/blogs.json").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
