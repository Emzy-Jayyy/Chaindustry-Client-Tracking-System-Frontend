import React from 'react'
import Widgets from '../../Components/Widgets/Widgets'
// import { UsergroupAddOutlined } from '@ant-design/icons'
import { ProspectsIcon } from '../../Components/Icons/Icons'
import { ClientsIcon } from '../../Components/Icons/Icons'
import LineChart from '../../Components/Graphs/LineChart'
// import BarChart from '../../Components/Graphs/BarChart'
import PieChart from '../../Components/Graphs/PieChart'
import GroupedBarChart from '../../Components/Graphs/BarChart'

const Dashboard = () => {
  return (
    <main style={{padding: '20px'}}>
      <h1 style={{fontSize: '2rem'}}>Dashboard</h1>
      <section className="flex" style={{gap: 20}}>
        <Widgets icon={<ProspectsIcon width={40} height={35}/>} text={'Total Prospects'} matrixs={60}/>
        <Widgets icon={<ClientsIcon width={40} height={35} />} text={'Total Clients'} matrixs={60}/>
      </section>
      <section className="flex" style={{gap: '10px', marginTop: '40px'}}>
        <LineChart/>
        <GroupedBarChart />
      </section>
      <section className='flex' style={{marginTop: '40px'}}>
        <PieChart/>
        <div style={{flex:1, fontSize: '1.5rem'}}>Schedules</div>
      </section>
    </main>
  )
}

export default Dashboard