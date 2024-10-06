// state possibilities: click to unblur panel, click to flip card,
// hover to flip card, fun button to click that cycles through colors

// TODO add padding around image
// TODO add padding around about me

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
      <img
        width="150"
        height="200"
        src="/assets/img/other/members/AshleyPicture.jpg"
        alt="Ashley"
      ></img>
      <Text text="Fun fact: I'm terrible at using vending machines!" />
    </div>
  );
}
