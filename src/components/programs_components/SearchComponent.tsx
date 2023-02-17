import React from "react";

type propType = {
    title: string,
    location: string,
    classes: string,
    setTitle: (value: string) => void,
    setLocation: (value: string) => void,
}

const SearchComponent = ({title, setTitle, location, setLocation, classes}: propType) => {
    return (
        <form action="#" >
            <input  type="text" placeholder={'What would you like to study ?'} value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
            <input  type="text" placeholder={'Where ? E.g School name or location'}  value={location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}/>
            <button type="button" className={"btn-primary "+classes}>Search</button>
        </form>
    )
}

export default SearchComponent;
