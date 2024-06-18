import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import TotalBalanceBox from '../../components/ui/TotalBalanceBox'

const Home = () => {
  const loggedIn = {firstName: "Jeremy"}
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
      
    </section>
  )
}

export default Home