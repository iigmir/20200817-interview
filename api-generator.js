const images = [
    "W-BG-004-QT-212.jpg",
    "W-BG-011-QT-215.jpg",
    "W-DC-002-QT-216.png",
    "W-DC-004-QT-213.jpg",
    "W-DC-010-QT-216.png",
    "W-JP-002-QT-216.png",
    "W-JP-003-QT-216.jpg",
    "W-JP-003-QT-217.jpg",
    "W-JP-004-QT-215.jpg",
    "W-JP-005-QT-216.jpg",
    "W-JP-010-QT-217.jpg",
    "W-SA-002-QT-201.png",
    "W-SA-002-QT-209.png",
    "W-SA-004-PT-199.jpg",
    "W-SA-011-QT-206.png",
    "W-SA-013-PT-205.JPG",
    "W-SA-015-PT-205.png",
    "W-SA-019-QT-212.png",
    "W-SW-001-QT-214.jpg",
    "W-SW-002-QT-218.jpg",
    "W-SW-003-QT-212.jpg",
    "W-SW-003-QT-213.jpg",
    "W-SW-005-QT-216.jpg",
];

const regions = [
    "Grand Milka-In-Pherdder",
    "West Otcave",
    "Hea",
    "Hamslowthirsk",
    "West Cumcarlmont",
    "Rksworthwelsh",
    "Stoneeaunynell",
    "El Lingthall",
    "North Sallncoln",
    "Qaston",
    "Great Thensvil",
    "North Barnesfiwin",
    "Grand Hulldul",
    "Grantsna City",
    "Park Kirfield",
    "Port Oywoo",
    "Mount Moohydele",
    "Glechase",
    "New Dalmtwichda",
    "Lelydboobrough",
    "Rdiwenbourne",
    "Lipehelribury",
    "New Readbrixria",
    "Datkitthyshot",
    "Kingmsley",
    "Tucrouchmoor",
    "Gastingland",
    "Shipworth",
    "Capegrande",
    "Craguwlandburgh",
    "Paulrostead",
    "Ombnette",
    "Royal Potwim",
    "Clecast",
    "Fieldst With Mountckenwick",
    "Earbowl Beach",
    "Great Leycliffemi",
    "West Mo",
    "Dodgeldonfield",
    "Lucus",
    "West Retor-In-Totnesti",
    "New Turegrayl",
    "Saint Berttrance",
    "Hythewich",
    "St Pel",
    "Tubourne Aux Ingrieworth",
    "El Der",
    "New Rseanalrad",
    "Bocai Point",
    "Toches",
    "Port Soe",
    "Systotceoford",
    "North Bourneshal",
    "Nterraington",
    "Holmefac Falls",
    "Great Yasscone",
    "Grand Ashou Aux Bunsta",
    "South Spa",
    "Bagre Lake",
    "Las Bridgestret",
    "Moose Ringboatbewd",
    "Manstrastone",
    "Fallsnankes",
    "Bornegeegates",
    "He Creek",
    "La Ryyoung",
    "Leekba-In-Focay",
    "Ckrodto",
    "Stonesiouxtreeled",
    "Toprice",
    "Loshae River",
    "Fobu Bay",
    "Port Stalltar",
    "Hitheler Wells",
    "Biprud With Wenewtown",
    "Kentketree",
    "Great Croprai",
    "Port Monteshi",
    "Banswaddeer City",
    "Rocksaints",
    "Bridgamvana",
    "Bouqui-By-The-Sea",
    "Bridanwi",
    "Bridhillguisrson",
    "St Cepraro",
    "La Lonsther",
    "New Loo",
    "Shepdcombe",
    "Hauterenstead",
    "West Sastemsey",
    "Elburn",
    "New Reame",
    "Lans",
    "East Bleshamray",
    "Rogham Creek",
    "Hadpreeshoton",
    "Vailco",
    "Las Goe",
    "West Oarange",
    "New Pointening"
];

