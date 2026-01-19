import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateDraft } from "../features/profile/profileSlice";
import { RootState } from "../store/store";

export default function BasicInfoScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((state: RootState) => state.profile.draft);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basic Information</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={draft.fullName}
        onChangeText={(text) =>
          dispatch(updateDraft({ fullName: text }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={draft.email}
        onChangeText={(text) =>
          dispatch(updateDraft({ email: text }))
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={draft.age}
        onChangeText={(text) =>
          dispatch(updateDraft({ age: text }))
        }
      />

      <Button
        title="Next"
        onPress={() => navigation.navigate("Address")}
      />
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
});
