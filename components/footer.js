const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
<style>
        footer {
          height: 60px;
          padding: 0 px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
          z-index:1000;
          font-family: "Audiowide", sans-serif;
          font-weight: 400;
          font-style: normal;
          bottom: 0;
          left: 0;
          width: 100%;
          position: relative;
          margin-top: -60px;
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
        p{
          padding-left: 20px;
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
        <p> &#169; 2025 </p>
        <ul class="social-row">
          <li><a href="https://github.com/TunaS2"><img src="imgs/github2.png"></a></li>
          <li><a href="https://www.linkedin.com/in/tuan-nguyen-656a48249/"><img src="imgs/linkedin.png"></a></li>
        </ul>
      </footer>
    `;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
