import {useEffect, useState} from "react";
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { CityI } from "../../../interfaces";
import { imageURL, } from "../../../networks/urls";
import styles from './index.module.scss';

const Home = (props: any) => {
  const [city, setCity]=useState<CityI>()
  useEffect(()=> {
    console.log('~~~ home: ',props?.city?.city)
    if(props.city?.city) {
    setCity(props.city.city!)
  }
  }, [props?.city?.city])
  return (
    <div className={styles.background}>
       {city? <div>
        <Card >
      <CardHeader
        title={city?.name}
        subheader={city?.weather?.[0].description}
      />
      <img className={styles.weatherImg} src={`${imageURL}${city.weather?.[0]?.icon}.png`} alt={city.name} />
      <CardContent>
        <div>
          Humidity: {city.main.humidity}
        </div>
        <div>
          Temperature: {city.main.temp}
        </div>
        <div className='d-flex justify-content-start'>
        <div>
          Min temp.: {city.main.temp_min}
        </div>
        <div>
        &nbsp;Max tem.: {city.main.temp_max}
        </div>
        </div>
        <div>
         Sea level: {city.main.sea_level}
        </div>
        <div>
         Ground level: {city.main.grnd_level}
        </div>
        <div>
         Country: {city.sys.country}
        </div>
        <div className='d-flex justify-content-start'>
          <div>
          Sunrise: {city.sys.sunrise}
          </div><div className=''>&nbsp;Sunset: {city.sys.sunset}
          </div>
        </div>
      </CardContent>
    
      <Collapse timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
        </div>:<div>Enter the city's name</div>}

    </div>
  )
};

const mapStateToProps = ({ city }: any) => ({
  city: city,
});
export default connect(mapStateToProps, {  })(Home);