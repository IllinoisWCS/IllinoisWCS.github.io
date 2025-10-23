import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/pages/Infra.module.css';
import BeckyCard from '../components/infra-committee/Becky';

export default function Infra() {
  return (
    <div className={styles.main}>
      <ComputerWindow className={styles.instructions} showTopbar={false}>
        <p>Congrats! You found the onboarding assignment!</p>
        <p>
          If you haven&apos;t already, git checkout -b
          yourinitials/onboarding-assignment so that your work is on a new
          branch.
        </p>
        <ul>
          <li>
            Navigate to <code>src/components/infra-committee</code>
          </li>
          <li>
            Make a new file, call it <code>YourName.js</code>. Write the code
            for your card here! Be as creative as you&apos;d like.
          </li>
          <li>
            Feel free to reference/use the card component used in the Our Teams
            page on the website. Try to find this yourself!
          </li>
          <li>
            Navigate to <code>src/styles/components/InfraCommittee</code>. You
            can make a file for your card&apos;s CSS here if you are
            comfortable!
          </li>
          <li>
            Navigate to <code>public/assets/img/infra-committee</code>, store
            your photo here.
          </li>
          <li>
            Import your new component in this file, and add it as a child of the
            div with the class name &quot;cards&quot;.
          </li>
          <li>
            Create a PR for your changes. Check out the github tutorial for how
            to do this.
          </li>
        </ul>
        <p>Feel free to ask us any questions.</p>
      </ComputerWindow>
      <ComputerWindow className={styles.title} showButtons={false}>
        <h1>Infrastructure Committee</h1>
      </ComputerWindow>
      <ComputerWindow className={styles.subHeader} showTopbar={false}>
        <h2>2025-2026</h2>
      </ComputerWindow>
      <div className={styles.cards}>
        <BeckyCard />
      </div>
    </div>
  );
}
