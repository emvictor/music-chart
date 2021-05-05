<div style="font-size:20px">
  <h1>NextJS Music Chart</h1>
</div>

# About The Project

## Preview

The project can be previewed on https://music-chart.vercel.app/


<br/>

## Overview

This music chart app is made with Next.js, Axios, Redux and styled-components.

It fetches the top 100 musics on Deezer chart and allows you to add to a playlist, listen on Deezer and listen to a preview.

<br/>

## Features

### Musics List

The main view presents a music list with the musics from the forementioned API separately and fully clickable.

### Add to Playlist

The Add to Playlist button allows you to select the songs and add them to a playlist.

### Deezer and Preview Buttons

The Deezer Logo gets you to the song page, while the Play button takes you to a preview (playing preview audio in the same page is a work in progress).

### Playlist Page

The second view presents the playlist, with the musics selected by the user. The "Remove" button is a feature in development.

### Searchbar

The searchbar is currently under development.

### Responsive Design

The app is fully responsive, working in both desktop and mobile.

<br/>

## Screenshots

<br/>

<img src="https://i.imgur.com/RoGySiB.jpg" alt="Screenshot 1"
width="640"
height="341">

<img src="https://i.imgur.com/8CAMSDw.jpg" alt="Screenshot 2"
width="382"
height="510">

<img src="https://i.imgur.com/901Fw2n.jpg" alt="Screenshot 3"
width="382"
height="510">


# Setting Up

### Requirements

- Node 14.4.x or up
- Yarn (or npm)

 <br/>

### Installing the dependencies

```
$ yarn install
```

<br/>

## Available Scripts

In the project directory, you can run:

 <br/> 
 
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <br/>

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
