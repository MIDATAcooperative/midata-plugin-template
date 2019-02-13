angular.module('demoi18n', [])
.constant('i18nc', {
  en :
//$START_LANGUAGE : en  	  
  {
    "hello_world" : "Hello World",
    "start_import" : "Import Now"    
  }
//$END_LANGUAGE : en
, de : 
//$START_LANGUAGE : de
  {
	"hello_world" : "Hallo Welt",
    "start_import" : "Import starten"  	
  }
//$END_LANGUAGE : de
, it :
//$START_LANGUAGE : it	
  {
	"hello_world" : "Ciao mondo",
    "start_import" : "??"    
  }
//$END_LANGUAGE : it
, fr :
//$START_LANGUAGE : fr	
  {
    "hello_world" : "Bonjour tout le monde",
    "start_import" : "??"
  }
//$END_LANGUAGE : fr
});