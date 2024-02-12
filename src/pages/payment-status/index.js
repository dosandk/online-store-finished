import { loadStripe } from "@stripe/stripe-js";
import { httpRequest } from "../../request";

// TODO: move to env config
const STRIPE_API_KEY =
  "pk_test_51OhTCmDf0QjduFWJEpbxu9RBle3CZTnl7uDWLD68F2nu44nsLPEAtIawuGiqf4T6IJrK1o10Dnhy1FwsmP8dooms00HxIfUBe1";

// TODO: set urls for microservices to env config
const PAYMENT_URL = "http://localhost:3003/api/payments";

export default class Page {
  constructor(...props) {
    this.render();
    this.initPaymentForm();
  }

  async initPaymentForm() {
    try {
      const stripe = await loadStripe(STRIPE_API_KEY);
      const [response] = await httpRequest(PAYMENT_URL, {
        method: "POST",
      });

      const { clientSecret } = response;

      const checkout = await stripe.initEmbeddedCheckout({
        clientSecret,
      });

      checkout.mount("#checkout");
    } catch (error) {
      throw new Error("Stripe initialization error: ", error.message);
    }
  }

  get template() {
    return `<div>
      <h2 class="app-page-title">Payment Page</h2>
      <div id="checkout"></div>
    </div>`;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;
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
