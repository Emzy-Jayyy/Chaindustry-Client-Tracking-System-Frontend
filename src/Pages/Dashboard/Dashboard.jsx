import React from "react";
import { useContext } from "react";
import { ProspectContext } from "../../store/prospect-context";
import { ClientContext } from "../../store/clients-context";
import Widgets from "../../Components/Widgets/Widgets";
// import { UsergroupAddOutlined } from '@ant-design/icons'
import { ProspectsIcon } from "../../Components/Icons/Icons";
import { ClientsIcon } from "../../Components/Icons/Icons";
import LineChart from "../../Components/Graphs/LineChart";
// import BarChart from '../../Components/Graphs/BarChart'
import PieChart from "../../Components/Graphs/PieChart";
import GroupedBarChart from "../../Components/Graphs/BarChart";
import Tables from "../../Components/Tables/Tables";
import MapComponent from "../../Components/Maps/MapComponent";

const Dashboard = () => {
  const { prospectData } = useContext(ProspectContext);
  const { clientData } = useContext(ClientContext);

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "2rem" }}>Dashboard</h1>
      <section className="flex" style={{ gap: 20 }}>
        <Widgets
          icon={<ProspectsIcon width={40} height={35} />}
          text={"Total Prospects"}
          matrixs={prospectData.length}
        />
        <Widgets
          icon={<ClientsIcon width={40} height={35} />}
          text={"Total Clients"}
          matrixs={clientData.totalClients}
        />
      </section>
      <section className="flex" style={{ gap: "10px", marginTop: "40px" }}>
        <LineChart />
        <GroupedBarChart />
      </section>
      <section className="flex" style={{ marginTop: "40px" }}>
        <PieChart />
        <div style={{ flex: 1, fontSize: "1.5rem" }}>Schedules</div>
      </section>
      <section
        style={{
          // padding: "20px",
          // width: "80vw",
          // height: "300px",
          // backgroundColor: "gray",
          // marginTop: "40px",
          // borderRadius: "5px",
          marginTop: "40px"
        }}
        className="flex flex-center flex-column"
      >
        <h2>Client Location</h2>
        <MapComponent />
      </section>
      <section style={{ marginTop: "40px" }}>
        <Tables />
      </section>
    </main>
  );
};

export default Dashboard;
