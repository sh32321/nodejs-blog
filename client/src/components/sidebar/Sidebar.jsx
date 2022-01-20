import "./sidebar.css";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as Work } from "../../assets/icons/work.svg";
import { ReactComponent as Book } from "../../assets/icons/book.svg";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Book className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Star className="sidebarIcon" />
            <span className="sidebarListItemText">Hightlight</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcon" />
            <span className="sidebarListItemText">Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
