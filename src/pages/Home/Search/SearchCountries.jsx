import * as React from "react";


export default function SearchCountries() {

    const [selectValue,setSelectValue] = React.useState('')
    console.log(selectValue);

  return (
    <select onChange={(e)=> setSelectValue(e.target.value)} className="select w-full rounded-sm max-w-xs">
      <option disabled selected>
        Search by country
      </option>
      <option>Bangladesh</option>
      <option>India</option>
      <option>America</option>
      <option>Canada</option>
      <option>Soudi Arab</option>
    </select>
  );
}
