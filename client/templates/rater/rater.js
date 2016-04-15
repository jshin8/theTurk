Template.rater.rendered = function() {
	var array = makeRandomizedArray();
	Session.setPersistent('array', array);
	Session.set('index', 0);

	//preloads images
	var sourceArray = []
	_.each(array, function(number) {
		sourceArray.push('https://s3.amazonaws.com/imageproj/im' + number + '.jpg')
	})
	var images = [];
	_.each(sourceArray, function(source,i) {
		images[i] = new Image();
		images[i].src = source;
	})
};

Template.rater.helpers({
	photoNumber: function() {
		var array = Session.get('array');
		var index = Session.get('index');
		if (index !== 50) {
			return array[index]
		}
		else {
			FlowRouter.go('/exit');
		}
	}
});


Template.body.events({
	'keyup': function(event,template) {
		var location = event.currentTarget.URL;
		var array = Session.get('array');
		var index = Session.get('index');
		var turkerId = Session.get('turkerId');
		if (location.match('/rater') && event.which==65) {
			console.log('ya');
			Session.set('index', index+1);
			Meteor.call('liker', turkerId ,array ,index , function(error,result) {
				if (error) {
					console.log('error: ', error);
				}
			});
		}
		else if (location.match('/rater') && event.which==76) {
			Session.set('index', index+1);
			Meteor.call('disliker', turkerId ,array ,index , function(error,result) {
				if (error) {
					console.log('error: ', error);
				}
			});
		} 
	}
});


