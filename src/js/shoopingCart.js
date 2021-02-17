import { addClass, removeClass } from './utils-class';

const cart = ["1", "2", "3", "4"];
localStorage.setItem("cart", JSON.stringify(cart));

const shoopingCart = document.getElementById("shopping-cart");

if(shoopingCart) {
	const headCart = document.getElementById("headCart");
	const buttons = shoopingCart.querySelectorAll("button[data-delete-item]");

	for (var i = 0; i < buttons.length; i++) {
		const button = buttons[i];
		const id = button.attributes['data-delete-item'].value;

		button.addEventListener("click", function(){
			shoopingCart.querySelector(`div[data-row = '${id}']`).remove();

			const localStorageCart = localStorage.getItem("cart") && JSON.parse( localStorage.getItem("cart"));

			const found = localStorageCart.indexOf(id);
			if(found > -1){
				localStorageCart.splice(found, 1);
				localStorage.setItem("cart", JSON.stringify(localStorageCart));
			}

			if(localStorageCart.length === 0){
				removeClass(headCart, "cart-filled");
				removeClass(document.getElementById("cart-empty"), "hidden");
			}
		});
	}
}