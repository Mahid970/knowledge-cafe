import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const {
    id,
    banner_img,
    title,
    author_img,
    author_name,
    publish_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="w-2/3 my-12 flex flex-col gap-6">
      <img className="w-full rounded" src={banner_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold">{author_name}</h3>
            <p>{publish_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex gap-2">
        {hashtags.map((hashtag, idx) => (
          <p key={idx}>{hashtag}</p>
        ))}
      </div>
      <hr />
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
