import React from "react";
import Final from "../../WebLayout/Layout";
import "./Overview.css";
import OverviewHeader from "./OverviewHeader";
import OverviewComponent from "./OverviewComponent";
import OverviewTable from "./OverviewTable";

const Overview=()=>{
    return(<>
    <Final heading={"OVERVIEW"} 
    write={
        <>
    <OverviewHeader />
     <OverviewComponent />
      <OverviewTable />

    </>
} />
    </>)
}
export default Overview;