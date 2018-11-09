# Making a Static WebPage Responsive and Mobile Ready
---

#### Making the App Desktop Ready 

i) You can use either the MapBox API or Google Maps to display the Maps the Restaurant Review App Uses.  

ii) I registered for an account with MapBox, obtained an API Key and placed it in main.js and the restaurant_info.js files (helps to render the map).  

iii) If you prefer to use Google Maps, replace the text  YOUR_GOOGLE_MAPS_API_KEY in index.html and restaurant.html with your own key.  


#### Making the App Mobile Ready
i) I included the <meta> tag in the index.html as well as the restaurant.html files.

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`  

ii)  Adding the following code in the restaurant-list display section to make it responsive across mobile devices.

` display: flex;   
  flex-direction:row; 
  flex-wrap:wrap;  
`  
#### Accessibility
Aria-roles and labels are added to the main sections of the webpages in both the index.html and restaurant.html files

#### Dependencies 
This project uses the following libraries to render maps:   
   
i) [leafletjs](https://leafletjs.com/)  
ii)[Mapbox](https://www.mapbox.com/)  
iii)[Python](https://www.python.org/)

#### How to Use the App

i) Clone this repository.  

ii) Check if you have python installed since you will use python to run the server. 
        `python -V`  

ii) From inside the new directory, launch a local client server using Python from your terminal: 
     
Python 2: python -m SimpleHTTPServer 8000   
Python 3: python3 -m http.server 8000  

iii) Visit the site in your browser at http://localhost:8000



#### References
Udacity Class Resources  
https://goo.gl/fJNo3Y


