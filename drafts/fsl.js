const fs = require("fs");

fs.readdir( "images", (e, f) =>
{
    const fa = [
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
    const fa2 = [
        "heightlight-desktop-1.png",
        "heightlight-desktop-2.png",
        "heightlight-desktop-3.png",
        "heightlight-desktop-4.png",
        "heightlight-mobile-1.png",
        "heightlight-mobile-2.png",
        "heightlight-mobile-3.png",
        "heightlight-mobile-4.png",
        "image-53-4.png",
        "image-54-4.png",
        "image-55.png",
        "ponti-wine-cellars-logo-1589532960.jpg.png",
        "ponti_wine_cellars-logo BLACK.png",
        "slider-1.png",
        "slider-2.png",
        "slider-3.png",
    ]
    console.log(e, f);
    debugger;
});
