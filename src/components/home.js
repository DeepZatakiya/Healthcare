import { Button, Form, Navbar, Container, Nav } from "react-bootstrap";
import Moment from "moment";
import { Collapse } from "react-bootstrap";
import ReactCanvasPaint from "react-canvas-paint";
import "react-canvas-paint/dist/index.css";
import React, { useEffect, useRef, useState } from "react";
import Charts from "./charts";

const Home = () => {
  const [text, setText] = useState("");
  const [ShowCharts, setShowCharts] = useState(false);
  const [pageSwitch, setPageSwitch] = useState(true);
  const [basiccollapse, setBasicCollapse] = useState(false);
  const [dietarycollapse, setDietaryCollapse] = useState(false);
  const [mobilitycollapse, setMobilityCollapse] = useState(false);
  const [hyginecollapse, setHygineCollapse] = useState(false);
  const [toiletingcollapse, settoiletingCollapse] = useState(false);
  const [continencecollapse, setcontinencecollapse] = useState(false);

  const [updatetest, setUpdateTest] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [residentid, setresidentid] = useState("");
  const [facility, setfacility] = useState("");
  const [roomno, setroomno] = useState("");
  const [bed, setbed] = useState("");
  const [wing, setwing] = useState("");
  const [title, settitle] = useState("");
  const [preferredname, setpreferredname] = useState("");
  const [gender, setgender] = useState("");
  const [dob, setdob] = useState("");
  const [marritalstatus, setmarritalstatus] = useState("");
  const [culturalbackground, setculturalbackground] = useState("");
  const [religion, setreligion] = useState("");
  const [mothertongue, setmothertongue] = useState("");
  const [nationality, setnationality] = useState("");
  const [atsistatus, setatsistatus] = useState("");
  const [medicare, setmedicare] = useState("");
  const [medicareex, setmedicareex] = useState("");
  const [pensionnumber, setpensionnumber] = useState("");
  const [dva, setdva] = useState("");
  const [dvaex, setdvaex] = useState("");
  const [healthcarecard, sethealthcarecard] = useState("");
  const [healthcarecardex, sethealthcarecardex] = useState("");
  const [dateofadmission, setdateofadmission] = useState("");
  const [admissionfrom, setadmissionfrom] = useState("");

  const [diagnosislist, setdiagnosislist] = useState("");
  const [allergies, setallergies] = useState("");
  const [ahd, setahd] = useState("");
  const [abscondingrisk, setabscondingrisk] = useState("");
  const [confusion, setconfusion] = useState("");
  const [o2therapy, seto2therapy] = useState("");
  const [smoking, setsmoking] = useState("");
  const [fallsfrequent, setfallsfrequent] = useState("");
  const [infectiosdisease, setinfectiosdisease] = useState("");
  const [languagebarrier, setlanguagebarrier] = useState("");
  const [glasses, setglasses] = useState("");
  const [hearingaids, sethearingaids] = useState("");
  const [dentures, setdentures] = useState("");
  const [continence, setcontinence] = useState("");
  

  const [specialdiettype, setspecialdiettype] = useState("");
  const [likes, setlikes] = useState("");
  const [dislikes, setdislikes] = useState("");
  const [sensorydislike, setsensorydislike] = useState("");
  const [foodtexture, setfoodtexture] = useState("");
  const [fluidtype, setfluidtype] = useState("");
  const [eatinggoals, seteatinggoals] = useState("");
  const [drinkinggoals, setdrinkinggoals] = useState("");
  const [personalgoals, setpersonalgoals] = useState("");
  const [mealsize, setmealsize] = useState("");
  const [staffassistance, setstaffassistance] = useState("");
  const [eatingassistancelevel, seteatingassistancelevel] = useState("");
  const [safeswallowing, setsafeswallowing] = useState("");
  const [nonoralfeed, setnonoralfeed] = useState("");
  const [fluidrestriction, setfluidrestriction] = useState("");
  const [nutritionalsupplement, setnutritionalsupplement] = useState("");
  const [safetyandequipment, setsafetyandequipment] = useState("");
  const [foodrestriction, setfoodrestriction] = useState("");
  const [breakfastchoice, setbreakfastchoice] = useState("");

  const [mobilitystatus, setMobilitystatus] = useState("");
  const [activitystatus, setActivitystatus] = useState("");
  const [gait, setgait] = useState("");
  const [balance, setbalance] = useState("");
  const [posture, setposture] = useState("");
  const [mentalstatus, setmentalstatus] = useState("");
  const [factoraffectsmobility, setfactoraffectsmobility] = useState("");
  const [transfergoals, settransfergoals] = useState("");
  const [personalgoalsmobility, setpersonalgoalsmobility] = useState("");
  const [staffassistancemobility, setstaffassistancemobility] = useState("");
  const [transferaids, settransferaids] = useState("");
  const [rugbedmobility, setrugbedmobility] = useState("");
  const [rugtransferassistance, setrugtransferassistance] = useState("");
  const [rockwoodfrailtyscore, setrockwoodfrailtyscore] = useState("");
  const [transfertobedchairwc, settransfertobedchairwc] = useState("");
  const [locomotionwalkwc, setlocomotionwalkwc] = useState("");
  const [fallsprevention, setfallsprevention] = useState("");

  const [assistacewithcommunicationaids, setassistacewithcommunicationaids] =
    useState("");
  const [haircutby, sethaircutby] = useState("");
  const [toenails, settoenails] = useState("");
  const [hyginegoal, sethyginegoal] = useState("");
  const [personalgoalshygiene, setpersonalgoalshygiene] = useState("");
  const [staffassistancehygine, setstaffassistancehygine] = useState("");
  const [groomingassistance, setgroomingassistance] = useState("");
  const [bathingassistance, setbathingassistance] = useState("");
  const [dressingupperbody, setdressingupperbody] = useState("");
  const [dressinglowerbody, setdressinglowerbody] = useState("");
  const [hyginemode, sethyginemode] = useState("");
  const [hyginefrequency, sethyginefrequency] = useState("");
  const [assistancerequiredwith, setassistancerequiredwith] = useState("");

  const [typeoftoilet, settypeoftoilet] = useState("");
  const [sphinctercontrol, setsphinctercontrol] = useState("");
  const [toiletinggoal, settoiletinggoal] = useState("");
  const [personalgoalstoileting, setpersonalgoalstoileting] = useState("");
  const [bladdercontrol, setbladdercontrol] = useState("");
  const [toiletingassistance, settoiletingassistance] = useState("");
  const [bowelmanagement, setbowelmanagement] = useState("");
  const [toiletingactivitiesassistance, settoiletingactivitiesassistance] = useState("");

  const [continencegoals, setcontinencegoals] = useState("");
  const [bowelhealthgoals, setbowelhealthgoals] = useState("");
  const [bladderhealthgoals, setbladderhealthgoals] = useState("");
  const [toiletingschedule, settoiletingschedule] = useState("");
  const [continenceaids, setcontinenceaids] = useState("");
 
  const [skingoals, setskingoals] = useState("");
  const [conditionofskins, setconditionofskins] = useState("");
  const [pressureareacare, setpressureareacare] = useState("");
  const [skinintegritydevice, setskinintegritydevice] = useState("");
  const [activewounds, setactivewounds] = useState("");
  const [moisture, setmoisture] = useState("");
  const [frictionandshear, setfrictionandshear] = useState("");

  const searchHandler = async () => {
    setPageSwitch(false);
    let response = await fetch(`http://127.0.0.1:5000/get_main_data/${text}`);
    response = await response.json();
    console.warn(response);
    console.log(response[0]);
    setFirstName(response[0].FirstName);
    setLastName(response[0].LastName);
    setresidentid(response[0].Resident_ID);
    setfacility(response[0].Facility);
    setroomno(response[0].Room_no);
    setbed(response[0].Bed);
    setwing(response[0].Wing);
    setpreferredname(response[0].PrefferedName);
    settitle(response[0].Title);
    setgender(response[0].Gender);
    setdob(response[0].DOB);
    setmarritalstatus(response[0].MarritalStatus);
    setculturalbackground(response[0].CulturalBackground);
    setreligion(response[0].Religion);
    setmothertongue(response[0].MotherTongue);
    setnationality(response[0].Nationality);
    setatsistatus(response[0].ATSIStatus);
    setmedicare(response[0].Medicare);
    setmedicareex(response[0].MedicareExDate);
    setpensionnumber(response[0].PensionNumber);
    setdva(response[0].DVA);
    setdvaex(response[0].DVAExDate);
    sethealthcarecard(response[0].HealthCareCard);
    sethealthcarecardex(response[0].HealthCareCardExDate);
    setadmissionfrom(response[0].AdmissionFrom);
    setdateofadmission(response[0].DateOfAdmission);

    let response_for_clinical = await fetch(
      `http://127.0.0.1:5000/get_clinical_data/${response[0].Resident_ID}`
    );
    response_for_clinical = await response_for_clinical.json();

    setdiagnosislist(response_for_clinical[0].DiagnosisList);
    setallergies(response_for_clinical[0].Allergies);
    setahd(response_for_clinical[0].AHDPresent);
    setabscondingrisk(response_for_clinical[0].AbscondingRisk);
    setconfusion(response_for_clinical[0].Confusion);
    seto2therapy(response_for_clinical[0].O2Therapy);
    setsmoking(response_for_clinical[0].Smoking);
    setfallsfrequent(response_for_clinical[0].FallsFrequent);
    setinfectiosdisease(response_for_clinical[0].InfectiosDisease);
    setlanguagebarrier(response_for_clinical[0].LanguageBarrier);
    setglasses(response_for_clinical[0].Glasses);
    sethearingaids(response_for_clinical[0].HearingAids);
    setdentures(response_for_clinical[0].Dentures);
    setcontinence(response_for_clinical[0].Continence)

    let response_for_dietary = await fetch(
      `http://127.0.0.1:5000/get_dietary_data/${response[0].Resident_ID}`
    );
    response_for_dietary = await response_for_dietary.json();

    setspecialdiettype(response_for_dietary[0].SpecialDietType);
    setlikes(response_for_dietary[0].Likes);
    setdislikes(response_for_dietary[0].DisLikes);
    setsensorydislike(response_for_dietary[0].SensoryDislike);
    setfoodtexture(response_for_dietary[0].FoodTexture);
    setfluidtype(response_for_dietary[0].FluidType);
    seteatinggoals(response_for_dietary[0].EatingGoals);
    setdrinkinggoals(response_for_dietary[0].DrinkingGoals);
    setpersonalgoals(response_for_dietary[0].PersonalGoals);
    setmealsize(response_for_dietary[0].MealSize);
    setstaffassistance(response_for_dietary[0].StaffAssistance);
    seteatingassistancelevel(response_for_dietary[0].EatingAssistanceLevel);
    setsafeswallowing(response_for_dietary[0].SafeSwallowing);
    setnonoralfeed(response_for_dietary[0].NonOralFeed);
    setfluidrestriction(response_for_dietary[0].FluidRestriction);
    setnutritionalsupplement(response_for_dietary[0].NutritionalSupplement);
    setsafetyandequipment(response_for_dietary[0].SafetyAndEquipment);
    setfoodrestriction(response_for_dietary[0].FoodRestriction);
    setbreakfastchoice(response_for_dietary[0].BreakfastChoice);

    let response_for_mobility = await fetch(
      `http://127.0.0.1:5000/get_mobility_data/${response[0].Resident_ID}`
    );
    response_for_mobility = await response_for_mobility.json();

    setActivitystatus(response_for_mobility[0].Activity_Status);
    setbalance(response_for_mobility[0].Balance);
    setfactoraffectsmobility(response_for_mobility[0].Factor_Affects_Mobility);
    setfallsprevention(response_for_mobility[0].Falls_prevention);
    setgait(response_for_mobility[0].Gait);
    setlocomotionwalkwc(response_for_mobility[0].Locomotion_Walk_Wc);
    setmentalstatus(response_for_mobility[0].Mental_Status);
    setpersonalgoalsmobility(response_for_mobility[0].Personal_Goals_Mobility);
    setMobilitystatus(response_for_mobility[0].Mobility_Status);
    setposture(response_for_mobility[0].Posture);
    setrugbedmobility(response_for_mobility[0].RUG_Bed_Mobility);
    setrugtransferassistance(response_for_mobility[0].RUG_Transfer_Assistance);
    setrockwoodfrailtyscore(response_for_mobility[0].RUG_Wood_Frailty_Score);
    setstaffassistancemobility(
      response_for_mobility[0].Staffassistance_Mobility
    );
    settransferaids(response_for_mobility[0].Transfer_Aids);
    settransfergoals(response_for_mobility[0].Transfer_Goals);
    settransfertobedchairwc(response_for_mobility[0].Transfer_To_Bed_Chair_Wc);

    let response_for_hygine = await fetch(
      `http://127.0.0.1:5000/get_personal_hygine_data/${response[0].Resident_ID}`
    );
    response_for_hygine = await response_for_hygine.json();

    setpersonalgoalshygiene(response_for_hygine[0].Personal_Goals_Hygine);
    setassistacewithcommunicationaids(
      response_for_hygine[0].Assistance_With_Communication_Aids
    );
    sethaircutby(response_for_hygine[0].Haircut_By);
    settoenails(response_for_hygine[0].Toe_Nail_By);
    sethyginegoal(response_for_hygine[0].Hygine_Goal);
    setstaffassistancehygine(response_for_hygine[0].Staff_Assistance_Hygine);
    setgroomingassistance(response_for_hygine[0].Grooming_Assistance);
    setbathingassistance(response_for_hygine[0].Bathing_Assistance);
    setdressinglowerbody(response_for_hygine[0].Dressing_Upperbody);
    setdressingupperbody(response_for_hygine[0].Dressing_Lowerbody);
    sethyginemode(response_for_hygine[0].Hygine_Mode);
    sethyginefrequency(response_for_hygine[0].Hygine_Frequency);
    setassistancerequiredwith(response_for_hygine[0].Assistance_Required_With);

    let response_for_toileting = await fetch(
      `http://127.0.0.1:5000/get_toileting_data/${response[0].Resident_ID}`
    );
    response_for_toileting = await response_for_toileting.json();

    setpersonalgoalstoileting(response_for_toileting[0].Personal_Goals_Toileting);
    settoiletinggoal(response_for_toileting[0].Toileting_Goals);
    settoiletingassistance(response_for_toileting[0].Toileting_Assistance);
    settypeoftoilet(response_for_toileting[0].Type_Of_Toilet);
    setsphinctercontrol(response_for_toileting[0].Sphincter_Control);
    setbladdercontrol(response_for_toileting[0].Bladder_Control);
    setbowelmanagement(response_for_toileting[0].Bowel_Management);
    settoiletingactivitiesassistance(response_for_toileting[0].Toileting_Activities_Assistance);

    let response_for_continence = await fetch(
      `http://127.0.0.1:5000/get_continence_data/${response[0].Resident_ID}`
    );
    response_for_continence = await response_for_continence.json();

    setcontinenceaids(response_for_continence[0].Continence_Aids);
    settoiletingschedule(response_for_continence[0].Toileting_Schedule);
    setbladderhealthgoals(response_for_continence[0].Bladder_Health_Goals);
    setbowelhealthgoals(response_for_continence[0].Bowel_Health_Goals);
    setcontinencegoals(response_for_continence[0].Continence_Goals);

  let response_for_skins = await fetch(
    `http://127.0.0.1:5000/get_skin_data/${response[0].Resident_ID}`
  );
  response_for_skins = await response_for_skins.json();

  setskingoals(response_for_skins[0].Continence_Aids);
  setconditionofskins(response_for_skins[0].Toileting_Schedule);
  setpressureareacare(response_for_skins[0].Bladder_Health_Goals);
  setskinintegritydevice(response_for_skins[0].Bowel_Health_Goals);
  setactivewounds(response_for_skins[0].Continence_Goals);
  setmoisture(response_for_skins[0].Bowel_Health_Goals);
  setfrictionandshear(response_for_skins[0].Continence_Goals);
  };
  const datavalue_for_main_data = {
    FirstName: firstname,
    LastName: lastname,
    Facility: facility,
    Room_no: roomno,
    Bed: bed,
    Wing: wing,
    PrefferedName: preferredname,
    Title: title,
    Gender: gender,
    MarritalStatus: marritalstatus,
    DOB: dob,
    CulturalBackground: culturalbackground,
    Religion: religion,
    MotherTongue: mothertongue,
    ATSIStatus: atsistatus,
    Nationality: nationality,
    Medicare: medicare,
    MedicareExDate: medicareex,
    DVA: dva,
    DVAExDate: dvaex,
    HealthCareCard: healthcarecard,
    HealthCareCardExDate: healthcarecardex,
    AdmissionFrom: admissionfrom,
    DateOfAdmission: dateofadmission,
  };

  const datavalue_for_clinical = {
    DiagnosisList: diagnosislist,
    Allergies: allergies,
    AHDPresent: ahd,
    AbscondingRisk: abscondingrisk,
    Confusion: confusion,
    O2Therapy: o2therapy,
    Smoking: smoking,
    FallsFrequent: fallsfrequent,
    InfectiosDisease: infectiosdisease,
    LanguageBarrier: languagebarrier,
    Glasses: glasses,
    HearingAids: hearingaids,
    Dentures: dentures,
    Continence: continence
  };

  const datavalue_for_dietary_data = {
    SpecialDietType: specialdiettype,
    Likes: likes,
    DisLikes: dislikes,
    SensoryDislike: sensorydislike,
    FoodTexture: foodtexture,
    FluidType: fluidtype,
    EatingGoals: eatinggoals,
    DrinkingGoals: drinkinggoals,
    PersonalGoals: personalgoals,
    MealSize: mealsize,
    StaffAssistance: staffassistance,
    EatingAssistanceLevel: eatingassistancelevel,
    SafeSwallowing: safeswallowing,
    NonOralFeed: nonoralfeed,
    FluidRestriction: fluidrestriction,
    NutritionalSupplement: nutritionalsupplement,
    SafetyAndEquipment: safetyandequipment,
    FoodRestriction: foodrestriction,
    BreakfastChoice: breakfastchoice,
  };

  const datavalue_for_mobility_data = {
    Activity_Status: activitystatus,
    Balance: balance,
    Factor_Affects_Mobility: factoraffectsmobility,
    Falls_prevention: fallsprevention,
    Gait: gait,
    Locomotion_Walk_Wc: locomotionwalkwc,
    Mental_Status: mentalstatus,
    Mobility_Status: mobilitystatus,
    Personal_Goals_Mobility: personalgoalsmobility,
    Posture: posture,
    RUG_Bed_Mobility: rugbedmobility,
    RUG_Transfer_Assistance: rugtransferassistance,
    RUG_Wood_Frailty_Score: rockwoodfrailtyscore,
    Staffassistance_Mobility: staffassistancemobility,
    Transfer_Aids: transferaids,
    Transfer_Goals: transfergoals,
    Transfer_To_Bed_Chair_Wc: transfertobedchairwc,
  };

  const datavalue_for_Hygine_data = {
    Personal_Goals_Hygine: personalgoalshygiene,
    Assistance_With_Communication_Aids: assistacewithcommunicationaids,
    Haircut_By: haircutby,
    Toe_Nail_By: toenails,
    Hygine_Goal: hyginegoal,
    Staff_Assistance_Hygine: staffassistancehygine,
    Grooming_Assistance: groomingassistance,
    Bathing_Assistance: bathingassistance,
    Dressing_Upperbody: dressingupperbody,
    Dressing_Lowerbody: dressinglowerbody,
    Hygine_Mode: hyginemode,
    Hygine_Frequency: hyginefrequency,
    Assistance_Required_With: assistancerequiredwith,
  };

  const datavalue_for_Continence_data = {
    Continence_Aids: continenceaids,
    Toileting_Schedule: toiletingschedule,
    Bladder_Health_Goals: bladderhealthgoals,
    Bowel_Health_Goals: bowelhealthgoals,
    Continence_Goals: continencegoals
  };

  const datavalue_for_toileting_data = {
    Personal_Goals_Toileting: personalgoalstoileting,
    Toileting_Goals: toiletinggoal,
    Toileting_Assistance: toiletingassistance,
    Type_Of_Toilet: typeoftoilet,
    Sphincter_Control: sphinctercontrol,
    Bladder_Control: bladdercontrol,
    Bowel_Management: bowelmanagement,
    Toileting_Activities_Assistance: toiletingactivitiesassistance
  };

  function updateHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_main_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_main_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
      setUpdateTest(false);
      setPageSwitch(false);
    }
  }

  function updateDietaryHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_dietary_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_dietary_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
    }
  }

  function updateMobilityHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_mobility_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_mobility_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
    }
  }
  
  function updateHygineHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_hygine_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_Hygine_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
    }
  }

  function updateToiletingHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_toileting_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_toileting_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
    }
  }

  function updateContinenceHandler() {
    if (updatetest) {
      fetch(`http://127.0.0.1:5000/update_continence_data/${residentid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datavalue_for_Continence_data),
      })
        .then((resp) => resp.json())
        .then((resp) => console.log(resp));
    }
  }

  const canvas = useRef();
  const [pos, setPos] = useState({});

  function saveCanvas() {
    const canvasSave = document.getElementById("canvas");
    const d = canvasSave.toDataURL("image/png");
    console.log(d);
    const w = window.open("about:blank", "image from canvas");
    w.document.write("<img src='" + d + "' alt='from canvas'/>");
    console.log("Saved!");
  }

  const setPosition = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const resize = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  const draw = (e) => {
    if (e.buttons !== 1) {
      return;
    }
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "green";
    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  if (pageSwitch) {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">HEALTHCARE</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={searchHandler}>
            Search
          </Button>
        </Form>
        <div></div>
      </div>
    );
  } else {
    if(!ShowCharts){
    return (
      // <>
      // <style>
      //   {`
      //     #canvas {
      //       border: 1px solid black;
      //     }
      //   `}
      // </style>
      // <canvas
      //   ref={canvas}
      //   onMouseMove={draw}
      //   onMouseDown={setPosition}
      //   onMouseEnter={setPosition}
      //   id="canvas"
      // ></canvas>
      // <button onClick={()=>{saveCanvas()}}></button>
      // </>
      <div className="App">
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Basic Details</Navbar.Brand>
            <Button
              onClick={() => {
                setBasicCollapse(!basiccollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={basiccollapse}>
          <form>
            <fieldset>
              <label for="facility">Facility: </label>
              <input
                type="text"
                id="facility"
                defaultValue={facility}
                value={facility || ""}
                onChange={(e) => setfacility(e.target.value)}
              />
              <label for="roomno">Room No: </label>
              <input
                type="text"
                id="roomno"
                defaultValue={roomno}
                value={roomno || ""}
                onChange={(e) => setroomno(e.target.value)}
              />
              <label for="bed">Bed: </label>
              <input
                type="text"
                id="bed"
                defaultValue={bed}
                value={bed || ""}
                onChange={(e) => setbed(e.target.value)}
              />
              <label for="wing">Wing: </label>
              <input
                type="text"
                id="wing"
                defaultValue={wing}
                value={wing || ""}
                onChange={(e) => setwing(e.target.value)}
              />

              <label for="title">Title: </label>
              <input
                type="text"
                id="title"
                defaultValue={title}
                value={title || ""}
                onChange={(e) => settitle(e.target.value)}
              />
              <label for="xyz">First name: </label>
              <input
                type="text"
                id="xyz"
                defaultValue={firstname}
                value={firstname || ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="lastname">Last name: </label>
              <input
                type="text"
                id="lastname"
                value={lastname || ""}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <label for="preferredname">Preferred name: </label>
              <input
                type="text"
                id="preferredname"
                defaultValue={preferredname}
                value={preferredname || ""}
                onChange={(e) => setpreferredname(e.target.value)}
              />

              <label for="gender">Gender: </label>
              <input
                type="text"
                id="gender"
                defaultValue={gender}
                value={gender || ""}
                onChange={(e) => setgender(e.target.value)}
              />
              <label for="dob">Date Of Birth: </label>
              <input
                type="date"
                id="dob"
                defaultValue={Moment(dob).format("YYYY-MM-DD")}
                value={Moment(dob).format("YYYY-MM-DD") || ""}
                onChange={(e) => setdob(e.target.value)}
              />

              <label for="marritalstatus">Marital status: </label>
              <input
                type="text"
                id="marritalstatus"
                defaultValue={marritalstatus}
                value={marritalstatus || ""}
                onChange={(e) => setmarritalstatus(e.target.value)}
              />
              <label for="culturalbackground">Cultural Background: </label>
              <input
                type="text"
                id="culturalbackground"
                defaultValue={culturalbackground}
                value={culturalbackground || ""}
                onChange={(e) => setculturalbackground(e.target.value)}
              />
              <label for="religion">Riligion: </label>
              <input
                type="text"
                id="religion"
                defaultValue={religion}
                value={religion || ""}
                onChange={(e) => setreligion(e.target.value)}
              />
              <label for="mothertongue">Mother tongue: </label>
              <input
                type="text"
                id="mothertongue"
                defaultValue={mothertongue}
                value={mothertongue || ""}
                onChange={(e) => setmothertongue(e.target.value)}
              />

              <label for="nationality">Nationality: </label>
              <input
                type="text"
                id="nationality"
                defaultValue={nationality}
                value={nationality || ""}
                onChange={(e) => setnationality(e.target.value)}
              />
              <label for="atsistatus">ATSI Status: </label>
              <input
                type="text"
                id="atsistatus"
                defaultValue={atsistatus}
                value={atsistatus || ""}
                onChange={(e) => setatsistatus(e.target.value)}
              />
              <label for="medicare">Medicare: </label>
              <input
                type="text"
                id="medicare"
                defaultValue={medicare}
                value={medicare || ""}
                onChange={(e) => setmedicare(e.target.value)}
              />
              <label for="medicareex">Medicare Expire: </label>
              <input
                type="date"
                id="medicareex"
                defaultValue={Moment(medicareex).format("YYYY-MM-DD")}
                value={Moment(medicareex).format("YYYY-MM-DD") || ""}
                onChange={(e) => setmedicareex(e.target.value)}
              />

              <label for="pensionnumber">Pension Number: </label>
              <input
                type="text"
                id="pensionnumber"
                defaultValue={pensionnumber}
                value={pensionnumber || ""}
                onChange={(e) => setpensionnumber(e.target.value)}
              />
              <label for="dva">DVA: </label>
              <input
                type="text"
                id="dva"
                defaultValue={dva}
                value={dva || ""}
                onChange={(e) => setdva(e.target.value)}
              />
              <label for="dvaex">DVA Expiry Date: </label>
              <input
                type="date"
                id="dvaex"
                defaultValue={Moment(dvaex).format("YYYY-MM-DD")}
                value={Moment(dvaex).format("YYYY-MM-DD") || ""}
                onChange={(e) => setdvaex(e.target.value)}
              />
              <label for="healthcarecard">Healthcare Card: </label>
              <input
                type="text"
                id="healthcarecard"
                defaultValue={healthcarecard}
                value={healthcarecard || ""}
                onChange={(e) => sethealthcarecard(e.target.value)}
              />
              <label for="healthcarecardex">
                Healthcare Card Expiry Date:{" "}
              </label>
              <input
                type="date"
                id="healthcarecardex"
                defaultValue={Moment(healthcarecardex).format("YYYY-MM-DD")}
                value={Moment(healthcarecardex).format("YYYY-MM-DD") || ""}
                onChange={(e) => sethealthcarecardex(e.target.value)}
              />
              <label for="dateofadmission">Date of Admission: </label>
              <input
                type="date"
                id="dateofadmission"
                defaultValue={Moment(dateofadmission).format("YYYY-MM-DD")}
                value={Moment(dateofadmission).format("YYYY-MM-DD") || ""}
                onChange={(e) => setdateofadmission(e.target.value)}
              />
              <label for="admissionfrom">Admission From: </label>
              <input
                type="text"
                id="admissionfrom"
                defaultValue={admissionfrom}
                value={admissionfrom || ""}
                onChange={(e) => setadmissionfrom(e.target.value)}
              />
              <button onClick={updateHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>

        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">DIETARY</Navbar.Brand>
            <Button
              onClick={() => {
                setDietaryCollapse(!dietarycollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={dietarycollapse}>
          <form>
            <fieldset>
              <label for="specialdiettype">Special Diet Type: </label>
              <input
                type="text"
                id="specialdiettype"
                defaultValue={specialdiettype}
                value={specialdiettype || ""}
                onChange={(e) => setspecialdiettype(e.target.value)}
              />

              <label for="allergies">Allergies: </label>
              <input
                type="text"
                id="allergies"
                defaultValue={allergies}
                value={allergies || ""}
                onChange={(e) => setallergies(e.target.value)}
              />

              <label for="physicaldeficit">Physical Deficit: </label>
              <input
                type="text"
                id="physicaldeficit"
                value={
                  languagebarrier +
                    "," +
                    glasses +
                    "," +
                    hearingaids +
                    "," +
                    dentures || ""
                }
              />

              <label for="cognitivedeficit">Cognitive Deficit: </label>
              <input
                type="text"
                id="cognitivedeficit"
                value={
                  languagebarrier + "," + confusion + "," + abscondingrisk || ""
                }
              />

              <label for="likes">Likes: </label>
              <input
                type="text"
                id="likes"
                defaultValue={likes}
                value={likes || ""}
                onChange={(e) => setlikes(e.target.value)}
              />
              <label for="dislikes">Dislikes: </label>
              <input
                type="text"
                id="dislikes"
                defaultValue={dislikes}
                value={dislikes || ""}
                onChange={(e) => setdislikes(e.target.value)}
              />
              <label for="sensorydislike">Sensory Dislike: </label>
              <input
                type="text"
                id="sensorydislike"
                defaultValue={sensorydislike}
                value={sensorydislike || ""}
                onChange={(e) => setsensorydislike(e.target.value)}
              />

              <label for="foodtexture">Food Texture: </label>
              <input
                type="text"
                id="foodtexture"
                defaultValue={foodtexture}
                value={foodtexture || ""}
                onChange={(e) => setfoodtexture(e.target.value)}
              />
              <label for="fluidtype">Fluid Type: </label>
              <input
                type="text"
                id="fluidtype"
                defaultValue={fluidtype}
                value={fluidtype || ""}
                onChange={(e) => setfluidtype(e.target.value)}
              />
              <label for="eatinggoals">Eating Goals: </label>
              <input
                type="text"
                id="eatinggoals"
                value={eatinggoals || ""}
                onChange={(e) => {
                  seteatinggoals(e.target.value);
                }}
              />
              <label for="drinkinggoals">Drinking Goals: </label>
              <input
                type="text"
                id="drinkinggoals"
                defaultValue={drinkinggoals}
                value={drinkinggoals || ""}
                onChange={(e) => setdrinkinggoals(e.target.value)}
              />

              <label for="personalgoals">Personal Goals: </label>
              <input
                type="text"
                id="personalgoals"
                defaultValue={personalgoals}
                value={personalgoals || ""}
                onChange={(e) => setpersonalgoals(e.target.value)}
              />

              <label for="mealsize">Meal Size: </label>
              <input
                type="text"
                id="mealsize"
                defaultValue={mealsize}
                value={mealsize || ""}
                onChange={(e) => setmealsize(e.target.value)}
              />
              <label for="staffassistance">Staff Assistance: </label>
              <input
                type="text"
                id="staffassistance"
                defaultValue={staffassistance}
                value={staffassistance || ""}
                onChange={(e) => setstaffassistance(e.target.value)}
              />
              <label for="eatingassistancelevel">
                Eating Assistance Level:{" "}
              </label>
              <input
                type="text"
                id="eatingassistancelevel"
                defaultValue={eatingassistancelevel}
                value={eatingassistancelevel || ""}
                onChange={(e) => seteatingassistancelevel(e.target.value)}
              />
              <label for="safeswallowing">Safe Swallowing: </label>
              <input
                type="text"
                id="safeswallowing"
                defaultValue={safeswallowing}
                value={safeswallowing || ""}
                onChange={(e) => setsafeswallowing(e.target.value)}
              />

              <label for="nonoralfeed">Non Oral Feed: </label>
              <input
                type="text"
                id="nonoralfeed"
                defaultValue={nonoralfeed}
                value={nonoralfeed || ""}
                onChange={(e) => setnonoralfeed(e.target.value)}
              />
              <label for="fluidrestriction">Fluid Restriction: </label>
              <input
                type="text"
                id="fluidrestriction"
                defaultValue={fluidrestriction}
                value={fluidrestriction || ""}
                onChange={(e) => setfluidrestriction(e.target.value)}
              />
              <label for="nutritionalsupplement">
                Nutritional Supplement:{" "}
              </label>
              <input
                type="text"
                id="nutritionalsupplement"
                defaultValue={nutritionalsupplement}
                value={nutritionalsupplement || ""}
                onChange={(e) => setnutritionalsupplement(e.target.value)}
              />

              <label for="safetyandequipment">Safety And Equipment: </label>
              <input
                type="text"
                id="safetyandequipment"
                defaultValue={safetyandequipment}
                value={safetyandequipment || ""}
                onChange={(e) => setsafetyandequipment(e.target.value)}
              />
              <label for="foodrestriction">Food Restriction: </label>
              <input
                type="text"
                id="foodrestriction"
                defaultValue={foodrestriction}
                value={foodrestriction || ""}
                onChange={(e) => setfoodrestriction(e.target.value)}
              />
              <label for="breakfastchoice">Breakfast Choice: </label>
              <input
                type="text"
                id="breakfastchoice"
                defaultValue={breakfastchoice}
                value={breakfastchoice || ""}
                onChange={(e) => setbreakfastchoice(e.target.value)}
              />
              <button onClick={updateDietaryHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>

        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MOBILITY</Navbar.Brand>
            <Button
              onClick={() => {
                setMobilityCollapse(!mobilitycollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={mobilitycollapse}>
          <form>
            <fieldset>
              <label for="diagnosislist">Diagnosis List: </label>
              <input
                type="text"
                id="diagnosislist"
                defaultValue={diagnosislist}
                value={diagnosislist || ""}
              />

              <label for="allergies">Allergies: </label>
              <input
                type="text"
                id="allergies"
                defaultValue={allergies}
                value={allergies || ""}
              />

              <label for="physicaldeficit">Physical Deficit: </label>
              <input
                type="text"
                id="physicaldeficit"
                value={
                  languagebarrier +
                    "," +
                    glasses +
                    "," +
                    hearingaids +
                    "," +
                    dentures || ""
                }
              />

              <label for="cognitivedeficit">Cognitive Deficit: </label>
              <input
                type="text"
                id="cognitivedeficit"
                value={
                  languagebarrier + "," + confusion + "," + abscondingrisk || ""
                }
              />

              <label for="mobilitystatus">Mobility Status: </label>
              <input
                type="text"
                id="mobilitystatus"
                defaultValue={mobilitystatus}
                value={mobilitystatus || ""}
                onChange={(e) => setMobilitystatus(e.target.value)}
              />
              <label for="activitystatus">Activity Status: </label>
              <input
                type="text"
                id="activitystatus"
                defaultValue={activitystatus}
                value={activitystatus || ""}
                onChange={(e) => setActivitystatus(e.target.value)}
              />
              <label for="gait">Gait: </label>
              <input
                type="text"
                id="gait"
                defaultValue={gait}
                value={gait || ""}
                onChange={(e) => setgait(e.target.value)}
              />

              <label for="balance">Balance: </label>
              <input
                type="text"
                id="balance"
                defaultValue={balance}
                value={balance || ""}
                onChange={(e) => setbalance(e.target.value)}
              />
              <label for="posture">Posture: </label>
              <input
                type="text"
                id="posture"
                defaultValue={posture}
                value={posture || ""}
                onChange={(e) => setposture(e.target.value)}
              />
              <label for="mentalstatus">Mental Status: </label>
              <input
                type="text"
                id="mentalstatus"
                value={mentalstatus || ""}
                onChange={(e) => {
                  setmentalstatus(e.target.value);
                }}
              />
              <label for="factoraffectsmobility">
                Factor Affects Mobility:{" "}
              </label>
              <input
                type="text"
                id="factoraffectsmobility"
                defaultValue={factoraffectsmobility}
                value={factoraffectsmobility || ""}
                onChange={(e) => setfactoraffectsmobility(e.target.value)}
              />

              <label for="personalgoalsmobility">Personal Goals: </label>
              <input
                type="text"
                id="personalgoalsmobility"
                defaultValue={personalgoalsmobility}
                value={personalgoalsmobility || ""}
                onChange={(e) => setpersonalgoalsmobility(e.target.value)}
              />

              <label for="transfergoals">Transfer Goals: </label>
              <input
                type="text"
                id="transfergoals"
                defaultValue={transfergoals}
                value={transfergoals || ""}
                onChange={(e) => settransfergoals(e.target.value)}
              />
              <label for="staffassistancemobility">Staff Assistance: </label>
              <input
                type="text"
                id="staffassistancemobility"
                defaultValue={staffassistancemobility}
                value={staffassistancemobility || ""}
                onChange={(e) => setstaffassistancemobility(e.target.value)}
              />
              <label for="transferaids">Transfer Aids: </label>
              <input
                type="text"
                id="transferaids"
                defaultValue={transferaids}
                value={transferaids || ""}
                onChange={(e) => settransferaids(e.target.value)}
              />
              <label for="rugbedmobility">RUG: Bed Mobility: </label>
              <input
                type="text"
                id="rugbedmobility"
                defaultValue={rugbedmobility}
                value={rugbedmobility || ""}
                onChange={(e) => setrugbedmobility(e.target.value)}
              />

              <label for="rugtransferassistance">
                RUG: Transfer Assistance:{" "}
              </label>
              <input
                type="text"
                id="rugtransferassistance"
                defaultValue={rugtransferassistance}
                value={rugtransferassistance || ""}
                onChange={(e) => setrugtransferassistance(e.target.value)}
              />

              <label for="rockwoodfrailtyscore">RUG: Frality: </label>
              <input
                type="text"
                id="rockwoodfrailtyscore"
                defaultValue={rockwoodfrailtyscore}
                value={rockwoodfrailtyscore || ""}
                onChange={(e) => setrockwoodfrailtyscore(e.target.value)}
              />
              <label for="transfertobedchairwc">
                Transfer To Bed Chair Wc:{" "}
              </label>
              <input
                type="text"
                id="transfertobedchairwc"
                defaultValue={transfertobedchairwc}
                value={transfertobedchairwc || ""}
                onChange={(e) => settransfertobedchairwc(e.target.value)}
              />
              <label for="locomotionwalkwc">Locomotion: </label>
              <input
                type="text"
                id="locomotionwalkwc"
                defaultValue={locomotionwalkwc}
                value={locomotionwalkwc || ""}
                onChange={(e) => setlocomotionwalkwc(e.target.value)}
              />

              <label for="fallsprevention">Falls Prevention: </label>
              <input
                type="text"
                id="fallsprevention"
                defaultValue={fallsprevention}
                value={fallsprevention || ""}
                onChange={(e) => setfallsprevention(e.target.value)}
              />
              <button onClick={updateMobilityHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>

        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">PERSONAL HYGINE</Navbar.Brand>
            <Button
              onClick={() => {
                setHygineCollapse(!hyginecollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={hyginecollapse}>
          <form>
            <fieldset>
              <label for="diagnosislist">Diagnosis List: </label>
              <input
                type="text"
                id="diagnosislist"
                defaultValue={diagnosislist}
                value={diagnosislist || ""}
              />

              <label for="allergies">Allergies: </label>
              <input
                type="text"
                id="allergies"
                defaultValue={allergies}
                value={allergies || ""}
              />

              <label for="physicaldeficit">Physical Deficit: </label>
              <input
                type="text"
                id="physicaldeficit"
                value={
                  languagebarrier +
                    "," +
                    glasses +
                    "," +
                    hearingaids +
                    "," +
                    dentures || ""
                }
              />

              <label for="cognitivedeficit">Cognitive Deficit: </label>
              <input
                type="text"
                id="cognitivedeficit"
                value={
                  languagebarrier + "," + confusion + "," + abscondingrisk || ""
                }
              />

              <label for="hyginegoal">Hygine Goals: </label>
              <input
                type="text"
                id="hyginegoal"
                defaultValue={hyginegoal}
                value={hyginegoal || ""}
                onChange={(e) => sethyginegoal(e.target.value)}
              />
              <label for="groomingassistance">Grooming Assistance: </label>
              <input
                type="text"
                id="groomingassistance"
                defaultValue={groomingassistance}
                value={groomingassistance || ""}
                onChange={(e) => setgroomingassistance(e.target.value)}
              />
              <label for="bathingassistance">Bathing Assistance: </label>
              <input
                type="text"
                id="bathingassistance"
                defaultValue={bathingassistance}
                value={bathingassistance || ""}
                onChange={(e) => setbathingassistance(e.target.value)}
              />

              <label for="dressingupperbody">Dressing Upper Body: </label>
              <input
                type="text"
                id="dressingupperbody"
                defaultValue={dressingupperbody}
                value={dressingupperbody || ""}
                onChange={(e) => setdressingupperbody(e.target.value)}
              />
              <label for="dressinglowerbody">Dressing Lower Body: </label>
              <input
                type="text"
                id="dressinglowerbody"
                defaultValue={dressinglowerbody}
                value={dressinglowerbody || ""}
                onChange={(e) => setdressinglowerbody(e.target.value)}
              />
              <label for="hyginemode">Hygine Mode: </label>
              <input
                type="text"
                id="hyginemode"
                value={hyginemode || ""}
                onChange={(e) => {
                  sethyginemode(e.target.value);
                }}
              />
              <label for="hyginefrequency">Hygine Frequency:</label>
              <input
                type="text"
                id="hyginefrequency"
                defaultValue={hyginefrequency}
                value={hyginefrequency || ""}
                onChange={(e) => sethyginefrequency(e.target.value)}
              />

              <label for="personalgoalshygiene">Personal Goals: </label>
              <input
                type="text"
                id="personalgoalshygiene"
                defaultValue={personalgoalshygiene}
                value={personalgoalshygiene || ""}
                onChange={(e) => setpersonalgoalshygiene(e.target.value)}
              />

              <label for="assistancerequiredwith">
                Assistance Required With:{" "}
              </label>
              <input
                type="text"
                id="assistancerequiredwith"
                defaultValue={assistancerequiredwith}
                value={assistancerequiredwith || ""}
                onChange={(e) => setassistancerequiredwith(e.target.value)}
              />
              <label for="staffassistancehygine">Staff Assistance: </label>
              <input
                type="text"
                id="staffassistancehygine"
                defaultValue={staffassistancehygine}
                value={staffassistancehygine || ""}
                onChange={(e) => setstaffassistancehygine(e.target.value)}
              />
              <label for="toenails">Toe Nails By: </label>
              <input
                type="text"
                id="toenails"
                defaultValue={toenails}
                value={toenails || ""}
                onChange={(e) => settoenails(e.target.value)}
              />
              <label for="haircutby">Haircut By: </label>
              <input
                type="text"
                id="haircutby"
                defaultValue={haircutby}
                value={haircutby || ""}
                onChange={(e) => sethaircutby(e.target.value)}
              />

              <label for="assistacewithcommunicationaids">
                Assistace With Communication Aids:{" "}
              </label>
              <input
                type="text"
                id="assistacewithcommunicationaids"
                defaultValue={assistacewithcommunicationaids}
                value={assistacewithcommunicationaids || ""}
                onChange={(e) =>
                  setassistacewithcommunicationaids(e.target.value)
                }
              />
              <button onClick={updateHygineHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>
        
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">TOILETING</Navbar.Brand>
            <Button
              onClick={() => {
                settoiletingCollapse(!toiletingcollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={toiletingcollapse}>
          <form>
            <fieldset>
              <label for="diagnosislist">Diagnosis List: </label>
              <input
                type="text"
                id="diagnosislist"
                defaultValue={diagnosislist}
                value={diagnosislist || ""}
              />

              <label for="allergies">Allergies: </label>
              <input
                type="text"
                id="allergies"
                defaultValue={allergies}
                value={allergies || ""}
              />

              <label for="physicaldeficit">Physical Deficit: </label>
              <input
                type="text"
                id="physicaldeficit"
                value={
                  languagebarrier +
                    "," +
                    glasses +
                    "," +
                    hearingaids +
                    "," +
                    dentures || ""
                }
              />

              <label for="cognitivedeficit">Cognitive Deficit: </label>
              <input
                type="text"
                id="cognitivedeficit"
                value={
                  languagebarrier + "," + confusion + "," + abscondingrisk || ""
                }
              />

              <label for="toiletinggoal">Toileting Goals: </label>
              <input
                type="text"
                id="toiletinggoal"
                defaultValue={toiletinggoal}
                value={toiletinggoal || ""}
                onChange={(e) => settoiletinggoal(e.target.value)}
              />
              <label for="">Toileting Assistance: </label>
              <input
                type="text"
                id="toiletingassistance"
                defaultValue={toiletingassistance}
                value={toiletingassistance || ""}
                onChange={(e) => settoiletingassistance(e.target.value)}
              />
              <label for="typeoftoilet">Type of Toilet: </label>
              <input
                type="text"
                id="typeoftoilet"
                defaultValue={typeoftoilet}
                value={typeoftoilet || ""}
                onChange={(e) => settypeoftoilet(e.target.value)}
              />

              <label for="sphinctercontrol">Sphincter Control: </label>
              <input
                type="text"
                id="sphinctercontrol"
                defaultValue={sphinctercontrol}
                value={sphinctercontrol || ""}
                onChange={(e) => setsphinctercontrol(e.target.value)}
              />
              <label for="bladdercontrol">Bladder Control: </label>
              <input
                type="text"
                id="bladdercontrol"
                defaultValue={bladdercontrol}
                value={bladdercontrol || ""}
                onChange={(e) => setbladdercontrol(e.target.value)}
              />
              <label for="bowelmanagement">Bowel Management: </label>
              <input
                type="text"
                id="bowelmanagement"
                value={bowelmanagement || ""}
                onChange={(e) => {
                  setbowelmanagement(e.target.value);
                }}
              />
              <label for="toiletingactivitiesassistance">Toileting Activities Assistance:</label>
              <input
                type="text"
                id="toiletingactivitiesassistance"
                defaultValue={toiletingactivitiesassistance}
                value={toiletingactivitiesassistance || ""}
                onChange={(e) => settoiletingactivitiesassistance(e.target.value)}
              />
              <button onClick={updateToiletingHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>


        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">CONTINENCE</Navbar.Brand>
            <Button
              onClick={() => {
                setcontinencecollapse(!continencecollapse);
              }}
            >
              EXPAND
            </Button>
          </Container>
        </Navbar>
        <Collapse in={continencecollapse}>
          <form>
            <fieldset>
              <label for="diagnosislist">Diagnosis List: </label>
              <input
                type="text"
                id="diagnosislist"
                defaultValue={diagnosislist}
                value={diagnosislist || ""}
              />

              <label for="allergies">Allergies: </label>
              <input
                type="text"
                id="allergies"
                defaultValue={allergies}
                value={allergies || ""}
              />

              <label for="physicaldeficit">Physical Deficit: </label>
              <input
                type="text"
                id="physicaldeficit"
                value={
                  languagebarrier +
                    "," +
                    glasses +
                    "," +
                    hearingaids +
                    "," +
                    dentures || ""
                }
              />

              <label for="cognitivedeficit">Cognitive Deficit: </label>
              <input
                type="text"
                id="cognitivedeficit"
                value={
                  languagebarrier + "," + confusion + "," + abscondingrisk || ""
                }
              />

              <label for="continence">Continence: </label>
              <input
                type="text"
                id="continence"
                defaultValue={continence}
                value={continence || ""}
                onChange={(e) => setcontinence(e.target.value)}
              />
              <label for="continencegoals">Continence Goals: </label>
              <input
                type="text"
                id="continencegoals"
                defaultValue={continencegoals}
                value={continencegoals || ""}
                onChange={(e) => setcontinencegoals(e.target.value)}
              />
              <label for="bowelhealthgoals">Bowel Health Goals: </label>
              <input
                type="text"
                id="bowelhealthgoals"
                defaultValue={bowelhealthgoals}
                value={bowelhealthgoals || ""}
                onChange={(e) => setbowelhealthgoals(e.target.value)}
              />

              <label for="bladderhealthgoals">Bladder Health Goals: </label>
              <input
                type="text"
                id="bladderhealthgoals"
                defaultValue={bladderhealthgoals}
                value={bladderhealthgoals || ""}
                onChange={(e) => setbladderhealthgoals(e.target.value)}
              />
              <label for="toiletingschedule">Toileting Schedule: </label>
              <input
                type="text"
                id="toiletingschedule"
                defaultValue={toiletingschedule}
                value={toiletingschedule || ""}
                onChange={(e) => settoiletingschedule(e.target.value)}
              />
              <label for="continenceaids">Continence Aids: </label>
              <input
                type="text"
                id="continenceaids"
                value={continenceaids || ""}
              />
              <button onClick={updateContinenceHandler}>Submit</button>
            </fieldset>
          </form>
        </Collapse>

        <Button onClick={(e) => setPageSwitch(true)}>BACK</Button>
        <Button onClick={(e) => setShowCharts(true)}>Charts</Button>
      </div>
    );}
    else{
      return(
        <div>
          <Charts Resident_ID={residentid} setShowCharts={setShowCharts} ShowCharts={ShowCharts}></Charts>
        </div>
      )
    }
  }
};

export default Home;
