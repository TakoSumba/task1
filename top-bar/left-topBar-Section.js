import { base } from "../common/base.js";

export class LeftTopBarSection extends base {
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
  