# REACT - Component

# So Media Manager

This component allow user to manage file from an API.

You can use all CRUD operation on folder, file.

## Before all

`Last tested with NODE 18.18.2 and NPM 9.8.1`

You must have the latest LTS NodeJS and NPM installed.

The library works for React with Rollup to build and Storybook to develop components.

Don't forget to install all requirement for project

`npm install`

After that, you need to add an `.npmrc` in the project.
Inside, you will need to add an auth token from gitlab to push your new package. Auth token can be generated mostly from anywhere. From project level, user level, access token...

You will also need the ID gitlab give to the project repository. The content you need to add to file :

`@sotiaf:registry=https://gitlab.sotiaf.fr/api/v4/projects/ID-OF-THE-PROJECT/packages/npm/
//gitlab.sotiaf.fr/api/v4/projects/165/packages/npm/:_authToken="MY-TOKEN"`

## How to develop my component

To create, edit, develop the component in this repository, we use Storybook.

With Storybook you can test your change in realtime thanks to webpack and hot reload.

`npm run storybook`

If all step is good, you will have access to :

`http://localhost:6006/`

## How to deploy my change to install it on a project

First, when all you're development seem to be good, you will need to change the `package.json` version. Why ? Because it's also the version use for the package, so to keep an history and avoid problem, you need to change the version.

After that you can simply commit with a good comment and the version in the comment ! Good history is essential in case we need to try an old version or reverse completely the package.

Once your change are on the server, you will need to delete the `dist` folder, to be sure all file are gonna be replace with the new build. (Usually rollup does it all by itself)

To end, you can type the next command who gonna build the package content :

`npm run rollup:ts`

If all previous step are good, you can publish the new version to the package manager :

`npm publish`

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
