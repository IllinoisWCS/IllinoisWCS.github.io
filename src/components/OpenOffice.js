import styles from "@/styles/OpenOffice.module.css";
import data from "../data/openOffice.json"


export default function OpenOffice() {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor(currentDate - startDate) / (1000 * 60 * 60 * 24);
    var weekNumber = Math.ceil(days / 7);
    let week = "week1";
    let week_num = 0
    if(weekNumber % 2 == 1)
    {
      week = "week2";
      week_num = 1;
    }



    // console.log(data[0]["week1"][0]["rows"][0]["time"]);

    let nums = [0, 1, 2, 3, 4, 5];

  return (
    <>
        {/* <!--week 1 tab-->  */}
        {/* <div className="tab-content" id="open-office-width"> */}         
          <table>
              <thead>
                <tr className="tr">
                  <th id={`${styles.openOfficeSpace}`}> </th>
                  {console.log(data[week_num])}
                  {
                    data[week_num][week].map(({heading, rows}) => {
                      return <th className={`${styles.openOfficeDay} ${styles.th}`}>{heading}</th>;
                    })
                  }
                </tr>
              </thead>
                
                {/* row data */}

              <tbody>

                {
                  nums.map((x) => {
                    let row_data = data[week_num][week][0]["rows"]
                    return <>
                      <tr className={`${styles.tr}`}>
                        <td className={`${styles.td} ${styles.times}`}>
                            <div className={`${styles.openOfficeCellContainer}`}>{data[week_num][week][0]["rows"][x]["time"]}</div>

                        </td>

                        {data[week_num][week].map(({heading, rows}) => {
                          return <>
                            <td className={`${styles.openOfficeCell}`}>
                              <div className={`${styles.openOfficeCellContainer}`}>
                                {/* returns officers */}
                                {rows[x]["officers"].map((name) => {
                                  return <div><span className={`${styles.openOfficeHighlight}`}>{name}</span></div>
                                })}
                                {/* returns committees */}
                                {rows[x]["committees"].map((name) => {
                                  return <div><span>{name}</span></div>
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
        {/* </div> <!--end of tab-content--> */}
      {/* {/* </div> <!--end of tabs-left-->*/ }
    {/* </div> <!--end of tables div--> */}

    </>
  );
}
