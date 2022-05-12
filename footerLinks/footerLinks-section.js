import { base } from "../common/base.js";

export class FooterLinksSection extends base {
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
