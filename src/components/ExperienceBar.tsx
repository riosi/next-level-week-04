import styles from '../styles/components/ExperienceBar.module.css'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'

export function ExperienceBar() {
    const { currentExperience } = useContext(ChallengesContext) 

    //const percentageToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '20%'}}/>

                <span className={styles.currentExperience} style={{ left: '50%'}}>
                    {currentExperience} %
                    </span>
            </div>
            <span>100 xp</span>
        </header>
    )
}