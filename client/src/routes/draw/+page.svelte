<script lang="ts">
    import { onMount } from 'svelte';
    import axios from 'axios';
    import confetti from 'canvas-confetti';

    let drawSwitch = false;
    let buttonSwitch = false;
    let winnerPromise;

    let theme = "sahara";

    function setTheme(t: string) {
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

    const filiereArray = ["", "Master IT", "Master IDMS", "Génie IAGI", "Génie MI", "", "Génie MSEI", "Génie Industriel", "Cycle préparatoire", "Master BD", "Génie EM"];
    let randomStudent;
    let finalWinner;
    let studentList = [];

    async function getCandidates() {
        const response = await axios.get('https://api.itech-club.com/draw');
        studentList = response.data;
        console.log(studentList);
    }

    async function randomizer() {
        buttonSwitch = true;
        const randomAudio = new Audio("randomSound.wav");
        randomAudio.loop = true;
        randomAudio.play();
        for (let i = 0; i < 20; i++) {
            randomStudent = studentList[Math.floor(Math.random() * studentList.length)];
            setTheme(randomStudent.team);
            await new Promise(r => setTimeout(r, 200));
        }
        randomAudio.pause();
        const winnerAudio = new Audio("winningSound.wav");
        winnerAudio.play();
        finalWinner = randomStudent;
        drawSwitch = true;
        await new Promise(r => setTimeout(r, 300));
        const cheerAudio = new Audio("cheer.mp3");
        cheerAudio.loop = true;
        cheerAudio.play();

        confetti({
            particleCount: 500,
            spread: 360,
            ticks: 10000,
            gravity: 0.0,
            origin: { y: 0.6 },
            zIndex: 1,
        });
        const confittiShape = confetti.shapeFromText({ text: "🤖", scalar: 3 });
        confetti({
            particleCount: 50,
            spread: 120,
            angle: 0,
            shapes: [confittiShape],
            origin: { y: 0.6 },
            scalar: 3,
            zIndex: 3,
            flat: true
        });
        confetti({
            particleCount: 50,
            spread: 120,
            angle: 180,
            shapes: [confittiShape],
            origin: { y: 0.6 },
            scalar: 3,
            zIndex: 3,
            flat: true
        });
    }

    onMount(async () => {
        await getCandidates();
    });
</script>

<style>
    .topContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        height: 100vh;
        width: 100vw;
    }
    .topContainer h1 {
        font-size: 2rem;
        text-align: center;
        line-height: normal;
    }
    .topContainer .formlogo {
        width: 7rem;
        height: auto;
    }

    .winnerCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        z-index: 2;
    }
    .winnerCard h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
        text-align: center;
        line-height: normal;
    }
    .winnerName {
        font-size: 5rem;
        text-align: center;
        line-height: normal;
    }
</style>

<body data-theme={theme}>
    <div class="topContainer">
        <img src="logo.png" class="formlogo" alt="logo" />
        <h1 class="h1">Winner Draw</h1>
        {#if drawSwitch}
            <div class="winnerCard card card-hover">
                <h2>the winner from the random draw is:</h2>
                <h1 class="winnerName">
                    {finalWinner.fullName}
                </h1>
                <h3 class="h3">
                    {filiereArray[finalWinner.filiere]}
                </h3>
            </div>
        {:else}
            {#if buttonSwitch}
                <h3 class="h3">{randomStudent.fullName}</h3>
                <h4 class="h4">{filiereArray[randomStudent.filiere]}</h4>
            {:else}
                <button class="btn variant-filled-primary w-32" on:click={randomizer}>Draw</button>
            {/if}
        {/if}
    </div>
</body>
