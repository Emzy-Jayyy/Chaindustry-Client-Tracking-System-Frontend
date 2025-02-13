import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Switch, Input } from 'antd'
import { ProspectsIcon } from '../../Components/Icons/Icons'
import ContentHeader from '../../Components/ContentHeader/ContentHeader'
import Widget from '../../Components/Widgets/Widget'
import UserCard from '../../Components/UserCards/UserCard'
import ProspectsTable from '../../Components/Tables/ProspectsTable'

const Clients = () => {
  const [isProspectData, setIsProspectData] = useState([
    {
      key: '1',
      role: "warm",
      portfolioLink:
        "https://www.figma.com/aigsiufgsuifgdsuifsuifsuifsuidfsuifsuif",
      socialHandle: "@chaindustry",
      name: "chaindustry",
    },
    {
      key: '2',
      role: "cold",
      portfolioLink:
        "https://www.figma.com/sidfsiufsuifsduifsduifsduifuisdfuisdfsd",
      socialHandle: "@chaindustry",
      name: "EstateX",
    },
    {
      key: '3',
      role: "contract",
      portfolioLink:
        "https://www.figma.com/fuisfsuifsduifsduifduifsduifsduifsd",
      socialHandle: "@chaindustry",
      name: "Planck Network",
    },
  ]);
  const [filteredData, setFilteredData] = useState([]);
  const [view, setView] = useState('grid');

    useEffect(() => {
      setFilteredData(isProspectData);
    }, [isProspectData]);
  
    function handleFilteredData(role) {
      if (role === "all") {
        setFilteredData(isProspectData);
      } else {
        setFilteredData(
          isProspectData.filter((data) => {
            if (data.role === role) {
              return data;
            }
          })
        );
      }
    }

  const onChange = (checked) => {
    setView(() => (checked ? 'table' : 'grid'))
  };

  const { Search } = Input;
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
    setFilteredData(
      isProspectData.filter((data) => {
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
          matrixs={50}
          amount={2300}
        />
        <Widget
          icon={<ProspectsIcon width={80} height={80} />}
          text={"Inactive"}
          matrixs={50}
          amount={2300}
        />
        <Widget
          icon={<ProspectsIcon width={80} height={80} />}
          text={"Total"}
          matrixs={50}
          amount={2300}
        />
      </section>

      <section style={{ gap: 20, marginTop: 20 }} className=" flex flex-column">
        <div>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
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
        <section className="flex" style={{ gap: 20, marginTop: 20 }}>
          {filteredData &&
            filteredData.map((prospect, index) => (
                <UserCard
                  key={index}
                  role={prospect.role}
                  name={prospect.name}
                  portfolioLink={prospect.portfolioLink}
                  socialHandle={prospect.socialHandle}
                  
                />
            ))}
        </section>
      )}

      {view === "table" && (
        <section style={{ marginTop: 20 }}>
          <Link to='/dashboard/profile'>
           <ProspectsTable data={filteredData} />
          </Link>
        </section>
      )}
    </main>
  );
}

export default Clients