import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Personalcaredirective from "./personalcaredirective";
import Wounddirective from "./wounddirective";

const Charts = (props) => {
  const [directiveIDforpersonalcare, setdirectiveIDforpersonalcare] =
    useState("");
  const [directiveIDforwound, setdirectiveIDforwound] = useState("");

  const [personalcarechartdata, setpersonalcarechartdata] = useState({});
  const [personalcaredirectivechartdata, setpersonalcaredirectivechartdata] =
    useState({});
  const [woundchartdata, setwoundchartdata] = useState({});
  const [wounddirectivechartdata, setwounddirectivechartdata] = useState({});

  const [showpersonalcaredirectivechart, setShowPersonalCareDirectiveChart] =
    useState(false);
  const [showwounddirectivechart, setShowWoundDirectiveChart] = useState(false);

  const [showpersonalcarechart, setShowPersonalCareChart] = useState(false);
  const [showwoundchart, setShowWoundChart] = useState(false);

  const personal_care_directive_chart = async () => {
    let chartdata_for_personal_care_directive = await fetch(
      `http://127.0.0.1:5000/get_personalcare_directive/${props.Resident_ID}`
    );
    chartdata_for_personal_care_directive =
      await chartdata_for_personal_care_directive.json();
    setpersonalcaredirectivechartdata(chartdata_for_personal_care_directive);
    setShowPersonalCareDirectiveChart(!showpersonalcaredirectivechart);
  };

  const personal_care_chart = async (id) => {
    let chartdata_for_personal_care = await fetch(
      `http://127.0.0.1:5000/get_personalcare_chart_data/${props.Resident_ID}/${id}`
    );
    chartdata_for_personal_care = await chartdata_for_personal_care.json();
    setpersonalcarechartdata(chartdata_for_personal_care);
    setdirectiveIDforpersonalcare(id);
    setShowPersonalCareChart(!showpersonalcarechart);
  };

  const wound_directive_chart = async () => {
    let chartdata_for_wound_directive = await fetch(
      `http://127.0.0.1:5000/get_wound_directive/${props.Resident_ID}`
    );
    chartdata_for_wound_directive = await chartdata_for_wound_directive.json();
    setwounddirectivechartdata(chartdata_for_wound_directive);
    setShowWoundDirectiveChart(!showwounddirectivechart);
  };

  const wound_chart = async (id) => {
    let chartdata_for_wound = await fetch(
      `http://127.0.0.1:5000/get_wound_chart_data/${props.Resident_ID}/${id}`
    );
    chartdata_for_wound = await chartdata_for_wound.json();
    setwoundchartdata(chartdata_for_wound);
    setdirectiveIDforwound(id);
    setShowWoundChart(!showwoundchart);
  };

  return (
    <div>
      <Button onClick={personal_care_directive_chart}>Personal Care</Button>
      <Button onClick={wound_directive_chart}>Wound</Button>
      <br />
      {showpersonalcaredirectivechart ? (
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Date Of Creation</th>
                <th>Procedure Name</th>
                <th>Charts</th>
                <th>Status</th>
              </tr>
            </thead>
            {Object.entries(personalcaredirectivechartdata).map(
              ([key, value]) => (
                <>
                  <tbody>
                    <tr>
                      <td>{value["id"]}</td>
                      <td>{value["Author"]}</td>
                      <td>{value["Date_Of_Creation"]}</td>
                      <td>Hygiene</td>
                      <td>
                        <button
                          onClick={() => personal_care_chart(value["id"])}
                        >
                          Click
                        </button>
                      </td>
                      <td>{value["Status"]}</td>
                    </tr>
                  </tbody>
                </>
              )
            )}
          </Table>
          {showpersonalcarechart ? (
            <>
              <Personalcaredirective
                DirectiveID={directiveIDforpersonalcare}
                Resident_ID={props.Resident_ID}
                data={personalcarechartdata}
              />
            </>
          ) : null}
        </>
      ) : showwounddirectivechart ? (
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Author</th>
                <th>Date Of Creation</th>
                <th>Location_On_Body</th>
                <th>Wound Date</th>
                <th>Wound Type</th>
                <th>Charts</th>
                <th>Status</th>
              </tr>
            </thead>
            {Object.entries(wounddirectivechartdata).map(([key, value]) => (
              <>
                <tbody>
                  <tr>
                    <td>{value["id"]}</td>
                    <td>{value["Author"]}</td>
                    <td>{value["Date_Of_Creation"]}</td>
                    <td>{value["Location_On_Body"]}</td>
                    <td>{value["Wound_Date"]}</td>
                    <td>{value["Wound_Type"]}</td>
                    <td>
                      <button onClick={() => wound_chart(value["id"])}>
                        Click
                      </button>
                    </td>
                    <td>{value["Status"]}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
          {showwoundchart ? (
            <>
              <Wounddirective
                DirectiveID={directiveIDforwound}
                Resident_ID={props.Resident_ID}
                data={woundchartdata}
              />
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default Charts;
