import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('zy-button')
export class ZyButton extends LitElement {
  @property()
  version = 'STARTING'

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `
  }
}