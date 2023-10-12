const fetchQuote = async () => {
  let res = await fetch("https://api.themotivate365.com/stoic-quote");
  let fetchImage = await fetch("https://picsum.photos/seed/picsum/200/300");

  let json = await res.json();
  console.log(json);
  console.log(fetchImage);
  let quote = json.quote;
  let author = json.author;
  document.getElementById("image").src = fetchImage.url;
  document.getElementById("quote").textContent = quote;
  document.getElementById("author").textContent = author;
};
