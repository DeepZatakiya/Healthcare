import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Navbar, Container, Nav } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const Charts = (props) => {
  const [personalcarechartdata, setpersonalcarechartdata] = useState({});
  const [woundchartdata, setwoundchartdata] = useState({});
  const [showpersonalcarechart, setShowPersonalCareChart] = useState(false);
  const [showwoundchart, setShowWoundChart] = useState(false);
  const [image, setimage] = useState({});

  const [showaddwoundchart, setShowAddwoundchart] = useState(false);
  const [authorforwoundchart, setAuthorforWoundchart] = useState("");
  const [dateofwoundfirstassessed, setdateofwoundfirstassessed] = useState("");
  const [woundcause, setwoundcause] = useState("");
  const [woundgoal, setwoundgoal] = useState("");
  const [factorsthataffect, setfactorsthataffect] = useState("");
  const [hxofulcers, sethxofulcers] = useState("");
  const [locationofwound, setlocationofwound] = useState("");
  const [woundtype, setwoundtype] = useState("");
  const [sizelength, setsizelength] = useState("");
  const [sizewidth, setsizewidth] = useState("");
  const [sizedepth, setsizedepth] = useState("");
  const [painlevels, setpainlevels] = useState("");
  const [datenowforwound, setdatenowforwound] = useState("");
  const [timenowforwound, settimenowforwound] = useState("");
  const [surroundingskin, setsurroundingskin] = useState("");
  const [woundexudate, setwoundexudate] = useState("");
  const [woundevaluation, setwoundevaluation] = useState("");
  const [state, setState] = useState({});

  const [showaddpersonalcare, setShowAddPersonalCare] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [directive, setDirective] = useState("");
  const [typeofhygiene, setTypeOfHygiene] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const data_value_for_personalcare_chart = {
    author,
    date,
    directive,
    typeofhygiene,
    time,
    comment,
  };

  const handleImagePreview = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];
    setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });
  };
  const handleSubmitFile = (e) => {
    let url = `http://127.0.0.1:5000/upload_Image?Resident_ID=${props.Resident_ID}&Date_of_Wound_First_Assessed=${dateofwoundfirstassessed}&Wound_Cause=${woundcause}&Wound_Goal=${woundgoal}&Factors_May_Affect_Wound_Healing=${factorsthataffect}&Hx_Of_Ulcers=${hxofulcers}&Location_Of_Wound=${locationofwound}&Wound_Type=${woundtype}&Size_Length=${sizelength}&Size_Width=${sizewidth}&Size_Depth=${sizedepth}&Pain_Levels=${painlevels}&Date_Now=${datenowforwound}&Time_Now=${timenowforwound}&Surrouding_Skin=${surroundingskin}&Wound_Exudate=${woundexudate}&Wound_Evaluation=${woundevaluation}&Author=${authorforwoundchart}`;
    console.log(url);
    if (state.image_file !== null) {
      let formData = new FormData();
      formData.append("customFile", state.image_file);
      formData.append("name", "Name");
      axios
        .post(url, formData, {
          headers: {},
        })
        .then((res) => {
          console.log(`Success` + res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setShowWoundChart(!showaddwoundchart);
    e.preventDefault();
  };

  const personal_care_chart = async () => {
    let chartdata_for_personal_care = await fetch(
      `http://127.0.0.1:5000/get_personalcare_chart_data/${props.Resident_ID}`
    );
    chartdata_for_personal_care = await chartdata_for_personal_care.json();
    setpersonalcarechartdata(chartdata_for_personal_care);
    setShowPersonalCareChart(!showpersonalcarechart);
  };

  const wound_chart = async () => {
    let chartdata_for_wound = await fetch(
      `http://127.0.0.1:5000/get_wound_chart_data/${props.Resident_ID}`
    );
    chartdata_for_wound = await chartdata_for_wound.json();
    setwoundchartdata(chartdata_for_wound);
    setShowWoundChart(!showwoundchart);
  };

  const addPersonalCareHandler = (e) => {
    fetch(`http://127.0.0.1:5000/add_personalcare_chart/${props.Resident_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_value_for_personalcare_chart),
    }).then((resp) => resp.json());
    setShowPersonalCareChart(!showpersonalcarechart);

    e.preventDefault();
  };

  return (
    <div>
      <Button onClick={personal_care_chart}>Personal Care</Button>
      <Button onClick={wound_chart}>Wound</Button>
      <br />
      {showpersonalcarechart ? (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Date</th>
                <th>Directive</th>
                <th>Time</th>
                <th>Type_Of_Hygiene</th>
              </tr>
            </thead>
            {Object.entries(personalcarechartdata).map(([key, value]) => (
              <>
                <tbody>
                  <tr>
                    <td>{value["Author"]}</td>
                    <td>{value["Date"]}</td>
                    <td>{value["Directive"]}</td>
                    <td>{value["Time"]}</td>
                    <td>{value["Type_Of_Hygiene"]}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
          <button onClick={() => setShowAddPersonalCare(!showaddpersonalcare)}>
            Add To Chart
          </button>
          <Alert show={showaddpersonalcare}>
            <form>
              <fieldset>
                <label for="author">Author: </label>
                <input
                  type="text"
                  id="author"
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
                <br />
                <label for="date">Date: </label>
                <input
                  type="date"
                  id="date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
                <br />
                <label for="directive">Directive: </label>
                <input
                  type="text"
                  id="directive"
                  onChange={(e) => {
                    setDirective(e.target.value);
                  }}
                />
                <br />
                <label for="typeofhygine">Type Of Hygiene: </label>
                <input
                  type="text"
                  id="typeofhygine"
                  onChange={(e) => {
                    setTypeOfHygiene(e.target.value);
                  }}
                />
                <br />
                <label for="time">Time: </label>
                <input
                  type="time"
                  id="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
                <br />
                <label for="comment">Comment: </label>
                <input
                  type="text"
                  id="comment"
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                />
                <br />
                <button onClick={(e) => addPersonalCareHandler(e)}>
                  Submit
                </button>
              </fieldset>
            </form>
          </Alert>
        </div>
      ) : showwoundchart ? (
        <>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Date of Wound First Assessed</th>
                  <th>Wound Cause</th>
                  <th>Wound_Goal</th>
                  <th>Factors May Affect Wound Healing</th>
                  <th>Hx_Of_Ulcers</th>
                  <th>Location_Of_Wound</th>
                  <th>Wound_Type</th>
                  <th>Size_Length</th>
                  <th>Size_Width</th>
                  <th>Size_Depth</th>
                  <th>Pain_Levels</th>
                  <th>Date_Now</th>
                  <th>Time_Now</th>
                  <th>Surrouding_Skin</th>
                  <th>Wound_Exudate</th>
                  <th>Wound_Evaluation</th>
                  <th>Image</th>
                </tr>
              </thead>
              {Object.entries(woundchartdata).map(([key, value]) => (
                <>
                  <tbody>
                    <tr>
                      <td>{value["Author"]}</td>
                      <td>{value["Date_of_Wound_First_Assessed"]}</td>
                      <td>{value["Wound_Cause"]}</td>
                      <td>{value["Wound_Goal"]}</td>
                      <td>{value["Factors_May_Affect_Wound_Healing"]}</td>
                      <td>{value["Hx_Of_Ulcers"]}</td>
                      <td>{value["Location_Of_Wound"]}</td>
                      <td>{value["Wound_Type"]}</td>
                      <td>{value["Size_Length"]}</td>
                      <td>{value["Size_Width"]}</td>

                      <td>{value["Size_Depth"]}</td>
                      <td>{value["Pain_Levels"]}</td>
                      <td>{value["Date_Now"]}</td>
                      <td>{value["Time_Now"]}</td>
                      <td>{value["Surrouding_Skin"]}</td>
                      <td>{value["Wound_Exudate"]}</td>
                      <td>{value["Wound_Evaluation"]}</td>
                      <td>
                        <img
                          src={require(`./${value["imagename"]}`)}
                          height="100px"
                          width="100px"
                          alt="image_preview"
                        />
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
            <button onClick={() => setShowAddwoundchart(!showaddwoundchart)}>
              Add To Chart
            </button>
            <Alert show={showaddwoundchart}>
              <form>
                <fieldset>
                  <label for="author">Author: </label>
                  <input
                    type="text"
                    id="author"
                    onChange={(e) => {
                      setAuthorforWoundchart(e.target.value);
                    }}
                  />
                  <br />
                  <label for="dateofwoundfirstassessed">
                    Date Of Wound First Assessed:{" "}
                  </label>
                  <input
                    type="date"
                    id="dateofwoundfirstassessed"
                    onChange={(e) => {
                      setdateofwoundfirstassessed(e.target.value);
                    }}
                  />
                  <br />
                  <label for="woundcause">Wound Cause: </label>
                  <input
                    type="text"
                    id="woundcause"
                    onChange={(e) => {
                      setwoundcause(e.target.value);
                    }}
                  />
                  <br />
                  <label for="woundgoal">wound goal: </label>
                  <input
                    type="text"
                    id="woundgoal"
                    onChange={(e) => {
                      setwoundgoal(e.target.value);
                    }}
                  />
                  <br />
                  <label for="factorsthataffect">
                    Factors May Affect Wound Healing:{" "}
                  </label>
                  <input
                    type="text"
                    id="factorsthataffect"
                    onChange={(e) => {
                      setfactorsthataffect(e.target.value);
                    }}
                  />
                  <br />
                  <label for="hxofulcers">Hx_Of_Ulcers: </label>
                  <input
                    type="text"
                    id="hxofulcers"
                    onChange={(e) => {
                      sethxofulcers(e.target.value);
                    }}
                  />
                  <br />
                  <label for="locationofwound">Location_Of_Wound: </label>
                  <input
                    type="text"
                    id="locationofwound"
                    onChange={(e) => {
                      setlocationofwound(e.target.value);
                    }}
                  />
                  <br />
                  <label for="woundtype">Wound_Type: </label>
                  <input
                    type="text"
                    id="woundtype"
                    onChange={(e) => {
                      setwoundtype(e.target.value);
                    }}
                  />
                  <br />
                  <label for="sizelength">Size_Length: </label>
                  <input
                    type="text"
                    id="sizelength"
                    onChange={(e) => {
                      setsizelength(e.target.value);
                    }}
                  />
                  <br />
                  <label for="sizewidth">Size_Width: </label>
                  <input
                    type="text"
                    id="sizewidth"
                    onChange={(e) => {
                      setsizewidth(e.target.value);
                    }}
                  />
                  <br />
                  <label for="sizedepth">Size_Depth: </label>
                  <input
                    type="text"
                    id="sizedepth"
                    onChange={(e) => {
                      setsizedepth(e.target.value);
                    }}
                  />
                  <br />
                  <label for="painlevels">Pain_Levels: </label>
                  <input
                    type="text"
                    id="painlevels"
                    onChange={(e) => {
                      setpainlevels(e.target.value);
                    }}
                  />
                  <br />
                  <label for="datenowforwound">Date: </label>
                  <input
                    type="date"
                    id="datenowforwound"
                    onChange={(e) => {
                      setdatenowforwound(e.target.value);
                    }}
                  />
                  <br />
                  <label for="timenowforwound">Time_Now: </label>
                  <input
                    type="text"
                    id="timenowforwound"
                    onChange={(e) => {
                      settimenowforwound(e.target.value);
                    }}
                  />
                  <br />
                  <label for="surroundingskin">Surrouding_Skin: </label>
                  <input
                    type="text"
                    id="surroundingskin"
                    onChange={(e) => {
                      setsurroundingskin(e.target.value);
                    }}
                  />
                  <br />
                  <label for="woundexudate">Wound_Exudate: </label>
                  <input
                    type="text"
                    id="woundexudate"
                    onChange={(e) => {
                      setwoundexudate(e.target.value);
                    }}
                  />
                  <br />
                  <label for="woundevaluation">Wound_Evaluation: </label>
                  <input
                    type="text"
                    id="woundevaluation"
                    onChange={(e) => {
                      setwoundevaluation(e.target.value);
                    }}
                  />
                  <br />
                  <input type="file" onChange={handleImagePreview} />
                  <label>Upload file</label>
                  <img
                    src={state.image_preview}
                    alt="image_preview"
                    height="100px"
                    width="100px"
                  />
                  <br />
                  <button onClick={(e) => handleSubmitFile(e)}>Submit</button>
                </fieldset>
              </form>
            </Alert>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Charts;
