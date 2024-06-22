import React from "react";

const Story = ({ image, avatarImage, user }) => {
  return (
    <div className="h-full min-w-36 cursor-pointer rounded-md relative ">
      <img
        className="h-full brightness-70 object-cover rounded-md w-full z-0 absolute top-0 left-0"
        src={`${
          image ??
          "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-6/448793563_476637334874816_645761784944422948_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JBWn4-gAdpQQ7kNvgEsV31g&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYB3XBuX4QB4x35U6cIqUd9ZAfRrlPKYVivNSzVCON9dfg&oe=667C3DFC"
        }`}
        alt="image"
      />
      {/* <div className="h-full rounded-md w-full bg-storyOverlay absolute hover:bg-storyOverlayHover"></div> */}
      <div className="one z-50 absolute flex flex-col justify-between h-full">
        <div className="p-2">
          <img
            className="rounded-full object-cover size-10 border-avatar border-blue-600"
            src={`${
              avatarImage ??
              "https://scontent.fjkr2-1.fna.fbcdn.net/v/t39.30808-1/292763222_160789169824631_7475684149631828962_n.jpg?stp=c21.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HOI6gv4GSvQQ7kNvgH6DXnq&_nc_ht=scontent.fjkr2-1.fna&oh=00_AYCiCIl4odKShcYKiMvO0s1Ob9QDao5lQlzjJOeAi_Ztcg&oe=667C4EAF"
            }`}
            alt=""
          />
        </div>
        <div className="text-white font-semibold p-2">
          {" "}
          {user ?? "Manishraj"}
        </div>
      </div>
    </div>
  );
};

export default Story;
