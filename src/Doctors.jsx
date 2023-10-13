import React from 'react'
import Header from './components/Header'
import Doctors from './data/doctors'
import DoctorsList from './components/DoctorCard'
export const DoctorsCard = () => {
  return (
    <div>
        <Header />
        <DoctorsList />
    </div>
  )
}
