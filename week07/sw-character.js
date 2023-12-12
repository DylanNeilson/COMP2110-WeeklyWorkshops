import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class SWCharacter extends LitElement {

    static properties = {
      url: { type: String },
      _data: { state: true }
    }
  
    static styles = css`
      .card {
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        margin: 5px;
        width: 200px;
        height: 300px;
      }
    `;
  
    connectedCallback() {
      super.connectedCallback();
      this._fetch();
    }
  
    _fetch() {
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
          this._data = data;
        });
    }
  
    render() {
      if (this._data) {
        return html`
          <div class="card">
            <h2>${this._data.name}</h2>
            <p>Height: ${this._data.height}</p>
            <p>Mass: ${this._data.mass}</p>
            <p>Hair color: ${this._data.hair_color}</p>
            <p>Skin color: ${this._data.skin_color}</p>
            <p>Eye color: ${this._data.eye_color}</p>
            <p>Birth year: ${this._data.birth_year}</p>
          </div>
        `;
      } else {
        return html`<p>Loading...</p>`;
      }
    }
  }
  
  customElements.define('sw-character', SWCharacter);