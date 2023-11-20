class Shopping {
    handlerClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr class="shopping-element">
                        <td class="shopping-element__img">
                            <img src=${img} alt="${name}" width="100" height="100" />
                        </td>
                        <td class="shopping-element__name">${name}</td>
                        <td class="shopping-element__price">$${price.toLocaleString()}</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name"><ion-icon name="wallet"></ion-icon> Total:</td>
                        <td class="shopping-element__price">$${sumCatalog.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT_SHOPPING.innerHTML = html;
    }
};

const shoppingPage = new Shopping();
