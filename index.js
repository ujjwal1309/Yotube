import navbar from "/component.js";
document.getElementById("navbar").innerHTML = navbar();

let sorting;

const sortVideo = () => {
  sorting = sort_term.value;
  moviesSuggestion();
};

let sort_term = document.getElementById("srt");
sort_term.onchange = sortVideo;

const searchVideos = () => {
  let search = document.getElementById("search").value;

  localStorage.setItem("searchKey", JSON.stringify(search));

  moviesSuggestion();
};

const moviesSuggestion = async () => {
  try {
    const API_KEY = "AIzaSyA9GZobGRZbTIkHFzaIts9noneAA7vNovI";

    let search_term = JSON.parse(localStorage.getItem("searchKey"));

    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}&order=${
        sorting || "relevance"
      }`
    );

    let data = await response.json();

    let actual_data = data.items;

    appendMovies(actual_data);
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("search_movies").onclick = searchVideos;

const appendMovies = (data) => {
  document.getElementById("container").innerHTML = null;
  data.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    p1.innerText = snippet.title;
    let p2 = document.createElement("p");
    p2.innerText = snippet.channelTitle;
    let img = document.createElement("img");
    img.src = snippet.thumbnails.high.url;

    div.append(img, p1, p2);

    //added event handler to div

    div.onclick = () => {
      let data = {
        snippet,
        videoId,
      };

      localStorage.setItem("clicked", JSON.stringify(data));
      window.location.href = "video.html";
    };

    document.getElementById("container").append(div);
  });
};

window.onload = () => {
  moviesSuggestion();
};
