'use client'
import styles from "./styles.css"

export default function navbar() { //Navbar component
    return (
      <div className="navbar">
          <img src="logo.png" alt="" className="nav-logo"/>
          <h1 className="nav-title">Hollow Knote</h1>
          <a onClick={
            () => {
              window.scrollTo({
                top: document.body.scrollHeigh,
                behavior: 'smooth'
              })
          }
          } className="nav-link">More info</a>
      </div>
    );
  }

/*
      Enter Hallownest, christopher larkin, Hollow knight,https://youtu.be/243Uguc-6mQ?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Dirtmouth, christopher larkin, Hollow knight,https://youtu.be/NSlkW1fFkyo?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Crossroads, christopher larkin, Hollow knight,https://youtu.be/eX4de4BH5lM?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      False Knight, christopher larkin, Hollow knight,https://youtu.be/vKDQNGDOdE4?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Greenpath, christopher larkin, Hollow knight,https://youtu.be/fWquuWkHVP4?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Hornet, christopher larkin, Hollow knight,https://youtu.be/7xkM8mWC4Kk?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Reflection, christopher larkin, Hollow knight,https://youtu.be/nC3Dd3eqZy8?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Mantis Lords, christopher larkin, Hollow knight,https://youtu.be/Lp5M2BAXwSo?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      City of Tears, christopher larkin, Hollow knight,https://youtu.be/MJDn70jh1V0?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Dung Defender, christopher larkin, Hollow knight,https://youtu.be/lkgHqBl12Cg?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Crystal Peak, christopher larkin, Hollow knight,https://youtu.be/DWKKsB0rD40?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Fungal Wastes, christopher larkin, Hollow knight,https://youtu.be/fhUqu-g0pVY?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Decisive Battle, christopher larkin, Hollow knight,https://youtu.be/r7hCJIC_y6Q?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Soul Sanctum, christopher larkin, Hollow knight,https://youtu.be/pvpCX9qtyZE?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Resting Grounds, christopher larkin, Hollow knight,https://youtu.be/CgrBJDU2yvQ?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Queen's Gardens, christopher larkin, Hollow knight,https://youtu.be/O_g-JmMfpF4?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      The White Lady, christopher larkin, Hollow knight,https://youtu.be/IOvO7OmxAqI?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Broken Vessel, christopher larkin, Hollow knight,https://youtu.be/dyHn4980MPY?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Kingdom's Edge, christopher larkin, Hollow knight,https://youtu.be/XGcYPyZRyTY?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Nosk, christopher larkin, Hollow knight,https://youtu.be/4wfAVkXxhEw?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Dream, christopher larkin, Hollow knight,https://youtu.be/oG_kxNhs1I8?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Dream Battle, christopher larkin, Hollow knight,https://youtu.be/uAmgPYMY3o8?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      White Palace, christopher larkin, Hollow knight,https://youtu.be/4JWANCA-Pbw?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Sealed Vessel, christopher larkin, Hollow knight,https://youtu.be/ze0Rk-m0w2A?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Radiance, christopher larkin, Hollow knight,https://youtu.be/SkD5Ceo8KAo?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Hollow Knight, christopher larkin, Hollow knight,https://youtu.be/r6PuACnHkNY?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Truth, Beauty and Hatred, christopher larkin, Hollow knight: Hidden Dreams,https://youtu.be/zidGo704SvI?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      White Defender, christopher larkin, Hollow knight: Hidden Dreams,https://youtu.be/EVuSps67I9w?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Grimm, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/qmsjvBivRkU?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Nightmare king, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/Mq8E_1LkoAc?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Hive Knight, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/RVyJmhiJjA8?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko   
      Truth, Beauty and Hatred, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/DayjA0isJLs?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      The Grimm Troupe, christopher larkin, Hollow knight,https://youtu.be/Xnc4wSuKvuo?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Nightmare King, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/GGhZsiRCvYc?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      White Defender, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/5ioNwM3nxmQ?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Pale Court, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/LCYP9L2FfQg?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Daughter of Hallownest, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/o5_nMrARi-k?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Godhome, christopher larkin, Hollow knight,https://youtu.be/NTDpg_N6WRI?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Sisters of Battle, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/4yxgEsS8ogM?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Furious Gods, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/ut_RjDGUJoY?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko
      Pure Vessel, christopher larkin, Hollow knight: The Grimm Troupe,https://youtu.be/35pUQDrKy5A?list=PLmOldskd2VbL7_t-NE9p6rEboq_v0AHko      
*/