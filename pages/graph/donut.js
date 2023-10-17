import ChartComponent from "../graph/chart";

export default function App() {
  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 },
  ];

  return (
    <div className="App">
      <ChartComponent data={data} />
    </div>
  );
}
