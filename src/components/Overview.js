import React, { useState, useEffect } from "react";
import Card from "./Card";

const dropdownList = ["All", "Alcohol-1", "Alcohol-2", "Alcohol-3"]

const Overview = ({ dataListDetails }) => {
  const [selectedValue, setSelectedValue] = useState("All");
  const [dataList, setDataList] = useState(dataListDetails);

  useEffect(() => {
    if (selectedValue === "All") {
      setDataList(dataListDetails);
    }
    if (selectedValue === "Alcohol-1") {
      setDataList(dataListDetails.filter((item) => item.alcohol === 1));
    }
    if (selectedValue === "Alcohol-2") {
      setDataList(dataListDetails.filter((item) => item.alcohol === 2));
    }
    if (selectedValue === "Alcohol-3") {
      setDataList(dataListDetails.filter((item) => item.alcohol === 3));
    }
  }, [selectedValue, dataListDetails])


  const calculateTotalCount = () => {
    return dataList?.length;
  }

  const calculateAverageMalicAcid = () => {
    let sum = 0;
    for (const element of dataList) {
      sum += element["malicAcid"];
    }
    return Math.round(sum / dataList.length * 1000) / 1000;
  }

  const calculateTotalMagnesium = () => {
    let sum = 0;
    for (const element of dataList) {
      sum += element["magnesium"];
    }
    return sum;
  }

  const calculateHueAverage = () => {
    let sum = 0;
    for (const element of dataList) {
      sum += element["hue"];
    }
    return Math.round(sum / dataList.length * 1000) / 1000;
  }

  const updateValue = (e, val) => {
    e.preventDefault();
    e.stopPropagation();
    if (val) {
      setSelectedValue(val)
    }
  }

  return (
    <div>
      <div className="" style={{marginBottom: "20px"}}>
        <select
          className="toggle"
          placeholder="Select option"
          value={selectedValue}
          onChange={(e) =>
            updateValue(e, e.target.value)
          }
        >
          {
            dropdownList?.length > 0 &&
            dropdownList.map((item, index) => (
              <option className="list-item" value={item}>{item}</option>
            ))
          }
        </select>
      </div>
      <div className="overview">Overview</div>
      <div className="overview-section">
        <Card
          data={calculateTotalCount()}
          label="Total Count"
        />
        <Card
          data={calculateAverageMalicAcid()}
          label="Average Malic Acid"
        />
        <Card
          data={calculateTotalMagnesium()}
          label="Total Magnesium Count"
        />
        <Card
          data={calculateHueAverage()}
          label="Average Hue"
        />
      </div>
    </div>
  );
};

export default Overview;
