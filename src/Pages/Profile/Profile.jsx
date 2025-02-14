import React from "react";
import { Button, Form, Image, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import FormItem from "../../Components/UI/FormItem";
import prospectImag from "./assets/pros.png";
import FormTextArea from "../../Components/UI/FormTextArea";

const Profile = () => {
  return (
    <div style={{ padding: 20 }}>
      <header className="flex flex-justify-between flex-align">
        <h1 style={{ fontSize: "2rem" }}>Chaindustry Profile</h1>
        <Button icon={<PlusCircleFilled />}>Edit Profile</Button>
      </header>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>Prospects Data</h2>
        <div className="flex flex-align" style={{ gap: "5rem" }}>
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
    </div>
  );
};

export default Profile;
