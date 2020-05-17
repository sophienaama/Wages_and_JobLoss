const budget_total = $(".total_budget span").text();

let wake_up_time = ""
let sleep_time = ""

$("body").on("keyup keydown keypress change", "#wakeup", function (e) {
	let wake_up_time = $(this).val();
	console.log(wake_up_time);
});

$("body").on("keyup keydown keypress change", "#sleep", function (e) {
	let sleep_time = $(this).val();
	console.log(sleep_time);

	if (wake_up_time !== "" && sleep_time !== "") {

		$(".budget").removeClass("inactive");
	}

});

let calc_total = 0;

$("body").on("input", ".slider [type='range']", function (e) {
	const this_slider = $(this);
	const this_slider_container = this_slider.closest("div.slider");
	const value = this_slider.val();

	this_slider_container.find("span").text(value);
	recalculate()
});

function recalculate() {
	let calc_total = 0;

	$(".slider [type='range']").each(function () {
		const this_slider = $(this);
		const this_slider_container = this_slider.closest("div.slider");
		const value = this_slider.val();
		const rate = parseFloat(this_slider_container.data('rate'));
		calc_total = calc_total + (value * rate * 30);

		if (calc_total != 0) { //checks to see if calc_total has a value.
			output = "$" + calc_total.toFixed(2)
			document.getElementById("money_output").innerHTML = (output)
		}
	});

	/*console.log(calc_total);*/
}