import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between mt-4">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
