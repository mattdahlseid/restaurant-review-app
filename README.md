# Restaurant Reviews App

## Project Overview
This project was created to fulfill a requirement for [Udacity's Front End Nanodegree program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). Students were given [starter code](https://github.com/udacity/mws-restaurant-stage-1) for a restaurant reviews app and asked to convert a static web page into a mobile-ready web application. The original code had several design issues and needed to be altered to integrate a responsive design for different display sizes. It also required accessibility improvements for screen reader use. Students were also asked to add a service worker to allow for a better offline experience for app users.

<img src="https://preview.ibb.co/jSm3Cz/app_grab.png" alt="app screen grab" border="0">

## Getting Started
1. [Download](https://github.com/mattdahlseid/restaurant-review-app/archive/master.zip) or clone the [repository](https://github.com/mattdahlseid/restaurant-review-app)
2. To serve up the site files on your local computer, you'll need to start up a simple HTTP server. One option is to use Python to do this. If you're not sure if you have Python, open your terminal and run `python -v`. If a version displays, continue on. If you don't have Python, you can download it from Python's [website](https://www.python.org/). 
3. Navigate (cd) into the restaurant-review-app folder from the terminal.
4. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use). For Python 3.x, you can use `python3 -m http.server 8000`.
5. With the server running, open a browser and enter `http://localhost:8000`. You should be able to view the app from there.

## Dependencies 
### Leaflet.js and Mapbox
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). I have not included my API key for [security reasons](https://medium.freecodecamp.org/how-to-securely-store-api-keys-4ff3ea19ebda), so you will need to grab your own to view the Mapbox features. In js/main.js (Line 81) and js/restaurant_info.js (Line 25), you need to replace `<your MAPBOX API KEY HERE>` with a free token from [Mapbox](https://www.mapbox.com/).

### Google Maps
While this application uses Mapbox, there is also commented-out code from the starter repository that allows for use for the [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key). If you'd prefer to use a Google Maps API key, go through the HTML and JS files and replace the Mapbox code with the commented-out Google Maps code.

## Built With
* HTML
* CSS
* JavaScript
* Mapbox
* Leaflet.js

## Acknowledgments
Udacity's [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893) course and [Web Accessibility](https://www.udacity.com/course/web-accessibility--ud891) course helped provide some foundational knowledge to complete this project. Brad Traversy's YouTube video ["Intro to Service Workers and Caching"](https://www.youtube.com/watch?v=ksXwaWHCW6k) was also a valuable resource.
[Starter code](https://github.com/udacity/mws-restaurant-stage-1) from Udacity.
