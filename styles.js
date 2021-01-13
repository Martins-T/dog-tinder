import { Platform, StatusBar, StyleSheet } from "react-native"; 

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3d95c4',
    padding: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 }, 
      android:{paddingTop:StatusBar.currentHeight} 
    })
  }, 
  box: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: 220,
    height: 70,
    backgroundColor: '#c91a1a',
    marginBottom: 80,
    marginTop: 8,
  },
  paragraph: {
    margin: 24, 
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});