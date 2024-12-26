
# Project Title

So Media Manager is a React file browser component designed to replicate the native file browsing experience in your browser. It allows users to select files, drag & drop, switch between List and Grid views, and much more!

`Last tested with NODE 18.18.2 and NPM 9.8.1`

The library works for React with Rollup to build and Storybook to develop components.


## Installation

Install with npm

```bash
  npm i @sotiaf/so-media-manager
```
    
## Run Locally

We use storybook to run the project locally.

First, Clone the project

Go to the project directory

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run storybook
```

If all step is good, you will have access to :

http://localhost:6006/

## Build

Run build with

```
npm run rollup:ts
```

## Operations

You can use ENUM to call function on specific operation and to call your API :

- CREATE_FOLDER
- OPEN_FOLDER
- OPEN_FILE
- SEARCH
- UPLOAD_FILE
- MOVE_SELECTION
- DOWNLOAD_SELECTION
- DELETE_SELECTION
- LIST_VIEW
- GRID_VIEW
- SORT_NAME
- SORT_SIZE
- SORT_DATE
- SORT_DIRECTION_ASC
- SORT_DIRECTION_DESC