# get-invidious
A simple Firefox add-on that converts YouTube URLs to Invidious.

# About 
[Invidious](https://github.com/iv-org) is an open-source alternative for watching YouTube videos. If you find yourself watching a YouTube video and suddenly remember that you want to watch it on an Invidious instance instead, this browser generates a corresponding Invidious link for you. It defaults to [Yewtube](https://yewtu.be) but you can specify your preferred instance.

# Installation

## Firefox Add-Ons / XPI 
In the future, the extension will be added to the Firefox store or downloadable as an XPI file. For now, see below. 

## Developer Install
1. Download/Clone the repo.
2. Type `about:debugging` into the firefox search bar.
3. Select "This Firefox", then "Load Temporary Add-On..."
4. Select any file in the `get-invidious` directory.
The add-on should now be usable.

# Usage
Go to any YouTube page. Click the add-on's icon in the toolbar, specify an Invidious [instance](https://redirect.invidious.io/) (default is yewtu.be), click "Go!", then click the resulting link!

# Features TODO
- Add downloadable XPI file
- Add to Firefox Add-On store
- Add Chromium/Opera support
- Add 'Options' page where user's preferred Invidious instance is manually saved 
