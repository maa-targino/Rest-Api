API project to integrate Pipedrive and Bling
=============================================

## Introduction:
- This is a REST API project that integrates Pipedrive (CRM) and Bling (ERP) using Node.js and the MongoDB database. The API gets the deals from Pipedrive with its status 'won' and make an order request on Bling, registering it in the database. 

![logo](https://github.com/maa-targino/rest-api/blob/main/pics/node-mongo.png)

## Requirements:

#### Installing the code-editor

- You can use Visual Studio Code for the project development. Click [here](https://code.visualstudio.com/Download) and install it.

#### Installing Git

- You can track your code changes with Git version control software. Click [here](https://git-scm.com/downloads) and install it. 

#### Installing Node.js

- You can download the LTS version of the Node.js source code by clicking [here](https://nodejs.org/en/download/) and accessing its download page.

#### Creating the Database

- You can sing-up for MongoDB Atlas to use the free cloud-hosted option of its DBaaS by clicking [here](https://www.mongodb.com/atlas-signup-from-mlab) and creating an account.

## Authentication:

#### You will need to have the API tokens for authentication:
- Click on the following link to learn how to get your [Pipedrive API token](https://pipedrive.readme.io/docs/how-to-find-the-api-token).
- Click on the following link to learn how to get your [Bling API key](https://ajuda.bling.com.br/hc/pt-br/articles/360035558634-Usu%C3%A1rio-e-Usu%C3%A1rio-API#h_9ab0c0af-fa03-4c1b-acfe-a0b9fef8ae05).
- Click on the following link to learn how to use the [MongoDB connection URI](https://docs.mongodb.com/manual/reference/connection-string/).


## Starting the project:

- Open you project folder with Visual Studio Code and press `CTRL + '` to open the terminal.

- Run the `npm install` command to install the **npm** package manager.

- After that, run `npm init` to initialize its packages.

- You can add an `.env` file and load your environment variables using the **dotenv** module. Run  `npm install dotenv` to install it.

- The **nodemon** is a tool that restarts applications after file changes. Run `npm install --save-dev nodemon` to install it.

- **Express** is a module to build APIs that supports routing and middleware. Run `npm install --save-dev express` to install it.

- **Axios** is a promise based HTTP client that helps making requests with Node.js. Run `npm install --save-dev axios` to install it.

## Endpoints:

> GET /status

##### Is returns the current status of the API.

> GET /deals 

##### It lists all deals from Pipedrive. For more information, access this [documentation](https://developers.pipedrive.com/docs/api/v1/Deals#getDeals) on Pipedrive Developers.

> GET /deals/won

##### It only fetches deals with status 'won'. The status is a query parameter that can be supplied in the request to return deals with specific status.

> POST /deals

##### It creates a new deal on Pipedrive with the fields informaton that were supplied. For more information, access this [documentation](https://developers.pipedrive.com/docs/api/v1/Deals#addDeal) on Pipedrive Developers.

> POST /orders

##### It creates an order request on Bling with the provided fields. For more information, access this [documentation](https://ajuda.bling.com.br/hc/pt-br/articles/360047064693-POST-pedido) on Bling Ajuda.

> POST /save

##### It creates a new resource in a collection on MongoDB Atlas database, with the provided JSON. For more information, access the [MongoDB Documentation](https://docs.atlas.mongodb.com/api/#http-methods).
