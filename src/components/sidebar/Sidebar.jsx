import "./Sidebar.css"
import { Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriends from "../closeFriends/CloseFriends"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__wrapper">
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <RssFeed className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Feed</span>
                </li>
                <li className="sidebar__item">
                    <Chat className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Chats</span>
                </li>
                <li className="sidebar__item">
                    <PlayCircleFilledOutlined className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Videos</span>
                </li>
                <li className="sidebar__item">
                    <Group className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Groups</span>
                </li>
                <li className="sidebar__item">
                    <Bookmark className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Bookmarks</span>
                </li>
                <li className="sidebar__item">
                    <HelpOutline className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Questions</span>
                </li>
                <li className="sidebar__item">
                    <WorkOutline className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Jobs</span>
                </li>
                <li className="sidebar__item">
                    <Event className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Events</span>
                </li>
                <li className="sidebar__item">
                    <School className="sidebar__feedIcon" />
                    <span className="sidebar__itemtext">Courses</span>
                </li>
            </ul>
            <button className="sidebar__button">Show more</button>
            <hr className="sidebar__hr"/>
            <ul className="sidebar__friedlist">
                {Users.map(u =>(
                    <CloseFriends key={u.id} user={u} />
                ))}
            </ul>
        </div>
    </div>
  )
}
