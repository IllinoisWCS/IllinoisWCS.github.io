import { useEffect, useState } from 'react';

import Image from 'next/image';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import Button from '../components/OpenOfficeButton';

import data from '../data/openOffice.json';
import styles from '@/styles/pages/OpenOffice.module.css';

export function DesktopContainer({ children }) {
  return <div className={`${styles.desktop}`}>{children}</div>;
}

export function MobileContainer({ children }) {
  return <div className={`${styles.mobile}`}>{children}</div>;
}

export default function OpenOffice() {
  const [week, setWeek] = useState('week1');
  const [weekNum, setWeekNum] = useState(0);
  const [weekDays, setWeekDays] = useState(
    new Set(['Monday', 'Tuesday', 'Wednesday']),
  );
  const [weekHalf, setWeekHalf] = useState('first'); // toggle with "second" if arrow clicked

  function updateWeekDays(half) {
    setWeekHalf(half);
    if (half === 'second') {
      setWeekDays(new Set(['Wednesday', 'Thursday', 'Friday']));
    } else {
      setWeekDays(new Set(['Monday', 'Tuesday', 'Wednesday']));
    }
  }

  const shortenName = (name) => {
    const tokens = name.split(' ');
    return `${tokens[0]} ${tokens[1][0]}.`;
  };

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
        <ComputerWindow className={styles.title}>
          <h2>Open Office Calendar</h2>
        </ComputerWindow>
        {week === 'week1' ? (
          <>
            <p>You&apos;re viewing the Week 1 schedule.</p>
            <Button
              onClick={() => {
                setWeek('week2');
                setWeekNum(1);
              }}
            >
              <p>Check out week 2</p>
            </Button>
          </>
        ) : (
          <>
            <p>You&apos;re viewing the Week 2 schedule.</p>
            <Button
              onClick={() => {
                setWeek('week1');
                setWeekNum(0);
              }}
            >
              <p>Check out week 2</p>
            </Button>
          </>
        )}
      </div>
      <DesktopContainer>
        <div className={`${styles.tableContainer}`}>
          <table className={`${styles.table}`}>
            <thead>
              <tr className={`${styles.tr}`}>
                <th
                  className={`${styles.space} ${styles.th}`}
                  id={`${styles.openOfficeSpace}`}
                >
                  {' '}
                </th>
                {data[weekNum][week].map(({ heading }, index) => (
                  <th
                    key={index}
                    className={`${styles.openOfficeDay} ${styles.th}`}
                  >
                    <p>{heading}</p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {nums.map((x) => (
                <tr key={x} className={`${styles.tr}`}>
                  <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                    <div className={`${styles.openOfficeCellContainer}`}>
                      <p>{data[weekNum][week][0].rows[x].time}</p>
                    </div>
                  </td>

                  {data[weekNum][week].map(({ rows }, index) => (
                    <td
                      key={index}
                      className={`${styles.openOfficeCell} ${styles.td}`}
                    >
                      <div className={`${styles.openOfficeCellContainer}`}>
                        {rows[x].officers.map((name, i) => (
                          <div key={i}>
                            <span>
                              <p className={`${styles.openOfficeHighlight}`}>
                                {shortenName(name)}
                              </p>
                            </span>
                          </div>
                        ))}
                        {rows[x].committees.map((name, i) => (
                          <div key={i}>
                            <span className={`${styles.openOfficeName}`}>
                              <p>{shortenName(name)}</p>
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
                  {weekHalf === 'first' ? (
                    <button
                      className={`${styles.hiddenChevronButton}`}
                      type="button"
                      onClick={() => {
                        updateWeekDays('second');
                      }}
                    >
                      <Image
                        className={`${styles.chevronRight}`}
                        src="assets/design-vectors/chevron.svg"
                        width="20"
                        height="20"
                        alt="chevronRight"
                      />
                    </button>
                  ) : (
                    <button
                      className={`${styles.hiddenChevronButton}`}
                      type="button"
                      onClick={() => {
                        updateWeekDays('first');
                      }}
                    >
                      <Image
                        className={`${styles.chevronLeft}`}
                        src="assets/design-vectors/chevron.svg"
                        width="20"
                        height="20"
                        alt="chevronLeft"
                      />
                    </button>
                  )}
                </th>
                {data[weekNum][week].map(({ heading }, index) => {
                  if (weekDays.has(heading)) {
                    return (
                      <th
                        key={index}
                        className={`${styles.openOfficeDay} ${styles.th}`}
                      >
                        <p>{heading}</p>
                      </th>
                    );
                  }
                  return undefined;
                })}
              </tr>
            </thead>

            <tbody>
              {nums.map((x) => (
                <tr key={x} className={`${styles.tr}`}>
                  <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                    <div className={`${styles.openOfficeCellContainer}`}>
                      <p>{data[weekNum][week][0].rows[x].time}</p>
                    </div>
                  </td>

                  {data[weekNum][week].map(({ heading, rows }, index) => {
                    if (weekDays.has(heading)) {
                      return (
                        <td
                          key={index}
                          className={`${styles.openOfficeCell} ${styles.td}`}
                        >
                          <div className={`${styles.openOfficeCellContainer}`}>
                            {rows[x].officers.map((name, i) => (
                              <div key={i}>
                                <span>
                                  <p
                                    className={`${styles.openOfficeHighlight}`}
                                  >
                                    {shortenName(name)}
                                  </p>
                                </span>
                              </div>
                            ))}
                            {rows[x].committees.map((name, i) => (
                              <div key={i}>
                                <span className={`${styles.openOfficeName}`}>
                                  <p>{shortenName(name)}</p>
                                </span>
                              </div>
                            ))}
                          </div>
                        </td>
                      );
                    }
                    return undefined;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MobileContainer>
    </div>
  );
}
