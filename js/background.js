const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.png",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.png",
  "11.png",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.png",
  "16.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.style = `background-image:url(img/${chosenImage}); background-size:cover;`;
