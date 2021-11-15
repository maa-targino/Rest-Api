API project to integrate Pipedrive and Bling
=============================================

## Introduction:
- This is an API project that integrates Pipedrive (CRM) and Bling (ERP) using Node.js and the MongoDB database. The API gets the deals from Pipedrive with its status 'won' and make an order request on Bling registering it in the database. 

![logo](https://github.com/maa-targino/rest-api/blob/main/pics/node-mongo.png)

## Requirements:

### Installing the code-editor

You can use Visual Studio Code for the project development. Click [here](https://code.visualstudio.com/Download) to access its download page and install it.

### Installing Git

You can track your code changes with Git version control software. Click [here](https://git-scm.com/downloads) and download it. 

### Installing Node.js

You can download the LTS version of the Node.js source code by clicking [here](https://nodejs.org/en/download/) and accessing its download page.

### Creating the Database

You can sing-up for MongoDB Atlas to use the free cloud-hosted option of its DBaaS by clicking [here](https://www.mongodb.com/atlas-signup-from-mlab) and creating an account.

## Starting the project:

- Open you project folder with Visual Studio Code and press `CTRL + '` to open the terminal.

Run the following command to install the npm package manager:

```
npm install
```

Run the following command to initialize your project packages:
npm init

`npm install dotenv`

`npm install --save-dev nodemon`

`npm install --save-dev express`

````npm install --save-dev axios````


https://developers.pipedrive.com/docs/api/v1/Deals#getDeals

https://pipedrive.readme.io/docs/getting-details-of-a-deal

https://ajuda.bling.com.br/hc/pt-br/articles/360046937853-Introdu%C3%A7%C3%A3o-para-a-API-do-Bling-para-desenvolvedores-

https://ajuda.bling.com.br/hc/pt-br/articles/360047064693-POST-pedido
