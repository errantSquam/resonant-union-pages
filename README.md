# First time setup

1. Pull the contents of the repo (recommended: use Github Desktop, connect to the *remote* repository and pull https://docs.github.com/en/desktop/working-with-your-remote-repository-on-github-or-github-enterprise/syncing-your-branch-in-github-desktop)
2. Go to the RU pages folder via command line. You can type cmd in the file directory to automatically open up command line. If you're on Visual Studio Code, selecting the folder and opening a Terminal works.
3. type ``npm install`` to install necessary files. Wait.
4. You're done :)

# Deployment
1. Pull contents of repo, cd into directory and ``npm install`` to update any new files, if necessary
2. ``npm run deploy``
3. Wait.
4. Done

# Editing Contents

As of now, the various albums can be edited in ``albumsInfo.js`` and members in ``memberInfo.js``. No support for featured album editing yet, since it's a bit custom. It supports plain text, but let me know if you'd like Markdown support, because that shouldn't be too hard to implement. 

Most of the fields are self explanatory. The files for ANY asset should be stored in the ``public`` folder, and the filepath should always start with `./`. Not `/`. This is to ensure the images load properly when deployed.