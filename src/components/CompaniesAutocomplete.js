import React from 'react'
import { useHistory} from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// const COMPANY_URL = "http://localhost:3000/companies"

export default function CompaniesAutocomplete(props){
  // const [companies, setCompanies] = useState([]);
  const [value, setValue] = React.useState(null);
  const history = useHistory(); 

  function handleSubmit(e){
    if(e && e.name){
      history.push("/company/" + e.name)
    }
    else{
      return "" 
    }
  }

  return(
    <Autocomplete
      id="combo-box-demo"
      options={props.companies}
      value={value}
      onChange={(e, value) => handleSubmit(value)}
      getOptionLabel={(option) => option.name}
      style={{ width: '100%' }}
      renderInput={(params) => 
        <TextField {...params} 
        label="Search for a Company..." 
        variant="outlined" 
        />}
    />
  )
}
