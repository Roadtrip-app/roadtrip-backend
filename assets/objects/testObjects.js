const testPin = {
	name : "test",
	description : "test description",
	author : {
		username : "test",
		userID : "test"
	},
	category : "test",
	tags : ["test"],
	images : {
		"thumbnail_url" : "test"
	},
	location : {
		country : "country",
		state_or_province : "state",
		city : "city", 
		zipcode : 123,
		coordinates : [123, 123, 123],
		address : "123 place"
	}
}

const testRoute = {
    "geocoded_waypoints": [
        {
            "geocoder_status": "OK",
            "place_id": "ChIJCSF8lBZEwokRhngABHRcdoI",
            "types": [
                "political",
                "sublocality",
                "sublocality_level_1"
            ]
        },
        {
            "geocoder_status": "OK",
            "place_id": "ChIJK1kKR2lDwokRBXtcbIvRCUE",
            "types": [
                "political",
                "sublocality",
                "sublocality_level_1"
            ]
        }
    ],
    "routes": [
        {
            "bounds": {
                "northeast": {
                    "lat": 40.7293779,
                    "lng": -73.79022719999999
                },
                "southwest": {
                    "lat": 40.675579,
                    "lng": -73.944176
                }
            },
            "copyrights": "Map data ©2023 Google",
            "legs": [
                {
                    "distance": {
                        "text": "10.5 mi",
                        "value": 16824
                    },
                    "duration": {
                        "text": "29 mins",
                        "value": 1723
                    },
                    "end_address": "Queens, NY, USA",
                    "end_location": {
                        "lat": 40.7282254,
                        "lng": -73.7948366
                    },
                    "start_address": "Brooklyn, NY, USA",
                    "start_location": {
                        "lat": 40.678183,
                        "lng": -73.94416129999999
                    },
                    "steps": [
                        {
                            "distance": {
                                "text": "2.5 mi",
                                "value": 4016
                            },
                            "duration": {
                                "text": "12 mins",
                                "value": 713
                            },
                            "end_location": {
                                "lat": 40.6756717,
                                "lng": -73.89684
                            },
                            "html_instructions": "Head <b>south</b> on <b>Atlantic Ave</b> toward <b>Atlantic Ave</b><div style=\"font-size:0.9em\">Pass by Popeyes Louisiana Kitchen (on the right in 1.2 mi)</div>",
                            "polyline": {
                                "points": "s}gwF~eibMRB@g@@g@HsD@k@BiAB_ADqBLiGBu@BgABwA@i@Ba@FkCDeB@[LyGBuANsHH_D@i@@g@FaD@QDcBDgBBuA@a@@Q?M@SByA?C@o@J}DFiCBkA?YTiKBw@JkENoHBoA@c@Bs@BwA@i@Bm@BsAHiDFqD@a@BcA@uAH}D@o@@o@DaBHoDHyDHuD?KF_D@_@@e@BoA?U?YHuDJyD?ADuB?a@?a@?Y?e@@o@@c@?EB{@FkD@G?m@@A?IBuAFeD@YBk@Bi@@_@@SF}@B_@De@?G?CDe@@MBc@?CDk@BWBc@Fu@Ds@Bg@@a@Bk@?]?G?O?o@@aAA}AAsA?EA_A?]As@?UCcB?ABI?QAGImD"
                            },
                            "start_location": {
                                "lat": 40.678183,
                                "lng": -73.94416129999999
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.2 mi",
                                "value": 262
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 94
                            },
                            "end_location": {
                                "lat": 40.6779881,
                                "lng": -73.8974369
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>Pennsylvania Ave</b><div style=\"font-size:0.9em\">Pass by McDonald's (on the left)</div>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "}mgwFf~_bMYDSBMBw@N}AVc@Hg@HUBw@LI@YDIBa@HSD"
                            },
                            "start_location": {
                                "lat": 40.6756717,
                                "lng": -73.89684
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "4.8 mi",
                                "value": 7780
                            },
                            "duration": {
                                "text": "7 mins",
                                "value": 448
                            },
                            "end_location": {
                                "lat": 40.7150287,
                                "lng": -73.8286384
                            },
                            "html_instructions": "Continue straight onto <b>Interborough Pkwy</b>/<wbr/><b>Jackie Robinson Pkwy</b><div style=\"font-size:0.9em\">Continue to follow Jackie Robinson Pkwy</div>",
                            "maneuver": "straight",
                            "polyline": {
                                "points": "m|gwF~a`bMa@?Q?K?QAE?KAIAi@KUGSGCAQGSGCCmAc@WIo@SMEUGUEQEC?YGQAi@Eq@EOAU?[AI?[CU?AA_@?KAEAWCIAKAQEQCUGCASGSGSKSIQKAAQKQKAAQKQOQKSOSOQMQMe@]QOQOa@]QOQOSQQOOOOOSQ_@a@SQq@s@o@s@SSIIEGGGIGQQQQ_@]QQSOQOSOQOQOA?c@]QMGEu@k@s@i@s@i@g@_@g@a@MIc@]aAs@WUMKWQw@k@u@m@QMSQMMQSMQEGIMCGIMEKEIEMA?CIEMEK?CIUG_@GWCUG_@Gg@SiBAIWqB?ACYEYE]AECSE[Kw@CSAEGi@CME[EYEYEYM}@OeAYcBG]E[Kg@G_@?ESiAO{@G[CQEWG[AMEUEq@C[AWAQ?KGoA?AI}AIsAIgBGeAA_@ASC_@AYAM?A?MAUAMAE?AAGAGAGEKCMEIEGCGGIIKCAIIEEEACCCAEACAEAEAEAEAQAK?IAC?GAG?EAGACACAA?CACAA?AAECEACCECGGCEEECECCCGAEA?ACACAEAECE?CGOI[CIAECKCIEMEMCGACCEAECECECECEEEACEGEEGECEA?EECCECECECCACCEASIECGAAAEAKEECAAGCCACCIECC?ACAEEEGCCCCIMEGACEGAAGGIMEEKMEEEEGGCCGGGGKIGIGGKKECKKGGIIIIYYKKIIKKEGCCGGKOIMEECGIMO]EICKAEACAAAGCKCG?AEQAGAICKAGAKAIAICWAMCWCQAKCWC]Ec@CO?GE]CYGq@K_AC[E]EWGYGWCICKCIK[Qc@GKGOMWU_@MSQSGGIIKIIKMIMKKGIGKEMGWKEAMESGIA]I]EYGWE_BWIAQESCUGOEIEUISIWMSMQO[UMMOOIKOQOSMSKQMWMUIUGOKYEMIWGYIWESMm@G]CSEYEWAICUAUC[I_AAYA[AOCm@?YAu@?[Bw@@c@@YAQ@[Ds@Di@?IFi@B[DYLsABQ@I?EBWD[BY@O?KB]?W@W?C?_@AK?QA]A[E]CYCU?AG]E[GYGUI[K[GUCGYw@Qg@M]K[K[M_@AE?ACICKI]GWGWAKCMAGCQGa@Gq@Gc@Is@?EA?Gm@E_@COAICQCOCMGYGUAGKa@EKGSY{@IS_@w@IM[k@EIY_@?AQW[_@CEKMKKIIIIOMGGa@[e@[WOOMQKcAq@_@Y[WCCOOOQSUCEIKKQMSIOO[IOOa@KWEOGOGUEOAGCKCICMCOAGCKAIG_@AMCMGy@A]AYAc@?Y?U?_@Ai@?gA?M?YASAsB?C?_@?]?[A[A[?_@EuAEs@AY?CC]CYAUAEC]?GCQCYI{@Ec@Im@E]GUG[G[IWIWCIEOEMOa@KUKSKWMYCEIQKWKWGIQc@Ui@M[MYCGEMKWIWIYEMEMGUI[GYEMKe@Qy@UaAQw@I]IYIWIUIQQ]i@_AOUMSOSACKQOSCC[e@OU]m@IOMUIOKUCEAAKUKUKWUe@O_@KUCGIQKUKWMYEIQa@Ui@KUO[Ug@Sc@AAGMMWKWO]GOKWKUMWKWKWO]Ui@MYEMCGMWAEGQIWESAC?C?AGY?A?AAA?CAGCK?GCI?C?AA??A?EAAKm@i@eDCKEQESI]M]g@_B"
                            },
                            "start_location": {
                                "lat": 40.6779881,
                                "lng": -73.8974369
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.1 mi",
                                "value": 228
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 14
                            },
                            "end_location": {
                                "lat": 40.7161346,
                                "lng": -73.8264593
                            },
                            "html_instructions": "Keep <b>left</b> to continue on <b>Jackie Robinson Pkwy</b>/<wbr/><b>New York State Rte 908B</b>",
                            "maneuver": "keep-left",
                            "polyline": {
                                "points": "}cowF~sraM[_@_A}Aq@cAOYGKWk@GQEM?AE[C_@AO?AAMAM?S"
                            },
                            "start_location": {
                                "lat": 40.7150287,
                                "lng": -73.8286384
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.3 mi",
                                "value": 550
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 30
                            },
                            "end_location": {
                                "lat": 40.71642689999999,
                                "lng": -73.8200226
                            },
                            "html_instructions": "Keep <b>left</b> at the fork to continue on <b>Jackie Robinson Pkwy</b>",
                            "maneuver": "fork-left",
                            "polyline": {
                                "points": "yjowFjfraMEYAUCi@?UA[Ca@?KCk@Gu@ASC_@O}AI{@CKIu@CYAQE}@GaAAk@Ak@?A?y@@oA@m@Bg@@KDk@B]Fo@J}@?U?["
                            },
                            "start_location": {
                                "lat": 40.7161346,
                                "lng": -73.8264593
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "1.4 mi",
                                "value": 2231
                            },
                            "duration": {
                                "text": "2 mins",
                                "value": 100
                            },
                            "end_location": {
                                "lat": 40.7185119,
                                "lng": -73.7942839
                            },
                            "html_instructions": "Continue onto <b>Grand Central Pkwy</b>",
                            "polyline": {
                                "points": "ulowFb~paMJy@DODYLk@@A@EBGn@iDJ_AN_BBe@@c@@G?Q?O?c@?I?[?GAkA?_@?EAW?i@Ai@CgC?m@Ao@?}@?w@A{@?g@?{@AeC?UAaA?q@?O?o@?s@?S?cA?aA@_@?U?i@DyC?c@@oA@]?_@?uAAW?]As@?WAe@Am@?QCwAEkAAc@E{@CaAAE?IAUM_CK_BEq@?AGw@AMGs@I}@C_@CYE[Ee@EWQyAE[Gi@CUMcAGc@CWAIESKm@Kk@ScAMq@c@yBGWOw@?CEWUeAUiA?A]eBMk@Ic@[oA[mA_@wAYkAMi@"
                            },
                            "start_location": {
                                "lat": 40.71642689999999,
                                "lng": -73.8200226
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "459 ft",
                                "value": 140
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 12
                            },
                            "end_location": {
                                "lat": 40.7187182,
                                "lng": -73.7926645
                            },
                            "html_instructions": "Take exit <b>18</b> toward <b>Utopia Pkwy</b>",
                            "maneuver": "ramp-right",
                            "polyline": {
                                "points": "uyowFf}kaMDUOcBGu@AOIo@Ec@AOC_@"
                            },
                            "start_location": {
                                "lat": 40.7185119,
                                "lng": -73.7942839
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "482 ft",
                                "value": 147
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 30
                            },
                            "end_location": {
                                "lat": 40.7189042,
                                "lng": -73.7909677
                            },
                            "html_instructions": "Merge onto <b>Grand Central Pkwy</b>",
                            "maneuver": "merge",
                            "polyline": {
                                "points": "_{owFbskaMOy@ScACc@AQAW?W?G?O@O@MBw@"
                            },
                            "start_location": {
                                "lat": 40.7187182,
                                "lng": -73.7926645
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "361 ft",
                                "value": 110
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 30
                            },
                            "end_location": {
                                "lat": 40.7197393,
                                "lng": -73.790493
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>Homelawn St</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "c|owFphkaM@[ICc@Ma@M]K[KCA[I"
                            },
                            "start_location": {
                                "lat": 40.7189042,
                                "lng": -73.7909677
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.7 mi",
                                "value": 1120
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 186
                            },
                            "end_location": {
                                "lat": 40.7293779,
                                "lng": -73.7931622
                            },
                            "html_instructions": "Continue onto <b>Utopia Pkwy</b>",
                            "polyline": {
                                "points": "kapwFpekaMa@OGCKISIQEIAG?QA{ACQ@yAAW@gA@Q?K?u@B]?E?A@O?Q?iADG@I?e@BQ@OBQBMDA@G@GBOHQLEBMH[TSN]Ri@ZGB]RSJUNK@CBw@Z_@Nq@RWDQBu@Tu@VOBID}Af@KDk@PYJi@Pa@LGB_Bf@OBqDhA"
                            },
                            "start_location": {
                                "lat": 40.7197393,
                                "lng": -73.790493
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "0.1 mi",
                                "value": 160
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 47
                            },
                            "end_location": {
                                "lat": 40.7289338,
                                "lng": -73.79496809999999
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>74th Ave</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "s}qwFfvkaMDVHh@?@\\tBj@nD"
                            },
                            "start_location": {
                                "lat": 40.7293779,
                                "lng": -73.7931622
                            },
                            "travel_mode": "DRIVING"
                        },
                        {
                            "distance": {
                                "text": "262 ft",
                                "value": 80
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 19
                            },
                            "end_location": {
                                "lat": 40.7282254,
                                "lng": -73.7948366
                            },
                            "html_instructions": "Turn <b>left</b> onto <b>175th St</b>",
                            "maneuver": "turn-left",
                            "polyline": {
                                "points": "yzqwFpalaMp@IvAO@?"
                            },
                            "start_location": {
                                "lat": 40.7289338,
                                "lng": -73.79496809999999
                            },
                            "travel_mode": "DRIVING"
                        }
                    ],
                    "traffic_speed_entry": [],
                    "via_waypoint": []
                }
            ],
            "overview_polyline": {
                "points": "s}gwF~eibMRB@g@J{ENgHl@}WpA}m@bBcx@X}MPyJn@m[\\wPDsEB_CZePJoCRwCPsCTeDHsCCaKEkE@e@ImDYDa@FaFz@qBXk@LSDa@?]?WAUC_ASi@Q}By@iBg@aAOaCMwAEs@E_AM_AUmAi@qBsAuDwC_DwCiDoDwAqAiA_AeGqEqG}EiB{Ao@{@k@qAWeA[uB_A_Im@uE_@kCw@cFiAyGUqBGqAq@eNMaCEYUk@Y_@YUSGc@G{@I]MQOQUSg@e@cB]w@e@i@i@]}@_@g@]g@s@{@aAgDgDa@i@c@y@Y}@SoAY{Ck@aGKu@Oq@W{@o@wAc@s@Y[m@i@o@a@y@[yAY{Cg@kAWkAg@e@]i@c@y@aAg@}@k@uAa@wA_@sBQqAQkCGyAAoABsABkBRqCZ{CJcAHsA@sAEwAMmAUuAe@cB}@eCy@sCUiAUmBg@eESiA[kAa@oAi@kAeAcBq@_Ak@m@WUgAw@}B{AoAeAq@y@s@qAk@yAg@qBO}@OsBCwAAgDCmGImDKoB]cE]eCc@gB_@iAq@{AcB{DcAuC_@yAeAyEg@eB[o@y@uAk@}@_AsA_AcB]s@wAcDoBoEeByDqBwEYs@YaAIi@mAgHOq@u@}B{A}BaA}A_@w@M_@KmACq@Go@C_AIuB]gE[wCQ}D?wDDuAFw@VaD?[Jy@Ji@T{@z@iFReCBmA?qAIsKEaNAaKJkLG}HQcGGgB_@sG[wDy@sH]uC_@wByBaLaA}EaByGg@uBDUWyCSsBC_@Oy@WgBCiAFeB@[ICeA[yAc@i@S_@S[GYAmBAqB?{CDyCHqAHi@Lo@^{AbAcB~@}Ap@qAb@i@HeCv@cJvCaElAN`A\\vBj@nDp@IxAO"
            },
            "summary": "Jackie Robinson Pkwy",
            "warnings": [],
            "waypoint_order": []
        }
    ],
    "status": "OK"
}

module.exports = {testPin, testRoute}