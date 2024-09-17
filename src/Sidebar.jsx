import Comingsoon from "../src/assets/icons/commingSoon.svg";
import Favorite from "../src/assets/icons/favourite.svg";
import Newrealese from "../src/assets/icons/newRelease.svg";
import Trending from "../src/assets/icons/trending.svg";
import Watchlater from "../src/assets/icons/watchLater.svg";

function Sidebar() {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={Trending} width="24" height="24" alt="" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Newrealese} width="24" height="24" alt="" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Comingsoon} width="24" height="24" alt="" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Favorite} width="24" height="24" alt="" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={Watchlater} width="24" height="24" alt="" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
