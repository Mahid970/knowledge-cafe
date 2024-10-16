import { useState } from "react";
import Blogs from "../blogs/Blogs";
import Bookmark from "../bookmark/Bookmark";
import SpentTime from "../spent-time/SpentTime";

const Body = () => {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);
  const handleBookmark = (blog) => {
    setBookmarkCount(bookmarkCount + 1);
    setBookmarks([...bookmarks, blog]);
  };

  const handleTime = (reading_time, id) => {
    setTime(time + reading_time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <div className="flex  gap-24 my-12">
      <Blogs handleBookmark={handleBookmark} handleTime={handleTime}></Blogs>
      <div className="flex flex-col w-2/5 gap-6">
        <SpentTime time={time}></SpentTime>
        <Bookmark
          bookmarks={bookmarks}
          bookmarkCount={bookmarkCount}
        ></Bookmark>
      </div>
    </div>
  );
};

export default Body;
