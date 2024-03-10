import OfficerCard from "@/components/OfficerCard";
import React from "react";
import officerData from "public/assets/js/officers.json";
import styles from "@/styles/Officers.module.css";

export default function Officers({children}) {
   return (
      <div className={`${styles.main}`}>
      <h1 className={`${styles.officers}`}>Officers</h1>
      <div className={`${styles.cards}`}>
         {officerData.admin.map((officer, index) => (
            <OfficerCard key={index} name={officer.name} position={officer.position} netid={officer.netid}></OfficerCard>
         ))}
      </div>
      </div>
   );
};