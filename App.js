import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/Division";
import FriendList from "./src/FriendList";
import FriendSection from "./src/FriendSection";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const onPressArrow = () => {
    console.log('clicked arrow');
  }
  return (
    <View style={styles.container}>
      <Header />
      
      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name} 
        introduction={myProfile.introduction}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection 
        friendProfileLen={friendProfiles.length} 
        onPressArrow={onPressArrow}
      />

      <FriendList data={friendProfiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
    paddingHorizontal: 15,
  },
});
