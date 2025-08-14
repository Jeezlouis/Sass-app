import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions = await getRecentSessions(10)
  return (
    <main>
      <h1>Popular Companions</h1>
      
      
      <section className='home-section'>
        {companions.map(({id, name, topic, subject, duration}) => (
        <CompanionCard 
          key={id}
          id={id}
          name={name}
          topic={topic}
          subject={subject}
          duration={duration}
          color={getSubjectColor(subject)}
        /> 
        ))}
      </section>

      <section className='home-section'>
        <CompanionList 
         title="Recently completed sessions"
         companions={recentSessionsCompanions}
         classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page