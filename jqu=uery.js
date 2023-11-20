$(document).ready(function () {
    $('#cart').hide();
    var cart_item_count = 0;

    $(".bi-bag-plus-fill").mouseenter(function () {
        $('#cart').show();
    });

    $("#cart").mouseleave(function () {
        $('#cart').hide();
    });

    function updateTotal() {
        // Обновление общей стоимости товаров в корзине
        var total = 0;
        $("#order .main").each(function () {
            var price = parseFloat($(this).find("#t_price").text().replace('$', '').trim());
            total += price;
        });

        // Отображение общей стоимости над кнопкой "Order"
        $("#total").text("Total: $" + total.toFixed(2));
    }

    $("#order").on("click", ".close", function () {
        $(this).parents(".main").remove();
        if (cart_item_count > 0) {
            cart_item_count--;
            $("#cart_item_count").text(cart_item_count);
        }
        updateTotal();
    });

    $('.cart-btn').click(function () {
        var img_src = $(this).parents(".cards").find("img").attr("src");
        var title = $(this).parents(".cards").find(".card-title").text();
        var price = $(this).parents(".cards").find(".text-success").text();

        var cart_item = `
        <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">
            <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0" style="padding: 0;">
                <img src="${img_src}" class="w-100" alt=""/>
            </div>
            <div class="col-md-3 d-flex flex-wrap align-content-center">
                <h6 style="font-size:13px;">${title}</h6>
            </div>
            <div class="col-md-3 d-flex flex-wrap align-content-center">
                <span class="mx-2"> 1 </span>
            </div>
            <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
                <h6 class="mt-2 d-flex"><span>$</span>${price}</h6>
            </div>
            <div class="col-md-1 d-flex flex-wrap align-content-center">
                <span class="close" style="cursor:pointer; font-size:25px">&times;</span>
            </div>
        </div>
        `;

        $("#order").append(cart_item);

        cart_item_count++;
        $("#cart_item_count").text(cart_item_count);

        // Вызов функции при добавлении нового товара в корзину
        updateTotal();
    });
});






$(document).ready(function () {
    $('.search-button').click(function () {
        var checker = 0;
        for (var i = 0; i < 12; i++) {
            var card = $("div").filter(".col-md-6")[i];
            var title = $("h5").filter(".card-title")[i].innerText.toUpperCase();
    
            if (title.indexOf($("#inp").val().toUpperCase()) > -1) {
                card.style.display = 'block';
                checker++;
            } else {
                card.style.display = 'none';
            }
        }
    
        if (checker > 0) {
            $("#not_find_any_thing").text("");
        } else {
            $("#not_find_any_thing").text("Нет результатов").fadeIn();
        }
    });
});

document.addEventListener("DOMContentLoaded", function(event) {


    const cartButtons = document.querySelectorAll('.cart-button');
    
    cartButtons.forEach(button => {
    
    button.addEventListener('click',cartClick);
    
    });
    
    function cartClick(){
    let button =this;
    button.classList.add('clicked');
    }
    
    
});

