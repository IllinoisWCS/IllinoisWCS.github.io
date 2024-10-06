import styles from '../styles/components/InfraCommittee.modules.css';
export default function InfraCommittee() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meet the Team!</h1>
      <h3 style={{ textAlign: 'center' }}>
        our wonderful infrastructure committee
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ margin: '10px', padding: '20px', border: '1px solid #ccc', width: '200px', textAlign: 'center' }}><h4>Team Member</h4><p>Role: Developer</p></div>
      </div>
    </div>
  );
}
