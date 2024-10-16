import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmark, handleTime }) => {
  const {
    id,
    banner_img,
    title,
    description,
    author_img,
    author_name,
    publish_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className=" mb-12">
      <div className=" flex flex-col gap-4">
        <img className="w-full rounded" src={banner_img} alt="" />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img className="w-16" src={author_img} alt="" />
            <div>
              <h3 className="text-2xl font-bold">{author_name}</h3>
              <p>{publish_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span>{reading_time} min read</span>
            <button onClick={() => handleBookmark(blog)}>
              <FaRegBookmark />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="flex gap-2 mb-4">
          {hashtags.map((hashtag, idx) => (
            <p key={idx}>{hashtag}</p>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleTime(reading_time, id)}
        className="mb-4 text-blue-500 font-semibold border-b-2 border-blue-500"
      >
        Mark As Read
      </button>
      <hr />
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  handleTime: PropTypes.func,
};

export default Blog;
