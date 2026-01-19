import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { saveProfile } from "../features/profile/profileSlice";

export default function SummaryScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((state: RootState) => state.profile.draft);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Summary</Text>

      {Object.entries(draft).map(([key, value]) =>
        key !== "id" ? (
          <View style={styles.row} key={key}>
            <Text style={styles.label}>{key}</Text>
            <Text>{value}</Text>
          </View>
        ) : null
      )}

      <View style={styles.buttonRow}>
        <Button title="Edit" onPress={() => navigation.goBack()} />
        <Button
          title="Submit"
          onPress={() => {
            dispatch(saveProfile());
            navigation.navigate("Home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
});
