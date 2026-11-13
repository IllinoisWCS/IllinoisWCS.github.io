import React, { useState } from "react";
import styles from "../../styles/components/InfraCommittee/priya.module.css";
export default function Priya() {
  const [showFact, setShowFact] = useState(false);

  return (
    <div className={styles["pt-profile-card"]}>
        <img
        src="/assets/other/members/priya.jpg"
        alt="Priya Thakkar"
        width="250"
        height="200"
    />
    <h2>Priya Thakkar</h2>
      <p>Infrastructure Committee Member</p>

      <p>Fun Fact: I love crocheting, drawing, and doing creative projects!</p>

      <button
        type="button"
        onClick={() => setShowFact(!showFact)}
      >
        {showFact ? "Hide Fun Fact" : "Another Fun Fact!"}
      </button>

      {showFact && (
        <p>I also love playing badminton!</p>
      )}
    </div>
  );
}

