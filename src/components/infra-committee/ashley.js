// TODO add padding around image
// TODO add padding around about me

import Image from 'next/image';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Text({ text }) {
  return <p>{text}</p>;
}

export default function Ashley() {
  return (
    <div>
      <Header title="Ashley!" />
      <Image
        src="/assets/img/other/members/AshleyPicture.jpg"
        width="150"
        height="200"
        alt="Ashley"
      />
      <Text text="Fun fact: I'm terrible at using vending machines!" />
    </div>
  );
}
