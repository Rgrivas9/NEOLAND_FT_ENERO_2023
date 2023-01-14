const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
const findStreamer=()=>{const x=streamers.filter(streamer => (streamer.name.toLowerCase()).includes(document.getElementById("name").value.toLowerCase()));
  (x.length==0 ? console.log('No se han encontrado coincidendias') : console.log(x))}
