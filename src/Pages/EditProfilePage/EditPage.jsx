import React from "react";
import { Button, Form, Image, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import '../../Pages/Profile/Profile.css'
import FormItem from "../../Components/UI/FormItem";
import prospectImag from "../Profile/assets/pros.png";
import FormTextArea from "../../Components/UI/FormTextArea";
import CustomizedTable from "../../Components/Tables/CustomizedTable";

const EditPage = () => {
  return (
    <div className="profile-container" style={{ padding: 20 }}>
      <header className="flex flex-justify-between flex-align">
        <h1 style={{ fontSize: "2rem" }}>Chaindustry Profile</h1>
        <Button icon={<PlusCircleFilled />}>Save</Button>
      </header>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>Prospects Data</h2>
        <div className="flex flex-align" style={{ gap: "2rem" }}>
          <Image width={187} height={280} src={prospectImag} />
          <Form layout="vertical" className="flex" style={{ gap: "5rem", flex: 1 }}>
            <div className="flex flex-column" style={{flexBasis: '45%'}}>
              <FormItem
                firstLabel={"Email"}
                secondLabel={"Discord"}
                thirdLabel={"Portfolio Link"}
                fourthLabel={"Location"}
              />
            </div>
            <div className="flex flex-column" style={{flexBasis: '45%'}}>
              <FormItem
                firstLabel={"Telegram"}
                secondLabel={"LinkedIn"}
                thirdLabel={"Twitter"}
                fourthLabel={"Financial Level"}
              />
            </div>
          </Form>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>Prospect Objectives</h2>
        <div className="" style={{ padding: 20 }}>
          <Form layout="vertical " className="flex" style={{gap: '10%'}}>
            <div style={{flexBasis: '45%'}}>
              <FormTextArea firstLabel={'Problems Identified'} secondLabel={'Prospect Interest'}/>
            </div>
            <div style={{flexBasis: '45%'}}>
              <FormTextArea firstLabel={'Prospects Needs'} secondLabel={'Prospects Pressing Problems'} />
            </div>
          </Form>
        </div>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Staff Information</h2>
          <Button style={{fontWeight: 'bold'}}>EDIT STAFF</Button>
        </div>
        <CustomizedTable type={'staff-information'}/>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Schedules</h2>
          <Button style={{fontWeight: 'bold'}}>EDIT SCHEDULE</Button>
        </div>
        <CustomizedTable type={'schedules'}/>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Connections with Prospect</h2>
          <Button style={{fontWeight: 'bold'}}>EDIT CONTACTED</Button>
        </div>
        <CustomizedTable type={'contacted'}/>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Income per month</h2>
          <Button style={{fontWeight: 'bold'}}>EDIT INCOME</Button>
        </div>
        <CustomizedTable type={'income'}/>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Project</h2>
          <Button style={{fontWeight: 'bold'}}>EDIT PROJECT</Button>
        </div>
        <CustomizedTable type={'project'}/>
      </section>
    </div>
  );
};

export default EditPage;