const countries = [
    "Lagepu",
    "Metigreengalnea",
    "Achtenu",
    "Dosticstein Island",
    "Bogia Koslandsne",
    "Lythethe",
    "Slandsdu Hena",
    "Pusa",
    "Guai Ristannaire",
    "Niazea",
    "Stranor Argre",
    "Cosma Themarte",
    "Eastern Elmoland",
    "Blicre Svalsaint",
    "Caaula",
    "Russle Masman",
    "Carsint Tishniviet",
    "Arservoqari",
    "Lizefin Seythesaint",
    "Blicgintomemoaso",
    "Mononand",
    "Nyade Rkile",
    "Vare Dianslandslands",
    "Lyce",
    "Neriaguay",
    "Famenva",
    "Leku Georthesnia Island",
    "Uguernal",
    "Cookla",
    "Laosnorth Epore",
    "Tanacra",
    "Ua",
    "Landpor",
    "Byaja",
    "Navis Blicsta",
    "Rkeycairnchristsomal",
    "Taijaros",
    "Ruin",
    "Eastmopri",
    "Cosau Spainsuma",
    "Oi Southmari",
    "Niblic",
    "Seneingba",
    "Walespua Siadeza Republic",
    "Levi Niage",
    "Pau",
    "Gyptstan Stannama",
    "Mebewal",
    "Jiba Rianisi",
    "Thernre Pefe Territories",
    "Liatius Pruspu",
    "Landslola Island",
    "Ratessey Ofababwe Republic",
    "Aldotswato",
    "Rarsey Bublicre",
    "South Ismayen Cosierlom",
    "Galdji",
    "Bawe Landzstanque",
    "Nicosau",
    "Hairwan",
    "Bador Giarocfristan",
    "Neanga Slandsloti",
    "Andbo",
    "Gromac Campierrezilia",
    "Maki Verderdanau",
    "Zare Morbiapu",
    "Neria",
    "Nogre Bosiaqua Land",
    "Tene",
    "Ringa Nialis",
    "Wanma Southland",
    "Giumvi Ameco",
    "Reabi Slandsnenited Land",
    "Tidines",
    "Pakingblic",
    "Niji Lubar Territories",
    "Veca Liguania",
    "Cankhstani",
    "Isle of Fucaiaherlu",
    "Miuseia",
    "New Moany",
    "Greececa",
    "Nornei Zbetermi",
    "Thioleia",
    "Ratedmai",
    "Monuatu",
    "Tralli",
    "Rere Bebar",
    "Molau Roelyvir",
    "Deshfriand",
    "Eastern Pami",
    "Stanland",
    "Danda Asaintnti",
    "Kiand Lapo",
    "Krainemar",
    "Canmyanli",
    "Denzim Tuslandsblic",
    "Pami",
    "Cayni",
    "Ngafakimaof"
];

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rand_index = (ary) => rand( 0, ary.length - 1 );

// AS API REQUEST
const API_GENERATOR = () =>
{
    const is_onsale = Math.random() > 0.5;
    const wine_old_price = rand( 500, 999 );
    const wine_new_price = rand( 100, 499 );
    const name = "Wine " + rand( 1, 1024 );
    const image = "./images/" + images[ rand_index(images) ];
    const vinage = rand( 1900, 2020 );
    const country = countries[ rand_index(countries) ];
    const region = regions[ rand_index(regions) ];
    const size = {
        amount: Math.random().toFixed(2),
        unit: "L"
    };
    // https://www.winentaste.com/magazine/tutorial_robert_parker
    const rating = {
        am: rand( 50, 100 ),
        ws: rand( 50, 100 ),
        wa: rand( 50, 100 ),
    };
    const price = {
        unit: "HK$",
        old: wine_old_price,
        on_sale: is_onsale,
        new: is_onsale ? wine_new_price : wine_old_price,
    };
    const stock_amount = rand( 0, 10 );
    return { name, image, vinage, country, region, size, rating, price, stock_amount };
};

