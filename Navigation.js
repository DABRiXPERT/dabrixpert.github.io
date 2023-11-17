function toContent(buttonID, fileName) {
    var thisElement = document.getElementById(buttonID);
    var allSidebarButtons = document.getElementsByClassName("sidebar-button")
    for (var i = 0; i < allSidebarButtons.length; i++) {
        if (allSidebarButtons[i].id !== buttonID) {
            allSidebarButtons[i].classList.add("w3-leftbar");
            allSidebarButtons[i].classList.remove("w3-light-blue");
        }
        thisElement.classList.remove("w3-leftbar")
        thisElement.classList.add("w3-light-blue")
    }
    document.getElementById("mainView").src = fileName;
}