import React from 'react'
import { useState } from 'react'
import { Button, Switch } from 'antd'
import UserCard from '../../Components/UserCards/UserCard'
import ProspectsTable from '../../Components/Tables/ProspectsTable'
import { ProspectsIcon } from '../../Components/Icons/Icons';
import ContentHeader from '../../Components/ContentHeader/ContentHeader';
import Widget from '../../Components/Widgets/Widget';

const Schedule = () => {

  return (
    <main style={{padding: '20px'}}>
      <ContentHeader title={'Schedule'} buttonInfo={'Add Schedule'} />
      <section style={{ gap: 20, marginTop: 20 }} className='flex'>
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Total Task'} matrixs={50} />
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Task Done'} matrixs={50} />
        <Widget icon={<ProspectsIcon width={80} height={80} />} text={'Task Not Done'} matrixs={50} />
      </section>
    </main>
  )
}

export default Schedule