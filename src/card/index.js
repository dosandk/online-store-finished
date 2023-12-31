export default class Card {
  element;

  defaultData = {
    id: "",
    images: [],
    title: "",
    rating: 0,
    price: 0,
    category: "",
    brand: "",
    inStore: false,
  };

  constructor(data = {}) {
    this.data = { ...this.defaultData, ...data };

    this.render();
    this.getSubElements();
    this.addEventListeners();
  }

  get template() {
    return `
      <div class="os-product-card">
        <div class="os-product-img" style="background-image: url(${this.data.images[0]});"></div>

        <div class="os-product-content">
          <div class="os-product-price-wrapper">
            <div class="os-product-rating">
              <span>${this.data.rating}</span>
              <i class="bi bi-star"></i>
            </div>

            <div class="os-product-price">${this.data.price}</div>
          </div>

          <h5 class="os-product-title">${this.data.title}</h5>
          <p class="os-product-description">${this.data.category}</p>
        </div>

        <footer class="os-product-footer">
          ${this.footer}
        </footer>
      </div>
    `;
  }

  get footer() {
    const { inStore } = this.data;
    const labelValue = inStore ? "Remove from cart" : "Add to cart";
    const classValue = inStore ? "active" : "";

    return `
      <button class="os-btn-primary ${classValue}" data-element="addToCartBtn" type="button">
        ${labelValue}
      </button>
    `;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
  }

  addEventListeners() {
    const { addToCartBtn } = this.subElements;

    addToCartBtn.addEventListener("pointerdown", () => {
      if (this.data.inStore) {
        this.dispatchEvent("remove-from-cart", this.data);
        this.removeActive();
      } else {
        this.dispatchEvent("add-to-cart", this.data);
        this.setActive();
      }
    });

    document.addEventListener("removed-from-cart", (event) => {
      if (event.detail === this.data.id) {
        this.removeActive();
      }
    });
  }

  setActive() {
    const { addToCartBtn } = this.subElements;
    this.subElements.addToCartBtn.innerHTML = "Remove from cart";
    addToCartBtn.classList.add("active");
    this.data.inStore = true;
  }

  removeActive() {
    const { addToCartBtn } = this.subElements;
    this.subElements.addToCartBtn.innerHTML = "Add to cart";
    addToCartBtn.classList.remove("active");
    this.data.inStore = false;
  }

  dispatchEvent(type = "", payload = {}) {
    this.element.dispatchEvent(
      new CustomEvent(type, {
        detail: payload,
        bubbles: true,
      }),
    );
  }

  getSubElements() {
    const result = {};
    const subElements = this.element.querySelectorAll("[data-element]");

    for (const item of subElements) {
      result[item.dataset.element] = item;
    }

    this.subElements = result;
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
