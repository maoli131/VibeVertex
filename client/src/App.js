import './App.css';

function App() {
  const sectionStyle = (colorTheme) => {
    const isLight = colorTheme === 'light';
    const lightColor = '#FEF2F4';
    const darkColor = '#FCC8D1';
    return {
      height: '40vh', // percentage of view
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      backgroundColor: isLight ? lightColor : darkColor, // Background color
      color: isLight ? darkColor : lightColor, // Text color
      fontSize: '6em', // Larger text
      fontWeight: 200,
    }
  };

  return (
    <div>
      <div style={sectionStyle('dark')}>
        真心话
      </div>
      <div style={sectionStyle('light')}>
        大冒险
      </div>
      <div style={sectionStyle('dark')}>
        小游戏
      </div>
    </div>
  );
}

export default App;
