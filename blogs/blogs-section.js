import { base } from "../common/base.js";

export class BlogsSection extends base {
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