class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
        <header>
        <h2 class="logo">Guitarista</h2>
        <nav class="navigation">
            <a href="main.html">Home</a>
            <a href="index.html">Products</a>
            <a href="aboutus.html">About us</a>
            <a href="comingsoon.html">Links</a>
            <a href="test.html"">Login</a>
            <a id="test" class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
            <ion-icon name="cart" class="cart"></ion-icon> ${count}
            </a>
        </header>
            </div>
        `;
        

        ROOT_HEADER.innerHTML = html;
    }
};

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);



