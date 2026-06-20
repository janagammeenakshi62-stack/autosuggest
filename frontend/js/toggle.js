var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "../images/john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "../images/jane.png"
    }
]

var curId = 0;
function toggle() {
    // curId = (curId + 1) % users.length;
    curId = (curId + 1) % 2;

    // toggle the rendered user details

    // image
    var user = users[curId];
    document.getElementById("user-img").src = user.image;

    // name
    document.getElementById("user-name").innerText = user.name;

    // gender
    document.getElementById("user-gender").innerText = user.gender;
   // document.getElementById("user-gender").textContent = user.gender;
}