const NEW_ARRI_API = [
    {
        "name": "Wine 153",
        "image": "./images/W-JP-002-QT-216.png",
        "vinage": 2017,
        "country": "Tralli",
        "region": "Clecast",
        "size": {
            "amount": "0.18",
            "unit": "L"
        },
        "rating": {
            "am": 51,
            "ws": 78,
            "wa": 60
        },
        "price": {
            "unit": "HK$",
            "old": 537,
            "on_sale": true,
            "new": 229
        },
        "stock_amount": 1
    },
    {
        "name": "Wine 794",
        "image": "./images/W-SA-004-PT-199.jpg",
        "vinage": 1963,
        "country": "Neanga Slandsloti",
        "region": "Port Monteshi",
        "size": {
            "amount": "0.47",
            "unit": "L"
        },
        "rating": {
            "am": 93,
            "ws": 99,
            "wa": 53
        },
        "price": {
            "unit": "HK$",
            "old": 755,
            "on_sale": true,
            "new": 316
        },
        "stock_amount": 0
    },
    {
        "name": "Wine 655",
        "image": "./images/W-DC-004-QT-213.jpg",
        "vinage": 1963,
        "country": "Ngafakimaof",
        "region": "Port Oywoo",
        "size": {
            "amount": "0.19",
            "unit": "L"
        },
        "rating": {
            "am": 73,
            "ws": 59,
            "wa": 82
        },
        "price": {
            "unit": "HK$",
            "old": 817,
            "on_sale": true,
            "new": 328
        },
        "stock_amount": 9
    },
    {
        "name": "Wine 1003",
        "image": "./images/W-SW-005-QT-216.jpg",
        "vinage": 2018,
        "country": "Walespua Siadeza Republic",
        "region": "Datkitthyshot",
        "size": {
            "amount": "0.90",
            "unit": "L"
        },
        "rating": {
            "am": 91,
            "ws": 98,
            "wa": 89
        },
        "price": {
            "unit": "HK$",
            "old": 533,
            "on_sale": false,
            "new": 533
        },
        "stock_amount": 0
    },
    {
        "name": "Wine 742",
        "image": "./images/W-JP-003-QT-217.jpg",
        "vinage": 1950,
        "country": "Nornei Zbetermi",
        "region": "Rogham Creek",
        "size": {
            "amount": "0.30",
            "unit": "L"
        },
        "rating": {
            "am": 65,
            "ws": 100,
            "wa": 54
        },
        "price": {
            "unit": "HK$",
            "old": 593,
            "on_sale": true,
            "new": 142
        },
        "stock_amount": 7
    },
    {
        "name": "Wine 134",
        "image": "./images/W-DC-004-QT-213.jpg",
        "vinage": 2020,
        "country": "Seneingba",
        "region": "Park Kirfield",
        "size": {
            "amount": "0.44",
            "unit": "L"
        },
        "rating": {
            "am": 61,
            "ws": 95,
            "wa": 50
        },
        "price": {
            "unit": "HK$",
            "old": 923,
            "on_sale": true,
            "new": 198
        },
        "stock_amount": 10
    },
    {
        "name": "Wine 9",
        "image": "./images/W-SA-002-QT-201.png",
        "vinage": 1928,
        "country": "Maki Verderdanau",
        "region": "Port Stalltar",
        "size": {
            "amount": "0.89",
            "unit": "L"
        },
        "rating": {
            "am": 81,
            "ws": 60,
            "wa": 87
        },
        "price": {
            "unit": "HK$",
            "old": 651,
            "on_sale": true,
            "new": 159
        },
        "stock_amount": 9
    },
    {
        "name": "Wine 725",
        "image": "./images/W-DC-002-QT-216.png",
        "vinage": 1991,
        "country": "Aldotswato",
        "region": "Great Leycliffemi",
        "size": {
            "amount": "0.21",
            "unit": "L"
        },
        "rating": {
            "am": 82,
            "ws": 100,
            "wa": 59
        },
        "price": {
            "unit": "HK$",
            "old": 620,
            "on_sale": true,
            "new": 183
        },
        "stock_amount": 5
    },
    {
        "name": "Wine 263",
        "image": "./images/W-BG-004-QT-212.jpg",
        "vinage": 1967,
        "country": "Tanacra",
        "region": "Ckrodto",
        "size": {
            "amount": "0.45",
            "unit": "L"
        },
        "rating": {
            "am": 62,
            "ws": 82,
            "wa": 60
        },
        "price": {
            "unit": "HK$",
            "old": 987,
            "on_sale": true,
            "new": 263
        },
        "stock_amount": 4
    },
    {
        "name": "Wine 811",
        "image": "./images/W-DC-002-QT-216.png",
        "vinage": 1985,
        "country": "Stanland",
        "region": "North Bourneshal",
        "size": {
            "amount": "0.17",
            "unit": "L"
        },
        "rating": {
            "am": 62,
            "ws": 72,
            "wa": 59
        },
        "price": {
            "unit": "HK$",
            "old": 599,
            "on_sale": true,
            "new": 172
        },
        "stock_amount": 3
    },
    {
        "name": "Wine 36",
        "image": "./images/W-SA-019-QT-212.png",
        "vinage": 1928,
        "country": "Thioleia",
        "region": "Datkitthyshot",
        "size": {
            "amount": "0.61",
            "unit": "L"
        },
        "rating": {
            "am": 77,
            "ws": 97,
            "wa": 93
        },
        "price": {
            "unit": "HK$",
            "old": 828,
            "on_sale": false,
            "new": 828
        },
        "stock_amount": 1
    },
    {
        "name": "Wine 114",
        "image": "./images/W-JP-003-QT-216.jpg",
        "vinage": 1957,
        "country": "Monuatu",
        "region": "Great Yasscone",
        "size": {
            "amount": "0.22",
            "unit": "L"
        },
        "rating": {
            "am": 64,
            "ws": 91,
            "wa": 99
        },
        "price": {
            "unit": "HK$",
            "old": 837,
            "on_sale": true,
            "new": 418
        },
        "stock_amount": 0
    }
];


