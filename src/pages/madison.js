import React, { useState } from 'react';
// import styles from "src\styles\components\InfraCommittee.module.css"

function ProfileCard() {
  const [funFact, setFunFact] = useState('I love hiking and exploring new trails!');

  return (
    <div style={styles.card}>
      <img 
        src="/assets/img/other/members/mel11.jpg"  
        alt="Profile" 
        style={styles.image} 
      />
      <h2>Madison Lee</h2>
      <p style={styles.fact}>Fun Fact: {funFact}</p>
      <button 
        onClick={() => {
          const newFact = prompt('I also own two pet fish.');
          if (newFact) setFunFact(newFact); 
        }} 
        style={styles.button}
      >
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  image: {
    borderRadius: '50%',
    marginBottom: '15px',
    width: '100%',
    height: 'auto',
  },
  fact: {
    fontStyle: 'italic'
  },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};

export default ProfileCard;
