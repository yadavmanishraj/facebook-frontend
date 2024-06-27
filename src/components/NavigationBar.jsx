import React from "react";
import NavItem from "./NavItem";
import Home from "./icons/Home";
import FacebookWatch from "./icons/FacebookWatch";
import Friends from "./icons/Friends";
import MarketPlace from "./icons/MarketPlace";
import Groups from "./icons/Groups";

const NavigationBar = () => {
  return (
    <div className="flex min-h-14 justify-center">
      <div className="search grow"></div>
      <div className="flex gap-4 grow">
        <NavItem
          className="mt-2"
          selected
          label={"Home"}
          icon={<Home className={"fill-accent"} />}
        />
        <NavItem
          className="mt-2"
          label={"Friends"}
          icon={<Friends className={"fill-accent"} />}
        />
        <NavItem
          className="mt-2"
          label={"Watch"}
          icon={<FacebookWatch className={"fill-accent"} />}
        />
        <NavItem
          className="mt-2"
          label={"Marketplace"}
          icon={<MarketPlace className={"fill-accent"} />}
        />
        <NavItem
          label={"Groups"}
          className="mt-2"
          icon={<Groups className={"fill-accent"} />}
        />
      </div>
      <div className="search grow"></div>
    </div>
  );
};

export default NavigationBar;
