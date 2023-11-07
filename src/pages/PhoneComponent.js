const styles = {
  container: {
    backgroundColor: 'white',
    width: '447px', 
    height: '778px',
    borderRadius: '33px',
    border: '13px solid #BAA7FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notch: {
    width: '117px',
    height: '33px',
    borderRadius: '63px',
    backgroundColor: '#BAA7FF',
    marginTop: '12px'
  },
  rectangle: {
    width: '211px',
    height: '9px',
    borderRadius: '63px',
    backgroundColor: '#BAA7FF',
    marginBottom: '12px'
  }
}
export default function PhoneComponent({children}) {
  return (
     <div className="container" style={styles.container}>
        <div className="notch" style={styles.notch}></div>
        <div>{children}</div>
        <div className="rectangle" style={styles.rectangle}></div>
    </div>
  );
};

