import { getSecondaryPageStyles } from "./Styles";

// NotFound.js
function NotFound() {
  const styles = getSecondaryPageStyles('light');
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Ops</h2>
      <p style={styles.paragraph}>开发者开小差，还没实现这个功能.</p>
    </div>
  );
}

export default NotFound;