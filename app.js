var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=HlTXm2KyOdCahjOJAEnbHNJtm3MJHXEAKboHcznPORA";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

  const getData = (response) => {
    const plantData = JSON.parse(response).data;
  }

  const addToDom = (plant) =>{
    const wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute("class", plant.common_name)
    const plant_name = document.createElement('h3');
    plant_name.innerText = plant.common_name;
    const img_url=plant.img_url;
    const plant_img=document.createElement('img')
    plant_img.setAttribute('src', img_url);
    wrapperDiv.appendChild(plant_name);
    wrapperDiv.appendChild(plant_img);
    document.getElementById("plants").appendChild(wrapperDiv);

  }
// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
const displayContent = () => {
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
    })
  );
  }
//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
