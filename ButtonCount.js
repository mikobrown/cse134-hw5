class ButtonCount extends HTMLElement {
    count;

    constructor() {
        super();

        this.count = 0;

        const shadowRoot = this.attachShadow({mode: 'open'});

        const template = document.createElement('template');
        template.innerHTML = `
            <button><slot></slot></button>
        `;

        shadowRoot.appendChild(template.content.cloneNode(true));

        this.addEventListener('click', () => {
            this.count += 1;
            this.innerText = `Times Clicked: ${this.count}`;
        });
    }
}

customElements.define('button-count', ButtonCount);