var makeRandomizedArray = function() {
	var arrayImageNumbers=[4,6,7,13,15,17,20,21,23,29,33,36,38,43,44,45,48,52,63,67,69,70,74,76,79,80,81,83,85,87,88,90,94,102,106,108,109,110,112,119,121,125,128,129,130,131,132,133,137,143,145,147,152,159,160,162,164,165,166,167,170,171,172,173,175,179,180,187,189,191,192,198,199,200,204,206,207,211,227,231,232,233,237,242,243,251,252,253,254,255,256,260,261,263,268,275,282,284,285,288,292,295,296,302,304,306,308,309,310,312,314,315,317,319,324,326,327,329,336,338,339,345,346,348,349,357,358,362,363,366,372,373,376,378,381,382,387,400,401,402,403,405,406,407,413,415,417,419,420,423,425,427,431,434,446,452,453,455,459,460,462,467,468,469,471,474,476,478,481,485,487,488,489,495,497,498,499,500,501,502,505,507,509,513,517,525,530,542,544,547,549,552,553,554,557,574,577,581,593,594,596,598,601,602,606,613,614,618,620,621,631,636,638,640,645,646,647,653,657,658,659,666,667,677,685,687,691,694,696,698,702,709,711,720,723,725,729,730,731,734,735,738,740,742,743,744,745,747,750,752,753,757,759,762,775,776,779,781,782,783,784,785,787,789,792,794,796,799,802,808,810,814,817,818,831,832,833,834,835,836,843,849,850,860,861,865,866,867,869,873,876,879,883,885,886,890,894,897,902,903,909,911,914,918,925,928,931,933,950,952,953,954,956,966,968,969,978,984,986,987,989,1004,1008,1015,1023,1026,1029,1034,1035,1037,1038,1039,1040,1047,1048,1052,1055,1060,1063,1065,1069,1073,1082,1085,1088,1089,1091,1095,1097,1098,1101,1104,1107,1108,1110,1112,1116,1120,1122,1128,1149,1150,1154,1155,1156,1160,1162,1165,1176,1177,1182,1183,1186,1188,1199,1200,1202,1204,1209,1217,1219,1229,1232,1233,1240,1246,1251,1253,1263,1264,1277,1280,1284,1286,1294,1295,1297,1301,1303,1305,1311,1319,1320,1325,1335,1337,1344,1347,1348,1350,1352,1355,1360,1361,1367,1377,1381,1382,1383,1386,1395,1399,1400,1406,1408,1414,1416,1418,1419,1420,1422,1424,1428,1429,1430,1437,1443,1445,1448,1449,1455,1456,1457,1460,1461,1464,1469,1472,1476,1477,1479,1488,1491,1496,1497,1499,1500,1502,1506,1515,1532,1542,1543,1544,1548,1549,1550,1551,1552,1556,1559,1561,1567,1571,1572,1574,1578,1588,1591,1595,1597,1598,1599,1600,1609,1611,1613,1615,1618,1619,1620,1621,1625,1627,1629,1633,1639,1643,1645,1647,1649,1660,1663,1671,1673,1676,1678,1679,1695,1697,1699,1705,1706,1709,1711,1712,1715,1719,1720,1724,1729,1730,1736,1737,1738,1739,1740,1741,1746,1748,1749,1752,1757,1764,1771,1772,1775,1778,1782,1786,1791,1792,1800,1802,1806,1807,1815,1817,1820,1824,1825,1829,1831,1832,1835,1836,1838,1841,1842,1860,1867,1869,1871,1873,1877,1879,1882,1889,1890,1892,1895,1898,1900,1903,1905,1906,1909,1914,1915,1916,1918,1919,1921,1925,1930,1933,1938,1952,1955,1958,1962,1982,1986,1989,1992,1994,1998,1999,2004,2007,2008,2015,2016,2018,2029,2033,2036,2043,2045,2047,2048,2049,2058,2059,2063,2066,2075,2077,2079,2089,2090,2091,2092,2093,2099,2100,2106,2108,2111,2113,2119,2122,2130,2136,2138,2150,2152,2155,2156,2161,2162,2167,2171,2174,2178,2182,2194,2196,2198,2199,2204,2208,2210,2215,2218,2220,2223,2226,2227,2228,2232,2234,2235,2238,2243,2244,2245,2246,2254,2255,2256,2259,2265,2268,2270,2278,2291,2293,2297,2301,2302,2306,2310,2320,2323,2330,2331,2333,2335,2336,2350,2351,2353,2360,2362,2368,2373,2378,2381,2386,2387,2389,2393,2399,2406,2410,2414,2415,2416,2417,2420,2421,2424,2428,2429,2430,2431,2444,2448,2449,2452,2453,2461,2462,2465,2466,2467,2470,2473,2480,2487,2498,2500,2501,2506,2508,2511,2512,2516,2517,2525,2531,2535,2540,2547,2549,2550,2551,2555,2556,2557,2559,2563,2564,2565,2568,2575,2576,2581,2583,2585,2586,2590,2592,2603,2604,2605,2608,2610,2613,2615,2616,2618,2622,2623,2624,2625,2627,2631,2633,2637,2639,2641,2643,2644,2647,2650,2652,2655,2656,2657,2661,2668,2669,2675,2677,2678,2679,2681,2683,2684,2686,2690,2696,2697,2700,2707,2708,2709,2714,2715,2716,2717,2718,2721,2725,2728,2740,2742,2749,2750,2756,2758,2759,2760,2764,2770,2774,2775,2776,2779,2787,2792,2796,2799,2803,2806,2809,2816,2820,2824,2826,2831,2837,2838,2839,2842,2843,2851,2853,2856,2862,2865,2867,2874,2876,2878,2883,2894,2900,2901,2913,2915,2918,2921,2923,2925,2933,2934,2935,2938,2940,2941,2945,2947,2960,2961,2964,2965,2967,2969,2980,2985,2987,2990,2991,6450,6451,6453,6454,6456,6464,6467,6468,6470,6471,6473,6477,6481,6482,6483,6484,6485,6488,6489,6490,6492,6493,6499,6501,6506,6507,6508,6517,6518,6528,6533,6534,6538,6544,6546,6550,6559,6564,6568,6569,6571,6577,6581,6588,6591,6593,6595,6598,6604,6605,6606,6613,6617,6622,6627,6629,6634,6637,6640,6645,6646,6652,6654,6655,6656,6658,6661,6663,6664,6666,6667,6668,6669,6673,6674,6685,6688,6690,6692,6696,6698,6704,6709,6711,6713,6714,6717,6718,6719,6723,6728,6731,6733,6734,6736,6737,6743,6745,6748,6750,6752,6754,6756,6762,6764,6766,6768,6769,6771,6776,6778,6779,6780,6781,6783,6784,12913,12917,12928,12929,12937,12938,12940,12949,12951,12955,12957,12960,12962,12964,12968,12969,12975,12976,12984,12987,12990,12995,12998,13001,13006,13022,13033,13034,13035,13037,13038,13039,13041,13053,13054,13057,13059,13061,13062,13065,13067,13072,13075,13078,13083,13087,19211,19212,19213,19214,19217,19218,19221,19222,19223,19228,19230,19232,19233,19237,19239,19240,19244,19247,19248,19249,19250,19257,19262,19263,19267,19275,19276,19288,19290,19301,19302,19316,19318,19323,19327,19328,19331,19333,19342,19343,19350,19357,19359,19366,19372,19386,19393,19395,19396,19398,19399,19400,19401,19404,19405,19407,19413,19416,19419,19420,19423,19428,19430,19443,19445,19449,19460,19469,19478,19483,19484,19485,19489,19490,19491,19496,19497,19499,19500,19501,19532,19536,19546,19551,19567,19568,19570,19571,19585,19590,19593,19594,19598,19604,19612,19626,19627,19634,19643,19656,19663,19681,19689,19690,19702,19707,19710,19712,19721,19722,19733,19734,19737,19738,19744,19746,19749,19763,19767,19770,19772,19778,19785,19786,19791,19795,19796,19797,19812,19825,19832,19834,19847,19849,19852,19854,19856,19858,19860,19863,19870,19871,19877,19878,19887,19897,19926,19927,19936,19946,19950,19957,19961,19966,19973,19976,19978,19980,19981,19987,19991,19996,20012,20015,20024,20026,20034,20035,20038,20041,20056,20059,20071,20072,20074,20078,20079,20080,20084,20086,20089,20093,20106,20109,20111,20112,20113,20117,20119,20122,20127,20128,20130,20134,20140,20143,20144,20154,20155,20162,20163,20169,20179,20187,20188,20190,20195,20207,20209,20212,20218,20219,20222,20227,20229,20235,20239,20246,20249,20251,20252,20256,20259,20261,20264,20269,20279,20284,20285,20287,20288,20296,20302,20306,20310,20312,20323,20325,20340,20341,20350,20352,20355,20365,20370,20372,20373,20379,20381,20383,20385,20387,20388,20397,20399,20400,20408,20414,20415,20418,20427,20432,20433,20435,20440,20441,20447,20456,20458,20459,20475,20479,20486,20489,20496,20498,20499,20505,20508,20513,20516,20517,20518,20522,20523,20529,20532,20533,20534,20539,20543,20544,20549,20550,20553,20554,20560,20562,20563,20568,20569,20574,20579,20581,20590,20592,20593,20603,20608,20610,20611,20614,20616,20622,20627,20631,20635,20640,20644,20645,20646,20648,20649,20654,20656,20657,20660,20661,20667,20668,20669,20679,20681,20685,20688,20694,20695,20701,20708,20710,20711,20714,20718,20727,20731,20742,20746,20750,20751,20755,20756,20758,20762,20763,20764,20768,20769,20774,20780,20789,20791,20796,20797,20800,20801,20811,20823,20824,20826,20831,20832,20836,20837,20839,20841,20844,20847,20848,20851,20861,20864,20865,20870,20874,20887,20893,20904,20906,20909,20912,20913,20914,20917,20920,20921,20922,20926,20927,20929,20932,20936,20941,20943,20947,20952,20964,20967,20969,20970,20978,20982,20989,20992,21008,21011,21013,21014,21015,21017,21018,21020,21023,21035,21038,21040,21044,21047,21048,21052,21054,21058,21068,21069,21074,21075,21077,21079,21081,21082,21088,21089,21091,21094,21095,21096,21104,21108,21119,21121,21128,21130,21132,21146,21153,21154,21155,21161,21163,21176,21177,21182,21186,21191,21195,21201,21208,21209,21215,21216,21229,21232,21240,21243,21244,21252,21253,21277,21281,21284,21285,21287,21290,21296,21300,21306,21307,21312,21316,21323,21324,21326,21327,21328,21332,21355,21369,21372,21377,21393,21395,21400,21402,21411,21419,21422,21424,21425,21429,21433,21438,21439,21441,21442,21446,21450,21459,21462,21465,21490,21495,21500,21501,21502,21510,21517,21519,21527,21529,21530,21531,21533,21540,21543,21546,21547,21557,21566,21567,21571,21575,21577,21578,21580,21588,21590,21596,21612,21616,21618,21623,21626,21629,21636,21652,21654,21657,21658,21669,21674,21678,21680,21681,21684,21688,21692,21697,21701,21702,21703,21704,21706,21716,21719,21721,21727,21729,21730,21738,21744,21752,21762,21765,21767,21769,21784,21793,21797,21799,21802,21808,21811,21818,21827,21829,21833,21846,21851,21860,21869,21870,21871,21878,21880,21887,21890,21891,21893,21897,21898,21903,21906,21909,21911,21917,21921,21923,21931,21932,21933,21938,21941,21944,21945,21947,21957,21964,21968,21970,21980,21981,21982,21984,21993,21995,21996,22004,22005,22007,22008,22009,22010,22016,22017,22027,22031,22032,22036,22039,22041,22046,22048,22050,22054,22055,22056,22059,22061,22083,22096,22098,22099,22105,22106,22109,22110,22111,22112,22114,22116,22127,22129,22136,22140,22146,22149,22150,22168,22174,22184,22185,22193,22196,22197,22200,22201,22207,22208,22215,22227,22228,22229,22230,22237,22239,22244,22247,22248,22249,22253,22255,22256,22258,22260,22269,22276,22277,22288,22290,22292,22293,22295,22298,22307,22313,22314,22315,22323,22327,22328,22338,22340,22341,22342,22344,22355,22356,22366,22372,22373,22374,22376,22379,22381,22382,22398,22404,22408,22414,22416,22419,22423,22426,22430,22434,22442,22443,22445,22447,22448,22453,22465,22469,22470,22474,22491,22494,22495,22498,22500,22502,22518,22522,22523,22528,22531,22534,22535,22536,22545,22548,22554,22555,22556,22557,22560,22562,22563,22567,22569,22571,22573,22574,22578,22580,22585,22586,22588,22589,22592,22595,22596,22597,22598,22600,22601,22604,22606,22613,22618,22620,22623,22631,22638,22641,22644,22649,22653,22659,22668,22676,22677,22679,22680,22684,22686,22689,22690,22692,22695,22704,22705,22707,22708,22712,22716,22725,22728,22729,22735,22738,22740,22745,22748,22749,22754,22758,22761,22766,22767,22768,22772,22773,22783,22785,22787,22797,22799,22802,22805,22807,22825,22826,22827,22828,22829,22830,22831,22833,22839,22841,22844,22848,22852,22856,22860,22865,22871,22873,22877,22881,22882,22884,22885,22895,22897,22903,22905,22907,22912,22913,22914,22920,22921,22924,22925,22926,22933,22939,22942,22946,22951,22956,22960,22961,22962,22974,22982,22983,22986,22989,22990,22991,22992,22996,22998,23000,23003,23005,23006,23010,23013,23015,23018,23024,23029,23032,23033,23037,23045,23048,23049,23052,23053,23054,23056,23059,23060,23061,23062,23064,23068,23070,23074,23083,23084,23086,23091,23096,23111,23112,23114,23127,23128,23133,23139,23140,23144,23147,23148,23152,23156,23158,23160,23163,23170,23173,23175,23176,23181,23184,23185,23187,23190,23197,23199,23202,23203,23210,23214,23215,23227,23230,23233,23236,23240,23241,23242,23244,23245,23247,23261,23264,23270,23271,23276,23277,23279,23287,23291,23292,23299,23300,23301,23302,23309,23310,23315,23317,23320,23321,23325,23332,23335,23336,23338,23340,23343,23345,23346,23352,23354,23355,23361,23364,23374,23377,23386,23387,23388,23393,23395,23396,23399,23404,23406,23409,23411,23413,23415,23417,23421,23424,23427,23428,23429,23432,23436,23440,23441,23442,23447,23450,23451,23452,23453,23455,23461,23466,23474,23475,23476,23481,23484,23485,23490,23494,23495,23504,23505,23507,23511,23513,23516,23523,23524,23525,23526,23527,23530,23532,23537,23542,23549,23551,23555,23559,23564,23565,23569,23570,23573,23576,23578,23584,23585,23586,23587,23593,23594,23608,23610,23611,23614,23621,23622,23629,23635,23636,23640,23642,23644,23645,23647,23649,23655,23661,23663,23666,23667,23669,23673,23674,23677,23679,23680,23681,23686,23689,23690,23696,23698,23702,23703,23706,23710,23712,23714,23718,23721,23722,23731,23737,23740,23741,23748,23750,23756,23757,23760,23763,23764,23769,23772,23775,23780,23783,23785,23791,23793,23795,23796,23798,23799,23800,23801,23802,23803,23807,23812,23816,23822,23827,23828,23831,23832,23837,23840,23845,23853,23855,23858,23862,23863,23867,23869,23870,23871,23872,23874,23882,23886,23890,23892,23894,23895,23900,23902,23904,23912,23913,23916,23918,23919,23920,23922,23924,23926,23929,23933,23934,23937,23938,23940,23941,23942,23946,23953,23962,23965,23972,23974,23975,23976,23980,23986,23999,24003,24008,24009,24014,24015,24019,24022,24025,24027,24028,24032,24033,24035,24037,24039,24047,24048,24054,24057,24059,24060,24064,24065,24066,24068,24069,24070,24077,24080,24081,24082,24083,24086,24090,24092,24095,24096,24097,24100,24104,24105,24107,24111,24112,24116,24117,24121,24126,24127,24128,24142,24143,24146,24147,24148,24155,24160,24165,24169,24170,24173,24182,24184,24189,24191,24196,24200,24201,24203,24205,24214,24219,24220,24230,24233,24236,24241,24252,24253,24254,24266,24268,24270,24271,24273,24275,24279,24281,24284,24286,24288,24290,24291,24300,24302,24303,24310,24311,24314,24315,24325,24338,24342,24343,24344,24346,24347,24354,24357,24364,24365,24368,24372,24374,24376,24378,24382,24386,24391,24392,24396,24398,24400,24402,24404,24407,24409,24410,24413,24414,24418,24420,24429,24435,24439,24442,24445,24446,24447,24448,24453,24456,24457,24458,24467,24471,24473,24480,24482,24483,24484,24491,24495,24501,24507,24515,24516,24519,24522,24525,24526,24527,24534,24538,24539,24541,24557,24558,24559,24564,24565,24569,24572,24573,24575,24578,24579,24580,24585,24598,24600,24602,24606,24608,24611,24613,24615,24616,24617,24618,24619,24622,24628,24630,24631,24638,24640,24642,24643,24644,24647,24648,24655,24656,24659,24661,24662,24672,24677,24678,24680,24681,24684,24685,24702,24704,24706,24711,24712,24713,24716,24723,24724,24727,24731,24740,24741,24744,24745,24749,24756,24757,24758,24760,24764,24766,24773,24775,24776,24780,24782,24784,24785,24789,24795,24803,24811,24812,24815,24819,24826,24827,24832,24847,24848,24850,24853,24865,24867,24869,24871,24874,24875,24876,24878,24880,24884,24895,24897,24898,24899,24904,24907,24911,24916,24917,24918,24919,24920,24921,24922,24925,24927,24928,24929,24934,24939,24940,24947,24950,24951,24952,24953,24957,24959,24960,24962,24965,24967,24968,24970,24972,24973,24978,24979,24980,24988,24991,24998,24999,25000,3270,3430,3544,3783,3849,4000,4055,4155,4241,4452,4695,4916,5092,5102,5103,5412,5572,5761,5969,6125,6175,6953,7764,8565,8624,8690,9000,9044,9468,9601,10612,11241,11501,11648,11681,12864,2994,3129,4422,4433,5815,5862,6287,8097,8300,8415,9012,9352,9371,9745,10960,11591,11798,11962,12725,3121,3617,3999,4281,4301,4697,4974,5331,5788,6241,6279,8626,8838,9062,10150,10495,11190,11528,3168,3269,3543,4137,5244,6091,7327,7607,8241,8977,9670,11073,12390,4226,4262,4767,5391,5565,7080,7111,7141,8636,8805,9543,10107,10201,10247,10463,11008,11596,4571,4868,4970,5348,7624,8785,9193,9801,10723,11803,11966,14886,15505,15555,17043,17070,17581,17762,17852,18315,18386,3440,3569,4562,4918,4983,5309,5493,5655,7463,10009,10957,11273,12501,12509,3167,3703,3983,4328,4590,4674,5563,5568,5795,7641,7691,7994,8049,8931,9219,10272,10627,11318,12588,3301,4224,4276,4563,5023,5613,6867,13785,13822,14554,18253,3010,3065,3535,4160,4303,4368,4567,4638,4709,4775,4905,4915,5271,5319,5690,8205,9271,9732,9987,10052,10108,10271,11475,11757,12160,12594,8663,10232,10534,11385,11667,12367,13334,16498,16643,3314,3877,4218,4628,5292,5459,5668,6117,6933,7707,8056,10085,10861,11171,11840,11859,11861,11875,11934,11976,3122,4323,4552,4556,4594,5771,6133,6406,6820,7352,8324,9837,10032,10077,11243,13528,17997,3447,4178,5187,8954,9368,16242,3596,5634,7001,8071,8643,12055,15123,15197,15255,15768,15902,19202,3051,3062,3174,3316,3559,3910,4696,5034,6164,11062,11607,11761,13646,16355,18828,18865,3872,4030,4181,4389,4901,4990,5275,5317,6003,7169,8041,8236,8250,8390,8447,8611,9728,9855,10407,12605,12763,3263,3776,3889,4273,4484,4830,4865,5077,5328,6383,6427,6439,8118,8635,9892,11018,11055,11605,12834,3592,3841,4087,5254,5914,6317,6411,7489,8709,9211,9514,9851,10070,10310,10840,11092,11683,12076,12287,12372,14563,15109,15336,15609,15936,16137,16304,16651,17742,17886,3005,3917,4235,4286,4534,4673,4718,5097,5141,5188,5422,5430,5753,5816,6338,6884,7099,8033,8113,8740,9102,9405,9430,10181,11203,11398,11568,12036,3106,3739,4371,4569,4649,4945,5025,5165,5281,5307,5413,6395,7044,7408,8247,8304,8332,8758,8848,9063,9476,9829,9836,10872,10987,12197,12261,3792,5258,5364,9478,12279,12737,14172,15128,15759,16724,3041,3829,4275,4315,4361,4672,5158,5345,5490,8269,9979,10321,12433,4063,5773,7476,16145,16284,3060,3247,3746,4039,4304,4335,5662,5782,6036,7017,7076,7354,7397,7712,7833,8022,8085,8360,9387,9796,10087,10479,12075,12447,12677,4254,4888,4910,5739,7716,7770,7793,8224,8508,9357,9688,13415,14162,14443,14618,15125,17480,18271,3300,3456,3655,4435,4654,4658,5038,5182,5291,5399,9132,11130,3515,3855,3963,4231,4392,5190,5196,5570,5625,5682,5704,6095,6318,6398,6857,7120,7300,7982,8994,9295,9376,9467,9632,10809,11621,12222,12836,3047,3212,3534,3815,3862,4114,4524,4667,4969,4994,4996,5101,5192,6098,6831,8046,9382,9753,10498,10750,10907,10946,11260,11661,11871,12641,3376,3473,3662,4066,4072,4172,4176,4179,4263,4299,4503,4532,4803,4845,5300,5343,5402,5630,5688,6145,6369,7202,7212,7622,9620,9968,11100,11928,12448,12467,12624,3059,3371,3847,3851,4094,4572,4573,4644,4795,4821,4959,5474,5501,5709,7987,11382,3292,3417,3800,4196,4678,4729,4889,5065,5264,5431,7966,8393,10099,10829,11031,11479,11529,12074,12724,13446,14044,14110,15367,16339,17015,17434,17858,4020,4989,5356,6372,6931,7203,7231,7917,8607,9886,10894,11612,11633,13966,15023,15436,17099,17743,18436,39,1222,4598,8001,8290,9192,15111,15808,18392,24710,1133,7332,7383,8936,9384,9942,11250,12832,13931,14782,14989,15466,16159,16985,5444,7283,16010,17565,14069,14819,16357,16907];
	var initialRandomization = _.sample(arrayImageNumbers,49);
	var repeaters = _.sample(initialRandomization,1);
	var initialRandomizationPlusRepeaters = initialRandomization.concat(repeaters);
	var finalShuffledArray = _.shuffle(initialRandomizationPlusRepeaters);
	var instructions = ['PRE1']
	var instructionsWithFinalShuffledArray = instructions.concat(finalShuffledArray)
	return instructionsWithFinalShuffledArray;
};
