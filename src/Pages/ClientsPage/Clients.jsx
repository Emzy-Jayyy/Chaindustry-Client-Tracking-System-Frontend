import React from 'react'
import { useState } from 'react'
import { Button, Switch } from 'antd'
import { ProspectsIcon } from '../../Components/Icons/Icons'
import ContentHeader from '../../Components/ContentHeader/ContentHeader'
import Widget from '../../Components/Widgets/Widget'
import UserCard from '../../Components/UserCards/UserCard'
import ProspectsTable from '../../Components/Tables/ProspectsTable'

const Clients = () => {
  const prospectData = [
    {role: 'warm', portfolioLink: 'https://www.figma.com/aigsiufgsuifgdsuifsuifsuifsuidfsuifsuif', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'cold', portfolioLink: 'https://www.figma.com/sidfsiufsuifsduifsduifsduifuisdfuisdfsd', socialHandle: '@chaindustry', name: 'chaindustry'},
    {role: 'contract', portfolioLink: 'https://www.figma.com/fuisfsuifsduifsduifduifsduifsduifsd', socialHandle: '@chaindustry', name: 'chaindustry'},
  ]
  const [view, setView] = useState('grid');

  const onChange = (checked) => {
    setView(() => (checked ? 'table' : 'grid'))
  };

  return (
    <main style={{ padding: "20px" }}>
      <ContentHeader title={'Client'} buttonInfo={'Add Project'}/>
      <section style={{ gap: 20, marginTop: 20 }} className='flex'>
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Active'} matrixs={50} amount={2300}/>
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Inactive'} matrixs={50} amount={2300}/>
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Total'} matrixs={50} amount={2300}/>
      </section>
      <section
        style={{ gap: 20, marginTop: 20 }}
        className="flex flex-justify-between flex-center"
      >
        <div className="flex " style={{ gap: "5px", margin: "30px 0" }}>
          <Button
            style={{
              width: "83px",
              height: "42px",
              borderRadius: "10px",
              borderWidth: "1px",
            }}
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
          >
            Contract
          </Button>
        </div>
        <Switch
          checkedChildren="Table"
          unCheckedChildren="Grid"
          onChange={onChange}
        />
      </section>
      {view === "grid" && (
        <section className="flex" style={{ gap: 20, marginTop: 20 }}>
          {prospectData &&
            prospectData.map((prospect, index) => (
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
          <ProspectsTable />
        </section>
      )}
    </main>
  )
}

export default Clients