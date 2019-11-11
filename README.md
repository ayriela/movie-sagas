# Redux Movie Sagas
![REPO SIZE](https://img.shields.io/github/repo-size/ayriela/movie-sagas.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/ayriela/movie-sagas.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/ayriela/movie-sagas.svg?style=social)


## Description
Duration: Weekend Project 

This site allows a user view a list of movies, select one to view additional details, and edit the movie record by updating the title/description or add a genre to the record. 

<!--## Screen Shot
![Screen Shot](ToDoExample.png)-->

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- PostgreSQL

## Installation 

Install this project by cloning this github repository to local file system. Use `npm install` to bring in dependencies.  You may start the server with `npm run server` and `npm run client` to start the client components.  Be sure to create the database `saga_movies_weekend` locally and use the script in the data.sql to create a copy of the table to utilize. 

## Usage
1. User is presented with the list of movies
2. Once a user selects a movie they're brought to the details page where they can view the Title, Description, and Genres associated with the movie
3. Clicking `EDIT MOVIE DETAILS` turns the view to a form to edit these values by adding a new  genre or updating the text 
    - Currently the user must separately click Add to add a genre and Update Title/Description Text to commit these changes 
4. After the user has finished updating these values they may click Back to movie details 
    - This prompts the user to confirm that they're changes have been saved and navigate back to the details view or decide to remain on the edit page
5. From either the details or edit view the user may navigate back to the full movie listing


## Built With

- javascript 
- React
- Redux
- Redux Sagas
- Material UI
- Node using express, body-parser, and pg
- PostgreSQL


## Roadmap
- Allow the details page to refresh and retain the information 
- Allow users to remove genres added by mistake 


## Acknowledgement
Thanks to Prime Digital Academy. 
