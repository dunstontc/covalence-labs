# Lab 11: Chirper Express: The SeQueL


## Info

* This lab consists of two deliverables
* The first deliverable will be done in the existing Chirp Express Lab 10 assignment repository
* The second deliverable will be done in this repository

## Getting started

* For part 1, you will be working in the lab 10 folder, so you will be running that server as before and going to localhost:3000 to see your page

## Submission Instructions

* Simply make sure you commit to your repositories and push before the lab is due

## Additional Resources

* Bootstrap Website: [https://getbootstrap.com](https://getbootstrap.com)

## Objectives

### Part 1 - Bootstrap

* Style your page using [Bootstrap](https://getbootstrap.com)
* Bootstrap is basically a giant CSS stylesheet that someone already made for you
* Includes icons, button stylings, form stylings, heading stylings, carousels, etc
* Specifically take a look at Input Groups and List Groups on the Components page of the bootstrap website
* To use it, you simply import the CSS and JS they tell you to import at the top of your page
* Then, use the class names on your HTML elements that they specify
* Remember, since they wrote the CSS to target a class name, by using the class name, your elements will magically be styled!

### Part 2 - Create a MySQL Database for Chirper

* In Terminal, make sure your working directory is this project folder
* Make sure your MySQL server is running
* Log in to the MySQL command line utility as root
* Create a database called Chirper
* Create a new user with all permissions for database Chirper
* Quit the MySQL prompt and log back in with the new user
* Create a table to represent a chirp (Remember the naming conventions!)
* Chirps should have a property called id that is an integer and is automatically created by the database
* Chirps have a message property with a maximum character length of 140 characters
* Chirps have a user property with a maximum character length of 20 characters
* Chirps have a timestamp property with datatype of datetime
* Using the MySQL command line interface, add some chirps, edit some chirps, and delete some chirps from your table
* When you are finished, you should have 10 chirps in the table
* To get credit for this assignment, you need to export your database and its data to a .sql file and put it in this repository
* To do that, you will use `mysqldump`

* `mysqldump` is a utility provided by MySQL that will take your database structure and contents and write them out to a .sql file

* To run it, make sure your working directory is this repository and then use:

```bash
mysqldump -u databaseUser -p Chirper > chirper.sql
```

* NOTE: If you did not update your path to where you can just run `mysql`, you will also need to put the full path for `mysqldump`:

```bash
/usr/local/mysql/bin/mysqldump -u databaseUser -p Chirper > chirper.sql
```
