import Nyssa from '../components/infra-committee/nyssa';
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
        {/* put something here... */}
        <Helena />
>>>>>>> hi/infra-tutorial-2024
        <Nyssa />
      </div>
    </div>
  );
}
