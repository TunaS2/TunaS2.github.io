const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<style>
        footer {
          height: 60px;
          padding: 0 px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #dfdfe2;
        }

        ul li {
          list-style: none;
          display: inline;
        }

        a {
          margin: 0 15px;
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #333;
        }

        .social-row {
          font-size: 20px;
        }

        .social-row li a {
          margin: 0 15px;
        }
        li img {
          max-height: 35px;
          width:auto;  
        }
      </style>
      <footer>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <ul class="social-row">
          <li><a href="#"><img src="imgs/github.png"></a></li>
          <li><a href="#"><img src="imgs/linkedin.png"></a></li>
        </ul>
      </footer>
    `;


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode:'closed'});
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);