import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

function Progressnote(props) {
  const [progressbarvisiblity, setprogressbarvisiblity] = useState(false);
  const [text, setText] = useState("");

  const xyz = async () => {
    let response_for_progressnote = await fetch(
      `http://127.0.0.1:5000/get_progressnote/${props.Resident_ID}`
    );
    response_for_progressnote = await response_for_progressnote.json();
    console.log(response_for_progressnote);
    setText(response_for_progressnote);
  };
  return (
    <>
      <Button
        onClick={() => {
          setprogressbarvisiblity(!progressbarvisiblity);
          xyz();
        }}
      >
        Progress Note
      </Button>

      <div hidden={!progressbarvisiblity}>
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Change Made</th>
                <th>Author</th>
              </tr>
            </thead>
            {Object.entries(text).map(([key, value]) => (
              <>
                <tbody>
                  <tr>
                    <td>{value["id"]}</td>
                    <td>{value["date"]}</td>
                    <td>{value["subject"]}</td>
                    <td>{value["author"]}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </Table>
        </>
      </div>
    </>
  );
}

export default Progressnote;
