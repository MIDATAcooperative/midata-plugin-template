angular.module('demoi18n', [])
.constant('i18nc', {
  en : {
    "hello_world" : "Hello World",
    "start_import" : "Import Now"    
  },
  de : {
	"hello_world" : "Hallo Welt",
    "start_import" : "Import starten"  	
  },
  it : {
	"hello_world" : "Ciao mondo",
    "start_import" : "??"    
  },
  fr : {
    "hello_world" : "Bonjour tout le monde",
    "start_import" : "??"
  }
});