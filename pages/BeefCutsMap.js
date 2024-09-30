import Image from 'next/image'
import styles from './BeefCutsMap.module.css'

const beefCuts = [
  { top: '12.56%', left: '33.88%', title: 'CUPIM', image: 'assets/images/produtos/foods/cupim.jpg' },
  { top: '24.53%', left: '29.13%', title: 'ACEM', image: 'assets/images/produtos/foods/acem.png' },
  { top: '22.46%', left: '21.00%', title: 'PESCOÇO', image: 'assets/images/produtos/foods/rabo.jpg' },
  { top: '48.04%', left: '26.13%', title: 'PEITO', image: 'assets/images/produtos/foods/peito.png' },
  { top: '44.54%', left: '36.50%', title: 'PALETA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '73.83%', left: '36.75%', title: 'MÚSCULO DIANTEIRO', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '21.43%', left: '44.88%', title: 'CAPA DE FILÉ', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '20.81%', left: '56.88%', title: 'FILÉ DE COSTELA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '15.66%', left: '74.50%', title: 'CONTRAFILÉ', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '28.72%', left: '74.00%', title: 'FILÉ MIGNON', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '15.86%', left: '84.75%', title: 'PICANHA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '40.62%', left: '56.00%', title: 'PONTA DE AGULHA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '49.90%', left: '73.63%', title: 'ABA DO FILÉ', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '39.38%', left: '71.63%', title: 'FRALDINHA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '76.71%', left: '85.13%', title: 'MÚSCULO TRASEIRO', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '57.32%', left: '83.13%', title: 'PATINHO', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '30.30%', left: '30.30%', title: 'ALCATRA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '41.85%', left: '83.75%', title: 'COXÃO MOLE', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '52.79%', left: '79.25%', title: 'MAMINHA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '26.80%', left: '92.50%', title: 'COXÃO DURO', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '44.33%', left: '93.63%', title: 'LAGARTO', image: 'assets/images/produtos/foods/costela.webp' },







]

export default function BeefCutsMap() {
  return (
    <main className={styles.main} >
         <div className="sec-title text-center" >
            <span>Conhça os cortes</span>
            <h2>Cortes Bovinos</h2>
          </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/cow.png"
          alt="Beef Cuts"
          width={1000}
          height={600}
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