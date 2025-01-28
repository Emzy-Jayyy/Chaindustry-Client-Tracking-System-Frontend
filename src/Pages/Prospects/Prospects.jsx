import { Button } from 'antd/es/radio'
import React from 'react'
import Widgets from '../../Components/Widgets/Widgets'
import { ColdProspectIcon, ContractsIcon, ProspectsIcon, WarmProspectIcon } from '../../Components/Icons/Icons'

const Prospects = () => {
  return (
    <main style={{padding: '20px'}}>
      <section className='flex flex-justify-between'>
        <h1 style={{fontSize: '2rem'}}>Prospects</h1>
        <Button >Add Prospect</Button>
      </section>
      <section className="flex" style={{gap: 20}}>
        <Widgets icon={<ProspectsIcon width={50} height={45}/>} text='All Prospects' matrixs={50}/>
        <Widgets icon={<ColdProspectIcon width={50} height={45}/>} text='Cold Prospects' matrixs={50}/>
        <Widgets icon={<WarmProspectIcon width={50} height={45}/>} text='Warm Prospects' matrixs={50}/>
        <Widgets icon={<ContractsIcon width={50} height={45}/>} text='Contracts' matrixs={50}/>
      </section>
    </main>
  )
}

export default Prospects