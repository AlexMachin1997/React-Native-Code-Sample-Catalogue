
# Mobile Application Development : Code Samples &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/blob/master/README.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/pulls)

As part of this repository it contains various React-Native code samples, they are for educational purposes only.

## Purpose
The overall purpose of this repository is to provide a central repositroy of code samples produced whilst trying out React-Native for the first time. During this section of the project code samples were combined together to form this repositroy, this will now enable snippets of the functionlaity to be copied over to the development build of the application.

For a full breakdown of the demos provided within this repository check the demos avaliable section.

## Demos avaliable
* [React-Navigation](https://reactnavigation.org/)
    1) [Basic header](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/React-Navigation/headerStyling)
    2) [Bottom material navigator](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/React-Navigation/createBottomTabNavigator)
    3) [stackNavigator](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/React-Navigation/stackNavigator)
    4) [switchNavigator](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/React-Navigation/switchNavigator)
     
* [Styled-Components](https://www.styled-components.com/)
    1) [Headings](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/Styled-Components)
    2) [Container](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/Styled-Components)
    
* [Text-Inputs](https://facebook.github.io/react-native/docs/textinput)
    1) [Handling input changes](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/Text-Input/UpdateValues)
    2) [Saving data](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/Text-Input/Saving)
    3) [Loading data](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog/tree/master/Text-Input/Loading) 

* [ShortID](https://github.com/dylang/shortid)
    1) [Short ID Demo](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalogue)

* [PropType](https://reactjs.org/docs/typechecking-with-proptypes.html)
    1) [PropType Demo](https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalogue/tree/master/PropTypes)

## Getting started 

* Clone the project to your development environment by using ` git clone https://github.com/AlexMachin1997/React-Native-Code-Sample-Catalog.git`

* Install and configure android studio
    * Install the IDE
    * Click SDK manager within Android Studio settings.
    * Go to the SDK platforms tools and perform the following
        * Click show all package details and go to the latest version of Android
        * Click "Android SDK Platform 28"
        * Click "Sources for Android 28"
        * Click "Intel x86 Atom Ststem Image"
        * Click "Intel x86 Atom_64 System Image"
        * Click "Google APIs Intel x86 Atom System Image"
        * Click "Google APIs Intel x86 Atom_64 System Image"
        * Click "Google Play Intel x86 Atom System Image"
        * Click "Google Play Intel x86 Atom_64 System Image"

    * Go to SDK tools tab and perform the following:
        * Click show all package details.
        *  Click "Android SDK Build-Tools"
        *  Click "Android Emulator"
        *  Click "Android-SDK Platform Tools"
        *  Click "Android SDK tools"
        *  Click "Google play services"
        *  Click "Google USB Driver"
        *  Click "Intel x86 Emulator Accelerator (HAXM Installer)"
        *  Click "Support Respository"

    * Add a virtual device via the AVD manager
    * Check the Android SDK location is correct

* Configure the enviroment variables for Android Studio:
    * Add ANDROID_HOME = `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk`
    * Add `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk\platform-tools` to the PATH variable within the system and account sections

* Install Node.JS and node package manager(NPM):
    * https://nodejs.org/en/ (Node.JS and NPM)

* Install expo cli and react-native:
    * `npm install -g expo-cli` 

* Physical device configuration:
    * Enable developer mode
    * Enable USB debugging
    * Check the USB configuration is set to MTP
    * Uncheck and recheck the USB debugging (Weird issue during the setup)
    * Run `adb devices`, this should show the devices as the platform tools variable was set earlier
        * If it fails go to `C:\Users\ [USERNAME] \AppData\Local\Android\Sdk\platform-tools` in the command line and type in `adb devices` again
    * The util should show your device connected, note the name showed in the adb devices output
    * configure adbs reverse `adb -s <Device name from adb devices output> reverse tcp:8081 tcp:8081`
    * Run adb devices again to check everything is ok, your device should show up


* Dependency installation
    * Issue `npm install` to install all dependencies with NPM
    * Issue 'yarn install' to install all dependencies with yarn (Requires yarn to be configured)

* Running the development enviroment:
    * Go to the cloned repositories location in the terminal
    * Run `react-native run-android` (This will take a long time on the inital build, but the second time around it will take seconds)
    * If you have the emulator running it will run on that device
    * If you have a physical device attached it will run on that device
    * **Note**: Only one device can run at once

# Project Information
### Author information
Alex Machin

If you want to connect with me on my professional social network platforms feel free to use the links located below, but please don't abuse them.
* [LinkedIn](https://www.linkedin.com/in/alex-machin/)
* [Twitter](https://twitter.com/AlexMachin97)

### Project Licence information
This project is licensed under the MIT License, for more details about the API refer to the LICENCE.md file located within the project.