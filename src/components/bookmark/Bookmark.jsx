import { useState } from "react";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookmarke = (blog) => {
    console.log(blog);
  };
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default Bookmark;
