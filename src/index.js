import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
//import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; 
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAIL', fetchDetail);
    yield takeEvery('FETCH_GENRE', fetchGenre);
    yield takeEvery('FETCH_NEW_GENRE', fetchNewGenre);
    yield takeEvery('FETCH_NEW_DETAIL', fetchNewDetail);
}

function* fetchMovies(action){
    try{
      const response=yield axios.get(`/movies`);
      yield put({type: 'SET_MOVIES', payload: response.data});
    } catch {
     console.log('Error in fetchMovies');
    }
  }

  //grabs the selected movie's details
  function* fetchDetail(action){
    try{
      const response=yield axios.get(`/detail/${action.payload}`);
      //query will return a single row so we want to remove that object from the array of results
      yield put({type: 'GET_DETAIL', payload: response.data[0]});
    } catch {
     console.log('Error in fetchDetail');
    }
  }
  //grabs the full genre list
  function* fetchGenre(action){
    try{
      const response=yield axios.get('/genre');
      yield put({type: 'SET_GENRES', payload: response.data});
    } catch {
     console.log('Error in fetchGenre');
    }
  }
  //runs when a genre is added
  function* fetchNewGenre(action){
    try{
      yield axios.post(`/genre`,action.payload);
      //grab the movie's updated details
      yield put({type: 'FETCH_DETAIL', payload: action.payload.movieId});
    } catch {
     console.log('Error in fetchNewGenre');
    }
  }

   //runs when change to details or title is submitted
   function* fetchNewDetail(action){
    try{
      yield axios.put(`/detail`, action.payload);
      //grab the movie's updated details
      yield put({type: 'FETCH_DETAIL', payload: action.payload.movieId});
    } catch {
     console.log('Error in fetchNewDetail');
    }
  }
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

//used to store details for specific movie 
const detail = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DETAIL':
            return action.payload;
        default:
            return state;
    }
}


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        detail,
    }),
    // Add sagaMiddleware to our store
    //removed logger
    applyMiddleware(sagaMiddleware),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
