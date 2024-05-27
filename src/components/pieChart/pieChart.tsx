import { FC, useState } from 'react';
import styles from './pieChart.module.css'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import circle from '../../assets/img/circle.svg'
import { statusType } from '../table/table';

const colors = [
  "#4cb545",
  "#4ddbeb",
  "#eb4034",
  "#347deb",
  "#ebcd34",
]

interface RenderCustomizedLabelProps {
  cx: number,
  cy: number,
  midAngle: number,
  innerRadius: number,
  outerRadius: number,
  percent: number,
  index: number, 
}

const RADIAN = Math.PI / 180;

const renderCustomizedLabel: FC<RenderCustomizedLabelProps> = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + (radius + 15) * Math.cos(-midAngle * RADIAN);
  const y = cy + (radius + 15) * Math.sin(-midAngle * RADIAN);

  return (<>
    <g>
      <circle cx={x} cy={y} r={25} fill="white" stroke="#0e0e0e1c" strokeWidth={1} />
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
    </>
  );
};

type dataTimeType = 'day' | 'week' | 'month';

const initialState: dataTimeType = 'day';

interface DataType {
  name: string,
  status: statusType, 
}

interface PieChartCardProps {
  title: string,
  data: DataType[]
}

interface insideDataType {
  name: string,
  value: number
}

export const PieChartCard: FC<PieChartCardProps> = ({ title, data }) => {
  const [dataTime, setDataTime] = useState<dataTimeType>(initialState)
  const allTimeType: dataTimeType[] = (['day', 'week', 'month'])
  const translateTime = {
    'day': 'день',
    'week': 'неделя',
    'month': 'месяц'
  }

  const dataPieWeek: insideDataType[] = [
    {
      name: "success",
      value: 1,
    },
    {
      name: "working",
      value: 10
    },
    {
      name: "failed",
      value: 2
    },
    {
      name: "pending",
      value: 10,
    },
  ];
  const dataPieMonth: insideDataType[] = [
    {
      name: "success",
      value: 37,
    },
    {
      name: "working",
      value: 10,
    },
    {
      name: "failed",
      value: 15,
    },
    {
      name: "pending",
      value: 10,
    },
  ];

  const dataPieDay: insideDataType[] = [
    {
      name: 'success',
      value: data.filter(el => el.status === 'success').length,
    },
    {
      name: 'working',
      value: data.filter(el => el.status === 'working').length,
    },
    {
      name: 'failed',
      value: data.filter(el => el.status === 'failed').length,
    },
    {
      name: 'pending',
      value: data.filter(el => el.status === 'pending').length,
    }
  ]

  const rightdata = dataTime === 'day' ? dataPieDay : (dataTime === 'week' ? dataPieWeek : dataPieMonth)

  return <div className={styles.pieChartCard}>
    <p className={styles.pieChartTitle}>{title}</p>
    <div className={styles.pieButtonsType}>
      {allTimeType.map(el => {
        return <button key={el} onClick={() => setDataTime(el)} className={el === dataTime ? styles.activeTime : styles.passiveTime}>
          <p>{translateTime[el]}</p>
          {el === dataTime && <img className={styles.iconCircle} src={circle} />}
        </button>
      })}
    </div>
    <PieChart width={220} height={250}>
      <Pie data={rightdata} legendType='none' dataKey="value"
        nameKey="name" cx="50%" cy="50%" label={renderCustomizedLabel} labelLine={false}
        innerRadius={50} outerRadius={80} fill="#82ca9d" >
      {
        rightdata.map((el, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
        ))
      }
      </Pie>
      <Tooltip />
    </PieChart>
  </div>;
};