react-native-estimote
---------------------
React Native extensions for the [Estimote iOS SDK](https://github.com/Estimote/iOS-SDK)

INSTALL
-------
The depenency story on react native is still very incomplete so bear with me. From your existing react native project:
```
npm i --save react-native-estimote
```
Next see the [react native linking guide](https://facebook.github.io/react-native/docs/linking-libraries.html) for visual instructions, but you need to open your project and from node_modules/react-native-estimote drag RNEstimote.xcodeproj into your project file browser. Next navigate to your top level project and for your main target, click Build Phases and drag the libRNEstimote.a product into the Link Binary With Libraries section. 

Then click the + button at the bottom to add CoreBluetooth, CoreLocation and SystemConfiguration Frameworks. 

Lastly copy the EstimoteSDK/EstimoteSDK.framework from the [Estimote iOS SDK (3.2.7 or greater)](https://github.com/Estimote/iOS-SDK) into your project root. Then drag it from there into your project as you did with RNEstimote.xcodeproj (though you dont need to Link Binary this time)

Background monitoring requires the "Uses Bluetooth LE accessories" Capability to be set. [Background ranging](https://community.estimote.com/hc/en-us/articles/203914068-Is-it-possible-to-use-beacon-ranging-in-the-background-) is complicated

USE
---
 The Estimote SDK is required reading. This library attempts to usilize its conventions as closely as possible. Where nearable or nearable arrays are returned theyre converted to dictionaries or arrays of dictionaries, with most enums converted to strings.

Require the library and grab the react emitter:
```
var Estimote = require('react-native-estimote');
var DeviceEventEmitter = React.DeviceEventEmitter;

```

Utilize one of the Estimote APIs. All the constants are exported on the object like `Estimote.ESTNearableTypeAll`. Note, the Estimote nearable Identifier is seperate from the UUID.
```
Estimote.startMonitoringForIdentifier("4ba718229b92a8b3");

```

Then maybe in your react definition add listeners and handlers:
```
  componentWillMount: function(){
	var didEnterIdentifierRegion = DeviceEventEmitter.addListener(
	  'didEnterIdentifierRegion', this.didEnterIdentifierRegion
	);
	var didExitIdentifierRegion = DeviceEventEmitter.addListener(
	  'didExitIdentifierRegion', this.didExitIdentifierRegion
	);
  },
  didEnterIdentifierRegion: function(data){
    console.log("didEnterIdentifierRegion", JSON.stringify(data));
  },
  didExitIdentifierRegion: function(data){
    console.log("didExitIdentifierRegion", JSON.stringify(data));
  },
```

Which will print
```
	didEnterIdentifierRegion {"identifier":"4ba718239b91a8b3"} main.jsbundle:10:9550
	didExitIdentifierRegion {"identifier":"4ba718239b91a8b3"} main.jsbundle:10:9550

```

BACKGROUNDING
-------------
If you add the uses bluetooth le accessories capability your delegates will be called while your app is in the background, but not when killed or on the lock screen. It turns out that Estimote doesnt use ibeacon apis under the hood and is thus ineligible for that :( To get that behavior you may utilize [react-native-ibeacon](https://github.com/geniuxconsulting/react-native-ibeacon) in tandem to startMonitoringForRegion of the uuid (as opposed top the nearable id)
