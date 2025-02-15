import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Switch, Input, Space } from "antd";
import Widgets from "../../Components/Widgets/Widgets";
import {
  ColdProspectIcon,
  ContractsIcon,
  ProspectsIcon,
  WarmProspectIcon,
} from "../../Components/Icons/Icons";
import { PlusCircleFilled } from "@ant-design/icons";

import "./prospects.css";
import UserCard from "../../Components/UserCards/UserCard";
import ProspectsTable from "../../Components/Tables/ProspectsTable";
import { Form } from "react-router-dom";
import ContentHeader from "../../Components/ContentHeader/ContentHeader";
import { ProspectContext } from "../../store/prospect-context";
// import { PROSPECTDATA } from "../../ProspectData";

const Prospects = () => {
  // const [isProspectData, setIsProspectData] = useState(PROSPECTDATA);

  const { prospectData } = useContext(ProspectContext);
  const [filteredData, setFilteredData] = useState([]);
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFilteredData(prospectData);
  }, [prospectData]);

  function handleFilteredData(role) {
    if (role === "all") {
      setFilteredData(prospectData);
    } else {
      setFilteredData(
        prospectData.filter((data) => {
          if (data.role === role) {
            return data;
          }
        })
      );
    }
  }

  const onChange = (checked) => {
    setView(() => (checked ? "table" : "grid"));
  };

  const { Search } = Input;
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    setFilteredData(
      prospectData.filter((data) => {
        const searchValue = value.toLowerCase();
        return JSON.stringify(data).toLowerCase().includes(searchValue);
      })
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <main style={{ padding: "20px" }}>
      <ContentHeader
        title={"Prospect"}
        modal={showModal}
        buttonInfo={"Add Prospect"}
      />

      <section
        className="classes.prospects-widget flex"
        style={{ gap: 20, marginTop: 20 }}
      >
        <Widgets
          icon={<ProspectsIcon width={50} height={45} />}
          text="All Prospects"
          matrixs={prospectData.length}
        />
        <Widgets
          icon={<ColdProspectIcon width={50} height={45} />}
          text="Cold Prospects"
          matrixs={prospectData.filter((p) => p.role === "cold").length}
        />
        <Widgets
          icon={<WarmProspectIcon width={50} height={45} />}
          text="Warm Prospects"
          matrixs={prospectData.filter((p) => p.role === "warm").length}
        />
        <Widgets
          icon={<ContractsIcon width={50} height={45} />}
          text="Contracts"
          matrixs={prospectData.filter((p) => p.role === "contract").length}
        />
      </section>

      <section style={{ gap: 0, marginTop: 40 }} className=" flex flex-column">
        <div>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 345 }}
          />
        </div>
        <div className="flex flex-justify-between flex-center">
          <div className="flex " style={{ gap: "5px", margin: "30px 0" }}>
            <Button
              style={{
                width: "83px",
                height: "42px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
              onClick={() => handleFilteredData("all")}
            >
              All
            </Button>
            <Button
              style={{
                width: "83px",
                height: "42px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
              onClick={() => handleFilteredData("cold")}
            >
              Cold
            </Button>
            <Button
              style={{
                width: "83px",
                height: "42px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
              onClick={() => handleFilteredData("warm")}
            >
              Warm
            </Button>
            <Button
              style={{
                width: "83px",
                height: "42px",
                borderRadius: "10px",
                borderWidth: "1px",
              }}
              onClick={() => handleFilteredData("contract")}
            >
              Contract
            </Button>
          </div>
          <Switch
            checkedChildren="Table"
            unCheckedChildren="Grid"
            onChange={onChange}
          />
        </div>
      </section>

      {view === "grid" && (
        <section
          className="user-card-container"
          style={{ gap: 20, marginTop: 20 }}
        >
          {filteredData &&
            filteredData.map((prospect, index) => (
              <UserCard
                key={index}
                role={prospect.role}
                name={prospect.name}
                portfolioLink={prospect.portfolioLink}
                socialHandle={prospect.socialHandle}
                link={`${index}`}
              />
            ))}
        </section>
      )}

      {view === "table" && (
        <section style={{ marginTop: 20 }}>
          <ProspectsTable data={filteredData} />
        </section>
      )}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={520}
        height={422}
        className="custom-modal"
      >
        <div className="modal-header">
          <h2>Add a Prospect</h2>
          <p>
            Fill in prospect details to build and maintain comprehensive
            records.
          </p>
        </div>
        <div className="modal-body">
          <Form method="post" className="form-container">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label>Website:</label>
              <input type="url" name="website" id="website" />
            </div>
            <div className="form-group">
              <label>Twitter:</label>
              <input type="text" name="twitter" id="twitter" />
            </div>
            <div className="form-group">
              <label>Image:</label>
              <input type="text" name="image" id="image" />
            </div>
            <div className="modal-footer">
              <Button onClick={handleCancel} className="reset-btn">
                Reset
              </Button>
              <Button type="primary" onClick={handleOk} className="save-btn">
                Save
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </main>
  );
};

export default Prospects;
