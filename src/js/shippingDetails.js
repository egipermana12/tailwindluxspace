import { addClass, removeClass } from './utils-class';

let data = {
	"complate-name": "",
	"email-address": "",
	"address": "",
	"phone": "",
	"courier": "",
	"payment": "",
}

const inputs = document.querySelectorAll("#shipping-details input[data-input]");
for (var i = 0; i < inputs.length; i++) {
	const input = inputs[i];
	input.addEventListener("change", function(e){
		data[e.target.id] = e.target.value;
		console.log(data);
		check();
	})
}

const options = document.querySelectorAll("#shipping-details button[data-name]");
for (var i = 0; i < options.length; i++) {
	const option = options[i];

	option.addEventListener("click", function(){
		const value = this.attributes['data-value'].value;
		const name = this.attributes['data-name'].value;

		data[name] = value;

		check();

	});
}

function check(){
	const find = Object.values(data).filter((item,index) => item === "");
	if(find.length === 0){
		document.querySelector("#shipping-details button[type='submit']").disabled = false;

	}
}