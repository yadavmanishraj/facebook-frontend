import React from "react";

const ListItem = () => {
  return (
    <div className="item flex gap-1 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/UcI9fM2oUUV.png"
        alt="Dashboard"
        className="size-8"
      />
      <span className="text-sm font-semibold"> Professional Dashboard</span>
    </div>
  );
};

const LeftSideBar = () => {
  return (
    <div className="flex flex-col px-2 py-4 h-full w-80 overflow-auto">
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/323865521_881885726336087_8629759451789208128_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=btq1pXShWaUQ7kNvgGqlhls&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYA7Y_q5d50jS05LSYH41tLUeR7zqMNYtpvEMEKbGxHkGw&oe=667C956C"
          alt="Manish"
          className="size-8 rounded-full"
        />
        <div className="font-semibold text-sm">Jay Prakash</div>
      </div>
      <div className="item flex gap-1 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <span className="bg-item-icon bg-friend bg-no-repeat pl-9 size-8"></span>
        <div className="text-sm font-semibold">Friends</div>
      </div>
      <ListItem />
      <div className="item flex gap-1 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <span className="bg-item-icon bg-favorite bg-no-repeat pl-9 size-8"></span>
        <div className="text-sm font-semibold">Favorites</div>
      </div>
      <div className="item flex gap-1 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <span className="bg-item-icon bg-industries bg-no-repeat pl-9 size-8"></span>
        <div className="text-sm font-semibold">Industries</div>
      </div>
      <div className="item flex gap-1 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <span className="bg-item-icon bg-marketplace bg-no-repeat pl-9 size-8"></span>
        <div className="text-sm font-semibold">Marketplace</div>
      </div>

      <hr className="border-gray-300 block my-3 mx-2" />
      <div className="font-bold text-md text-gray-500 px-2">Your Shortcuts</div>

      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/242083083_339673831277584_5975662088014630061_n.jpg?stp=c41.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IK8Ar63rlA8Q7kNvgGP6wD8&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYAc_Y2--5AXBUvQJ2KfYXFVMxWYROyMQln5kLQ0-HXqhw&oe=667C0347"
          alt=""
          className="size-8 rounded-md"
        />
        <div className="font-semibold text-sm">
          IT Students of Nepal (ITSNP)
        </div>
      </div>
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t31.18172-8/19488654_1559641290733944_6026670271214651930_o.jpg?stp=c19.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A8umlTA2MZ4Q7kNvgHsrcia&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCyF8Lt41FHXZQjEZEqekr-0QAQsctWMNdesN-wcs8jTQ&oe=669DBB4B"
          alt=""
          className="size-8 rounded-md"
        />
        <div className="font-semibold text-sm">
          React Native Developer Community
        </div>
      </div>
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.2081-6/75280236_727295991088696_757576370669748224_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_ohc=THCDbUOJUQMQ7kNvgFaeCpx&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCltfRUcw1ITjUt0Afn3kAp0icXyVG9oxxloV2xdlMfPg&oe=667C13C8"
          alt=""
          className="size-8 rounded-md"
        />
        <div className="font-semibold text-sm">Ludo World</div>
      </div>
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/381083916_122094042692066949_2133010170507326216_n.png?stp=cp0_dst-png_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jIrsdOqFpn8Q7kNvgHMDmBw&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYBPVGZWxKXRgcxpA8e4L8VAdzyMVCXaY1V68s-eTUtI6A&oe=667C2EB7"
          alt=""
          className="size-8 rounded-full"
        />
        <div className="font-semibold text-sm">PictureAlchamy</div>
      </div>
      <div className="item flex gap-2 items-center px-1 py-2 transition rounded-md w-full hover:bg-gray-200 cursor-pointer">
        <img
          src="https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/438253325_443433498226862_4838438856997941101_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qU5whcle3dcQ7kNvgHeztqq&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYA7ZyQXXGa2h8JnNvkt8ErUEgFIRaSBf186kZpbOY6bxQ&oe=667C2C92"
          alt=""
          className="size-8 rounded-full"
        />
        <div className="font-semibold text-sm">QuantumByte</div>
      </div>
    </div>
  );
};

export default LeftSideBar;
