//smootscroll

var posY = 0;
var jarak = 15;

function smoothScroll(id) {
    var target = document.getElementById(id).offsetTop; //jarak antara atas dan div
    console.log(target)


    var scrollAnimate = setTimeout(function() {
        smoothScroll(id);
    }, 5)

    posY = posY + jarak;


    //berhenti dibagian tertentu
    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;

    } else {
        window.scroll(0, posY)
    }


    return false;
}

//fungsi validasi forumlar

function validasi(form) {
    var lolos = true;
    var errorText = '';

    for (i = 0; i < 3; i++) {
        if (form[i].value.trim().length <= 0) {

            switch (i) {
                case 0:
                    errorText = 'nama';
                    break;
                case 1:
                    errorText = 'email';
                    break;
                case 2:
                    errorText = 'pesan';
                    break;
                default:
            }
            if (form[i].nextElementSibling.className != 'error') {
                form[i].style.borderColor = 'red';
                form[i].insertAdjacentHTML('afterend', "<div class='error'>" + errorText + " tidak boleh kosong </div>");
            }

            lolos = false;
            return false;
        } else {

            if (form[i].nextElementSibling.className == 'error') {
                form[i].style.borderColor = 'green';
                form[i].nextElementSibling.remove();
            }
        }
    }
}

//gambar geleri
var target_gambar = document.getElementById('target_gambar');
var array_gambar = document.getElementById('karya_lain').children;
var no_sekarang = 0;

function ganti_gambar(gambar) {
    target_gambar.src = gambar.getAttribute('src');
    no_sekarang = gambar.className;
}

function ganti_sebelum() {
    no_sekarang = no_sekarang - 1;
    if (no_sekarang < 0) no_sekarang = 2;

    target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}

function ganti_berikut() {

    no_sekarang = no_sekarang + 1;
    if (no_sekarang > 2) no_sekarang = 0;

    target_gambar.src = array_gambar[no_sekarang].getAttribute("src");
}