import React from 'react';

const sectionStyle = (colorTheme) => {
    const isLight = colorTheme === 'light';
    const lightColor = '#FEF2F4';
    const darkColor = '#FCC8D1';
    return {
      height: '40vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isLight ? lightColor : darkColor,
      color: isLight ? darkColor : lightColor,
      fontSize: '6em',
      fontWeight: 200,
    };
};

function MainPage() {

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

export default MainPage;