import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate  from './components/ItemDate';
import Card from './components/Card';

function App() {
  const response=[
    {
      itemName: "Nirma",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDate: "202",
      itemMonth: "June2",
      itemYear: "19982"
    },
    {
      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "June3",
      itemYear: "19983"
    }
  ];
  return (
    <div>
      <Card>
          <Item name={response[0].itemName}> hello ji // print by props.children</Item>
          <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
          <Item name={response[1].itemName}></Item>
          <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
          <Item name={response[2].itemName}></Item>
          <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>
          <div className="App">Hello Jee</div>
      </Card>
    
    </div>
  );
}

export default App;
