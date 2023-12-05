import './App.css';

function App() {
  const sectionStyle = (backgroundColor) => ({
    height: '40vh', // 1/3 of the viewport height
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    backgroundColor, // Background color passed as an argument
    color: 'white', // Text color
    fontSize: '2em' // Larger text
  });

  return (
    <div>
      <div style={sectionStyle('#F1CEC8')}>
        Truth
      </div>
      <div style={sectionStyle('#CC978C')}>
        Dare
      </div>
      <div style={sectionStyle('#D4C6BA')}>
        Game
      </div>
    </div>
  );
}

export default App;
