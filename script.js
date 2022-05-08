let containerRenderer = {
  setHtmlContent: function (element, content) {
    element.innerHTML = content;
  },

  renderItemsList: function (list, itemRendere) {
    return list
      .map((obj) => {
        return itemRendere(obj);
      })
      .join("");
  },

  render: function (data, containerId, itemRendere) {
    const element = document.getElementById(containerId);
    let content = this.renderItemsList(data, itemRendere);
    this.setHtmlContent(element, content);
  },
};

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
containerRenderer.render(topBar.leftSide, "left-side-links", (obj) => {
  return `
        <li>
            ${obj.title}
          </li>
      `;
});
containerRenderer.render(topBar.rightSide, "right-side-links", (obj) => {
  return `
  <li><a><img src="${obj.iconSrc}" /></a></li>
      `;
});

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

containerRenderer.render(navBar.navItems, "nav-items", (obj) => {
  return `
    <li class="nav-item"><a>${obj.title}</a></li>
        `;
});

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
containerRenderer.render(intro.introItems, "introItems", (obj) => {
  return `
  <div class="intro-item">
    <div class="intro-item-image">
    <span>${obj.imgSize}</span>
    </div>
    <p class="intro-item-name">${obj.itemName}</p>
    <p class="intro-item-text">${obj.itemText}</p>
</div>
        `;
});

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
containerRenderer.render(footerLinks.link, "footerLinks", (obj) => {
    return `
    <li class="footer-link">»<a>${obj.linkName}</a></li>
          `;
  });

  let blogs={
    blog:[
        {postTitle:"Post Title",
        postLink:'Admin, domainname.com',
        date:'Friday, 6th april 2000',
        blogText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industr',
        readMore:'readMore'
    },
   
        {postTitle:"Post Title",
        postLink:'Admin, domainname.com',
        date:'Friday, 6th april 2000',
        blogText:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industr',
        readMore:'readMore'}]
    }
    

  containerRenderer.render(blogs.blog, "blogs", (obj) => {
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
  });