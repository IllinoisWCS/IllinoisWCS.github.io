import { useEffect, useState } from 'react';

import data from '../data/openOffice.json';
import styles from '@/styles/pages/OpenOffice.module.css';

export default function OpenOffice() {
  const [week, setWeek] = useState('week1');
  const [weekNum, setWeekNum] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    const days = Math.floor(currentDate - startDate) / (1000 * 60 * 60 * 24);
    const weekNumber = Math.ceil(days / 7);
    if (weekNumber % 2 === 1) {
      setWeek('week2');
      setWeekNum(1);
    }
  }, []);

  const nums = [0, 1, 2, 3, 4, 5];

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.openOfficeHeader}`}>
        <h1>Open Office Calendar</h1>
        {week === 'week1' ? (
          <>
            <p>You&apos;re viewing the Week 1 schedule</p>
            <button
              type="button"
              className={`${styles.openOfficeWeekButton}`}
              onClick={() => {
                setWeek('week2');
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
              type="button"
              className={`${styles.openOfficeWeekButton}`}
              onClick={() => {
                setWeek('week1');
                setWeekNum(0);
              }}
            >
              <p>Check out week 1</p>
            </button>
          </>
        )}
      </div>

      <div className={`${styles.tableContainer}`}>
        <table className={`${styles.table}`}>
          <thead>
            <tr className={`${styles.tr}`}>
              <th className={`${styles.space}`} id={`${styles.openOfficeSpace} ${styles.th}`}>
                {' '}
              </th>
              {data[weekNum][week].map(({ heading, rows }, index) => (
                <th key={index} className={`${styles.openOfficeDay} ${styles.th}`}>
                  <p>
                    {heading}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {nums.map((x) => (
              <tr key={x} className={`${styles.tr}`}>
                <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                  <div className={`${styles.openOfficeCellContainer}`}>
                    <p>
                      {data[weekNum][week][0].rows[x].time}
                    </p>
                  </div>
                </td>

                {data[weekNum][week].map(({ heading, rows }, index) => (
                  <td key={index} className={`${styles.openOfficeCell} ${styles.td}`}>
                    <div className={`${styles.openOfficeCellContainer}`}>
                      {rows[x].officers.map((name, index1) => (
                        <div key={index1}>
                          <span className={`${styles.openOfficeHighlight} ${styles.openOfficeName}`}>
                            <p>
                              {name}
                            </p>
                          </span>
                        </div>
                      ))}
                      {rows[x].committees.map((name, index2) => (
                        <div key={index2}>
                          <span className={`${styles.openOfficeName}`}>
                            <p>
                              {name}
                            </p>
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
