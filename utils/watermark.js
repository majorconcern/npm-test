export const addWaterMark = str => {
	let ctx = document.createElement("canvas");
	ctx.width = 380;
	ctx.height = 300;
	ctx.style.display = "none";
	let cans = ctx.getContext("2d");
	cans.rotate((-18 * Math.PI) / 180);
	cans.font = "16px Microsoft YaHei";
	cans.fillStyle = "rgba(200, 200, 200, .3)";
	cans.textAlign = "left";
	cans.textBaseline = "Middle";
	cans.fillText(str, 0, 100);
	cans.save();
	return {
		backgroundImage: `url(${ctx.toDataURL()})`
	};
};