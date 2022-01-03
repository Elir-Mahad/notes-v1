import React, { useState } from "react";
import {
  BlogName,
  BlogsMenu,
  TopBlogsMenu,
  TbMheading,
  BlogMenuBox,
  TbMicon,
  CustomMenu,
} from "../styles/Styles.js";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { MdClose } from "react-icons/md";
//
function Menu() {
  //
  const [openIcon, setOpenIcon] = useState(true);

  const [closeIcon, setCloseIcon] = useState(false);

  const [menuContent, setMenuContent] = useState(false);

  const showContent = () => {
    setMenuContent(true);
    setOpenIcon(false);
    setCloseIcon(true);
  };

  const hideContent = () => {
    setMenuContent(false);
    setOpenIcon(true);
    setCloseIcon(false);
  };
  //
  return (
    <CustomMenu>
      <BlogMenuBox>
        <TopBlogsMenu>
          <TbMheading>Writings</TbMheading>
          {openIcon && (
            <TbMicon onClick={showContent}>
              <BsChevronDown />
            </TbMicon>
          )}
          {closeIcon && (
            <TbMicon onClick={hideContent}>
              <MdClose />
            </TbMicon>
          )}
        </TopBlogsMenu>

        {menuContent && (
          <BlogsMenu>
            <Link href="/deploy-react-github-pages">
              <BlogName>How to deploy a react site on github pages.</BlogName>
            </Link>
            {/*  */}
            <Link href="/deploy-netlify">
              <BlogName>How to deploy a site on Netlify.</BlogName>
            </Link>
            {/*  */}

            <Link href="/git-notes">
              <BlogName>Git notes</BlogName>
            </Link>
          </BlogsMenu>
        )}
      </BlogMenuBox>
    </CustomMenu>
  );
}

export default Menu;
