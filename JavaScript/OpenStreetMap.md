
[API OpenStreetMap](https://leafletjs.com/SlavaUkraini/)  
[leaflet-color-markers](https://www.github.com/pointhi/leaflet-color-markers)  
[Leaflet.markercluster]()  

[OpenStreetMap 離線地圖下載區](https://download.geofabrik.de/index.html)   
[g0v/twgeojson](https://github.com/g0v/twgeojson/tree/master/json)  

### [Leaflet + OpenStreetMap 地圖應用開發](https://www.youtube.com/watch?v=pUizu62dlnY)  20220322      
### [Web 視覺化(四)：建立 OpenStreetMap 地圖](https://noob.tw/openstreetmap/)  
### [【Day 13】 淺談 OSM](https://ithelp.ithome.com.tw/articles/10273398)   
### [OSM + Leaflet 學習筆記1：建地圖、marker、事件、換圖層](https://www.letswrite.tw/leaflet-osm-basic/)  
### [leaflet載入離線OSM(OpenStreetMap)](https://www.itread01.com/content/1541647275.html)   20220323    
### [將openstreemap圖資轉成地圖瓦片](https://longfamily.pixnet.net/blog/post/351665930-%E5%B0%87openstreemap%E5%9C%96%E8%B3%87%E8%BD%89%E6%88%90%E5%9C%B0%E5%9C%96%E7%93%A6%E7%89%87)  20220329   
### [下载OpenStreetMap离线地图数据并搭载瓦片服务器](https://blog.csdn.net/hopyGreat/article/details/100625385)  20220329    
### [Web 視覺化(四)：建立 OpenStreetMap 地圖](https://noob.tw/openstreetmap/)  20220329    


### Leaflet + OpenStreetMap 地圖應用開發  
[JS API](https://youtu.be/pUizu62dlnY?t=1787)  

< link rel="stylesheet" href="https://unpkg.com/leafet@1.6.0/dist/leaflet.css" >< /link>  
< link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.css"< /link>  
< link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/MarkerCluster.Default.css"< /link>  
< script src="https://unpkg.com/leafet@1.6.0/dist/leaflet.js">< /script>  
< script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/1.4.1/leaflet.markercluster.js">< /script>  

< div id="map">< /div>  

html, body { width: 100%; height: 100%; }  
#map { width: 100%; height: 100%; }  

var map = L.map('map', { center:[22.604799, 120.2976256], zoom:16 })  
L.titleLayer('https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png',  
{ attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreepMap</a> contributors'})  
.addTo(map);  

var greenIcon = new L.Icon({  
iconUrl: 'https://cdn.rawgit.com/..../green.png',  
shadowUrl: 'https://cdnjs./.../shadow.png',  
iconSize: [25,41],  
iconAnchor: [12, 41],  
popupAnchor: [1, -34],  
shadowSize: [41, 41],  
})  

L.marker([22.604799, 120.2976256], { icon: greenIcon} ).addTo(map)  
.bindPopup('< h1>測試< /h1>< p>GGXX< /p>')  
.open

// 新增一個圖層
var markers = new L.MarkerClusterGroup().addTo(map);  

var xhr = new XMLHttpRequest();  
xhr.open('get', 'https://www.../xxx.json');  
xhr.send();
xhr.onload = function() {  
// STRING 轉成 JSON物件  ; 取得 features屬性  
let data = JSON.parse(xhr.responseText).features;  
for(let i = 0; data.length > i; i++) {  
markers  
.addLayer(L.marker([data[i].lat, data[i].lng], { icon: greenIcon })  
.bindPopup('< h1>'+data[i].properties.name+'< /h1>')  
);  
}  
map.addLayer(markers);  
}


### leaflet載入離線OSM(OpenStreetMap)  
[離線leaflet download](https://leafletjs.com/SlavaUkraini/download.html)  
[Maperitive OSM工具 地圖下載](http://maperitive.net/)   

### 將openstreemap圖資轉成地圖瓦片  

[openstreemap圖資](http://download.geofabrik.de/asia/taiwan-latest.osm.pbf)    
加載的離線地圖taiwan-latest.osm.pbf  
可自選區域( Map-->Set Geometry Bounds )  
在下方使用Command promat。輸入generate-tiles minzoom=8 maxzoom=17  
數字表示地圖的縮放級別可以更換地圖的縮放級別可以更換。還可以在map菜單欄的switch to rules中選擇地圖的樣式。比如黑色或者精簡地圖。下載完成後在其軟件的目錄下面有個Tiles的文檔夾，這裏面存放的就是地圖的瓦片。  
