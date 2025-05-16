import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, ind) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={item.title}
          num={ind}
          key={item.ind}
        >
          {item.text}
        </AccordianItem>
      ))}

      <AccordianItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state effeciently</li>
        </ul>
      </AccordianItem>
    </div>
  );
}

function AccordianItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
export default App;
