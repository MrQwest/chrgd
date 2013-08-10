var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

console.log(battery.level);

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging"); 
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();

if(battery.level > 95) {
	$(".batstatus").text("fullbattery");	
}
else if(battery.level < 95) {
	$(".batstatus").text("highbattery");
}
else if(battery.level < 75) {
	$(".batstatus").text("mediumbattery");
}
else if(battery.level < 35) {
	$(".batstatus").text("lowbattery");
}
else if (battery.level < 5) {
	$(".batstatus").text("emptybattery");
}
else {
	$(".batstatus").text("broken");
}