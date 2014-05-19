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
		total: "44",
		ok: "44",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "15290",
		ok: "15290",
		ko: "-"
	},
	meanResponseTime : {
		total: "1869",
		ok: "1869",
		ko: "-"
	},
	standardDeviation : {
		total: "4415",
		ok: "4415",
		ko: "-"
	},
	percentiles1 : {
		total: "12920",
		ok: "12920",
		ko: "-"
	},
	percentiles2 : {
		total: "15290",
		ok: "15290",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 37,
		percentage: 84
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 7,
		percentage: 15
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "0",
		ok: "0",
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
		total: "43614",
		ok: "43614",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "16190",
		ok: "16190",
		ko: "-"
	},
	meanResponseTime : {
		total: "4",
		ok: "4",
		ko: "-"
	},
	standardDeviation : {
		total: "227",
		ok: "227",
		ko: "-"
	},
	percentiles1 : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles2 : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 43600,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 14,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "345",
		ok: "345",
		ko: "-"
	}
}


	}
		},
name: "Global Information",
path: "",
pathFormatted: "missing-name",
stats: {
	numberOfRequests : {
		total: "43658",
		ok: "43658",
		ko: "0"
	},
	minResponseTime : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	maxResponseTime : {
		total: "16190",
		ok: "16190",
		ko: "-"
	},
	meanResponseTime : {
		total: "6",
		ok: "6",
		ko: "-"
	},
	standardDeviation : {
		total: "273",
		ok: "273",
		ko: "-"
	},
	percentiles1 : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	percentiles2 : {
		total: "0",
		ok: "0",
		ko: "-"
	},
	group1 : {
		name: "t < 800 ms",
		count: 43637,
		percentage: 99
	},
	group2 : {
		name: "800 ms < t < 1200 ms",
		count: 0,
		percentage: 0
	},
	group3 : {
		name: "t > 1200 ms",
		count: 21,
		percentage: 0
	},
	group4 : {
		name: "failed",
		count: 0,
		percentage: 0
	},
	meanNumberOfRequestsPerSecond: {
		total: "345",
		ok: "345",
		ko: "-"
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
