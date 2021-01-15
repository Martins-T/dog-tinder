import { Platform, StatusBar, StyleSheet } from "react-native"; 

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#13535c',
    padding: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: { paddingTop: 20 }, 
      android:{paddingTop:StatusBar.currentHeight} 
    })
  },
  image: {
    width: 230,
    height: 130,
  },
  box: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: 260,
    height: 55,
    backgroundColor: '#a61717',
    marginBottom: 80,
    marginTop: 8,
  },
  paragraph: {
    margin: 12, 
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff'
  },
  text: {
    margin: 5, 
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff'
  },
});