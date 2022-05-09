let topBar = {
  leftSide: [
    { title: "Sign Up" },
    { title: "Login d" },
    { title: "RSS Feeds" },
    { title: "Archived News" },
  ],
  rightSide: [
    { iconSrc: "icons/icon-linkedin.png" },
    { iconSrc: "icons/icon-twitter.png" },
    { iconSrc: "icons/icon-pinterest.png" },
    { iconSrc: "icons/icon-google-plus.png" },
    { iconSrc: "icons/icon-rss.png" },
  ],
};

class base {
  id = "";

  constructor(id) {
    this.id = id;
  }

  setHtmlContent(content) {
    this.id.innerHTML = content;
  }
}

class LeftTopBarSection extends base {
  LeftTopBarList = [];

  constructor(id) {
    super(id);
  }

  set setLeftTopBarList(data) {
    this.LeftTopBarList = data;
  }

  renderLeftTopBarItem(obj) {
    return `
     <li>
         ${obj.title}
      </li>
     `;
  }

  renderLeftTopBarItemsList(list) {
    return list
      .map((obj) => {
        return this.renderLeftTopBarItem(obj);
      })
      .join("");
  }

  render() {
    let content = this.renderLeftTopBarItemsList(this.LeftTopBarList);
    this.setHtmlContent(content);
  }
}

let id = document.getElementById("left-side-links");
let LeftTopBarBlock = new LeftTopBarSection(id);
LeftTopBarBlock.setLeftTopBarList = topBar.leftSide;
LeftTopBarBlock.render();

class rightTopBarSection extends base {
  rightTopBarList = [];

  constructor(id) {
    super(id);
  }

  set setRightTopBarList(data) {
    this.rightTopBarList = data;
  }

  renderRightTopBarItem(obj) {
    return `
    <li><a><img src="${obj.iconSrc}" /></a></li>
    `;
  }

  renderRightTopBarItemsList(list) {
    return list
      .map((obj) => {
        return this.renderRightTopBarItem(obj);
      })
      .join("");
  }

  render() {
    let content = this.renderRightTopBarItemsList(this.rightTopBarList);
    this.setHtmlContent(content);
  }
}

let rightSideId = document.getElementById("right-side-links");
let rightSideBlock = new rightTopBarSection(rightSideId);
rightSideBlock.setRightTopBarList = topBar.rightSide;
rightSideBlock.render();

let navBar = {
  navItems: [
    { title: "HOMEPAGE" },
    { title: "STYLEDEMO" },
    { title: "FULLWIDTH" },
    { title: "DROPDOWN" },
    { title: "GALLERY" },
    { title: "PORTFOLIO" },
    { title: "LINK TEXT" },
    { title: "LONG LINK TEXT" },
  ],
};

class navBarSection extends base {
  navBarList = [];

  constructor(id) {
    super(id);
  }

  set setNavBarList(data) {
    this.navBarList = data;
  }

  renderNavBarItem(obj) {
    return `
    <li class="nav-item"><a>${obj.title}</a></li>
    `;
  }

  renderNavBarItemsList(list) {
    return list
      .map((obj) => {
        return this.renderNavBarItem(obj);
      })
      .join("");
  }

  render() {
    let content = this.renderNavBarItemsList(this.navBarList);
    this.setHtmlContent(content);
  }
}

let navBarId = document.getElementById("nav-items");
let navBarBlock = new navBarSection(navBarId);
navBarBlock.setNavBarList = navBar.navItems;
navBarBlock.render();

let intro = {
  introItems: [
    {
      imgSize: "85 X 80px",
      itemName: "Vivamuslibero Augue",
      itemText:
        "Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
    },
    {
      imgSize: "85 X 80px",
      itemName: "Vivamuslibero Augue",
      itemText:
        "Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
    },
    {
      imgSize: "85 X 80px",
      itemName: "Vivamuslibero Augue",
      itemText:
        "Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
    },
    {
      imgSize: "85 X 80px",
      itemName: "Vivamuslibero Augue",
      itemText:
        "Lorem Ipsum is simply dummy text ofthe printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text",
    },
  ],
};

class introSection extends base {
  introList = [];

  constructor(id) {
    super(id);
  }
  set setIntroList(data) {
    this.introList = data;
  }

  renderIntroItem(obj) {
    return `
     <div class="intro-item">
         <div class="intro-item-image">
          <span>${obj.imgSize}</span>
          </div>
         <p class="intro-item-name">${obj.itemName}</p>
          <p class="intro-item-text">${obj.itemText}</p>
     </div>
     `;
  }

  renderIntroListItems(list) {
    return list
      .map((obj) => {
        return this.renderIntroItem(obj);
      })
      .join("");
  }

  render() {
    let introContent = this.renderIntroListItems(this.introList);
    this.setHtmlContent(introContent);
  }
}

let introId = document.getElementById("introItems");
let introBLock = new introSection(introId);
introBLock.setIntroList = intro.introItems;
introBLock.render();

let footerLinks = {
  link: [
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
    { linkName: "Lorem ipsum dolor sit" },
  ],
};

class footerLinksSection extends base {
  footerlinks = [];

  constructor(id) {
    super(id);
  }

  set setFooterlinks(data) {
    this.footerlinks = data;
  }

  renderfooterlink(obj) {
    return `
      <li class="footer-link">»<a>${obj.linkName}</a></li>
    `;
  }

  renderfooterlinks(list) {
    return list
      .map((obj) => {
        return this.renderfooterlink(obj);
      })
      .join("");
  }

  render() {
    let content = this.renderfooterlinks(this.footerlinks);
    this.setHtmlContent(content);
  }
}

let footerid = document.getElementById("footerLinks");
let footerBlock = new footerLinksSection(footerid);
footerBlock.setFooterlinks = footerLinks.link;
footerBlock.render();

let blogs = {
  blog: [
    {
      postTitle: "Post Title",
      postLink: "Admin, domainname.com",
      date: "Friday, 6th april 2000",
      blogText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industr",
      readMore: "readMore",
    },

    {
      postTitle: "Post Title",
      postLink: "Admin, domainname.com",
      date: "Friday, 6th april 2000",
      blogText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industr",
      readMore: "readMore",
    },
  ],
};

class blogsSection extends base {
  blogs = [];

  constructor(id) {
    super(id);
  }

  set setBlogs(data) {
    this.blogs = data;
  }

  renderBlog(obj) {
    return `
    <div class="blog-item" >
         <h5>${obj.postTitle}</h5>
         <h6>${obj.postLink}</h6>
         <h6>${obj.date}</h6>
         <p>
           ${obj.blogText}
         </p>
         <div class="blog-item-btn">
             <a>${obj.readMore} »</a>
         </div>
     </div>
    `;
  }
  renderBlogs(list) {
    return list
      .map((obj) => {
        return this.renderBlog(obj);
      })
      .join("");
  }
  render() {
    let content = this.renderBlogs(this.blogs);
    this.setHtmlContent(content);
  }
}

let blogId = document.getElementById("blogs");
let blogsBlock = new blogsSection(blogId);
blogsBlock.setBlogs = blogs.blog;
blogsBlock.render();

