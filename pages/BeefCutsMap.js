import Image from 'next/image'
import styles from './BeefCutsMap.module.css'

const beefCuts = [
  { top: '14.33%', left: '36%', title: 'CUPIM', image: 'assets/images/produtos/foods/cupim.jpg' },
  { top: '23.53%', left: '32.5%', title: 'ACEM', image: 'assets/images/produtos/foods/acem.png' },
  { top: '46.33%', left: '28.5%', title: 'PEITO', image: 'assets/images/produtos/foods/peito.png' },
  { top: '19.13%', left: '58.88%', title: 'COSTELA', image: 'assets/images/produtos/foods/costela.webp' },
  { top: '51.33%', left: '74.88%', title: 'FRALDINHA', image: 'assets/images/produtos/foods/fraldinha.jpg' },
  { top: '32.33%', left: '63.75%', title: 'FILÉ MIGNON', image: 'assets/images/produtos/foods/file.webp' },
  { top: '19.73%', left: '87.25%', title: 'PICANHA', image: 'assets/images/produtos/foods/peito.png' },
  { top: '32.53%', left: '83.38%', title: 'ALCATRA', image: 'assets/images/produtos/foods/picanha.webp' },
  { top: '52.13%', left: '80.63%', title: 'MAMINHA', image: 'assets/images/produtos/foods/maminha.webp' },
  { top: '53.93%', left: '87%', title: 'COXÃO MOLE', image: 'assets/images/produtos/foods/coxao.webp' },
  { top: '58.73%', left: '80%', title: 'PATINHO', image: 'assets/images/produtos/foods/patinho.jpeg' },
  { top: '43.33%', left: '90.88%', title: 'COXÃO DURO', image: 'assets/images/produtos/foods/duro.webp' },
  { top: '29.93%', left: '99.63%', title: 'RABO', image: 'assets/images/produtos/foods/rabo.jpg' },
]

export default function BeefCutsMap() {
  return (
    <main className={styles.main}>
         <div className="sec-title text-center">
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
              <Image src={`/${cut.image}`} alt={cut.title} width={50} height={50} className={styles.thumbnailImage} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}