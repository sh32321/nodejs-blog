import "./topbar.css";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { ReactComponent as Message } from "../../assets/icons/message.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Blog</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="search-icon" />
          <input placeholder="Search..." className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">HTimeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <User />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Message />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Bell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
      <img src="/public/assets/person1.jpeg" alt="" className="topbarImg" />
    </div>
  );
};

export default Topbar;
