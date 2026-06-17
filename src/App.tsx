import { useState } from 'react'
import { BackgroundDecor } from './components/BackgroundDecor'
import { BottomNav, type NavTab } from './components/BottomNav'
import { Achievements } from './pages/Achievements'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

const STUDENT_NAME = 'Ana'

function App() {
  const [tab, setTab] = useState<NavTab>('home')

  return (
    <div className="flex min-h-screen w-full justify-center bg-[#4c1d95]">
      <div className="relative min-h-screen w-full max-w-[500px] overflow-hidden bg-gradient-to-b from-bg to-[#fde8ff] pb-28">
        <BackgroundDecor />
        <div className="relative z-10">
          {tab === 'home' && <Home studentName={STUDENT_NAME} />}
          {tab === 'achievements' && <Achievements />}
          {tab === 'profile' && <Profile studentName={STUDENT_NAME} />}
        </div>
        <BottomNav active={tab} onChange={setTab} />
      </div>
    </div>
  )
}

export default App