const TOP_PICK_API = [
    {
        "name": "Wine 199",
        "image": "./images/W-SW-003-QT-212.jpg",
        "vinage": 1958,
        "country": "Cookla",
        "region": "Datkitthyshot",
        "size": {
            "amount": "0.35",
            "unit": "L"
        },
        "rating": {
            "am": 87,
            "ws": 98,
            "wa": 67
        },
        "price": {
            "unit": "HK$",
            "old": 849,
            "on_sale": true,
            "new": 285
        },
        "stock_amount": 0
    },
    {
        "name": "Wine 335",
        "image": "./images/W-SW-001-QT-214.jpg",
        "vinage": 1965,
        "country": "Cosau Spainsuma",
        "region": "Lipehelribury",
        "size": {
            "amount": "0.87",
            "unit": "L"
        },
        "rating": {
            "am": 94,
            "ws": 56,
            "wa": 98
        },
        "price": {
            "unit": "HK$",
            "old": 746,
            "on_sale": false,
            "new": 746
        },
        "stock_amount": 4
    },
    {
        "name": "Wine 30",
        "image": "./images/W-JP-002-QT-216.png",
        "vinage": 1968,
        "country": "Pakingblic",
        "region": "Port Oywoo",
        "size": {
            "amount": "0.65",
            "unit": "L"
        },
        "rating": {
            "am": 85,
            "ws": 93,
            "wa": 63
        },
        "price": {
            "unit": "HK$",
            "old": 878,
            "on_sale": false,
            "new": 878
        },
        "stock_amount": 4
    },
    {
        "name": "Wine 382",
        "image": "./images/W-JP-002-QT-216.png",
        "vinage": 1908,
        "country": "Kiand Lapo",
        "region": "Glechase",
        "size": {
            "amount": "0.47",
            "unit": "L"
        },
        "rating": {
            "am": 59,
            "ws": 54,
            "wa": 56
        },
        "price": {
            "unit": "HK$",
            "old": 551,
            "on_sale": false,
            "new": 551
        },
        "stock_amount": 3
    },
    {
        "name": "Wine 92",
        "image": "./images/W-SW-001-QT-214.jpg",
        "vinage": 1921,
        "country": "Mononand",
        "region": "New Turegrayl",
        "size": {
            "amount": "0.15",
            "unit": "L"
        },
        "rating": {
            "am": 95,
            "ws": 77,
            "wa": 59
        },
        "price": {
            "unit": "HK$",
            "old": 883,
            "on_sale": false,
            "new": 883
        },
        "stock_amount": 5
    },
    {
        "name": "Wine 729",
        "image": "./images/W-JP-004-QT-215.jpg",
        "vinage": 1948,
        "country": "Landpor",
        "region": "Las Bridgestret",
        "size": {
            "amount": "0.70",
            "unit": "L"
        },
        "rating": {
            "am": 94,
            "ws": 70,
            "wa": 92
        },
        "price": {
            "unit": "HK$",
            "old": 587,
            "on_sale": false,
            "new": 587
        },
        "stock_amount": 0
    },
    {
        "name": "Wine 77",
        "image": "./images/W-SA-013-PT-205.JPG",
        "vinage": 1947,
        "country": "Lizefin Seythesaint",
        "region": "Qaston",
        "size": {
            "amount": "0.55",
            "unit": "L"
        },
        "rating": {
            "am": 72,
            "ws": 90,
            "wa": 87
        },
        "price": {
            "unit": "HK$",
            "old": 989,
            "on_sale": true,
            "new": 276
        },
        "stock_amount": 1
    },
    {
        "name": "Wine 591",
        "image": "./images/W-JP-002-QT-216.png",
        "vinage": 1934,
        "country": "Thioleia",
        "region": "Lipehelribury",
        "size": {
            "amount": "0.71",
            "unit": "L"
        },
        "rating": {
            "am": 77,
            "ws": 82,
            "wa": 62
        },
        "price": {
            "unit": "HK$",
            "old": 507,
            "on_sale": false,
            "new": 507
        },
        "stock_amount": 3
    },
    {
        "name": "Wine 47",
        "image": "./images/W-SW-005-QT-216.jpg",
        "vinage": 1909,
        "country": "Isle of Fucaiaherlu",
        "region": "Ombnette",
        "size": {
            "amount": "0.30",
            "unit": "L"
        },
        "rating": {
            "am": 60,
            "ws": 64,
            "wa": 90
        },
        "price": {
            "unit": "HK$",
            "old": 722,
            "on_sale": false,
            "new": 722
        },
        "stock_amount": 6
    },
    {
        "name": "Wine 367",
        "image": "./images/W-JP-003-QT-216.jpg",
        "vinage": 1973,
        "country": "Dosticstein Island",
        "region": "El Lingthall",
        "size": {
            "amount": "0.14",
            "unit": "L"
        },
        "rating": {
            "am": 87,
            "ws": 86,
            "wa": 82
        },
        "price": {
            "unit": "HK$",
            "old": 674,
            "on_sale": true,
            "new": 167
        },
        "stock_amount": 4
    },
    {
        "name": "Wine 815",
        "image": "./images/W-SW-003-QT-213.jpg",
        "vinage": 1974,
        "country": "Miuseia",
        "region": "Loshae River",
        "size": {
            "amount": "0.47",
            "unit": "L"
        },
        "rating": {
            "am": 52,
            "ws": 64,
            "wa": 66
        },
        "price": {
            "unit": "HK$",
            "old": 963,
            "on_sale": false,
            "new": 963
        },
        "stock_amount": 3
    },
    {
        "name": "Wine 229",
        "image": "./images/W-JP-010-QT-217.jpg",
        "vinage": 1913,
        "country": "New Moany",
        "region": "Port Oywoo",
        "size": {
            "amount": "0.68",
            "unit": "L"
        },
        "rating": {
            "am": 73,
            "ws": 87,
            "wa": 88
        },
        "price": {
            "unit": "HK$",
            "old": 974,
            "on_sale": true,
            "new": 279
        },
        "stock_amount": 8
    }
];

