const finalip = document.querySelector(".finalip");
const finallocation = document.querySelector(".finallocation");
const finalutc = document.querySelector(".finalutc");
const finalisp = document.querySelector(".finalisp");
const imgarrow = document.querySelector(".imgarrow");
const inputip = document.querySelector(".inputip");

const fetchFinal = async () => {
  const dynamicIpAddress = inputip.value;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_bBC7lN8hjrCkn0T2XfzODEAdnKrAw&ipAddress=${dynamicIpAddress}`;
  console.log("hi");

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const location = `${data.location.city}, ${data.location.country} ${data.location.postalCode}`;
  finalip.innerText = data.ip;
  finallocation.innerText = location;
  finalutc.innerText = data.location.timezone;
  finalisp.innerText = data.isp;
  lat = data.location.lat;
  lng = data.location.lng;
  fetchMap(lat, lng);
};

imgarrow.addEventListener("click", () => {
  fetchFinal();
});

let map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const fetchMap = (lat, lng) => {
  var markerIcon = L.icon({
    iconUrl: "images/icon-location.svg",

    iconSize: [46, 56], // size of the icon
    iconAnchor: [23, 55], // point of the icon which will correspond to marker's location
  });
  map.setView([lat, lng], 17);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: false,
  }).addTo(map);

  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
};
