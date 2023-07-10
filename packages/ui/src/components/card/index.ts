import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('zy-card')
export class ZyCard extends LitElement {
  @property()
  version = 'STARTING'

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `
  }
}
