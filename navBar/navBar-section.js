import { base } from "../common/base.js";

export class NavBarSection extends base {
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
