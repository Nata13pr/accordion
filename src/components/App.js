import "../styles.css";
import Accordion from "./Accordion";
import faqs from '../data';

export default function App() {
  return (
    <div className="app">
      <Accordion data={faqs}/>
    </div>
  );
}
