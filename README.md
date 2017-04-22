

## Prerequisites

Node.js and npm are essential to run this. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Create a new project

Clone this repo into new project folder (e.g., `pulvermanagement`).
```bash
git clone  https://github.com/aucobo/pulvermanagement.git pulvermanagement
cd pulvermanagement
```

Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

## Set everything up

Run (you need node and npm installed - see above!)

```bash
npm install
npm start
```


## enable production by...

To switch from dev to prod the following things should be done
1. Enable CORS
2. Enable CSRF
3. Enable authentication
4. Call "enableProdMode()"
5. REST endpoints
	a. disable in-memory-service... 
	b. remove the data from "response.data"
	c. powdersUrl -> from devUrl to prodUrl
	d. getPowder(_id) anpassen
6. QR module 
	a. import * as qrcode => import qrcode...
	b. export = => export default
7. enter IP # lifemanagement_frontend
