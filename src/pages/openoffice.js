import styles from "@/styles/OpenOffice.module.css";
import data from "../data/openOffice.json"
import { useState } from "react";


export default function OpenOffice() {

    const [week, setWeek] = useState("week1");
    const [weekNum, setWeekNum] = useState(0);

    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor(currentDate - startDate) / (1000 * 60 * 60 * 24);
    var weekNumber = Math.ceil(days / 7);
    if(weekNumber % 2 == 1)
    {
      setWeek("week2")
      setWeekNum(1);
    }

    let nums = [0, 1, 2, 3, 4, 5];

  return (
    <>  
        <div className={`${styles.openOfficeHeader}`}>

            <h2 className={`${styles.openOfficeTitle}`}>Open Office Calendar</h2>
            {week == "week1" ? 
                // <div className={`${styles.openOfficeWeekContainer}`}>
                <>
                    <p className={`${styles.openOfficeWeekIndication}`}> We're currently on Week 1 </p>
                    <button className={`${styles.openOfficeWeekButton}`}  onClick={() => {setWeek("week2"); setWeekNum(1)}}> Check out week 2 </button>
                </>
                // </div>
            :
                // <div className={`${styles.openOfficeWeekContainer}`}>
                <>
                    <p className={`${styles.openOfficeWeekIndication}`}> We're currently on Week 2 </p>
                    <button className={`${styles.openOfficeWeekButton}`}  onClick={() => {setWeek("week1"); setWeekNum(0)}}> Check out week 1 </button>
                </> 
                // </div>
            }
        </div>



        
        <div className={`${styles.tableContainer}`}>
          <table className={`${styles.table}`}>
              <thead>
                <tr className={`${styles.tr}`}>
                  <th id={`${styles.openOfficeSpace} ${styles.th}`}> </th>
                  {
                    data[weekNum][week].map(({heading, rows}) => {
                      return <th className={`${styles.openOfficeDay} ${styles.th}`}>{heading}</th>;
                    })
                  }
                </tr>
              </thead>
                
                {/* row data */}

              <tbody>

                {
                  nums.map((x) => {
                    let row_data = data[weekNum][week][0]["rows"]
                    return <>
                      <tr className={`${styles.tr}`}>
                        <td className={`${styles.td} ${styles.openOfficeTimes}`}>
                            <div className={`${styles.openOfficeCellContainer}`}>{data[weekNum][week][0]["rows"][x]["time"]}</div>

                        </td>

                        {data[weekNum][week].map(({heading, rows}) => {
                          return <>
                            <td className={`${styles.openOfficeCell} ${styles.td}`}>
                              <div className={`${styles.openOfficeCellContainer}`}>
                                {rows[x]["officers"].map((name) => {
                                  return <div><span className={`${styles.openOfficeHighlight} ${styles.openOfficeName}`}>{name}</span></div>
                                })}
                                {rows[x]["committees"].map((name) => {
                                  return <div><span className={`${styles.openOfficeName}`}>{name}</span></div>
                                })}
                              </div>
                            </td>
                          </>

                        })}

                      </ tr>
                    </>
                  })
                }
              </tbody>

          </table> 
        </div>
    </>
  );
}
