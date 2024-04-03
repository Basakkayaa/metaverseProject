// document.getElementById("btnNft").addEventListener("click", function () {
//     let nftDiv = document.getElementById("byNft");
//     let svg = document.querySelector("path");
//     if (nftDiv.style.display === "none") {
//         nftDiv.style.display = "block";
//         btnNft.classList.add("nft");
//         svg.getAttribute("fill", "black");

//     } else {
//         nftDiv.style.display = "none";
//         btnNft.classList.remove("nft");
//         svg.setAttribute("fill", "var(---nft-color)");
//     }
// });


// document.getElementById("btnNft").addEventListener("click", function () {
//     let nftDiv = document.getElementById("byNft");
//     let svg = document.querySelector("path");
//     if (nftDiv.style.display === "none" && svg.getAttribute("fill") === "var(---nft-color)") {
//         nftDiv.style.display = "block";
//         btnNft.classList.add("nft");
//         svg.setAttribute("fill", "black");
//     } else {
//         nftDiv.style.display = "none";
//         btnNft.classList.remove("nft");

//     }
// });


// document.getElementById("btnNft").addEventListener("click", function () {
//     let nftDiv = document.getElementById("byNft");
//     let svg = document.getElementById("svg");
//     let path = svg.querySelector("path");
//     if (nftDiv.style.display === "none") {
//         nftDiv.style.display = "block";
//         btnNft.classList.add("nft");
//         path.setAttribute("fill", "black");

//     } else {
//         nftDiv.style.display = "none";
//         btnNft.classList.remove("nft");
//         path.setAttribute("fill", "var(--nft-color)");
//     }
//     return;
// });

// SVG'nin başlangıçta dolum rengini saklamak için değişken tanımlama
// let originalFillColor = document.getElementById("svg").querySelector("path").getAttribute("fill");

// document.querySelectorAll(".btnNft").addEventListener("click", function () {
//     let nftDiv = document.querySelectorAll(".byNft");
//     let svg = document.getElementById("svg");
//     let path = svg.querySelector("path");

//     if (nftDiv.style.display === "none") {

//         path.setAttribute("fill", "black");

//         nftDiv.style.display = "block";
//         btnNft.classList.add("nft");
//     } else {
//         path.setAttribute("fill", originalFillColor);
//         nftDiv.style.display = "none";
//         btnNft.classList.remove("nft");
//     }
// });

// by nft button
let originalFillColor = document.getElementById("svg").querySelector("path").getAttribute("fill");
document.querySelectorAll(".btnNft").forEach(function (btnNft) {
    btnNft.addEventListener("click", function () {
        let nftDiv = document.querySelector(".byNft");
        let svg = document.getElementById("svg");
        let path = svg.querySelector("path");

        if (nftDiv.style.display === "none" || nftDiv.style.display === "") {
            path.setAttribute("fill", "black");
            nftDiv.style.display = "block";
            btnNft.classList.add("nft");
        } else {
            path.setAttribute("fill", originalFillColor);
            nftDiv.style.display = "none";
            btnNft.classList.remove("nft");
        }
    });
});

// header profile
function toggleDropdown() {
    let dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}



// header nft button
document.getElementById("headerBtnn").addEventListener("click", function () {
    let btn = document.getElementById("btn");
    let textEth = document.getElementById("textEth");
    if (btn.style.display === "none" || btn.style.display === "") {
        // btn.style.display = "block";
        textEth.style.display = "block";
        btn.classList.add("headerBtn");
    } else {
        btn.style.display = "none";
        textEth.style.display = "none";
        btn.classList.remove("headerBtn"); // headerBtn sınıfını kaldır
    }
});
