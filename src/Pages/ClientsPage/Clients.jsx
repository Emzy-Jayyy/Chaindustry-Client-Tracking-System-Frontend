import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Switch, Input } from "antd";
import { ProspectsIcon } from "../../Components/Icons/Icons";

import "../../Pages/ClientsPage/Clients.css";
import ContentHeader from "../../Components/ContentHeader/ContentHeader";
import Widget from "../../Components/Widgets/Widget";
import UserCard from "../../Components/UserCards/UserCard";
import ProspectsTable from "../../Components/Tables/ProspectsTable";
import CustomizedTable from "../../Components/Tables/CustomizedTable";
import "../../Components/Tables/CustomizedTable.css";
// import { PROSPECTDATA } from '../../ProspectData'
import { ProspectContext } from "../../store/prospect-context";
import { ClientContext } from "../../store/clients-context";

const Clients = () => {
  // const [isProspectData, setIsProspectData] = useState(PROSPECTDATA);
  const { prospectData } = useContext(ProspectContext);
  const { clientData } = useContext(ClientContext);
  const [filteredData, setFilteredData] = useState([]);
  const [view, setView] = useState("grid");

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

  return (
    <main style={{ padding: "20px" }}>
      <ContentHeader title={"Client"} buttonInfo={"Add Project"} />
      <section style={{ gap: 20, marginTop: 20 }} className="flex">
        <Widget
          icon={<ProspectsIcon width={80} height={80} />}
          text={"Active"}
          matrixs={clientData.activeClients}
          amount={clientData.activeAmount}
        />
        <Widget
          icon={<ProspectsIcon width={80} height={80} />}
          text={"Inactive"}
          matrixs={clientData.inactiveClients}
          amount={clientData.inactiveAmount}
        />
        <Widget
          icon={<ProspectsIcon width={80} height={80} />}
          text={"Total"}
          matrixs={clientData.totalClients}
          amount={clientData.totalAmount}
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
          <div className="flex " style={{ gap: "5px", margin: "20px 0" }}>
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
                link={prospect.key}
              />
            ))}
        </section>
      )}

      {view === "table" && (
        <section style={{ marginTop: 20 }}>
          <ProspectsTable data={filteredData} />
        </section>
      )}

      <section style={{ marginTop: "50px" }}>
        <CustomizedTable type={"client"} />
      </section>
    </main>
  );
};

export default Clients;
