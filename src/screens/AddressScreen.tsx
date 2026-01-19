import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateDraft } from "../features/profile/profileSlice";
import { RootState } from "../store/store";

export default function AddressScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((state: RootState) => state.profile.draft);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Address Information</Text>

      <TextInput
        style={styles.input}
        placeholder="City"
        value={draft.city}
        onChangeText={(text) =>
          dispatch(updateDraft({ city: text }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="State"
        value={draft.state}
        onChangeText={(text) =>
          dispatch(updateDraft({ state: text }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Country"
        value={draft.country}
        onChangeText={(text) =>
          dispatch(updateDraft({ country: text }))
        }
      />

      <View style={styles.buttonRow}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Button title="Next" onPress={() => navigation.navigate("Summary")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
