import React from "react";
import LeftSideBar from "../layout/LeftSideBar";
import RightSidebar from "../layout/RightSidebar";
import Post from "../components/Post";
import StoryBoard from "../layout/StoryBoard";

const HomePage = () => {
  return (
    <div className="flex overflow-auto bg-gray-100">
      <aside>
        <LeftSideBar />
      </aside>
      <main className="flex flex-col px-2 py-4 h-full overflow-auto">
        <div className=" flex flex-col">
          <StoryBoard />
          <div className="posts px-12">
            <Post />
            <Post
              description={
                "The cycle of prey and predator in this vicious world !"
              }
              contentImage={
                "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448907534_854176900092212_3357605676194774024_n.jpg?stp=dst-jpg_s640x640&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zRz4CGm7plkQ7kNvgF0WL5o&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBJxExSdCSCDSDgRLca2gLv40o8EbHLHLzKe-LXDPrvhQ&oe=667C7E42"
              }
            />
            <Post
              description={
                "Why settle for the ordinary when you can have the extraordinary? "
              }
              contentImage={
                "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448544465_122136559742251233_8800794933624431845_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BCFrO-KGZgoQ7kNvgG-jd81&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYB2U7HTXlVawBPTS1XXmjjMQChg4ySGGVVw_Iy1ZCgVKA&oe=667C74E9"
              }
            />
          </div>
        </div>
      </main>
      <aside>
        <RightSidebar />
      </aside>
    </div>
  );
};

export default HomePage;
