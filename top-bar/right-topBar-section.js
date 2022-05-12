import { base } from "../common/base.js";

export class RightTopBarSection extends base {
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
