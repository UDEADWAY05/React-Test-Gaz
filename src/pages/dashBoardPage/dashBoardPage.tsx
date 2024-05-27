import { useState } from "react";
import { Chart } from "../../components/chart";
import { PieChartCard } from "../../components/pieChart";
import { Table } from "../../components/table";
import { TaskBoard } from "../../components/taskBoard";
import styles from "./dashBoardPage.module.css"
import { ExamObject } from "../../components/table/table";

const insideData = [
  { name: '23:20', quantity: 1 },
  { name: '19:23', quantity: 2 },
  { name: '23:20', quantity: 1 },
  { name: '23:20', quantity: 4 },
  { name: '23:20', quantity: 3 },
  { name: '1:20', quantity: 0 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 7 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 1 },
  { name: '1:20', quantity: 3 },
]

const insideData2 = [
  { name: '23:20', quantity: 14 },
  { name: '19:23', quantity: 10 },
  { name: '23:20', quantity: 5 },
  { name: '23:20', quantity: 2 },
  { name: '23:20', quantity: 7 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 5 },
  { name: '1:20', quantity: 3 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 1 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 6 },
  { name: '1:20', quantity: 2 },
]

const insideData3 = [
  { name: '23:20', quantity: 1 },
  { name: '19:23', quantity: 2 },
  { name: '23:20', quantity: 1 },
  { name: '23:20', quantity: 4 },
  { name: '23:20', quantity: 3 },
  { name: '1:20', quantity: 0 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 7 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 7 },
]

const insideData4 = [
  { name: '23:20', quantity: 6 },
  { name: '19:23', quantity: 2 },
  { name: '23:20', quantity: 7 },
  { name: '23:20', quantity: 1 },
  { name: '23:20', quantity: 3 },
  { name: '1:20', quantity: 5 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 6 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 8 },
  { name: '1:20', quantity: 4 },
  { name: '1:20', quantity: 2 },
  { name: '1:20', quantity: 4 },
]

export const DashBoardPage = () => {
  const [data, setData] = useState<ExamObject[]>([
    {
      status: 'working',
      number: 1595,
      name: 'Магазин "Z"',
      inspector: "Виктор Касп",
      startTime: new Date("December 17, 1995 03:24:00"),
      endTime: new Date("December 18, 1995 03:24:00")
    },
    {
      status: 'failed',
      number: 1295,
      name: 'Магазин "V"',
      inspector: "Виктор Касп",
      startTime: new Date("December 17, 1995 03:24:00"),
      endTime: new Date("December 18, 1995 03:24:00")
    },
    {
      status: 'success',
      number: 1550,
      name: 'Магазин "O"',
      inspector: "Виктор Касп",
      startTime: new Date("December 17, 1995 03:24:00"), 
      endTime: new Date("December 18, 1995 03:24:00")
    },
    {
      status: 'pending',
      number: 1250,
      name: 'Магазин "i"',
      inspector: "Виктор Касп",
      startTime: new Date("December 16, 1995 03:24:00"),
      endTime: new Date("December 19, 1995 03:24:00")
    },
  ]);

  return <div className={styles.dashBoard}>
    <div className={styles.dashBoardMain}>
      <div className={styles.chartsDiv}>
        <Chart
          title="Выполнено проверок"
          quantity={3}
          data={insideData}
        />
        <Chart
          title="Выявленно нарушений"
          quantity={14}
          data={insideData2}
        />
        <Chart
          title="Поставленно задач"
          quantity={8}
          data={insideData3}
        />
        <Chart
          title="Выполенно задач"
          quantity={4}
          data={insideData4}
        />
      </div>
      <TaskBoard />
      <div className={styles.pieAndTable}>
        <div className='w-full dl:w-[68%]'>
          <Table label="Проверки на сегодня" data={data}/>
        </div>
        <div className="w-full mt-5 dl:w-[30%] dl:ml-5 dl:mt-0">
          <PieChartCard title="Проверка по статусу" data={data}/>
        </div>
      </div>
    </div>
  </div>;
}