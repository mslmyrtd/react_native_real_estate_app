import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in" className="mb-10" style={{marginBottom :10, backgroundColor:"red" }}  >Sign</Link>
      <Link href="/profile" style={{marginBottom :10}} >Profile</Link>
      <Link href="/explore" style={{marginBottom :10}}>Explore</Link>
      <Link href="/properties/1" style={{marginBottom :10}}>Properties</Link>
      <Text className="font-extrabold">Heloooo</Text>
    </View>
  );
}
