import React, {  } from 'react';
import { useSelector } from 'react-redux';
import {   Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import { Error } from './utils/ErrorComponent';
import { Loading } from './utils/LoadingComponent';


const RenderCountry = ({country}) => {
    
    return (
        <Card style={{ margin: '2%', width: '200px', height: '300px', background: 'var(--secondary)' }}>
        <CardImg top width="200px" src={`${country.flag}`} alt="Card image cap" height="100px" style={{ objectFit: 'contain'}}/>
        <CardBody>
          <CardTitle tag="h5">{country.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Capital: {country.capital}</CardSubtitle>
          <CardText>Subregion: {country.subregion} ({country.region})</CardText>
        </CardBody>
      </Card>
    )
}

const RenderCountries = ({countries}) => {
    const countriy_list = countries.map((element, key) => {
        return (
            <RenderCountry country={element} key={key} />
        )
    });

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {countriy_list}
        </div>
    )
}

const Home = () => {
    const countries = useSelector(state => state.countries);
    
    if (countries.is_loading ) {
        return(<Loading />)
    } else if (countries.error) {
        return (
            <Error message={countries.error} />
        )
    } else {
        return(
            <React.Fragment>
                <RenderCountries countries={countries.countries} />
            </React.Fragment>
        );
    }
   
  }

export default Home; 