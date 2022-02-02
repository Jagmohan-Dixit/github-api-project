var form = document.getElementById("form");
document.getElementById("result").style.marginBottom = 0;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;
  var searchName = search.split(" ").join("");

  document.getElementById("result").innerHTML = "";

  fetch("https://api.github.com/users/" + searchName)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://github.com/${searchName}"><img src="${data.avatar_url}"></img></a>
      `;
    });
  document.getElementById("result").style.marginBottom = "-15%";
});
