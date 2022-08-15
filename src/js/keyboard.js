export class Keyboard {
  #switchEl;
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  // checkingn the private

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }
  #addEvent() {
    this.#switchEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
  }
}
