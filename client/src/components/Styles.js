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
      maxHeight: '400px',
      overflow: 'auto',
    },
    button: {
      padding: '14px 40px',
      backgroundColor: lightColor,
      border: '2px solid' + darkColor,
      color: darkColor,
      fontSize: '16px',
      width: '40%',
    },
    backText: {
      position: 'absolute',
      top: '20px',
      left: '30px',
      color: theme === 'light' ? darkColor : lightColor,
      fontSize: '1.5em'
    }
  }
};

const getSherryPageStyles = () => {
  return {
    container: {
      padding: '20px',
      textAlign: 'center'
    },
    login: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      width: '200px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#d3d3d3',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    mainContent: {
      textAlign: 'left'   // Aligns the text to the left
    },
    list: {
      paddingLeft: '20px',   // Indent the list items
      marginTop: '10px'      // Add space above the list
    },
    listItem: {
      margin: '5px 0' // Add space between list items
    }
  };
}

export { getMainPageStyles, getSecondaryPageStyles, getSherryPageStyles };