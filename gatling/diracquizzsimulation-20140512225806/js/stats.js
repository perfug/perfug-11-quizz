var stats = {
	type: "GROUP",
contents: {
		
				"diracquizz-deflate-f69b855181caa0fc0697a7f04d39f11f": {
		type: "REQUEST",
		name: "diracquizz deflate",
path: "diracquizz deflate",
pathFormatted: "diracquizz-deflate-f69b855181caa0fc0697a7f04d39f11f",
stats: {
	numberOfRequests : {
		total: "94",
		ok: "94",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "3630",
		ok: "3630",
		ko: "-"
	},
	meanResponseTime : {
		total: "281",
		ok: "281",
		ko: "-"
	},
	standardDeviation : {
		total: "654",
		ok: "654",
		ko: "-"
	},
	percentiles1 : {
		total: "1650",
		ok: "1650",
		ko: "-"
	},
	percentiles2 : {
		total: "1960",
		ok: "1960",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 79,
		percentage: 84
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 1,
		percentage: 1
	},
	group3 : {
		name: "t > 1200 ms",
		count: 14,
		percentage: 14
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "1",
		ok: "1",
		ko: "-"
	}
}


	}
		,		
				"diracquizz-inflate-189111b19388461a267d141d33980324": {
		type: "REQUEST",
		name: "diracquizz inflate",
path: "diracquizz inflate",
pathFormatted: "diracquizz-inflate-189111b19388461a267d141d33980324",
stats: {
	numberOfRequests : {
		total: "391084",
		ok: "391083",
		ko: "1"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	maxResponseTime : {
		total: "4270",
		ok: "4270",
		ko: "10"
	},
	meanResponseTime : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	standardDeviation : {
		total: "20",
		ok: "20",
		ko: "0"
	},
	percentiles1 : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	percentiles2 : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	group1 : {
		name: "t < 800 ms",
		count: 391049,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 34,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 1,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "3232",
		ok: "3232",
		ko: "0"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "391178",
		ok: "391177",
		ko: "1"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	maxResponseTime : {
		total: "4270",
		ok: "4270",
		ko: "10"
	},
	meanResponseTime : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	standardDeviation : {
		total: "23",
		ok: "23",
		ko: "0"
	},
	percentiles1 : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	percentiles2 : {
		total: "0",
		ok: "0",
		ko: "10"
	},
	group1 : {
		name: "t < 800 ms",
		count: 391128,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 1,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 48,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 1,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "3233",
		ok: "3233",
		ko: "0"
	}
}



}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
