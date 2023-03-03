# Project 3 – Movies on Netflix 

## About the Project

The aim of this project is to analyse the most popular and successful Movies and TV shows and assess the platform of Netflix to see to what extent they strive to offer these, and where the trade-offs occur. We would
be interested to find out which Movies/TV shows that have generated the most profit, have had most views, and which of these have the highest ratings. Other interesting data to analyse would be to languages, genres, directors, actors, and the time run of the movies.


## Technologies used: 

•	Python

•	Pandas

•	Web Scraping

•	SQLAlchemy

•	Flask

•	D3

•	Plotly

•	Any Chart

•	JavaScript


## Data Sources:

Data is derived via Web Scraping from Kaggle (https://www.kaggle.com/), the official IMDb Website
(https://www.imdb.com/) and via API (https://www.omdbapi.com/). Data ranges from the past two decades, and over 1000 titles across Movies and TV shows.

## Methodology

1.	Perform the Extract, Transform and Load (ETL) process to create a data pipeline on the Netflix movie datasets using Python, Pandas, Jupyter Notebook and QL.

2.	We then created automated pipeline that takes in new data, performs the appropriate transformations, and loads the data into existing tables.

3.	Refactored the code and created one function that takes in the datas —and performs the ETL process by adding the data to a PostgreSQL database.

4.	It transforms and merges the data and loads it into an  updatable SQL dataset tables ready to be used for the following analysis.

5.	We used SQLite to load this into the Flask, to then translate into HTML. 

6.	The engine was created to connect this to the database, we used used JavaScript and D3 to grab the API into the JavaScript. 

7.	To create the visualisation we used plotly. 

8.	We wanted to aim for visualisations that show runtimes via country and years to compare cultural differences and how Netflix caters to these. 

9.	We then wanted to show ratings of the movies by country to see how different countries appreciate different genres etc. 


## Final Application 

We generated a template that was interactive and easy to use. With menus and drop down filters, users are easily able to source the data they wish to visualise about the Movies/TV shows. We also have included the sources of data used to ensure full transparency and credibility of the data shown. 


## The Team: 

•	TONY
•	KAREEM
•	ELIYZA
•	JADE
