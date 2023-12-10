const lightColor = '#FEF2F4';
const darkColor = '#FCC8D1';

const getMainPageStyles = (theme) => {
  const isLight = theme === 'light';
  return {
    section: {
      height: '40vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isLight ? lightColor : darkColor,
      color: isLight ? darkColor : lightColor,
      fontSize: '6em',
      fontWeight: 200,
    }
  }
};

const getSecondaryPageStyles = (theme) => {
  const isLight = theme === 'light';
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '90vh', // This ensures the container takes the full viewport height
      backgroundColor: isLight ? lightColor : darkColor,
      color: isLight ? darkColor : lightColor,
    },
    title: {
      fontSize: '2em',
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: '30px',
    },
    paragraph: {
      fontSize: '3em',
      fontWeight: 200,
      textAlign: 'center',
      marginTop: '0',
    },
    button: {
      padding: '14px 40px',
      backgroundColor: lightColor,
      border: '2px solid' + darkColor,
      color: darkColor,
      fontSize: '16px',
      width: '40%',
    },
    button_disable: {
      padding: '14px 40px',
      backgroundColor: lightColor,
      border: '2px solid' + darkColor,
      color: darkColor,
      fontSize: '16px',
      width: '40%',
      opacity: '0.4',
    },
  }
};

export { getMainPageStyles, getSecondaryPageStyles };