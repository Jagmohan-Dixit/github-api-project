var form = document.getElementById("form")


var search_name = document.getElementById("search")

fetch("https://api.github.com/users/"+search_name)
.then((res) => res.json())
.then(data => {
    console.log(data)
})