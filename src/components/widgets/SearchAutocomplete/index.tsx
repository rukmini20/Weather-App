import {useState,useEffect } from 'react'
import {connect} from 'react-redux'
import {TextField,InputAdornment} from '@material-ui/core'
import {Search as SearchIcon} from '@material-ui/icons'
import {Autocomplete} from '@material-ui/lab'
import { addCity } from '../../../store/actions/cities.action'
import {selectCity} from '../../../store/actions/city.action'
import {getcityAPI} from '../../../networks/apis/cityAPI'
import { CityI } from '../../../interfaces'
import styles from './index.module.scss'
const SearchAutocomplete = (props: any) => {
    const [selectedCity, setSelectedCity]=useState<CityI>()
    const [cities,setCities]=useState<Array<CityI>>([])
    
    let [options,setOptions]=useState<Array<CityI>>([])
    const handleChange=async (value: any)=> {
        options=[...cities.filter(cityItem=>cityItem?.name.toLowerCase().includes(value.toLowerCase()))]
        setOptions(options)
        if(options.length===0) {
            try {
                const {status, body}=await getcityAPI(value)
                if(status===200)    {
                    if(!cities.some(cityItem=>cityItem.id===body.id)) {
                      
                        options=[body]
                        setOptions(options)
                        console.log('~~~ options: ',options, [body])
                        props.addCity(body)
                    }
                }
            }   catch(error)    {

            }
        }
    }

    useEffect(()=>{
        if(props.cities?.cities?.length>0) {
            setCities([...props.cities?.cities])
        }
    }, [props?.cities])
    return (
        <div className={styles.background}>
            <Autocomplete onChange={(e,value)=>{
                if(value) {
                    setOptions([])
                    setSelectedCity(value!)
                    props.selectCity(value)
                }
            }} autoComplete includeInputInList  options={options} getOptionLabel={(option: CityI)=>option?.name} renderInput={(params)=><TextField value={selectedCity} onChange={(e) => {
                if(e.target.value) {
                    handleChange(e.target.value)
                }
            }} variant='outlined'  {...params}  InputProps={{...params.InputProps, startAdornment:(<InputAdornment position="start">
        <div className={styles.searchIcon}>
            <SearchIcon/>
        </div>
      </InputAdornment>),endAdornment: null}}
         placeholder='Search projects ....' className={styles.search_text_field} />}   />
        </div>
    )
}
const mapStateToProps=({cities,}:any)=>({
    cities: cities
})
export default connect(mapStateToProps, { addCity,selectCity })(SearchAutocomplete)