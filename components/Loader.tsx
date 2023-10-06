import styles from '@/styles/components/Loader.module.css'

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.waterDamage}>
        <div className={styles.waterDrop}></div>
      </div>
      <div className={styles.plant}>
        <span className={`${styles.plantLeaf} ${styles.plantLeaf__topLeft}`}></span>
        <span className={`${styles.plantLeaf} ${styles.plantLeaf__topRight}`}></span>
        <span className={`${styles.plantLeaf} ${styles.plantLeaf__bottomLeft}`}></span>
        <span className={`${styles.plantLeaf} ${styles.plantLeaf__bottomRight}`}></span>
      </div>
    </div>
  )
}
