# Deploying to a Device Commands

## Production Builds

```
ionic cordova run android --prod --release
# or
ionic cordova build android --prod --release
```

## Sign Android APK

```
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
```

## Run the jarsigner tool

```
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-release-unsigned.apk my-alias
```

## Run zipalign tool

```
zipalign -v 4 android-release-unsigned.apk HelloWorld.apk
```

Path of zipalign C:\Users\ampkona\AppData\Local\Android\Sdk\build-tools\27.0.3

## Paths

```
C:\xampp\htdocs\study-baba-beta\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk
```


jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks C:\xampp\htdocs\study-baba-beta\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk study-baba-beta

C:\Users\ampkona\AppData\Local\Android\Sdk\build-tools\27.0.3\zipalign.exe -v 4 C:\xampp\htdocs\study-baba-beta\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk StudyBabaBeta.apk

