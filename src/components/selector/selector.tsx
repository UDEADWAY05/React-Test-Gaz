import { FC, useEffect, useRef, useState } from "react";
import styles from "./selector.module.css"
import { TaskType } from "../../types/taskType";
import { ExamType } from "../../types/examType";
import down from "../../assets/img/down.svg"
import close from "../../assets/img/closeBlack.svg"

type UnitedType = TaskType | ExamType

interface SelectorProps {
  value: UnitedType,
  options: UnitedType[],
  onTaskChange?: (elType: TaskType) => void;
  onExamChange?: (elType: ExamType) => void;
}

export const Selector: FC<SelectorProps> = ({ value, options, onTaskChange, onExamChange }) => {
  const [show, setShow] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const filterOptions = options.filter((el) => el.value !== value.value)

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleChange = (elType: UnitedType) => {
    if (onTaskChange) {
      onTaskChange(elType as TaskType);
    } else if(onExamChange) {
      onExamChange(elType as ExamType);
    }
  };

  const handleClickOutside = (e: MouseEvent): void => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };


  return <div
      ref={selectRef}
      className={styles.selector}
    >
      <div
        className={styles.selectorLabel}
        onClick={() => setShow(prevState => !prevState)}
      >
      <p>{
        value.label
      }</p>
      <img
        className={
          show ?
            styles.selectorCloseIcon
            : styles.selectorDownIcon
        }
        src={
          show
            ? close
            : down
        } />
      </div>
      {show && (
        <div className={styles.selectorCard}>
          {filterOptions.length !== 0 ? (
            filterOptions.map(el => (
              <div
                key={el.value}
                className={styles.selectorItem}
              >
                <div
                  className={styles.selectorItemLabel}
                  onClick={() => handleChange(el)}
                >
                  {el.label}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.selectorNotFound}>
              Нечего не найдено!
            </div>
          )}
        </div>
      )}
  </div>
}