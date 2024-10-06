<script lang="ts">
    
	import { onMount } from 'svelte';
	import axios from 'axios';
    import AudioPlayer from './audio.svelte'; 

	let formSwitch: boolean = false;
	let thanksSwitch: boolean = false;
	let joinedSwitch: boolean = false;
	let emailExists: boolean = false;


    // Create a reference for the audio element
    let audioElement: HTMLAudioElement;

    // Audio file path
    const audioSrc = '/client/src/routes/itechv.mp3'; // Ensure this path is correct

    // Function to play audio
    function playAudio() {
        if (audioElement) {
            audioElement.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }
    }

    // Function to stop audio
    function stopAudio() {
        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0; // Reset to start
        }
    }

    // Optional: Play audio on mount or based on certain conditions
    onMount(() => {
        // Example: Play audio when the component mounts
        playAudio();
    });

	 const iconsMap = new Map();
	        iconsMap.set("1", "https://img.icons8.com/ios/50/ffffff/1.png");
			iconsMap.set("2", "https://img.icons8.com/ios/50/ffffff/2.png");
			iconsMap.set("3", "https://img.icons8.com/ios/50/ffffff/3.png");
			iconsMap.set("4", "https://img.icons8.com/ios/50/ffffff/4.png");
			iconsMap.set("5", "https://img.icons8.com/ios/50/ffffff/5.png");
			iconsMap.set("6", "https://img.icons8.com/ios/50/ffffff/6.png");
			iconsMap.set("7", "https://img.icons8.com/ios/50/ffffff/7.png");
			iconsMap.set("8", "https://img.icons8.com/ios/50/ffffff/8.png");
			iconsMap.set("9", "https://img.icons8.com/ios/50/ffffff/9.png");
			iconsMap.set("10", "https://img.icons8.com/ios/50/ffffff/10.png");
			iconsMap.set("11", "https://img.icons8.com/ios/50/ffffff/11.png");
			iconsMap.set("12", "https://img.icons8.com/ios/50/ffffff/12.png");
			iconsMap.set("13", "https://img.icons8.com/ios/50/ffffff/13.png");
			iconsMap.set("14", "https://img.icons8.com/ios/50/ffffff/14.png");
			iconsMap.set("15", "https://img.icons8.com/ios/50/ffffff/15.png");
			iconsMap.set("16", "https://img.icons8.com/ios/50/ffffff/16.png");
			iconsMap.set("17", "https://img.icons8.com/ios/50/ffffff/17.png");
			iconsMap.set("18", "https://img.icons8.com/ios/50/ffffff/18.png");
			iconsMap.set("19", "https://img.icons8.com/ios/50/ffffff/19.png");
			iconsMap.set("20", "https://img.icons8.com/ios/50/ffffff/20.png");
			iconsMap.set("21", "https://img.icons8.com/ios/50/ffffff/21.png");
			iconsMap.set("22", "https://img.icons8.com/ios/50/ffffff/22.png");
			iconsMap.set("23", "https://img.icons8.com/ios/50/ffffff/23.png");
			iconsMap.set("24", "https://img.icons8.com/ios/50/ffffff/24.png");
			iconsMap.set("25", "https://img.icons8.com/ios/50/ffffff/25.png");
			iconsMap.set("26", "https://img.icons8.com/ios/50/ffffff/26.png");
			iconsMap.set("27", "https://img.icons8.com/ios/50/ffffff/27.png");
			iconsMap.set("28", "https://img.icons8.com/ios/50/ffffff/28.png");
			iconsMap.set("29", "https://img.icons8.com/ios/50/ffffff/29.png");
			iconsMap.set("30", "https://img.icons8.com/ios/50/ffffff/30.png");
			iconsMap.set("31", "https://img.icons8.com/ios/50/ffffff/31.png");
			iconsMap.set("32", "https://img.icons8.com/ios/50/ffffff/32.png");
			iconsMap.set("33", "https://img.icons8.com/ios/50/ffffff/33.png");
			iconsMap.set("34", "https://img.icons8.com/ios/50/ffffff/34.png");
			iconsMap.set("35", "https://img.icons8.com/ios/50/ffffff/35.png");
			iconsMap.set("36", "https://img.icons8.com/ios/50/ffffff/36.png");
			iconsMap.set("37", "https://img.icons8.com/ios/50/ffffff/37.png");
			iconsMap.set("38", "https://img.icons8.com/ios/50/ffffff/38.png");
			iconsMap.set("39", "https://img.icons8.com/ios/50/ffffff/39.png");
			iconsMap.set("40", "https://img.icons8.com/ios/50/ffffff/40.png");
			iconsMap.set("41", "https://img.icons8.com/ios/50/ffffff/41.png");
			iconsMap.set("42", "https://img.icons8.com/ios/50/ffffff/42.png");
			iconsMap.set("43", "https://img.icons8.com/ios/50/ffffff/43.png");
			iconsMap.set("44", "https://img.icons8.com/ios/50/ffffff/44.png");
			iconsMap.set("45", "https://img.icons8.com/ios/50/ffffff/45.png");
			iconsMap.set("46", "https://img.icons8.com/ios/50/ffffff/46.png");
			iconsMap.set("47", "https://img.icons8.com/ios/50/ffffff/47.png");
			iconsMap.set("48", "https://img.icons8.com/ios/50/ffffff/48.png");
			iconsMap.set("49", "https://img.icons8.com/ios/50/ffffff/49.png");
			iconsMap.set("50", "https://img.icons8.com/ios/50/ffffff/50.png");
			iconsMap.set("51", "https://img.icons8.com/ios/50/ffffff/51.png");
			iconsMap.set("52", "https://img.icons8.com/ios/50/ffffff/52.png");
			iconsMap.set("53", "https://img.icons8.com/ios/50/ffffff/53.png");
			iconsMap.set("54", "https://img.icons8.com/ios/50/ffffff/54.png");
			iconsMap.set("55", "https://img.icons8.com/ios/50/ffffff/55.png");
			iconsMap.set("56", "https://img.icons8.com/ios/50/ffffff/56.png");
			iconsMap.set("57", "https://img.icons8.com/ios/50/ffffff/57.png");
			iconsMap.set("58", "https://img.icons8.com/ios/50/ffffff/58.png");
			iconsMap.set("59", "https://img.icons8.com/ios/50/ffffff/59.png");
			iconsMap.set("60", "https://img.icons8.com/ios/50/ffffff/60.png");
			iconsMap.set("61", "https://img.icons8.com/ios/50/ffffff/61.png");
			iconsMap.set("62", "https://img.icons8.com/ios/50/ffffff/62.png");
			iconsMap.set("63", "https://img.icons8.com/ios/50/ffffff/63.png");
			iconsMap.set("64", "https://img.icons8.com/ios/50/ffffff/64.png");
			iconsMap.set("65", "https://img.icons8.com/ios/50/ffffff/65.png");
			iconsMap.set("66", "https://img.icons8.com/ios/50/ffffff/66.png");
			iconsMap.set("67", "https://img.icons8.com/ios/50/ffffff/67.png");
			iconsMap.set("68", "https://img.icons8.com/ios/50/ffffff/68.png");
			iconsMap.set("69", "https://img.icons8.com/ios/50/ffffff/69.png");
			iconsMap.set("70", "https://img.icons8.com/ios/50/ffffff/70.png");
			iconsMap.set("71", "https://img.icons8.com/ios/50/ffffff/71.png");
			iconsMap.set("72", "https://img.icons8.com/ios/50/ffffff/72.png");
			iconsMap.set("73", "https://img.icons8.com/ios/50/ffffff/73.png");
			iconsMap.set("74", "https://img.icons8.com/ios/50/ffffff/74.png");
			iconsMap.set("75", "https://img.icons8.com/ios/50/ffffff/75.png");
			iconsMap.set("76", "https://img.icons8.com/ios/50/ffffff/76.png");
			iconsMap.set("77", "https://img.icons8.com/ios/50/ffffff/77.png");
			iconsMap.set("78", "https://img.icons8.com/ios/50/ffffff/78.png");
			iconsMap.set("79", "https://img.icons8.com/ios/50/ffffff/79.png");
			iconsMap.set("80", "https://img.icons8.com/ios/50/ffffff/80.png");
			iconsMap.set("81", "https://img.icons8.com/ios/50/ffffff/81.png");
			iconsMap.set("82", "https://img.icons8.com/ios/50/ffffff/82.png");
			iconsMap.set("83", "https://img.icons8.com/ios/50/ffffff/83.png");
			iconsMap.set("84", "https://img.icons8.com/ios/50/ffffff/84.png");
			iconsMap.set("85", "https://img.icons8.com/ios/50/ffffff/85.png");
			iconsMap.set("86", "https://img.icons8.com/ios/50/ffffff/86.png");
			iconsMap.set("87", "https://img.icons8.com/ios/50/ffffff/87.png");
			iconsMap.set("88", "https://img.icons8.com/ios/50/ffffff/88.png");
			iconsMap.set("89", "https://img.icons8.com/ios/50/ffffff/89.png");
			iconsMap.set("90", "https://img.icons8.com/ios/50/ffffff/90.png");
			iconsMap.set("91", "https://img.icons8.com/ios/50/ffffff/91.png");
			iconsMap.set("92", "https://img.icons8.com/ios/50/ffffff/92.png");
			iconsMap.set("93", "https://img.icons8.com/ios/50/ffffff/93.png");
			iconsMap.set("94", "https://img.icons8.com/ios/50/ffffff/94.png");
			iconsMap.set("95", "https://img.icons8.com/ios/50/ffffff/95.png");
			iconsMap.set("96", "https://img.icons8.com/ios/50/ffffff/96.png");
			iconsMap.set("97", "https://img.icons8.com/ios/50/ffffff/97.png");
			iconsMap.set("98", "https://img.icons8.com/ios/50/ffffff/98.png");
			iconsMap.set("99", "https://img.icons8.com/ios/50/ffffff/99.png");
			iconsMap.set("100", "https://img.icons8.com/ios/50/ffffff/100.png");
            iconsMap.set("101", "https://img.icons8.com/ios-filled/50/ffffff/1.png");
            iconsMap.set("102", "https://img.icons8.com/ios-filled/50/ffffff/2.png");
            iconsMap.set("103", "https://img.icons8.com/ios-filled/50/ffffff/3.png");
            iconsMap.set("104", "https://img.icons8.com/ios-filled/50/ffffff/4.png");
            iconsMap.set("105", "https://img.icons8.com/ios-filled/50/ffffff/5.png");
            iconsMap.set("106", "https://img.icons8.com/ios-filled/50/ffffff/6.png");
            iconsMap.set("107", "https://img.icons8.com/ios-filled/50/ffffff/7.png");
            iconsMap.set("108", "https://img.icons8.com/ios-filled/50/ffffff/8.png");
            iconsMap.set("109", "https://img.icons8.com/ios-filled/50/ffffff/9.png");
            iconsMap.set("110", "https://img.icons8.com/ios-filled/50/ffffff/10.png");
            iconsMap.set("111", "https://img.icons8.com/ios-filled/50/ffffff/11.png");
            iconsMap.set("112", "https://img.icons8.com/ios-filled/50/ffffff/12.png");
            iconsMap.set("113", "https://img.icons8.com/ios-filled/50/ffffff/13.png");
            iconsMap.set("114", "https://img.icons8.com/ios-filled/50/ffffff/14.png");
            iconsMap.set("115", "https://img.icons8.com/ios-filled/50/ffffff/15.png");
            iconsMap.set("116", "https://img.icons8.com/ios-filled/50/ffffff/16.png");
            iconsMap.set("117", "https://img.icons8.com/ios-filled/50/ffffff/17.png");
            iconsMap.set("118", "https://img.icons8.com/ios-filled/50/ffffff/18.png");
            iconsMap.set("119", "https://img.icons8.com/ios-filled/50/ffffff/19.png");
            iconsMap.set("120", "https://img.icons8.com/ios-filled/50/ffffff/20.png");
            iconsMap.set("121", "https://img.icons8.com/ios-filled/50/ffffff/21.png");
            iconsMap.set("122", "https://img.icons8.com/ios-filled/50/ffffff/22.png");
            iconsMap.set("123", "https://img.icons8.com/ios-filled/50/ffffff/23.png");
            iconsMap.set("124", "https://img.icons8.com/ios-filled/50/ffffff/24.png");
            iconsMap.set("125", "https://img.icons8.com/ios-filled/50/ffffff/25.png");
            iconsMap.set("126", "https://img.icons8.com/ios-filled/50/ffffff/26.png");
            iconsMap.set("127", "https://img.icons8.com/ios-filled/50/ffffff/27.png");
            iconsMap.set("128", "https://img.icons8.com/ios-filled/50/ffffff/28.png");
            iconsMap.set("129", "https://img.icons8.com/ios-filled/50/ffffff/29.png");
            iconsMap.set("130", "https://img.icons8.com/ios-filled/50/ffffff/30.png");
            iconsMap.set("131", "https://img.icons8.com/ios-filled/50/ffffff/31.png");
            iconsMap.set("132", "https://img.icons8.com/ios-filled/50/ffffff/32.png");
            iconsMap.set("133", "https://img.icons8.com/ios-filled/50/ffffff/33.png");
            iconsMap.set("134", "https://img.icons8.com/ios-filled/50/ffffff/34.png");
            iconsMap.set("135", "https://img.icons8.com/ios-filled/50/ffffff/35.png");
            iconsMap.set("136", "https://img.icons8.com/ios-filled/50/ffffff/36.png");
            iconsMap.set("137", "https://img.icons8.com/ios-filled/50/ffffff/37.png");
            iconsMap.set("138", "https://img.icons8.com/ios-filled/50/ffffff/38.png");
            iconsMap.set("139", "https://img.icons8.com/ios-filled/50/ffffff/39.png");
            iconsMap.set("140", "https://img.icons8.com/ios-filled/50/ffffff/40.png");
            iconsMap.set("141", "https://img.icons8.com/ios-filled/50/ffffff/41.png");
            iconsMap.set("142", "https://img.icons8.com/ios-filled/50/ffffff/42.png");
            iconsMap.set("143", "https://img.icons8.com/ios-filled/50/ffffff/43.png");
            iconsMap.set("144", "https://img.icons8.com/ios-filled/50/ffffff/44.png");
            iconsMap.set("145", "https://img.icons8.com/ios-filled/50/ffffff/45.png");
            iconsMap.set("146", "https://img.icons8.com/ios-filled/50/ffffff/46.png");
            iconsMap.set("147", "https://img.icons8.com/ios-filled/50/ffffff/47.png");
            iconsMap.set("148", "https://img.icons8.com/ios-filled/50/ffffff/48.png");
            iconsMap.set("149", "https://img.icons8.com/ios-filled/50/ffffff/49.png");
            iconsMap.set("150", "https://img.icons8.com/ios-filled/50/ffffff/50.png");
            iconsMap.set("151", "https://img.icons8.com/ios-filled/50/ffffff/51.png");
            iconsMap.set("152", "https://img.icons8.com/ios-filled/50/ffffff/52.png");
            iconsMap.set("153", "https://img.icons8.com/ios-filled/50/ffffff/53.png");
            iconsMap.set("154", "https://img.icons8.com/ios-filled/50/ffffff/54.png");
            iconsMap.set("155", "https://img.icons8.com/ios-filled/50/ffffff/55.png");
            iconsMap.set("156", "https://img.icons8.com/ios-filled/50/ffffff/56.png");
            iconsMap.set("157", "https://img.icons8.com/ios-filled/50/ffffff/57.png");
            iconsMap.set("158", "https://img.icons8.com/ios-filled/50/ffffff/58.png");
            iconsMap.set("159", "https://img.icons8.com/ios-filled/50/ffffff/59.png");
            iconsMap.set("160", "https://img.icons8.com/ios-filled/50/ffffff/60.png");
            iconsMap.set("161", "https://img.icons8.com/ios-filled/50/ffffff/61.png");
            iconsMap.set("162", "https://img.icons8.com/ios-filled/50/ffffff/62.png");
            iconsMap.set("163", "https://img.icons8.com/ios-filled/50/ffffff/63.png");
            iconsMap.set("164", "https://img.icons8.com/ios-filled/50/ffffff/64.png");
            iconsMap.set("165", "https://img.icons8.com/ios-filled/50/ffffff/65.png");
            iconsMap.set("166", "https://img.icons8.com/ios-filled/50/ffffff/66.png");
            iconsMap.set("167", "https://img.icons8.com/ios-filled/50/ffffff/67.png");
            iconsMap.set("168", "https://img.icons8.com/ios-filled/50/ffffff/68.png");
            iconsMap.set("169", "https://img.icons8.com/ios-filled/50/ffffff/69.png");
            iconsMap.set("170", "https://img.icons8.com/ios-filled/50/ffffff/70.png");
            iconsMap.set("171", "https://img.icons8.com/ios-filled/50/ffffff/71.png");
            iconsMap.set("172", "https://img.icons8.com/ios-filled/50/ffffff/72.png");
            iconsMap.set("173", "https://img.icons8.com/ios-filled/50/ffffff/73.png");
            iconsMap.set("174", "https://img.icons8.com/ios-filled/50/ffffff/74.png");
            iconsMap.set("175", "https://img.icons8.com/ios-filled/50/ffffff/75.png");
            iconsMap.set("176", "https://img.icons8.com/ios-filled/50/ffffff/76.png");
            iconsMap.set("177", "https://img.icons8.com/ios-filled/50/ffffff/77.png");
            iconsMap.set("178", "https://img.icons8.com/ios-filled/50/ffffff/78.png");
            iconsMap.set("179", "https://img.icons8.com/ios-filled/50/ffffff/79.png");
            iconsMap.set("180", "https://img.icons8.com/ios-filled/50/ffffff/80.png");
            iconsMap.set("181", "https://img.icons8.com/ios-filled/50/ffffff/81.png");
            iconsMap.set("182", "https://img.icons8.com/ios-filled/50/ffffff/82.png");
            iconsMap.set("183", "https://img.icons8.com/ios-filled/50/ffffff/83.png");
            iconsMap.set("184", "https://img.icons8.com/ios-filled/50/ffffff/84.png");
            iconsMap.set("185", "https://img.icons8.com/ios-filled/50/ffffff/85.png");
            iconsMap.set("186", "https://img.icons8.com/ios-filled/50/ffffff/86.png");
            iconsMap.set("187", "https://img.icons8.com/ios-filled/50/ffffff/87.png");
            iconsMap.set("188", "https://img.icons8.com/ios-filled/50/ffffff/88.png");
            iconsMap.set("189", "https://img.icons8.com/ios-filled/50/ffffff/89.png");
            iconsMap.set("190", "https://img.icons8.com/ios-filled/50/ffffff/90.png");
            iconsMap.set("191", "https://img.icons8.com/ios-filled/50/ffffff/91.png");
            iconsMap.set("192", "https://img.icons8.com/ios-filled/50/ffffff/92.png");
            iconsMap.set("193", "https://img.icons8.com/ios-filled/50/ffffff/93.png");
            iconsMap.set("194", "https://img.icons8.com/ios-filled/50/ffffff/94.png");
            iconsMap.set("195", "https://img.icons8.com/ios-filled/50/ffffff/95.png");
            iconsMap.set("196", "https://img.icons8.com/ios-filled/50/ffffff/96.png");
            iconsMap.set("197", "https://img.icons8.com/ios-filled/50/ffffff/97.png");
            iconsMap.set("198", "https://img.icons8.com/ios-filled/50/ffffff/98.png");
            iconsMap.set("199", "https://img.icons8.com/ios-filled/50/ffffff/99.png");
            iconsMap.set("200", "https://img.icons8.com/ios-filled/50/ffffff/100.png");

	let fullName: string;
	let email: string;
	let filiere: string;

	// List of available teams
	let teamArray = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
    "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
    "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
    "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",
    "101", "102", "103", "104", "105", "106", "107", "108", "109", "110",
    "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
    "121", "122", "123", "124", "125", "126", "127", "128", "129", "130",
    "131", "132", "133", "134", "135", "136", "137", "138", "139", "140",
    "141", "142", "143", "144", "145", "146", "147", "148", "149", "150",
    "151", "152", "153", "154", "155", "156", "157", "158", "159", "160",
    "161", "162", "163", "164", "165", "166", "167", "168", "169", "170",
    "171", "172", "173", "174", "175", "176", "177", "178", "179", "180",
    "181", "182", "183", "184", "185", "186", "187", "188", "189", "190",
    "191", "192", "193", "194", "195", "196", "197", "198", "199", "200"
];
	let team: string;
	let theme: string = "crimson";

	// Function to assign a random team and remove it from the available pool
	const getRandomTeam = () => {
		if (teamArray.length === 0) {
			alert("No teams available!");
			return;
		}
		// Randomly select a team from available teams
		const randomIndex = Math.floor(Math.random() * teamArray.length);
		team = teamArray[randomIndex];
		teamArray.splice(randomIndex, 1); // Remove the selected team from the array

		console.log(`Assigned team: ${team}`);
		console.log(`Remaining teams: [${teamArray.join(", ")}]`);
	};

	let joinPromise: Promise<void>;

	
    function setTheme(t:string) {
	switch (t) {
        case "1":
            theme = "wintry";
            break;
        case "2":
            theme = "crimson";
            break;
        case "3":
            theme = "sahara";
            break;
        case "4":
            theme = "seafoam";
            break;
        case "5":
            theme = "sunset";
            break;
        case "6":
            theme = "midnight";
            break;
        case "7":
            theme = "autumn";
            break;
        case "8":
            theme = "spring";
            break;
        case "9":
            theme = "ocean";
            break;
        case "10":
            theme = "desert";
            break;
        case "11":
            theme = "forest";
            break;
        case "12":
            theme = "lavender";
            break;
        case "13":
            theme = "cherry";
            break;
        case "14":
            theme = "tropical";
            break;
        case "15":
            theme = "stormy";
            break;
        case "16":
            theme = "snowfall";
            break;
        case "17":
            theme = "beach";
            break;
        case "18":
            theme = "misty";
            break;
        case "19":
            theme = "elegant";
            break;
        case "20":
            theme = "citrus";
            break;
        case "21":
            theme = "candy";
            break;
        case "22":
            theme = "earthy";
            break;
        case "23":
            theme = "moonlight";
            break;
        case "24":
            theme = "bright";
            break;
        case "25":
            theme = "bold";
            break;
        case "26":
            theme = "icy";
            break;
        case "27":
            theme = "sandy";
            break;
        case "28":
            theme = "bloom";
            break;
        case "29":
            theme = "dusk";
            break;
        case "30":
            theme = "tundra";
            break;
        case "31":
            theme = "serene";
            break;
        case "32":
            theme = "radiant";
            break;
        case "33":
            theme = "glimmer";
            break;
        case "34":
            theme = "vintage";
            break;
        case "35":
            theme = "whimsical";
            break;
        case "36":
            theme = "fairytale";
            break;
        case "37":
            theme = "chill";
            break;
        case "38":
            theme = "wildflower";
            break;
        case "39":
            theme = "crystal";
            break;
        case "40":
            theme = "tranquil";
            break;
        case "41":
            theme = "jungle";
            break;
        case "42":
            theme = "neon";
            break;
        case "43":
            theme = "geometric";
            break;
        case "44":
            theme = "classy";
            break;
        case "45":
            theme = "sunkissed";
            break;
        case "46":
            theme = "nocturnal";
            break;
        case "47":
            theme = "mellow";
            break;
        case "48":
            theme = "woodland";
            break;
        case "49":
            theme = "plush";
            break;
        case "50":
            theme = "glow";
            break;
        case "51":
            theme = "quaint";
            break;
        case "52":
            theme = "solstice";
            break;
        case "53":
            theme = "gemstone";
            break;
        case "54":
            theme = "azure";
            break;
        case "55":
            theme = "copper";
            break;
        case "56":
            theme = "onyx";
            break;
        case "57":
            theme = "sapphire";
            break;
        case "58":
            theme = "scarlet";
            break;
        case "59":
            theme = "emerald";
            break;
        case "60":
            theme = "indigo";
            break;
        case "61":
            theme = "pastel";
            break;
        case "62":
            theme = "frost";
            break;
        case "63":
            theme = "pearl";
            break;
        case "64":
            theme = "pomegranate";
            break;
        case "65":
            theme = "melon";
            break;
        case "66":
            theme = "cocoa";
            break;
        case "67":
            theme = "coffee";
            break;
        case "68":
            theme = "vibrant";
            break;
        case "69":
            theme = "breeze";
            break;
        case "70":
            theme = "silhouette";
            break;
        case "71":
            theme = "monsoon";
            break;
        case "72":
            theme = "sandstorm";
            break;
        case "73":
            theme = "saffron";
            break;
        case "74":
            theme = "plum";
            break;
        case "75":
            theme = "nectar";
            break;
        case "76":
            theme = "turquoise";
            break;
        case "77":
            theme = "cypress";
            break;
        case "78":
            theme = "seaweed";
            break;
        case "79":
            theme = "merlot";
            break;
        case "80":
            theme = "sangria";
            break;
        case "81":
            theme = "quicksilver";
            break;
        case "82":
            theme = "tangerine";
            break;
        case "83":
            theme = "sublime";
            break;
        case "84":
            theme = "deepsea";
            break;
        case "85":
            theme = "moonbeam";
            break;
        case "86":
            theme = "shimmer";
            break;
        case "87":
            theme = "pale";
            break;
        case "88":
            theme = "dark";
            break;
        case "89":
            theme = "soft";
            break;
        case "90":
            theme = "electric";
            break;
        case "91":
            theme = "dazzle";
            break;
        case "92":
            theme = "fusion";
            break;
        case "93":
            theme = "chic";
            break;
        case "94":
            theme = "ethereal";
            break;
        case "95":
            theme = "radiance";
            break;
        case "96":
            theme = "iridescent";
            break;
        case "97":
            theme = "whirlpool";
            break;
        case "98":
            theme = "fable";
            break;
        case "99":
            theme = "celestial";
            break;
        case "100":
            theme = "timeless";
            break;
        case "101":
            theme = "gossamer";
            break;
        case "102":
            theme = "zephyr";
            break;
        case "103":
            theme = "celadon";
            break;
        case "104":
            theme = "sienna";
            break;
        case "105":
            theme = "cerulean";
            break;
        case "106":
            theme = "salmon";
            break;
        case "107":
            theme = "lavish";
            break;
        case "108":
            theme = "malachite";
            break;
        case "109":
            theme = "coral";
            break;
        case "110":
            theme = "violet";
            break;
        case "111":
            theme = "fuchsia";
            break;
        case "112":
            theme = "garnet";
            break;
        case "113":
            theme = "vanilla";
            break;
        case "114":
            theme = "citrine";
            break;
        case "115":
            theme = "charcoal";
            break;
        case "116":
            theme = "rose";
            break;
        case "117":
            theme = "citrine";
            break;
        case "118":
            theme = "palegreen";
            break;
        case "119":
            theme = "stone";
            break;
        case "120":
            theme = "peach";
            break;
        case "121":
            theme = "clover";
            break;
        case "122":
            theme = "ochre";
            break;
        case "123":
            theme = "sunny";
            break;
        case "124":
            theme = "slate";
            break;
        case "125":
            theme = "shale";
            break;
        case "126":
            theme = "dustyrose";
            break;
        case "127":
            theme = "tawny";
            break;
        case "128":
            theme = "smoky";
            break;
        case "129":
            theme = "pewter";
            break;
        case "130":
            theme = "earth";
            break;
        case "131":
            theme = "chocolate";
            break;
        case "132":
            theme = "floral";
            break;
        case "133":
            theme = "mist";
            break;
        case "134":
            theme = "canary";
            break;
        case "135":
            theme = "berry";
            break;
        case "136":
            theme = "granite";
            break;
        case "137":
            theme = "dove";
            break;
        case "138":
            theme = "sunsetrose";
            break;
        case "139":
            theme = "cobblestone";
            break;
        case "140":
            theme = "muddy";
            break;
        case "141":
            theme = "mistletoe";
            break;
        case "142":
            theme = "nightshade";
            break;
        case "143":
            theme = "dragonfruit";
            break;
        case "144":
            theme = "velvet";
            break;
        case "145":
            theme = "aspen";
            break;
        case "146":
            theme = "lily";
            break;
        case "147":
            theme = "daffodil";
            break;
        case "148":
            theme = "ginger";
            break;
        case "149":
            theme = "tangerine";
            break;
        case "150":
            theme = "amethyst";
            break;
        case "151":
            theme = "tuscany";
            break;
        case "152":
            theme = "platinum";
            break;
        case "153":
            theme = "crimsonrose";
            break;
        case "154":
            theme = "emeraldgreen";
            break;
        case "155":
            theme = "antique";
            break;
        case "156":
            theme = "celestialblue";
            break;
        case "157":
            theme = "apricot";
            break;
        case "158":
            theme = "safflower";
            break;
        case "159":
            theme = "sapphireblue";
            break;
        case "160":
            theme = "tulip";
            break;
        case "161":
            theme = "mint";
            break;
        case "162":
            theme = "chartreuse";
            break;
        case "163":
            theme = "champagne";
            break;
        case "164":
            theme = "apricotblush";
            break;
        case "165":
            theme = "rainbow";
            break;
        case "166":
            theme = "sunflower";
            break;
        case "167":
            theme = "thistle";
            break;
        case "168":
            theme = "cherryblossom";
            break;
        case "169":
            theme = "cobweb";
            break;
        case "170":
            theme = "jade";
            break;
        case "171":
            theme = "orchid";
            break;
        case "172":
            theme = "honeydew";
            break;
        case "173":
            theme = "dahlia";
            break;
        case "174":
            theme = "cerise";
            break;
        case "175":
            theme = "heather";
            break;
        case "176":
            theme = "woodrose";
            break;
        case "177":
            theme = "brass";
            break;
        case "178":
            theme = "fennel";
            break;
        case "179":
            theme = "lichen";
            break;
        case "180":
            theme = "rosemary";
            break;
        case "181":
            theme = "sunlit";
            break;
        case "182":
            theme = "thundra";
            break;
        case "183":
            theme = "frostbite";
            break;
        case "184":
            theme = "whippedcream";
            break;
        case "185":
            theme = "cappuccino";
            break;
        case "186":
            theme = "lavendula";
            break;
        case "187":
            theme = "lavendermist";
            break;
        case "188":
            theme = "camellia";
            break;
        case "189":
            theme = "cinnamon";
            break;
        case "190":
            theme = "mauve";
            break;
        case "191":
            theme = "firefly";
            break;
        case "192":
            theme = "bubblegum";
            break;
        case "193":
            theme = "sugarplum";
            break;
        case "194":
            theme = "fairy";
            break;
        case "195":
            theme = "mermaid";
            break;
        case "196":
            theme = "galaxy";
            break;
        case "197":
            theme = "twilight";
            break;
        case "198":
            theme = "caterpillar";
            break;
        case "199":
            theme = "peacock";
            break;
        case "200":
            theme = "marble";
            break;
        default:
            theme = "wintry";
    }
}
	let seconds = 5;
	async function join() {
		if (!fullName || !email || !filiere) return;
		if (filiere === "0") return alert("Please select your major");

		try {
			joinPromise = axios.post("https://api.itech-club.com/join", { fullName, email, filiere, team });
			const res = await joinPromise;
			if (res.status === 200) {
				thanksSwitch = true;
				localStorage.setItem("joined", "true");
				for (let i = 0; i < 5; i++) {
					await new Promise((r) => setTimeout(r, 1000));
					seconds--;
					if (seconds === 0) {
						window.location.replace("https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT");
					}
				}
			}
		} catch (error) {
			if (error.response.status === 402) {
				emailExists = true;
				localStorage.setItem("joined", "true");
			}
		}
	}

	let randomIcon: string = "https://img.icons8.com/ios/50/000000/launched-rocket.png";
	async function iconRandomizer() {
		for (let i = 0; i < 100; i++) {
			const thisTeam = teamArray[Math.floor(Math.random() * teamArray.length)];
			await new Promise((r) => setTimeout(r, 65));
			team = thisTeam;
			setTheme(thisTeam);
			randomIcon = iconsMap.get(thisTeam);
		}
		await new Promise((r) => setTimeout(r, 600));
		randomIcon = "";
	}

	async function setCookies() {
		document.cookie = "team=" + team + "; max-age=31536000;";
	}

	onMount(async () => {
		if (document.cookie.includes("team")) {
			localStorage.getItem("joined") == "true" ? (joinedSwitch = true) : (joinedSwitch = false);
			team = document.cookie.split("team=")[1].split(";")[0];
			randomIcon = "";
			setTheme(team);
		} else {
			await iconRandomizer();
			await setCookies();
		}
	});
