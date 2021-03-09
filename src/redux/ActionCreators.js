import * as ActionTypes from './ActionTypes';

export const postFeedback = (feedback) => (dispatch) => {
        
     console.log('Feedback', feedback); 
     alert('Thank you for your feedback!'); 
};

const fetchInformation = (url) => {
     return fetch(url)
     .then(response => {
          if (response.ok) {
               return response.json();
          } else {
               var errMessage = new Error();
               errMessage.message = `unable to get data from ${url}`;
               throw errMessage;
          }
     })
}

export const fetchCountriesByRegion = (region) => (dispatch, store) => {
     let url = `https://restcountries.eu/rest/v2/regionalbloc/${region}`;
     dispatch(loadingCountries());
     return fetchInformation(url)
     .then(data => dispatch(loadCountries(region, data)))
     .catch(error => dispatch(loadCountriesError(error.message)))
}

const loadingCountries = () => {
     return {
          type: ActionTypes.LOADING_COUNTRIES
     }
}

const loadCountries = (region, data) => {
     return {
          type: ActionTypes.LOAD_COUNTRIES,
          payload: {region, data}
     }
}

const loadCountriesError = (message) => (
     {
          type: ActionTypes.LOAD_COUNTRIES_ERROR,
          payload: message
     }
)