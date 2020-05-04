
fetch("https://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/event")
    .then(res => res.json())
    .then(handleEventData)

function handleEventData(handled) {
    console.log("handle data");
    console.log(handled);
    handled.forEach(showEventData)
}

function showEventData(EventData) {
    //    console.log("show EventData");
    //    console.log(EventData);

    const eventId = EventData.id;
    console.log("artistEventId");
    console.log(eventId);

    if (eventId) {
        //single bike
        fetch("http://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/event/" + eventId + "?_embed")
            .then(res => res.json())
            .then(getInfoById)
    }

    function getInfoById(info) {

        var artistName = info._embedded["wp:term"][1][0].name;
        console.log("artistName");
        console.log(artistName);





    //    const artistName = EventData.name; // Here I get each artists name
    //    const artistEventId = EventData.id; // Here I get each artist Event id


        const artistNameDisplay = document.createElement("li"); //I create <li>

         const firstLetter = artistName.charAt(0);
        console.log(firstLetter)
        artistNameDisplay.classList.add(firstLetter);

//        artistNameDisplay.classList.add("artistNameDisplay"); //add a class to the <li> so it becomes <li class="artistNameDisplay">

        artistNameDisplay.textContent = artistName; //make the li include the names


        document.querySelector(".artistsFetched").appendChild(artistNameDisplay); //Get the <ul class="artistsFetched"> that alredy excists in the html and put in the new li's

        //Getting the fist letter of each name and make it a class on the element



}
//------------------------------------------------






    const menuIcon = document.querySelector('.burgerMenu');

const navbar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle("change");
}) //burger menu toggles to and from X

//const magazineLink = "https://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/magazine?_embed";

//const eventsLink = "https://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/event?_embed";

//fetch("https://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/tags?per_page=100")

fetch("https://astridcaecilie.dk/kopenhagen/wordpress/wp-json/wp/v2/tags?per_page=100")
  .then(res => res.json())
  .then(handleTagData)

function handleTagData(handled) {
  var artistNames = [];
  handled.forEach(item => {
    //console.log(item.name);
    artistNames.push(item.name);
  });
  artistNames.sort();
  console.log(artistNames);
  artistNames.forEach(showTagData2);
  //  const artistNameDisplay = document.createElement("li");
  //  const firstLetter = artistName.charAt(0);
  //  artistNameDisplay.classList.add(firstLetter);
}

function showTagData2(artistName) {
  const li = document.createElement("li");
  li.textContent = artistName;
  const firstLetter = artistName.charAt(0);
  //artistNameDisplay.classList.add(firstLetter);

  console.log(artistName);
  console.log(".artistsFetched #" + firstLetter);
  const elem = document.querySelector(".artistsFetched #" + firstLetter);

  elem.appendChild(li);

    const h2 = document.querySelector(".LetterH2");

    if (elem > li) {
        elem.classList.remove("hide");
    }

}


// burger menu code inspired by these two sites: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js and
// https://www.youtube.com/watch?v=BN6fH1nRDxA

