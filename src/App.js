import React from "react";

import dataList from "./wineStatsData";

//import-css
import "./App.css";

//import-component
import Overview from "./components/Overview";
import TableData from "./components/TableData";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="header-text">Wine Stats Dashboard</div>
      </div>
      <div className="body-container">
        <Overview
          dataListDetails={dataList}
        />
        <TableData
          dataList={dataList}
        />
      </div>
    </div>
  );
}

export default App;
