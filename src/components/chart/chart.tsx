import { FC } from "react";
import styles from "./chart.module.css"
import { LineChart, Line, Tooltip } from 'recharts';

interface Data {
  name: string,
  quantity: number
}

interface ChartProps {
  title: string,
  quantity: number,
  data: Data[]
}

export const Chart: FC<ChartProps> = ({ title, quantity, data }) => {
  const color = data[data.length - 2].quantity > data[data.length - 1].quantity ? "#f00" : "#00c852" ;

  return <div className={styles.chart}>
    <p className={styles.chartText}>{ title }</p>
    <p className={styles.textQuantity}>{ quantity }</p>
    <LineChart className={styles.item} width={250} height={60} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
      <Line legendType="none" type="monotone" dot={false} label={false} strokeWidth={2.5} dataKey="quantity" stroke={color} />
      <Tooltip />
    </LineChart>
  </div> ;
};