import { LeftTopBarSection } from "./top-bar/left-topBar-Section.js";
import { RightTopBarSection} from "./top-bar/right-topBar-section.js";
import { NavBarSection } from "./navBar/navBar-section.js";
import { IntroSection } from "./intro/intro-section.js";
import { FooterLinksSection } from "./footerLinks/footerLinks-section.js";
import { BlogsSection } from "./blogs/blogs-section.js";
import { introData } from "./intro/intro-data.js";
import { navBarData } from "./navBar/navBar-data.js";
import {topBarData} from "./top-bar/topBar-data.js";
import {footerLinksData} from "./footerLinks/footerLinks-data.js"
import {blogsData} from "./blogs/blogs-data.js"

let id = document.getElementById("left-side-links");
let LeftTopBarBlock = new LeftTopBarSection(id);
LeftTopBarBlock.setLeftTopBarList = topBarData.leftSide;
LeftTopBarBlock.render();

let rightSideId = document.getElementById("right-side-links");
let rightSideBlock = new RightTopBarSection(rightSideId);
rightSideBlock.setRightTopBarList = topBarData.rightSide;
rightSideBlock.render();

let navBarId = document.getElementById("nav-items");
let navBarBlock = new NavBarSection(navBarId);
navBarBlock.setNavBarList = navBarData.navItems;
navBarBlock.render();

let introId = document.getElementById("introItems");
let introBLock = new IntroSection(introId);
introBLock.setIntroList = introData.introItems;
introBLock.render();

let footerid = document.getElementById("footerLinks");
let footerBlock = new FooterLinksSection(footerid);
footerBlock.setFooterlinks = footerLinksData.link;
footerBlock.render();


let blogId = document.getElementById("blogs");
let blogsBlock = new BlogsSection(blogId);
blogsBlock.setBlogs = blogsData.blog;
blogsBlock.render();