</script>

<style>
	.teamDistributer {
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.teamDistributer h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
		line-height: normal;
	}
	.teamDistributer button {
		font-size: 1rem;
	}
	.teamDistributer form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.teamDistributer .teamText {
		flex-direction: row;
	}
	.formlogo {
		width: 7rem;
		height: auto;
		margin-bottom: 2rem;
		/* position: absolute;
		width: 6rem;
		margin-bottom: 2rem;
		bottom: 0; */
	}
	.loading {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
	}
	.emailexists {
		color: #D4163C;
		text-align: center;
	}
	.pforsuccess {
		margin-left: 2rem;
		margin-right: 2rem;
	}
	.socialIcons {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}
	.btn-icon {
		background-color: #fff;
		border: 1px solid #000;
		border-radius: 50%;
		padding: 0.5rem;
		margin-top: 2rem;
	}
</style>

<body data-theme={theme}>
<div class="teamDistributer">
	{#if randomIcon != "" && randomIcon != undefined}
			
			<div class="rotating icons">
				<img src={randomIcon} alt="{randomIcon} icon" />
			</div>
	{:else}
		<img class="formlogo" src="logo.png" alt="iTech logo">
		<h1 class="teamText">Your Secret number is 
		<br> {@html team?team:'<div class="placeholder animate-pulse flex-0" />'}</h1>
		{#if thanksSwitch || emailExists || joinedSwitch}
			{#if emailExists}
				<p class="emailexists">Email already exists</p>
			{:else}
				<h2>Thank you for joining!</h2>
				{#if !joinedSwitch}
					<p class="pforsuccess" style="text-align: center;">An email was sent to your inbox. Please check your spam folder if you don't see it.</p>
					<br>
					<p class="pforsuccess" style="text-align: center;">You will be redirected to our whatsapp channel in {seconds} seconds.</p>
				{:else}
					<p class="pforsuccess" style="text-align: center;">You are already a member of our community.</p>
				{/if}
			{/if}
		{:else}
			{#await joinPromise}
			<section class="card w-50 animate-pulse">
				<div class="loading p-3 ">
					<div class="placeholder-circle w-4 h-4" />
					<div class="placeholder-circle w-4 h-4" />
					<div class="placeholder-circle w-4 h-4" />
				</div>
			</section>
			{:then response}
			{#if formSwitch == false}
				{#if emailExists}
					<p class="emailexists">Email already exists</p>
				{:else}
					<button  type="button" class="btn variant-filled-primary" on:click={()=>{formSwitch=true}}>Join Now</button>
				{/if}
			{:else}
				<form on:submit|preventDefault={join}>
					<input class="input" type="text" required bind:value={fullName} placeholder="Your name" >
					<input class="input" type="email" required bind:value={email} placeholder="your@email.com">
					
					<select class="select" required bind:value={filiere}>
						<option value="0" disabled selected>Select your Major</option>
						<option value="1">Master TI</option>
						<option value="2">Master IDMS</option>
						<option value="3">Master BD</option>
                        <option value="4">Génie SMIndustriel</option>
						<option value="5">Génie IAGI</option>
						<option value="6">Génie MI</option>
						<option value="7">Génie MSEI</option>
                        <option value="8">Master CyberCloudC</option>
						<option value="9">Genie SIndustriel</option>
						<option value="10">Génie EM</option>
                        <option value="11">Génie MAAéronautique</option>
						<option value="12">Cycle préparatoire</option>
					</select>
						

					<button type="submit" class="btn variant-filled-primary">Join Now</button>
				</form>
			{/if}
				
			{/await}
		{/if}
		<!-- <h3 class="h1" style="margin-bottom:2rem;">The event is over!</h3>
		<p class="pforsuccess" style="text-align: center;">We were happy to see you. And we will surely do it again!!!</p>
		<br>
		<p class="pforsuccess" style="text-align: center;">We welcome you this Friday the 8th and throught the whole following week, from 12h00 to 13h00, in our stand if you want to join our club</p>
		<br>
		<p class="pforsuccess" style="text-align: center;">For more information, Feel free to join the open community of itech Club via these Social links</p>
		<div class="socialIcons">
			<button type="button" class="btn-icon variant-filled "><a href="https://www.instagram.com/itech__club/"><img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="instagram" /></a></button>
			<button type="button" class="btn-icon variant-filled"><a href="https://chat.whatsapp.com/GVfvRuq9AIpJema4dMgPCT"><img src="https://img.icons8.com/ios/50/000000/whatsapp.png" alt="whatsapp" /></a></button>
		</div> -->
	{/if}
	
</div>
</body>