import React, { useState, useContext, useEffect } from "react";
import "./Sidebar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "./Context";
const SidebarItem = styled.div`
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? "#5541D7" : "")};
  fill: ${(props) => (props.active ? "white" : "")};
  margin: 1rem;
  padding: 1rem /* 12px */;
  border-radius: 0.75rem /* 12px */;
  @media (min-width: 1100px) {
    margin: 1.4rem;
  }
  &:hover {
    fill: white;
    cursor: pointer;
    opacity: 80%;
  }
`;

const SidebarItems = [
  {
    className: "sideNav",
    name: "./orders.svg",
    route: "/notfound",
    page: 0,
  },
  {
    className: "sideNav",
    name: "./customer.svg",
    route: "/",
    page: 1,
  },
  {
    className: "sideNav",
    name: "./Package.svg",
    route: "/notfound",
    page: 2,
  },
  {
    className: "sideNav",
    name: "./Coupon Discount.svg",
    route: "/coupon",
    page: 3,
  },
  {
    className: "sideNav",
    name: "./user.svg",
    route: "/notfound",
    page: 4,
  },
  {
    className: "sideNavSetting",
    name: "./settings.svg",
    route: "/notfound",
    page: 5,
  },
];
function Sidebar() {
  const { page, setPage } = useContext(Context);
  const [activeIndex, setActiveIndex] = useState(page);
  useEffect(() => {
    setActiveIndex(page);
    console.log(page);
  }, [setPage, page, activeIndex]);
  return (
    <div className="containerSideBar">
      {SidebarItems.map((item, index) => {
        return (
          <Link
            onClick={() => {
              setPage(item.page);
            }}
            to={item.route}
          >
            <SidebarItem key={item.name} active={index === activeIndex}>
              <img className={item.className} src={item.name} alt="" />
            </SidebarItem>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
