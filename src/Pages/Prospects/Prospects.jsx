import React, { useState } from 'react'
import { Button } from 'antd'
import Widgets from '../../Components/Widgets/Widgets'
import { ColdProspectIcon, ContractsIcon, ProspectsIcon, WarmProspectIcon } from '../../Components/Icons/Icons'
import { PlusCircleFilled } from '@ant-design/icons'

import classes from '../Prospects/prospects.module.css'
import UserCard from '../../Components/UserCards/UserCard'


const Prospects = () => {
  const [isView, setIsView] = useState('grid');

  return (
    <main style={{padding: '20px'}}>
      <div className='flex flex-justify-between flex-align'>
        <h1 style={{fontSize: '2rem'}}>Prospects</h1>
        <Button icon={<PlusCircleFilled />} style={{borderRadius: '10px', height: 45}} >Add Prospect</Button>
      </div>
      <section className="classes.prospects-widget flex" style={{gap: 20, marginTop: 20}}>
        <Widgets icon={<ProspectsIcon width={50} height={45}/>} text='All Prospects' matrixs={50}/>
        <Widgets icon={<ColdProspectIcon width={50} height={45}/>} text='Cold Prospects' matrixs={50}/>
        <Widgets icon={<WarmProspectIcon width={50} height={45}/>} text='Warm Prospects' matrixs={50}/>
        <Widgets icon={<ContractsIcon width={50} height={45}/>} text='Contracts' matrixs={50}/>
      </section>
      <section className='flex' style={{gap:20, marginTop:20}}>
        <UserCard role={'cold'} name={'Chaindustry'} socialHandle={'@chaindustry'}/>
        <UserCard role={'warm'} name={'Chaindustry'} socialHandle={'@chaindustry'}/>
        <UserCard role={'contract'} name={'Chaindustry'} socialHandle={'@chaindustry'}/>
      </section>
    </main>
  )
}

export default Prospects