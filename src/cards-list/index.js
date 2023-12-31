export default class CardsList {
  element;
  subElements = {};

  constructor({ data = [], Component = {} } = {}) {
    this.data = data;
    this.Component = Component;

    this.render();
    this.getSubElements();
    this.update(this.data);
  }

  get template() {
    return `
      <div>
        <div class="os-products-list" data-element="body"></div>
      </div>
    `;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");

    for (const subElement of elements) {
      const name = subElement.dataset.element;

      result[name] = subElement;
    }

    this.subElements = result;
  }

  update(data = []) {
    this.data = data;

    if (this.data.length) {
      const cards = data.map((item) => new this.Component(item).element);

      this.subElements.body.replaceChildren(...cards);
    } else {
      this.subElements.body.innerHTML = "No products found";
    }
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }
}
