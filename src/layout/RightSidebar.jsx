import React from "react";
import search from "../assets/icons/search.svg";
import options from "../assets/icons/options.svg";
import ToolTip from "../components/ToolTip";

const FreindRequestCard = () => {
  return (
    <div className="flex hover:bg-gray-200 gap-2 p-4 rounded-md cursor-pointer">
      <div className="avatar">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/432748667_1523304291846569_294358099202347497_n.jpg?stp=dst-jpg_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uAqzyYp4nsEQ7kNvgHcbq50&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCK6EtlYz8GydH89yE8g6Mp7_XzSFGUQbvy3z9r_119SA&oe=667C1334"
          alt="Profile"
          className="size-12 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">Sulove Yadav</div>
        <div className="flex gap-1">
          <img
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/323865521_881885726336087_8629759451789208128_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=btq1pXShWaUQ7kNvgGqlhls&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYB-db1Qv8aOE7gbnZ9omEcIJJz-jTBZOiigH0zHfHqGpg&oe=667C24EC"
            alt=""
            className="size-4 rounded-full"
          />
          <span className="text-xs text-gray-500">1 Mutual Friend</span>
        </div>
        <div className="flex justify-stretch gap-4 mt-2">
          <button className="rounded-md bg-accent px-4 py-2 text-white font-semibold">
            Confirm
          </button>
          <button className="rounded-md bg-gray-100 px-4 py-2 text-black font-semibold">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="flex flex-col px-2 py-4 h-full w-80 overflow-auto">
      <div className="font-semibold text-md text-gray-500 px-2">
        Your Profiles And Page
      </div>
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/409443101_122102863556143303_4797673944044128260_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehOlLquWnjYQ7kNvgGYQRU4&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYDm8uMyi4SBve1XJ66XQ_hLNNFRh284C1SGR9FmC8l9Zg&oe=667C2054"
          alt=""
          className="size-8 rounded-full"
        />
        <div className="font-semibold text-sm">Tansen Music</div>
      </div>
      <hr className="border-gray-300 block my-3 mx-2" />
      <div className="font-semibold text-md text-gray-500 px-2">
        Friend Requests
      </div>
      <FreindRequestCard />
      <hr className="border-gray-300 block my-3 mx-2" />
      <div className="contacts">
        <div className="flex justify-between font-semibold text-md text-gray-500 px-2">
          <span>Contacts</span>
          <div className="flex">
            <ToolTip label={"Search by names or group"}>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <img src={search} />
              </button>
            </ToolTip>
            <ToolTip label={"Options"}>
              <button className="p-2 rounded-full hover:bg-gray-200">
                <img src={options} />
              </button>
            </ToolTip>
          </div>
        </div>
        <div className="  item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
          <div className="flex relative">
            <div className="absolute size-3 flex items-center justify-center bg-white rounded-full bottom-0 right-0">
              <div className="size-2 bg-green-600 rounded-full"></div>
            </div>
            <img
              src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/410394384_342208108550564_727231860404091427_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KPNA5vSBlRsQ7kNvgH9YQIi&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYDtlqfI3W0mkZZr8OnFdpX_WNIcsrLJ6POHRhLFxayyHw&oe=667C1571"
              alt=""
              className="size-8 rounded-full"
            />
          </div>
          <div className="font-semibold text-sm">Prakash Sharma Poudel</div>
        </div>
        <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
          <img
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t1.6435-1/72922232_2484299398454799_5241967061751562240_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RW332XBfLT8Q7kNvgG8WtOF&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYAmYH-d387AfcP45ybNRcSNLJJ_QlOs1fI37T2y-fLQwg&oe=669DCAF6"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="font-semibold text-sm">Mukhund Raj Bhatt</div>
        </div>
        <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
          <img
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/444500247_967597628247067_4457455988424581311_n.jpg?stp=c0.1.40.40a_cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5dG2SoYkOqoQ7kNvgHhmZt9&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCtUyecIZoVRkcVteGZNTRjyDRzVj5C_M0AFYoBBNPYMw&oe=667C0CAE"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="font-semibold text-sm">Yubraj Yadav</div>
        </div>
        <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
          <img
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/343622633_247721677758835_4294400937299163229_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=q4fll_qcxfEQ7kNvgEuSWzf&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBSUofoo_gNnRFp7uUK4_ajtPND7tc-5RPr1MUWPUzDow&oe=667C02A0"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="font-semibold text-sm">Prabin Yadav</div>
        </div>
        <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
          <img
            src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/329134004_1351851508984423_8080539648135969227_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1WC85mzz2rYQ7kNvgE8cY59&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYA9rQFMPwG3ayaDHQuOThdIICcARoR4ew57VyxFy4YtFQ&oe=667C0E3E"
            alt=""
            className="size-8 rounded-full"
          />
          <div className="font-semibold text-sm">Salender Yadav</div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
