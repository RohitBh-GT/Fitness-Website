var unirest = require("unirest");

var req = unirest("GET", "https://nutritionix-api.p.rapidapi.com/v1_1/search/te");

req.query({
	"fields": "item_name,item_id,brand_name,nf_calories,nf_total_fat"
});

req.headers({
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
