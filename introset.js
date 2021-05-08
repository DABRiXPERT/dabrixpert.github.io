var version = '1.0.0'
var refreshDate = new Date().toISOString()
var latest_update = "2021-05-08T09:37:11.241Z"
console.log("CONSOLE FUNCTIONED PERFECTLY.")

var ctrl_version = document.getElementById("version")
var ctrl_refreshDate = document.getElementById("refreshDate")
var ctrl_currentDate = document.getElementById("currentDate")
var ctrl_latest_update = document.getElementById("latest_update")

console.log("VER: "+version)
console.log("REF: "+refreshDate)
console.log("CUR: "+currentDate)
console.log("LST: "+latest_update)

ctrl_version.innerHTML = version
ctrl_refreshDate.innerHTML = refreshDate
ctrl_latest_update.innerHTML = latest_update

setInterval(function (){
    currentDate = new Date().toISOString()
    ctrl_currentDate.innerHTML = currentDate
}, 0)

