import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Header from "./components/header/header";

function App() {
  return (
    <div className="mx-24">
      <Header></Header>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
