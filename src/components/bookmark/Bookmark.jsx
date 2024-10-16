import PropTypes from "prop-types";

const Bookmark = ({ bookmarks, bookmarkCount }) => {
  return (
    <div>
      <div className="bg-gray-300 p-8 rounded">
        <h1 className="text-2xl font-bold">Bookmark Blogs: {bookmarkCount}</h1>

        {bookmarks.map((blog, idx) => (
          <h2
            className="bg-white my-4 text-xl p-3 rounded font-semibold"
            key={idx}
          >
            {blog.title}
          </h2>
        ))}
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array,
  bookmarkCount: PropTypes.number,
};

export default Bookmark;
