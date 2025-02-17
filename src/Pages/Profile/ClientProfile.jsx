import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Image, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { ProspectContext } from "../../store/prospect-context";

import "../../Pages/Profile/ClientProfile.css";
import FormItem from "../../Components/UI/FormItem";
import prospectImag from "./assets/pros.png";
import FormTextArea from "../../Components/UI/FormTextArea";
import CustomizedTable from "../../Components/Tables/CustomizedTable";

const ClientProfile = () => {
  const { clientsId } = useParams();
  // const { clientsId } = useParams();
  const { prospectData } = useContext(ProspectContext);

  const client = prospectData.find(prospect => prospect.key === clientsId);

  return (
    <div className="profile-container" style={{ padding: 20 }}>
      <header className="flex flex-justify-between flex-align">
        <h1 style={{ fontSize: "2rem" }}>{`${client.name} Profile`}</h1>
        <Link to={"edit"}>
          <Button icon={<PlusCircleFilled />}>Edit Profile</Button>
        </Link>
      </header>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>Prospects Data</h2>
        <div className="flex flex-align" style={{ gap: "2rem" }}>
          <Image width={187} height={280} src={prospectImag} />
          <Form
            layout="vertical"
            className="flex"
            style={{ gap: "5rem", flex: 1 }}
          >
            <div className="flex flex-column" style={{ flexBasis: "45%" }}>
              <FormItem
                firstLabel={"Email"}
                secondLabel={"Discord"}
                thirdLabel={"Portfolio Link"}
                fourthLabel={"Location"}
                twitter={client.socialHandle}
                portfolioLink = {client.portfolioLink}
              />
            </div>
            <div className="flex flex-column" style={{ flexBasis: "45%" }}>
              <FormItem
                firstLabel={"Telegram"}
                secondLabel={"LinkedIn"}
                thirdLabel={"Twitter"}
                fourthLabel={"Financial Level"}
                twitter={client.socialHandle}
                portfolioLink = {client.portfolioLink}
              />
            </div>
          </Form>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.2rem" }}>Prospect Objectives</h2>
        <div className="" style={{ padding: 20 }}>
          <Form layout="vertical " className="flex" style={{ gap: "10%" }}>
            <div style={{ flexBasis: "45%" }}>
              <FormTextArea
                firstLabel={"Problems Identified"}
                secondLabel={"Prospect Interest"}
              />
            </div>
            <div style={{ flexBasis: "45%" }}>
              <FormTextArea
                firstLabel={"Prospects Needs"}
                secondLabel={"Prospects Pressing Problems"}
              />
            </div>
          </Form>
        </div>
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Staff Information</h2>
          <Button style={{ fontWeight: "bold" }}>ADD STAFF</Button>
        </div>
        <CustomizedTable type={"staff-information"} />
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Schedules</h2>
          <Button style={{ fontWeight: "bold" }}>ADD SCHEDULE</Button>
        </div>
        <CustomizedTable type={"schedules"} />
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Connections with Prospect</h2>
          <Button style={{ fontWeight: "bold" }}>CONTACTED</Button>
        </div>
        <CustomizedTable type={"contacted"} />
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Income per month</h2>
          <Button style={{ fontWeight: "bold" }}>ADD INCOME</Button>
        </div>
        <CustomizedTable type={"income"} />
      </section>

      <section className="profile-section">
        <div className="flex flex-justify-between profile-section-details">
          <h2 style={{ fontSize: "1.2rem" }}>Project</h2>
          <Button style={{ fontWeight: "bold" }}>ADD PROJECT</Button>
        </div>
        <CustomizedTable type={"project"} />
      </section>
    </div>
  );
};

export default ClientProfile;
