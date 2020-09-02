import React from "react";
// import PropTypes from "prop-types";
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "components/Badge";
import Avatar from "components/Avatar";

import { Link, matchPath, useLocation } from "react-router-dom";

import profileImage from "assets/images/face-male-1.jpg";
import "styled-components/macro";

function NavBar({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ to, icon, showBadge, ...rest }) {
  const loc = useLocation();
  const active = !!matchPath(loc.pathname, { path: to, exact: to === "/" });
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  );
}

function NavBarDemo({ ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItemDemo showBadge active icon={faCommentDots} />
        <MenuItemDemo icon={faUsers} />
        <MenuItemDemo icon={faFolder} />
        <MenuItemDemo icon={faStickyNote} />
        <MenuItemDemo icon={faEllipsisH} />
        <MenuItemDemo
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItemDemo({ icon, active, showBadge, ...rest }) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}


NavBar.propTypes = {};

export default NavBar;
export { MenuItem, NavBarDemo, MenuItemDemo };
