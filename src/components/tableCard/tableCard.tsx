import { FC, ReactNode } from 'react';
import styles from './tableCard.module.css'

interface TableCardProps {
  children: ReactNode
}

export const TableCard: FC<TableCardProps> = ({ children }) => {
  return <td className={styles.tableCard}>
    <div className={styles.tableCardMain}>
    {children}
    </div>
  </td>;
}