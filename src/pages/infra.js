import Kirthi from '../components/infra-committee/Kirthi';

export default function InfraCommittee() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meet the Team!</h1>
      <h3 style={{ textAlign: 'center' }}>
        our wonderful infrastructure committee
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Kirthi
          name="Kirthi Shankar"
          funFact="Fun Fact: I love Phantom of the Opera!"
          netid="kirthis2"
        />
      </div>
    </div>
  );
}
