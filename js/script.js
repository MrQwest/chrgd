var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

function updateBatteryStatus() {
  console.log("Battery status: " + battery.level * 100 + " %");

  if (battery.charging) {
    console.log("Battery is charging");
  }
}

battery.addEventListener("chargingchange", updateBatteryStatus);
battery.addEventListener("levelchange", updateBatteryStatus);
updateBatteryStatus();