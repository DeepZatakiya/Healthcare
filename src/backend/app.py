from email.mime import image
from email.policy import default
import io
from tkinter import CASCADE, Image
from xml.etree.ElementTree import Comment
from MySQLdb import Date
from flask import Flask, jsonify, request, Response
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import requests
import json
from sqlalchemy import ForeignKey, text
import sqlalchemy
from werkzeug.utils import secure_filename
from sqlalchemy import create_engine, MetaData
from io import StringIO
from PIL import Image

engine = create_engine('mysql://root:''@localhost/healthcare')

m=MetaData()
m.reflect(engine)

MAIN_TABLE = m.tables["main_table"]

app=Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/healthcare'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


@app.route('/get_main_data/<FirstName>',methods=['GET'])
def get_main_data(FirstName):
    print(FirstName)
    s = text("SELECT * FROM main_table where FirstName='"+FirstName+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    return jsonify(a)

@app.route('/get_dietary_data/<Resident_ID>',methods=['GET'])
def get_dietary_data(Resident_ID):
    s = text("SELECT * FROM dietary_care_plan where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_clinical_data/<Resident_ID>',methods=['GET'])
def get_clinical_data(Resident_ID):
    s = text("SELECT * FROM clinical_table where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_mobility_data/<Resident_ID>',methods=['GET'])
def get_mobility_data(Resident_ID):
    s = text("SELECT * FROM mobility_care_plan where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_personal_hygine_data/<Resident_ID>',methods=['GET'])
def get_personal_hygine_data(Resident_ID):
    s = text("SELECT * FROM personal_hygine_care_plan where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_toileting_data/<Resident_ID>',methods=['GET'])
def get_toileting_data(Resident_ID):
    s = text("SELECT * FROM toileting_care_plan where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_continence_data/<Resident_ID>',methods=['GET'])
def get_continence_data(Resident_ID):
    s = text("SELECT * FROM continence_care_plan where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

@app.route('/get_personalcare_chart_data/<Resident_ID>',methods=['GET'])
def get_personalcare_chart_data(Resident_ID):
    s = text("SELECT * FROM personal_care_chart where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]
    for i in x:
        i=dict(i)
        a.append(i)
    print(a)
    return jsonify(a)

def write_file(data, filename):
    with open(filename, 'wb') as file:
        file.write(data)
@app.route('/get_wound_chart_data/<Resident_ID>',methods=['GET'])
def get_wound_chart_data(Resident_ID):
    s = text("SELECT * FROM image where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]

    # y= Response(img.img, mimetype=img.mimetype)
    # y=Image.open(y)
    # y.show()
    # print(y)
    for i in x:
        i=dict(i)
        i["img"]=str(i["img"])
        a.append(i)
    return jsonify(a)


@app.route('/update_main_data/<Resident_ID>',methods=['PUT'])
def update_main_data(Resident_ID):
    FirstName=request.json['FirstName']
    LastName=request.json['LastName']
    Facility=request.json['Facility']
    Room_no=request.json['Room_no']
    Bed=request.json['Bed']
    Wing=request.json['Wing']
    PrefferedName=request.json['PrefferedName']
    Title=request.json['Title']
    Gender=request.json['Gender']
    MarritalStatus=request.json['MarritalStatus']
    DOB=request.json['DOB']
    CulturalBackground=request.json['CulturalBackground']
    Religion=request.json['Religion']
    MotherTongue=request.json['MotherTongue']
    ATSIStatus=request.json['ATSIStatus']
    Nationality=request.json['Nationality']
    Medicare=request.json['Medicare']
    MedicareExDate=request.json['MedicareExDate']
    DVA=request.json['DVA']
    DVAExDate=request.json['DVAExDate']
    HealthCareCard=request.json['HealthCareCard']
    HealthCareCardExDate=request.json['HealthCareCardExDate']
    AdmissionFrom=request.json['AdmissionFrom']
    DateOfAdmission=request.json['DateOfAdmission']


    print(DOB)

    s = text("update main_table set LastName='"+LastName+"',FirstName='"+FirstName+"',Facility='"+Facility+"',Room_no='"+Room_no+"',Bed='"+Bed+"',Wing='"+Wing+"',PrefferedName='"+PrefferedName+"',Title='"+Title+"',Gender='"+Gender+"',MarritalStatus='"+MarritalStatus+"',DOB='"+DOB+"',CulturalBackground='"+CulturalBackground+"',Religion='"+Religion+"',MotherTongue='"+MotherTongue+"',ATSIStatus='"+ATSIStatus+"',Nationality='"+Nationality+"',Medicare='"+Medicare+"',MedicareExDate='"+MedicareExDate+"',DVA='"+DVA+"',DVAExDate='"+DVAExDate+"',HealthCareCard='"+HealthCareCard+"',HealthCareCardExDate='"+HealthCareCardExDate+"',AdmissionFrom='"+AdmissionFrom+"', DateOfAdmission='"+DateOfAdmission+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"

@app.route('/update_clinical_data/<Resident_ID>',methods=['PUT'])
def update_clinical_data(Resident_ID):
    DiagnosisList=request.json['DiagnosisList']
    Allergies=request.json['Allergies']
    AHDPresent=request.json['AHDPresent']
    AbscondingRisk=request.json['AbscondingRisk']
    Confusion=request.json['Confusion']
    O2Therapy=request.json['O2Therapy']
    Smoking=request.json['Smoking']
    FallsFrequent=request.json['FallsFrequent']
    InfectiosDisease=request.json['InfectiosDisease']
    LanguageBarrier=request.json['LanguageBarrier']
    Glasses=request.json['Glasses']
    HearingAids=request.json['HearingAids']
    Dentures=request.json['Dentures']

    s = text("update clinical_table set DiagnosisList='"+str(DiagnosisList)+"',Allergies='"+str(Allergies)+"',AHDPresent='"+str(AHDPresent)+"',AbscondingRisk='"+str(AbscondingRisk)+"',Confusion='"+str(Confusion)+"',O2Therapy='"+str(O2Therapy)+"',Smoking='"+str(Smoking)+"',FallsFrequent='"+str(FallsFrequent)+"',InfectiosDisease='"+str(InfectiosDisease)+"',LanguageBarrier='"+str(LanguageBarrier)+"',Glasses='"+str(Glasses)+"',HearingAids='"+str(HearingAids)+"',Dentures='"+str(Dentures)+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"


@app.route('/update_dietary_data/<Resident_ID>',methods=['PUT'])
def update_dietary_data(Resident_ID):
    SpecialDietType=request.json['SpecialDietType']
    Likes=request.json['Likes']
    DisLikes=request.json['DisLikes']
    SensoryDislike=request.json['SensoryDislike']
    FoodTexture=request.json['FoodTexture']
    FluidType=request.json['FluidType']
    EatingGoals=request.json['EatingGoals']
    DrinkingGoals=request.json['DrinkingGoals']
    PersonalGoals=request.json['PersonalGoals']
    MealSize=request.json['MealSize']
    StaffAssistance=request.json['StaffAssistance']
    EatingAssistanceLevel=request.json['EatingAssistanceLevel']
    SafeSwallowing=request.json['SafeSwallowing']
    NonOralFeed=request.json['NonOralFeed']
    FluidRestriction=request.json['FluidRestriction']
    NutritionalSupplement=request.json['NutritionalSupplement']
    SafetyAndEquipment=request.json['SafetyAndEquipment']
    FoodRestriction=request.json['FoodRestriction']
    BreakfastChoice=request.json['BreakfastChoice']
    s = text("update dietary_care_plan set SpecialDietType='"+SpecialDietType+"',Likes='"+Likes+"',DisLikes='"+DisLikes+"',SensoryDislike='"+SensoryDislike+"',FoodTexture='"+FoodTexture+"',FluidType='"+FluidType+"',EatingGoals='"+EatingGoals+"',DrinkingGoals='"+DrinkingGoals+"',PersonalGoals='"+PersonalGoals+"',MealSize='"+MealSize+"',StaffAssistance='"+StaffAssistance+"',EatingAssistanceLevel='"+EatingAssistanceLevel+"',SafeSwallowing='"+SafeSwallowing+"',NonOralFeed='"+NonOralFeed+"',FluidRestriction='"+FluidRestriction+"',NutritionalSupplement='"+NutritionalSupplement+"',SafetyAndEquipment='"+SafetyAndEquipment+"',FoodRestriction='"+FoodRestriction+"',BreakfastChoice='"+BreakfastChoice+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"    

@app.route('/update_mobility_data/<Resident_ID>',methods=['PUT'])
def update_mobility_data(Resident_ID):
    Activity_Status=request.json['Activity_Status']
    Balance=request.json['Balance']
    Factor_Affects_Mobility=request.json['Factor_Affects_Mobility']
    Gait=request.json['Gait']
    Locomotion_Walk_Wc=request.json['Locomotion_Walk_Wc']
    Mental_Status=request.json['Mental_Status']
    Personal_Goals_Mobility=request.json['Personal_Goals_Mobility']
    Posture=request.json['Posture']
    RUG_Bed_Mobility=request.json['RUG_Bed_Mobility']
    RUG_Transfer_Assistance=request.json['RUG_Transfer_Assistance']
    RUG_Wood_Frailty_Score=request.json['RUG_Wood_Frailty_Score']
    Staffassistance_Mobility=request.json['Staffassistance_Mobility']
    Transfer_Aids=request.json['Transfer_Aids']
    Transfer_Goals=request.json['Transfer_Goals']
    Transfer_To_Bed_Chair_Wc=request.json['Transfer_To_Bed_Chair_Wc']
    s = text("update mobility_care_plan set Activity_Status='"+Activity_Status+"',Balance='"+Balance+"',Factor_Affects_Mobility='"+Factor_Affects_Mobility+"',Gait='"+Gait+"',Locomotion_Walk_Wc='"+Locomotion_Walk_Wc+"',Mental_Status='"+Mental_Status+"',Personal_Goals_Mobility='"+Personal_Goals_Mobility+"',Posture='"+Posture+"',RUG_Bed_Mobility='"+RUG_Bed_Mobility+"',RUG_Transfer_Assistance='"+RUG_Transfer_Assistance+"',RUG_Wood_Frailty_Score='"+RUG_Wood_Frailty_Score+"',Staffassistance_Mobility='"+Staffassistance_Mobility+"',Transfer_Aids='"+Transfer_Aids+"',Transfer_Goals='"+Transfer_Goals+"',Transfer_To_Bed_Chair_Wc='"+Transfer_To_Bed_Chair_Wc+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"  

@app.route('/update_hygine_data/<Resident_ID>',methods=['PUT'])
def update_hygine_data(Resident_ID):
    Personal_Goals_Hygine=request.json['Personal_Goals_Hygine']
    Assistance_With_Communication_Aids=request.json['Assistance_With_Communication_Aids']
    Haircut_By=request.json['Haircut_By']
    Toe_Nail_By=request.json['Toe_Nail_By']
    Hygine_Goal=request.json['Hygine_Goal']
    Staff_Assistance_Hygine=request.json['Staff_Assistance_Hygine']
    Grooming_Assistance=request.json['Grooming_Assistance']
    Bathing_Assistance=request.json['Bathing_Assistance']
    Dressing_Upperbody=request.json['Dressing_Upperbody']
    Dressing_Lowerbody=request.json['Dressing_Lowerbody']
    Hygine_Mode=request.json['Hygine_Mode']
    Hygine_Frequency=request.json['Hygine_Frequency']
    Assistance_Required_With=request.json['Assistance_Required_With']

    s = text("update personal_hygine_care_plan set Personal_Goals_Hygine='"+Personal_Goals_Hygine+"',Assistance_With_Communication_Aids='"+Assistance_With_Communication_Aids+"',Haircut_By='"+Haircut_By+"',Toe_Nail_By='"+Toe_Nail_By+"',Hygine_Goal='"+Hygine_Goal+"',Staff_Assistance_Hygine='"+Staff_Assistance_Hygine+"',Grooming_Assistance='"+Grooming_Assistance+"',Bathing_Assistance='"+Bathing_Assistance+"',Dressing_Upperbody='"+Dressing_Upperbody+"',Dressing_Lowerbody='"+Dressing_Lowerbody+"',Hygine_Mode='"+Hygine_Mode+"',Hygine_Frequency='"+Hygine_Frequency+"',Assistance_Required_With='"+Assistance_Required_With+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"  

@app.route('/update_toileting_data/<Resident_ID>',methods=['PUT'])
def update_toileting_data(Resident_ID):
    Personal_Goals_Toileting=request.json['Personal_Goals_Toileting']
    Toileting_Assistance=request.json['Toileting_Assistance']
    Toileting_Goals=request.json['Toileting_Goals']
    Type_Of_Toilet=request.json['Type_Of_Toilet']
    Sphincter_Control=request.json['Sphincter_Control']
    Bladder_Control=request.json['Bladder_Control']
    Bowel_Management=request.json['Bowel_Management']
    Toileting_Activities_Assistance=request.json['Toileting_Activities_Assistance']

    s = text("update toileting_care_plan set Personal_Goals_Toileting='"+Personal_Goals_Toileting+"',Toileting_Activities_Assistance='"+Toileting_Activities_Assistance+"',Toileting_Assistance='"+Toileting_Assistance+"',Toileting_Goals='"+Toileting_Goals+"',Type_Of_Toilet='"+Type_Of_Toilet+"',Sphincter_Control='"+Sphincter_Control+"',Bladder_Control='"+Bladder_Control+"',Bowel_Management='"+Bowel_Management+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"  

@app.route('/update_continence_data/<Resident_ID>',methods=['PUT'])
def update_continence_data(Resident_ID):
    Continence_Aids=request.json['Continence_Aids']
    Toileting_Schedule=request.json['Toileting_Schedule']
    Bladder_Health_Goals=request.json['Bladder_Health_Goals']
    Bowel_Health_Goals=request.json['Bowel_Health_Goals']
    Continence_Goals=request.json['Continence_Goals']

    s = text("update continence_care_plan set Continence_Aids='"+Continence_Aids+"',Toileting_Schedule='"+Toileting_Schedule+"',Bladder_Health_Goals='"+Bladder_Health_Goals+"',Bowel_Health_Goals='"+Bowel_Health_Goals+"',Continence_Goals='"+Continence_Goals+"' where Resident_ID="+Resident_ID+"")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"  

@app.route('/add_personalcare_chart/<Resident_ID>',methods=['POST'])
def add_personalcare_chart(Resident_ID):
    Author = request.json['author']
    Date = request.json['date']
    Directive = request.json['directive']
    Type_Of_Hygiene = request.json['typeofhygiene']
    Time = request.json['time']
    Comment = request.json['comment']

    s = text("insert into personal_care_chart (Resident_ID, Author, Type_Of_Hygiene, Date, Directive, Time, Comment) values ('"+Resident_ID+"','"+Author+"','"+Type_Of_Hygiene+"','"+Date+"','"+Directive+"','"+Time+"','"+Comment+"')")
    print(s)
    conn = engine.connect()
    result = conn.execute(s)
    return "DONE"  

class image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, unique=True, nullable=False)
    imagename = db.Column(db.Text, nullable=False)
    mimetype = db.Column(db.Text, nullable=False)
    Resident_ID = db.Column(db.Integer)
    Date_of_Wound_First_Assessed = db.Column(db.Date)
    Wound_Cause = db.Column(db.String(100))
    Wound_Goal = db.Column(db.String(100))
    Factors_May_Affect_Wound_Healing = db.Column(db.String(100))
    Hx_Of_Ulcers = db.Column(db.String(5))
    Location_Of_Wound = db.Column(db.String(100))
    Wound_Type = db.Column(db.String(100))
    Size_Length = db.Column(db.String(10))
    Size_Width = db.Column(db.String(10))
    Size_Depth = db.Column(db.String(10))
    Pain_Levels = db.Column(db.Integer)
    Date_Now = db.Column(db.Date)
    Time_Now = db.Column(db.String(50))
    Surrouding_Skin = db.Column(db.String(100))
    Wound_Exudate = db.Column(db.String(100))
    Wound_Evaluation = db.Column(db.String(100))
    Author = db.Column(db.String(20))


@app.route('/upload_Image',methods=['POST'])
def upload_Image():
    Resident_ID	 = request.args.get('Resident_ID', None)
    Date_of_Wound_First_Assessed = request.args.get('Date_of_Wound_First_Assessed', None)
    Wound_Cause = request.args.get('Wound_Cause', None)
    Wound_Goal = request.args.get('Wound_Goal', None)
    Factors_May_Affect_Wound_Healing = request.args.get('Factors_May_Affect_Wound_Healing', None)
    Hx_Of_Ulcers = request.args.get('Hx_Of_Ulcers', None)
    Location_Of_Wound = request.args.get('Location_Of_Wound', None)
    Wound_Type = request.args.get('Wound_Type', None)
    Size_Length = request.args.get('Size_Length', None)
    Size_Width = request.args.get('Size_Width', None)
    Size_Depth = request.args.get('Size_Depth', None)
    Pain_Levels = request.args.get('Pain_Levels', None)
    Date_Now = request.args.get('Date_Now', None)
    Time_Now = request.args.get('Time_Now', None)
    Surrouding_Skin = request.args.get('Surrouding_Skin', None)
    Wound_Exudate = request.args.get('Wound_Exudate', None)
    Wound_Evaluation = request.args.get('Wound_Evaluation', None)
    Author = request.args.get('Author', None)

    pic = request.files['customFile']
    print(request.files)
    if not pic:
        return 'No pic uploaded!', 400

    filename = secure_filename(pic.filename)
    mimetype = pic.mimetype
    if not filename or not mimetype:
        return 'Bad upload!', 400
    print(pic)
    img = image(img=pic.read(), imagename=filename, mimetype=mimetype, Resident_ID=Resident_ID,Date_of_Wound_First_Assessed=Date_of_Wound_First_Assessed,Wound_Cause=Wound_Cause,Wound_Goal=Wound_Goal,Factors_May_Affect_Wound_Healing=Factors_May_Affect_Wound_Healing, Hx_Of_Ulcers=Hx_Of_Ulcers, Location_Of_Wound=Location_Of_Wound,Wound_Type=Wound_Type,Size_Length=Size_Length,Size_Width=Size_Width,Size_Depth=Size_Depth, Pain_Levels=Pain_Levels, Date_Now=Date_Now,Time_Now=Time_Now,Surrouding_Skin=Surrouding_Skin,Wound_Exudate=Wound_Exudate,Wound_Evaluation=Wound_Evaluation,Author=Author)
    db.session.add(img)
    db.session.commit()

    s = text("SELECT * FROM image where Resident_ID='"+Resident_ID+"'")
    conn = engine.connect()
    result = conn.execute(s)
    result_as_dict = result.mappings().all()
    x=list(result_as_dict)
    a=[]

    for i in x:
        i=dict(i)
        path = "C:/Users/Deep.Zatakiya/OneDrive - Ivanti/Desktop/React first app/healthcare-main/src/components/"
        write_file(i["img"],path+i["imagename"])
    return "Done"

@app.route('/display_image/<id>')
def display_image(id):
    img = image.query.filter_by(id=id).first()
    if not img:
        return 'Img Not Found!', 404

    return Response(img.img, mimetype=img.mimetype)

if __name__=="__main__":
    app.run(debug=True)