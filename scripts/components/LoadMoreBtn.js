export default class LoadMoreBtn {
  static classes = {
    hidden: "hidden",
  };
  constructor({ selector, isHidden = false }) {
    this.button = this.getButton(selector);
    // if (isHidden) this.hide();
    isHidden && this.hide();
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

  hide() {
    this.button.classList.add(LoadMoreBtn.classes.hidden);
  }
  show() {
    this.button.classList.remove(LoadMoreBtn.classes.hidden);
  }

  disable() {
    this.button.disable = true;
    this.button.textContent = "Loading..";
  }
  enable() {
    this.button.disable = false;
    this.button.textContent = "Load more";
  }
  end() {
    this.button.disable = true;
    this.button.textContent = "The end";
  }
}
