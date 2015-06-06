
module.exports = {

// typedef NS_ENUM(NSInteger, ESTNearableType)
ESTNearableTypeUnknown: 0,
ESTNearableTypeDog: 1,
ESTNearableTypeCar: 2,
ESTNearableTypeFridge: 3,
ESTNearableTypeBag: 4,
ESTNearableTypeBike: 5,
ESTNearableTypeChair: 6,
ESTNearableTypeBed: 7,
ESTNearableTypeDoor: 8,
ESTNearableTypeShoe: 9,
ESTNearableTypeGeneric: 10,
ESTNearableTypeAll: 11,

/**
*  Physical orientation of the device in 3D space.
*/
// typedef NS_ENUM(NSInteger, ESTNearableOrientation)
ESTNearableOrientationUnknown: 0,
ESTNearableOrientationHorizontal: 1,
ESTNearableOrientationHorizontalUpsideDown: 2,
ESTNearableOrientationVertical: 3,
ESTNearableOrientationVerticalUpsideDown: 4,
ESTNearableOrientationLeftSide: 5,
ESTNearableOrientationRightSide: 6,

/**
*  Proximity zone related to distance from the device.
*/
// typedef NS_ENUM(NSInteger, ESTNearableZone)
ESTNearableZoneUnknown: 0,
ESTNearableZoneImmediate: 1,
ESTNearableZoneNear: 2,
ESTNearableZoneFar: 3,

/**
*  Type of firmware running on the device.
*/
// typedef NS_ENUM(NSInteger, ESTNearableFirmwareState)
ESTNearableFirmwareStateBoot: 0,
ESTNearableFirmwareStateApp: 1,
};
