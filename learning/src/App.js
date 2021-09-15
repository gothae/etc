import AddColorForm from './06/AddColorForm';

function App() {
  const logColor = (title, color) => (
    console.log(`새로운 색 : ${title} | ${color}`)
  )
  return (
    <div className="App">
      <AddColorForm onNewColor = {logColor}/>
    </div>
  );
}

export default App;
