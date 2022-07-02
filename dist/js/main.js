function showroomlist() {
    if (innerWidth <= 576) {
        document.getElementById("room").style.display = "none"
        document.getElementById("room-list").style.display = "block"
    } else {
        document.getElementById("room").style.display = "inline-block"
        document.getElementById("room-list").style.display = "inline-block"
    }
}

function showroom() {
    if (innerWidth <= 576) {
        document.getElementById("room-list").style.display = "none"
        document.getElementById("room").style.display = "block"
    } else {
        document.getElementById("room").style.display = "inline-block"
        document.getElementById("room-list").style.display = "inline-block"
    }
}