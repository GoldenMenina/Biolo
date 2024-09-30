import Image from 'next/image'
import styles from './BeefCutsMap.module.css'

const beefCuts = [
  { top: '79.66%', left: '78.38%', title: 'CHISPE', },
  { top: '54.37%', left: '75.25%', title: 'BIFANAS', },
  { top: '65.48%', left: '57.38%', title: 'EMTREMEADA', },
  { top: '65.01%', left: '42.50%', title: 'ENTRECOSTO', },
  { top: '41.37%', left: '31.25%', title: 'PÁ', },
  { top: '21.53%', left: '22.63%', title: 'CACHAÇO', },
  { top: '8.77%', left: '32.75%', title: 'COSTELETA DE LOMBO', },
  { top: '6.40%', left: '52.38%', title: 'PIANO/LOMBO PARA ASSAR', },
  { top: '12.07%', left: '81.88%', title: 'LOMBINHO', },
  { top: '20.34%', left: '7.38%', title: 'ORELHA', },
  { top: '32.40%', left: '13.13%', title: 'CABEÇA', },






]

export default function PorkCutsMap() {
  return (
    <main className={styles.main} >
         <div className="sec-title text-center" >
            <span>Conhça os cortes</span>
            <h2>Cortes Suinos</h2>
          </div>
      <div className={styles.imageContainer}>
        <img
          src="/assets/images/pork.png"
          alt="Beef Cuts"
          className={styles.image}
        />
        {beefCuts.map((cut, index) => (
          <div
            key={index}
            className={styles.point}
            style={{ top: cut.top, left: cut.left }}
          >
            <div className={styles.tooltip}>
              <strong>{cut.title}</strong>
         </div>
          </div>
        ))}
      </div>
    </main>
  )
}