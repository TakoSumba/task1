import { base } from "../common/base.js";

export class IntroSection extends base {
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
