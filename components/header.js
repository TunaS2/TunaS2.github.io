class Header extends HTMLElement {
    constructor()
    {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
          <style>
.header {
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header-container {
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.nav-menu {
  display: flex;
  list-style-type: none;
}

.nav-menu li {
  margin-left: 25px;
  position: relative;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 5px 0;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #9a8a78;
}

.nav-menu a.active {
  color: #9a8a78;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1;
  padding: 10px 0;
  top: 100%;
  left: 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  padding: 10px 15px;
  display: block;
  text-transform: none;
  font-weight: normal;
}

.dropdown-content a:hover {
  background-color: #f9f9f9;
}

@media screen and (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    padding: 20px;
  }
  
  .nav-menu.active {
    display: flex;
  }
  
  .nav-menu li {
    margin: 10px 0;
  }
  
  .dropdown-content {
    position: static;
    box-shadow: none;
    padding-left: 20px;
  }
}

.content {
  margin-top: 80px;
  padding: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
          </style>
          <header class="header">
      <div class="header-container">
        <a href="/" class="logo">
          <img src="/api/placeholder/200/80" alt="Fishbowl Logo" />
        </a>
        
        <button class="nav-toggle" id="navToggle">☰</button>
        
        <ul class="nav-menu" id="navMenu">
          <li><a href="/" class="active">Home</a></li>
          <li class="dropdown">
            <a href="#">Projects</a>
            <div class="dropdown-content">
              <a href="routine.html"> Routine Roulette</a>
              <a href="todo.html"> Tracker Overlay</a>
            </div>
          </li>
          <li><a href="hobby.html">Hobby List</a></li>
        </ul>
      </div>
    </header>
        `;
      }
    
}


customElements.define('header-component',Header);

