// https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-input");

var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function () {
    // Get the value typed in the search bar
    // Use user typed data in the query parameter of the API URL
    // API call
    // Append all the suggestiosn to the div tag in the HTML page
    var query = searchBar.value.trim();
    console.log(query);
    fetchSuggestions(query);
})

function fetchSuggestions(query) {
    var FULL_API = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(FULL_API)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            //console.log(data);
            showSuggestions(data);
        })
        .catch(function (err) {
            console.log("Error : " + err);
        });
}

function showSuggestions(data) {
    var values = data.results;
    if (data.count == 0) {
        searchSuggestions.innerHTML = "<div>No matching results found</div>";
    } else {
        var htmlString = "";
        for (var i = 0; i < values.length; i++) {
            htmlString += "<div><span class='suggestion-item'>" + values[i].text + "</span><span class='item-weight'>" + values[i].weight + "</span></div>";
        }
        searchSuggestions.innerHTML = htmlString;
    }
}