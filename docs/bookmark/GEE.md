# Google Earth Engine

* [AmericaView University: GOOGLE EARTH ENGINE TUTORIALS](https://americaview.org/program-areas/education/google-earth-engine-tutorials/)
* [Otsu’s Method for Image Segmentation](https://medium.com/google-earth/otsus-method-for-image-segmentation-f5c48f405e)
  * Frank Obusek (geofranker@gmail.com) mentions that NDWI for water, NDVI for vegetation. Maybe Blue/Red for builtup areas. Otsu is best suited for single class extraction and change detection, not mutliclass extraction.
* [Google Earth Engine Developers - Google Groups](https://groups.google.com/forum/#!forum/google-earth-engine-developers)
* [Time series on Landsat data with Google Earth Engine](http://www.acgeospatial.co.uk/time-series-on-landsat-data-gee/)
* [GeoHackWeek - Google Earth Engine Workshop](https://geohackweek.github.io/GoogleEarthEngine/)
* [GeoHackWeek](https://geohackweek.github.io): WORKSHOP ON GEOSPATIAL DATA SCIENCE
* [github.com/gee-community/ee-palettes](https://github.com/gee-community/ee-palettes)
  * [Jin's example for palette](https://code.earthengine.google.com/f1d563fd7afdab1114fdfd3ccdc2e426)
* [LAI (leaf Area Index)](https://code.earthengine.google.com/42e7a65e9d5683dc0b303cf6ce05ac42)
* [geemap Tutorials](https://github.com/giswqs/geemap/blob/master/examples/README.md) by Qiusheng Wu
* [Sentinel-5P NRTI NO2: Near Real-Time Nitrogen Dioxide](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_NRTI_L3_NO2)
  * [the initial sample script](https://code.earthengine.google.com/?scriptPath=Examples:Datasets/COPERNICUS_S5P_NRTI_L3_NO2)
* [GEE official: Client vs. Server](https://developers.google.com/earth-engine/client_server)
* [Sentinel-5P를 이용한 동영상](https://code.earthengine.google.com/679132884bc056fbc3ed1cfaba70083c)
* [Sentinel-5P를 이용한 night light 동영상](https://code.earthengine.google.com/?scriptPath=users%2Ftaegon%2FTIL%3Anight_light_animation)
* [Mean Composite Fire Severity Metrics Computed with Google Earth Engine Offer Improved Accuracy and Expanded Mapping Potential](https://doi.org/10.3390/rs10060879): GEE를 이용한 논문
* [remote sensing: Google Earth Engine Applications](https://www.mdpi.com/journal/remotesensing/special_issues/GEE)
* [Cloud Masks at Your Service](https://medium.com/sentinel-hub/cloud-masks-at-your-service-6e5b2cb2ce8a)
  * Simon (Vsevolod) Ilyushchenko: We have also been running s2cloudless on the full S2 archive. The ingestion is not finished (so there is no catalog entry yet), but you can start using the COPERNICUS/S2_CLOUD_PROBABILITY collection. The assets contain the cloud probability between 0 and 100.
  * Christopher Brown: While the SentinelHub version is at 160m for Slovenia and Croatia 2019, COPERNICUS/S2_CLOUD_PROBABILITY in Earth Engine is at 10m and with global coverage 2019 through 2016 I believe.
* [GEE App: NO2 real-time](https://showcase.earthengine.app/view/tropomi-explorer#dataset=Nitrogen%20dioxide;datatype=Near-real-time;center=%7B%22type%22%3A%22Point%22%2C%22coordinates%22%3A%5B129.79433418118222%2C36.3842537294894%5D%7D;aoi=%7B%22type%22%3A%22Polygon%22%2C%22coordinates%22%3A%5B%5B%5B128.54292274319394%2C35.99481249114161%5D%2C%5B128.54292274319394%2C35.834653521893365%5D%2C%5B128.82856727444394%2C35.834653521893365%5D%2C%5B128.82856727444394%2C35.99481249114161%5D%5D%5D%2C%22geodesic%22%3Afalse%2C%22evenOdd%22%3Atrue%7D;cloud=10;leftdate=2020-01-01;rightdate=2020-02-01;min=20;max=400;swipe=false;chart=yoy;zoom=6;)
  * [Google Earth Engine - Sentinel NO2 mean, min, max chart](https://gis.stackexchange.com/questions/361138/google-earth-engine-sentinel-no2-mean-min-max-chart)
* [Measuring Sky brightness from satellites](https://twitter.com/pmisson/status/1258775128814559233)
  * The article: [https://www.nature.com/articles/s41598-020-64673-2](https://www.nature.com/articles/s41598-020-64673-2)
  * The GEE code: [https://code.earthengine.google.com/e189778f671f574a2911c88b33f61c47](https://code.earthengine.google.com/e189778f671f574a2911c88b33f61c47)
  * The app: [https://pmisson.users.earthengine.app/view/trends](https://pmisson.users.earthengine.app/view/trends)
  * The code with DOI: [https://zenodo.org/record/3818444#.XrbecfL7Q5k](https://zenodo.org/record/3818444#.XrbecfL7Q5k)
  * The Github: [https://github.com/pmisson/SkyBrightnessTrends/releases/tag/0.9](https://github.com/pmisson/SkyBrightnessTrends/releases/tag/0.9)
* [GEE exporting](https://developers.google.com/earth-engine/exporting)
  * [exporting landsat to TIFF](https://code.earthengine.google.com/03943e1408f1d10a4b88197bdc7fd50d) by Vladimir Kapustin (kapooostin@gmail.com)
* [Geographical Data Science to Identify the Most Impactful Areas for Solar Installation in Africa](https://medium.com/omdena/geographical-data-science-to-identify-the-most-impactful-areas-for-solar-installation-in-africa-6daadbfc10d3)
* [github.com/giswqs/earthengine-apps](https://github.com/giswqs/earthengine-apps): [geemap-heroku](https://geemap-demo.herokuapp.com/)

## Tutorials

* [Earth Engine resources for higher education](https://developers.google.com/earth-engine/edu): GEE 사용법 강의를 모아두었다. 소리 소문 없이 꾸준히 업데이트가 되는 것 같다.
* [Scale](https://developers.google.com/earth-engine/scale): scale에 대한 설명
* [GEE: Coding Best Practices](https://developers.google.com/earth-engine/best_practices): memory/computation time issue에는 이글과 아랫 글 참조.
* [GEE: Debugging guide](https://developers.google.com/earth-engine/debugging#scaling-errors)

## Repository Starring

* [nclinton](https://earthengine.googlesource.com/users/nclinton/)
  * Nicholas Clinton
  * Change_Detection_EEUS2018
* [gena](https://earthengine.googlesource.com/users/gena/)
  * Gennadii Donchyts <gennadiy.donchyts@gmail.com>
  * grid 관련 패키지
  * [grid example](https://code.earthengine.google.com/466a9e35725bcabebeb1a82843cbbc7e)
* [georgeazzari](https://earthengine.googlesource.com/users/georgeazzari/EETools): exporting tools
* [github.com/kmarkert/cartoee](https://github.com/kmarkert/cartoee): To convert maps in Google Earth Engine to image format like jpg or png.
  * [associated summary](https://joss.theoj.org/papers/10.21105/joss.01207.pdf)

## read it later

* [to identify the greatest NDVI decrease per pixel and creates an image with its relevant loss year](https://code.earthengine.google.com/a6d8f3b21f8a1e6fad66c64c7a4ec680)

## presentations

* [EarthEngineMeetup - geemap](https://docs.google.com/presentation/d/18fUnY7ZANmCglhGnAZG03G9jIdLGuAdrWbRFwanJHn4/edit#slide=id.g4ba0eb5868_0_53)

## blog

* [Qiusheng Wu - University of Tennessee](https://wetlands.io/)
* [Planet GEE Pipeline CLI](https://samapriya.github.io/projects/planet_gee_pipeline_cli/): Planet의 개발자
* [FraLab FTP server](http://web.gps.caltech.edu/~cfranken/data.html): Africa TROPOMI dataset
