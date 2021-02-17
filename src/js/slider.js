import { addClass, removeClass } from './utils-class';

const sliders = document.getElementsByClassName("slider");

for (var i = 0; i < sliders.length; i++) {
	const slider = sliders[i];

	const items = document.querySelectorAll(".slider .item");
	const preview = document.querySelector("div > .preview");

	for (var item = 0; item < items.length; item++) {
		const itemTrigger = items[item];

		itemTrigger.addEventListener("click", function(){
			const dataImg = this.attributes?.["data-img"]?.value;

			for (var eachItemTrigger = 0; eachItemTrigger < items.length; eachItemTrigger++) {
				const itemRemove = items[eachItemTrigger];

				removeClass(itemRemove, "selected");
			}
				addClass(itemTrigger, "selected");

				preview.querySelector("img").setAttribute("src", dataImg);
		});
	}
}