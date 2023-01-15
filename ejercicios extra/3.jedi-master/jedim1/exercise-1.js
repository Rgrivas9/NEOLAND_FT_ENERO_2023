const ul = document.createElement("ul");
document.body.appendChild(ul);

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];

for (album of albums)
{
    const li = document.createElement("li");  
    li.className = "file";

    const a = document.createElement("a");
    a.innerHTML = album;

    li.appendChild(a);
    ul.appendChild(li);
}