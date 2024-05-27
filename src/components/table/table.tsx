import { FC, useMemo, useState } from 'react';
import styles from './table.module.css';
import { Selector } from '../selector';
import { ExamType } from '../../types/examType';
import { TableCard } from '../tableCard';
import points from '../../assets/img/points.svg';

const initialState: ExamType = {
  label: "Все",
  value: "all"
}

export const initialExams: ExamType[] = [
  {
    label: "Все",
    value: "all"
  },
  {
    label: "Мои",
    value: "my"
  },
  {
    label: "Чужие",
    value: "their"
  }
]

type directionType = 'asc' | 'desc'

export type statusType = 'working' | 'failed' | 'success' | 'pending'

export interface ExamObject {
  status: statusType,
  number: number,
  name: string,
  inspector: string,
  startTime: Date,
  endTime: Date,
}

interface sortConfigType {
  key: keyof ExamObject,
  direction: directionType
}

interface tableProps {
  label: string
  data: ExamObject[]
}

export const Table: FC<tableProps> = ({ label, data }) => {
  const [examType, setExamType] = useState<ExamType>(initialState)
  
  const handleExamTypeChange = (examType: ExamType) => {
    setExamType(examType)
  };
  
  const [sortConfig, setSortConfig] = useState<sortConfigType>({ key: 'name', direction: 'asc' });

  function getColor(status: statusType) {
    if (status === 'success') {
      return styles.successPoint;
    } else if (status === 'failed') {
      return styles.failedPoint;
    } else if (status === 'working') {
      return styles.workingPoint;
    } else if (status === 'pending') {
      return styles.pendingPoint
    }
  }

  const sortedData = useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: sortConfigType['key']) => {
    let direction: directionType = 'asc';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  return <div className={styles.table}>
    <div className={styles.tableHeader}>
      <p className={styles.tableLabel}>{label}</p>
      <Selector options={initialExams} value={examType} onExamChange={handleExamTypeChange}/>
    </div>
    <table className={styles.tableMain}>
      <thead className={styles.mainHead}>
        <tr>
          <th className={styles.tableItemTitle} onClick={() => requestSort('status')}>Статус</th>
          <th className={styles.tableItemTitle} onClick={() => requestSort('number')}>№</th>
          <th className={styles.tableItemTitle} onClick={() => requestSort('name')}>Объект Проверки</th>
          <th className={styles.tableItemTitle} onClick={() => requestSort('inspector')}>Проверяющий</th>
          <th className={styles.tableItemTitle} onClick={() => requestSort('startTime')}>Начало Проверки</th>
          <th className={styles.tableItemTitle} onClick={() => requestSort('endTime')}>Дедлайн</th>
          <th className={styles.tableItemTitle}>Действие</th>
        </tr>
      </thead>
      <tbody className={styles.mainBody}>
        {sortedData.map((item, index) => (
          <tr className={index % 2 === 1 ? styles.tableItem : styles.tableItemEven } key={index}>
            <TableCard>
              <div className={getColor(item.status)} />
            </TableCard>
            <TableCard>
                {item.number}
            </TableCard>
            <TableCard>
                {item.name}
            </TableCard>
            <TableCard>
                {item.inspector}
            </TableCard>
            <TableCard>
                <p>{item.startTime.getDate()}</p>
            </TableCard>
            <TableCard>
                {item.endTime.getDate()}
            </TableCard>
            <TableCard>
                <button className={styles.tableItemButton}>
                  <img alt=':' src={points} />
                </button>
            </TableCard>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};