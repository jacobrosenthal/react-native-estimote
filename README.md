react-native-estimote
---------------------
React Native extensions for the [Estimote iOS SDK](https://github.com/Estimote/iOS-SDK)

INSTALL
-------
The depenency story on react native is still very incomplete so bear with me. From your existing react native project:
```
npm i --save react-native-estimote
```
Open your project and from node_modules/react-native-estimote drag RNEstimote.xcodeproj into your project. Next navigate to your top level project and for your main target, click Build Phases and drag the libRNEstimote.a product into the Link Binary With Libraries section. For a good example see the [react native linking guide](https://facebook.github.io/react-native/docs/linking-libraries.html)

Then click the + button at the bottom to add CoreBluetooth CoreLocation and SystemConfiguration Frameworks. 

Lastly copy the EstimoteSDK/EstimoteSDK.framework from the [Estimote iOS SDK (3.2.7 or greater)](https://github.com/Estimote/iOS-SDK) into your project root. Then drag it from there into your project as you did with RNEstimote.xcodeproj (though you dont need to Link Binary this time)

Backgrounding might need some capabilities and plist stuff. Stay tuned.