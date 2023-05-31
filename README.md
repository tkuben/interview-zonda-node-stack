<h1>Interview codebase</h1>

This repository is intended to be used to access a potential candidate for their understanding of an N-Tier application. The backend is built using node, express, typescript and sqlite. The frontend is built using angular and typescript. Please note sqlite was used to keep the dependencies lower and to keep the experience contained to just this repository. 

## Table of Contents

* [Overview](#overview)
* [Directory Structure](#directory-structure)
* [Installation](#installation)
* [Running Locally](#run-locally)
* [Running Tests](#run-test)

# Overview

This guide provides basic information on installation and troubleshooting the interview codebase. The interviewers will ask the candidate to make changes to this codebase in real time to demostrate certain skillset. This may involve but not limited to changes to the database models, additional resources, validators, routes, test, devops and etc. 


# Directory Structure

Your directory structure will look similar to this:

    
    api
    ├── src
    │   ├── config
    │   ├── controller
    │   ├── middleware
    │   ├── model
    │   ├── route
    │   ├── validators
    │   ├── server.ts
    ├── test
    ├── database.sqlite
    web
    ├── src
    │   ├── app
    │   ├── assets
    

## Installation

You'll need to run this in both the web & api directories. 

```
npm install
```

## Run locally
You'll need to have both the API and Web running. To do that you'll need to run the following command in both directories. 

```
npm run dev
```

## Run test

```
npm run test
```
