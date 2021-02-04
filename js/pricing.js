function table(x) {
    switch (x) {
        case 1:
            document.getElementById("consoles").style.display = "flex";
            document.getElementById("deck").style.display = "none";
            document.getElementById("kayak-table").style.display = "none";
            break;
        case 2:
            document.getElementById("consoles").style.display = "none";
            document.getElementById("deck").style.display = "flex";
            document.getElementById("kayak-table").style.display = "none";
        break;
        case 3:
            document.getElementById("consoles").style.display = "none";
            document.getElementById("deck").style.display = "none";
            document.getElementById("kayak-table").style.display = "flex";
        break;
    }
}