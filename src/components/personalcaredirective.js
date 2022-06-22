import React from 'react'
import { useState } from 'react';
import { Table } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function Personalcaredirective(props) {
  const [showaddpersonalcare, setShowAddPersonalCare] = useState(false);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [typeofhygiene, setTypeOfHygiene] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  const data_value_for_personalcare_chart = {
    author,
    date,
    typeofhygiene,
    time,
    comment,
    directiveID:props.DirectiveID
  };

  const addPersonalCareHandler = (e) => {
    fetch(`http://127.0.0.1:5000/add_personalcare_chart/${props.Resident_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data_value_for_personalcare_chart),
    }).then((resp) => resp.json());
    e.preventDefault();
    setShowAddPersonalCare(!showaddpersonalcare)
  };

  return (

    <>
          <Table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Date</th>
                <th>Type Of Hygiene</th>
                <th>Time</th>
                <th>Comment</th>
              </tr>
            </thead>
            {Object.entries(props.data).map(
              ([key, value]) => (
                <>
                  <tbody>
                    <tr>
                      <td>{value["Author"]}</td>
                      <td>{value["Date"]}</td>
                      <td>{value["Type_Of_Hygiene"]}</td>
                      <td>{value["Time"]}</td>
                      <td>{value["Comment"]}</td>
                    </tr>
                  </tbody>
                </>
              )
            )}
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
                  <label for="date">
                    Date: 
                  </label>
                  <input
                    type="date"
                    id="date"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                  <br />
                  <label for="typeofhygiene">Type Of Hygiene: </label>
                  <input
                    type="text"
                    id="typeofhygiene"
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
                  <button onClick={(e) => addPersonalCareHandler(e)}>Submit</button>
                </fieldset>
              </form>
            </Alert>
        </>
  )
}
