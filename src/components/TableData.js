import React from "react";

const TableData = ({ dataList }) => {
  return (
    <div className="data-table">
      <table>
        <thead>
        <tr>
          <th>Alcohol</th>
          <th>Malic Acid</th>
          <th>Ash</th>
          <th>Alcalinity of ash</th>
          <th>Magnesium</th>
          <th>Total phenols</th>
          <th>Flavanoids</th>
          <th>Nonflavanoid phenols</th>
          <th>Proanthocyanins</th>
          <th>Color intensity</th>
          <th>Hue</th>
          <th>OD280/OD315 of diluted wines</th>
          <th>Unknown</th>
        </tr>
        </thead>
        <tbody>
        {
          dataList?.length > 0 &&
          dataList.map((item, index) => (
            <tr key={index}>
              <td>{item?.alcohol}</td>
              <td>{item?.malicAcid}</td>
              <td>{item?.ash}</td>
              <td>{item?.alcalinityOfAsh}</td>
              <td>{item?.magnesium}</td>
              <td>{item?.totalPhenols}</td>
              <td>{item?.flavanoids}</td>
              <td>{item?.nonflavanoidPhenols}</td>
              <td>{item?.proanthocyanins}</td>
              <td>{item?.colorIntensity}</td>
              <td>{item?.hue}</td>
              <td>{item?.OD280_OD315OfDilutedWines}</td>
              <td>{item?.unknown}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
