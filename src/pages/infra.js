<<<<<<< HEAD
import Kirthi from '../components/infra-committee/Kirthi';
import Becky from '../components/infra-committee/becky';
import Card from '../components/infra-committee/zl-card';
=======
import Helena from '../components/infra-committee/helena';
>>>>>>> hi/infra-tutorial-2024

export default function InfraCommittee() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meet the Team!</h1>
      <h3 style={{ textAlign: 'center' }}>
        our wonderful infrastructure committee
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
<<<<<<< HEAD
        <Kirthi
          name="Kirthi Shankar"
          funFact="Fun Fact: I love Phantom of the Opera!"
          netid="kirthis2"
        <Becky name="Becky Blake" />
        <Card
          name="Zia Lu"
          description="I like taking photos of my dog!"
          imageUrl="/assets/img/other/members/zl-headshot.png"
        />
=======
        {/* put something here... */}
        <Helena />
>>>>>>> hi/infra-tutorial-2024
      </div>
    </div>
  );
}
