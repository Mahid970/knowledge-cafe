import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmark from "./components/bookmark/Bookmark";
import Header from "./components/header/header";

function App() {
  return (
    <div className="mx-24">
      <Header></Header>
      <div className="flex">
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </div>
  );
}

export default App;
