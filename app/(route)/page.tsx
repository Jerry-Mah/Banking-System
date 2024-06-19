import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/ui/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = {firstName: "Jeremy", lastName: "Mathew", email:"jeremyjohnmathew@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
          <header className='home-header'>
              <HeaderBox
              type= 'greeting'
              title = 'Welcome'
              user = {loggedIn?.firstName || 'Guest'}
              subtext = "Access and manage your account and transaction"
               />
          </header>

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {500}
          />
      </div>
      

      <RightSidebar user = {loggedIn} transactions = {[]}  banks={[{ currentBalance: 123.50 }, { currentBalance: 500.50}]}  />
    </section>
  )
}

export default Home