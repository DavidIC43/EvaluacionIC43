class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Muñiz García Luis David
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
