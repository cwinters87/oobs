import * as React from "react"

import SlackImg from "../../images/toolCarousel/slack.png"
import CreditsafeImg from "../../images/toolCarousel/creditsafe.png"
import ExperianImg from "../../images/toolCarousel/experian.png"
import OcrolusImg from "../../images/toolCarousel/ocrolus.png"
import UsioImg from "../../images/toolCarousel/usio.png"
import PlaidImg from "../../images/toolCarousel/plaid.png"
import TransUnionImg from "../../images/toolCarousel/transunion.png"
import EquifaxImg from "../../images/toolCarousel/equifax.png"

import * as styles from "./connectTools.module.css"

const ConnectTools = () => {
  const data = [
    { image: SlackImg, title: "Slack" },
    { image: CreditsafeImg, title: "Creditsafe" },
    { image: ExperianImg, title: "Experian" },
    { image: UsioImg, title: "Usio" },
    { image: OcrolusImg, title: "Ocrolus" },
    { image: PlaidImg, title: "Plaid" },
    { image: TransUnionImg, title: "TransUnion" },
    { image: EquifaxImg, title: "Equifax" },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Connect your tools with TaskSuite</h2>
        <p>Integrate your favorite tools or use our full solution.</p>
      </div>
      <div className={styles.toolsContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            id={
              index === 0
                ? styles.firstCard
                : index === data.length - 1
                ? styles.lastCard
                : ""
            }
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConnectTools
