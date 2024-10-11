import Card from '../components/infra-committee/zl-card';

export default function InfraCommittee() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Meet the Team!</h1>
      <h3 style={{ textAlign: 'center' }}>
        our wonderful infrastructure committee
      </h3>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Card
          name="Zia Lu"
          description="I like taking photos of my dog!"
          imageUrl="/assets/img/other/members/zl-headshot.png"
        />
      </div>
    </div>
  );
}
