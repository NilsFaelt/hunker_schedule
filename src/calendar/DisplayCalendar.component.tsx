import { FC } from "react";
import styles from "./DisplayCalendar.module.css";

interface Worker {
  name: string;
  hours: { start: string; end: string };
  info: string;
}

interface Schedule {
  date: number;
  day?: string;
  workers: Worker[];
}
export const DisplayCalendar: FC<{ month: string; schedule: Schedule[] }> = ({
  month,
  schedule,
}) => {
  console.log(schedule);
  return (
    <div className={styles.container}>
      <h2>{month}</h2>
      <div className={styles.inner_container}>
        {schedule?.map((day) => {
          return <EachDay schedule={day} />;
        })}
      </div>
    </div>
  );
};

export const EachDay: FC<{ schedule: Schedule }> = ({ schedule }) => {
  return (
    <div
      className={
        schedule?.workers.length > 0
          ? styles.each_day_container_weekend
          : styles.each_day_container
      }
    ></div>
  );
};
