import React from "react";

function Search(props) {

    return (
        <div className="search">
          <input type="text" placeholder="Поиск" value={props.value} ></input>
        </div>
    )
}

export default Search