class AppBar extends HTMLElement {

    connectedCallbacl() {
        this.render();
    }

    render() {
        this.innerHTML = "<h2>Club Finder</h2>";
    }
}

customElements.define("app-bar", AppBar);