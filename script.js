const imagemenu = document.getElementsByClassName('.image-menu');


function togglemenu() {

    const header = document.getElementById('headermenu')

    if (header.style.display == "none" ) { header.style.display = "block"; }

    else {
        header.style.display = "none"
    }
}


imagemenu.addEventListener('click', togglemenu);


