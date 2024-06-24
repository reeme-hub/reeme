import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="about">About Us</Link>
          </li>
          <li className="menu-item">
            <Link href="tour">Tours</Link>
          </li>
          <li className="menu-item">
            <Link href="destination">Destination</Link>
          </li>
          <li className="menu-item">
            <Link href="gallery">Gallery</Link>
          </li>
          <li className="menu-item">
            <Link href="contact">Contact</Link>
          </li>
          <li className="menu-item search-item">
            <div
              className="search-btn"
              data-bs-toggle="modal"
              data-bs-target="#search-modal"
              onClick={() => setSearchModal(true)}
            >
              <i className="far fa-search" />
            </div>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="about">About Us</Link>
        </li>
        <li className="menu-item">
          <Link href="tour">Tours</Link>
        </li>
        <li className="menu-item">
          <Link href="destination">Destination</Link>
        </li>
        <li className="menu-item">
          <Link href="gallery">Gallery</Link>
        </li>
        <li className="menu-item">
          <Link href="contact">Contact</Link>
        </li>
        <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
