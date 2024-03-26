import styles from "@/styles/OpenOffice.module.css";
import data from "../data/openOffice.json";
import { useEffect, useState } from "react";
import chevron from "../../public/assets/design-vectors/chevron.svg";

export const DesktopContainer = ({children}) => <div className={`${styles.desktop}`}>{children}</div>

export const MobileContainer = ({children}) => <div className={`${styles.mobile}`}>{children}</div>

export default function OpenOffice() {
  const [week, setWeek] = useState("week1");
  const [weekNum, setWeekNum] = useState(0);
  const [weekDays, setWeekDays] = useState(new Set(['Monday', 'Tuesday', 'Wednesday']));
  const [weekHalf, setWeekHalf] = useState("first") // toggle with "second" if arrow clicked


  function updateWeekDays(half) {
    setWeekHalf(half);
    if (half == "second") {
      setWeekDays(new Set(['Wednesday', 'Thursday', 'Friday']));
    } else {
      setWeekDays(new Set(['Monday', 'Tuesday', 'Wednesday']));
    }
  }

  
  useEffect(() => {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor(currentDate - startDate) / (1000 * 60 * 60 * 24);
    var weekNumber = Math.ceil(days / 7);
    if (weekNumber % 2 == 1) {
      setWeek("week2");
      setWeekNum(1);
    }
  }, []);

  let nums = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={`${styles.openOfficeHeader}`}>
          <h1>Open Office Calendar</h1>
          {week == "week1" ? (
            <>
              <p>You&apos;re viewing the Week 1 schedule</p>
              <button
                className={`${styles.openOfficeWeekButton}`}
                onClick={() => {
                  setWeek("week2");
                  setWeekNum(1);
                }}
              >
                <p>Check out week 2</p>
              </button>
            </>
          ) : (
            <>
              <p>You&apos;re viewing the Week 2 schedule</p>
              <button
                className={`${styles.openOfficeWeekButton}`}
                onClick={() => {
                  setWeek("week1");
                  setWeekNum(0);
                }}
              >
                <p>Check out week 1</p>
              </button>
            </>
          )}
        </div>

        <DesktopContainer>
        <div className={`${styles.tableContainer}`}>
          <table className={`${styles.table}`}>
            <thead>
              <tr className={`${styles.tr}`}>
                <th
                  className={`${styles.space}`}
                  id={`${styles.openOfficeSpace} ${styles.th}`}
                >
                  {" "}
                </th>
                {data[weekNum][week].map(({ heading, rows }, index) => {
                  return (
                    <th
                      key={index}
                      className={`${styles.openOfficeDay} ${styles.th}`}
                    >
                      <p>{heading}</p>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {nums.map((x) => {
                let row_data = data[weekNum][week][0]["rows"];
                return (
                  <>
                    <tr key={x} className={`${styles.tr}`}>
                      <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                        <div className={`${styles.openOfficeCellContainer}`}>
                          <p>{data[weekNum][week][0]["rows"][x]["time"]}</p>
                        </div>
                      </td>

                      {data[weekNum][week].map(({ heading, rows }, index) => {
                        return (
                          <>
                            <td
                              key={index}
                              className={`${styles.openOfficeCell} ${styles.td}`}
                            >
                              <div
                                className={`${styles.openOfficeCellContainer}`}
                              >
                                {rows[x]["officers"].map((name, index) => {
                                  return (
                                    <div key={index}>
                                      <span
                                        className={`${styles.openOfficeHighlight} ${styles.openOfficeName}`}
                                      >
                                        <p>{name}</p>
                                      </span>
                                    </div>
                                  );
                                })}
                                {rows[x]["committees"].map((name, index) => {
                                  return (
                                    <div key={index}>
                                      <span
                                        className={`${styles.openOfficeName}`}
                                      >
                                        <p>{name}</p>
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </td>
                          </>
                        );
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </DesktopContainer>
      
      <MobileContainer>
        
      
        <div className={`${styles.tableContainer}`}>
          
          <table className={`${styles.table}`}>
            <thead>
              <tr className={`${styles.tr}`}>
                <th
                  className={`${styles.space}`}
                  id={`${styles.openOfficeSpace} ${styles.th}`}
                >
                  {(weekHalf == "first") ? 

                  <img
                        className={`${styles.chevronRight}`}
                        src="assets/design-vectors/chevron.svg" width="20" height="20" 
                        onClick={() => {
                          updateWeekDays("second");
                        }}
                    />
                  : 
                    <img
                        className={`${styles.chevronLeft}`}
                        src="assets/design-vectors/chevron.svg" width="20" height="20"   
                        onClick={() => {
                          updateWeekDays("first");
                        }}
                    />}

                </th>
                {data[weekNum][week].map(({ heading, rows }, index) => {
                  if (weekDays.has(heading)) {
                    return (
                      <th
                        key={index}
                        className={`${styles.openOfficeDay} ${styles.th}`}
                      >
                        <p>{heading}</p>
                      </th>
                    );
                  } else {
                    return;
                  }
                })}
              </tr>
            </thead>

            <tbody>
              {nums.map((x) => {
                let row_data = data[weekNum][week][0]["rows"];
                return (
                  <>
                    <tr key={x} className={`${styles.tr}`}>
                      <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                        <div className={`${styles.openOfficeCellContainer}`}>
                          <p>{data[weekNum][week][0]["rows"][x]["time"]}</p>
                        </div>
                      </td>

                      {data[weekNum][week].map(({ heading, rows }, index) => {
                        if (weekDays.has(heading)) {
                          return (
                            <>
                              <td
                                key={index}
                                className={`${styles.openOfficeCell} ${styles.td}`}
                              >
                                <div
                                  className={`${styles.openOfficeCellContainer}`}
                                >
                                  {rows[x]["officers"].map((name, index) => {
                                    return (
                                      <div key={index}>
                                        <span
                                          className={`${styles.openOfficeHighlight} ${styles.openOfficeName}`}
                                        >
                                          <p>{name}</p>
                                        </span>
                                      </div>
                                    );
                                  })}
                                  {rows[x]["committees"].map((name, index) => {
                                    return (
                                      <div key={index}>
                                        <span
                                          className={`${styles.openOfficeName}`}
                                        >
                                          <p>{name}</p>
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </td>
                            </>
                          );
                        } else {
                          return;
                        }
                      })}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </MobileContainer>
    </div>
    </>
  );
}
