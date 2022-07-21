import React from "react";

function Rodape(props){
    const {id}=props;
    return(
        <footer>
          <p id="cb">Total this month</p>
          <h1><strong id="balanco">$478.33</strong></h1>
          <p id="pcd">
          +2.4%
            from last month
          </p>
        </footer>
    );
}
export default Rodape;