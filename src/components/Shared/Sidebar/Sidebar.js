import React from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Collapsible from "react-collapsible";

const Sidebar = ({ show, handleClose, listData }) => {
  // const Home = <NavLink to="/home">Home</NavLink>
  const About = <NavLink to="/about">About</NavLink>;
  const Seminars = (
    <NavLink to="/courses/basic_lecture_series">Seminars </NavLink>
  );
  const Events = <NavLink to="/events/live">Events</NavLink>;
  const Instructors = <NavLink to="/instructor">Instructors</NavLink>;
  const Products = <NavLink to="/store">Products</NavLink>;
  const Blogs = <NavLink to="/store/blogs/">Blogs</NavLink>;
  const navfont = {}
  return ( 
    <>
      <div>
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          className="side__bar"
        >
          <Offcanvas.Header closeButton>
            {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul style={{ paddingBottom: "10px" }}>
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <ul style={{ paddingBottom: "10px" }}>
              <li>
                {" "}
                <NavLink to="/silva_membership">Membership</NavLink>
              </li>
            </ul>
            {/* <Collapsible trigger={Home} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/home">Home</NavLink></li>
                        {/* <li><NavLink to="/homeTwo">Home style 2</NavLink></li>
                        <li><NavLink to="/homeThree">Home style 3</NavLink></li>
                        <li><NavLink to="/homeFour">Home style 4</NavLink></li>
                        <li><NavLink to="/homeFive">Home style 5</NavLink></li> */}
            {/* </ul>
                  </Collapsible> */}

            <Collapsible
              trigger={About}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/research">Research</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Seminars}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li>
                  <NavLink to="/courses/basic_lecture_series" style={navfont}>
                    Basic Lecture Series(BLS-4)
                  </NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/courses/seminar">Seminars</NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/courses/silva_life_system">
                    Silva Life System
                  </NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/">Silva Intuition System</NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/">Silva Mastery System</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Events}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li style={navfont}>
                  <NavLink to="/events/live">Live</NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/events/online">Online</NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Instructors}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li style={navfont}>
                  <NavLink to="/instructor">Instructors</NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/instructor/find_instructor">
                    Find Instructor
                  </NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/instructor/become_silva_instructor">
                    Become an Instructor
                  </NavLink>
                </li>
              </ul>
            </Collapsible>

            <Collapsible
              trigger={Products}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                {listData &&
                  listData.map((listItem) => (
                    <li key={listItem.course_id} style={navfont}>
                      <NavLink to={`/store/course/${listItem.course_id}`}>
                        {listItem.course_title}
                      </NavLink>
                    </li>
                  ))}
                <li style={navfont}>
                  <NavLink to="/store/books">Books</NavLink>
                </li>
                {/* <li><NavLink to="/about">Silva Life System & Silva Intuition System (The Complete Silva Method Course)</NavLink></li>
                           <li><NavLink to="/appoinment">Silva Life System</NavLink></li>
                           <li><NavLink to="/portfolioTwoColumn">Silva Intuition System</NavLink></li>
                           <li><NavLink to="/portfolioThreeColumn">Silva Method Complete Manifesting Program</NavLink></li>
                           <li><NavLink to="/portfolioSlider">Manifesting course</NavLink></li>
                           <li><NavLink to="/contact">Activating Intuition</NavLink></li>
                           <li><NavLink to="/notMatch">Healing & Problem Solving</NavLink></li>
                           <li><NavLink to="/about">Manage Body & Mind Simultaneously</NavLink></li>
                           <li><NavLink to="/appoinment">4 Steps to the Silva Life System</NavLink></li>
                           <li><NavLink to="/portfolioTwoColumn">Silva Long Relax Exercise by Jose Silva</NavLink></li>
                           <li><NavLink to="/portfolioThreeColumn">Silva Alpha Sound</NavLink></li>
                           <li><NavLink to="/portfolioSlider">Silva Theta Sound</NavLink></li>
                           <li><NavLink to="/contact">Home Study Programs</NavLink></li>
                           <li><NavLink to="/notMatch">Books</NavLink></li>
                           <li><NavLink to="/portfolioSlider">Dynamic Meditation</NavLink></li>
                           <li><NavLink to="/contact">Silva Master Classes</NavLink></li>
                           <li><NavLink to="/notMatch">Long Relax Exercise by Jose Silva</NavLink></li> */}
              </ul>
            </Collapsible>
            <Collapsible
              trigger={Blogs}
              triggerTagName="div"
              triggerOpenedClassName="icon_close"
              triggerClassName="iconAdd"
              open={false}
            >
              <ul className="sidebar_sub_menu text-white mt-3">
                <li style={navfont}>
                  <NavLink to="/store/blogs/">English Blogs</NavLink>
                </li>
                <li style={navfont}>
                  <NavLink to="/store/spanish-blogs/">Spanish Blogs</NavLink>
                </li>
              </ul>
            </Collapsible>
            <ul style={{ paddingBottom: "10px" }}>
              <li style={navfont}>
                <NavLink to="/login">Course Login</NavLink>
              </li>
            </ul>
            <ul style={{ paddingTop: "5px" }}>
              <li style={navfont}>
                <NavLink to="/">Silva Cases</NavLink>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Sidebar;
