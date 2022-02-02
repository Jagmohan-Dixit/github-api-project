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
      <a class="profile-container" target="_blank" href="https://github.com/${searchName}">
        <img class="profile-image" src="${data.avatar_url}" alt="user-profile" />
        <div class="profile-content--container">
            <h2>${data.name}</h2>
            <h4>${data.location}</h4>
            <a class="profile-link" target="_blank" href="${data.blog}">portfolio</a>
            <a class="profile-link" target="_blank" href="https://twitter.com/${data.twitter_username}">twitter</a>
        </div>
    </a>
      `;
    });
  document.getElementById("result").style.marginBottom = "-15%";
});
