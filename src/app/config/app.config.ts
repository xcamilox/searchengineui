export class ConfigApp{

	conf={
			"search":"http://127.0.0.1:8000/search/",
			"sourceList":"http://127.0.0.1:8000/search/sourceList",
			"sampList":"http://127.0.0.1:8000/search/sampList",
			"sendImageSamp":"http://127.0.0.1:8000/search/sampMessage",
			"sendSedSamp":"http://127.0.0.1:8000/search/sendSED",
			"observation":"http://127.0.0.1:8000/search/observation",
			"sdss":{
					"image":"http://skyserver.sdss.org/dr13/SkyServerWS/ImgCutout/getjpeg?ra=ravalue&dec=decvalue&scale=0.05&width=300&height=300&opt=GPST",
					"spect":"http://skyserver.sdss.org/dr13/en/get/SpecById.ashx?id=specobjid"
				}

			}

	constructor(){}

	getUrl(_item:string){
		try{
			return this.conf[_item];
		}catch(err){
			console.log("Not item found");
		}
	}
}