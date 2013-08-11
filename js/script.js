var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

console.log(battery.level);

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging");
    $("body").addClass("charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();

if(battery.level < 1) {
	$(".broken").remove();
}
else {
	// do nothing
}

var bat = battery.level * 100;

if (bat > 5 && bat <= 35) {
	$(".batstatus").text("lowbattery");
}
else if (bat > 35 && bat <= 75) {
	$(".batstatus").text("mediumbattery");
}
else if (bat >75 && bat <= 95) {
	$(".batstatus").text("highbattery");
}
else if (bat > 95) {
	$(".batstatus").text("fullbattery");
}
else {
	$(".batstatus").text("emptybattery");
}

$(".batstatus").css({opacity: battery.level});

console.log(bat);