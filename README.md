# Calubar

A simple app that is used to manage your applications, automatically.

## Introduction

This program lets you organize and manage your applications you download
from the web as a zip archive or a tarball. If you are just putting them
anyplace you have downloaded them and want to organize your apps This will
help you with that.

## What is the structure of the App.

1. Cross platform library for downloading and managing you apps. (Library)
2. A Desktop App to handle saving and storing your dependencies. (App)
3. A backend server to save users data. (Backend)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/theZetrax/calucal.git
# Go into the repository
cd calubar
# Install dependencies
yarn
# Run the app
yarn start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Re-compile automatically

To recompile automatically and to allow using [electron-reload](https://github.com/yan-foto/electron-reload), run this in a separate terminal:

```bash
npm run watch
```

## License

[Apache-2.0](LICENSE.md)
