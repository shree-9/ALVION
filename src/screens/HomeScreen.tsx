import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../store/store";
import { deleteProfile, setProfiles } from "../features/profile/profileSlice";
import { loadProfilesFromStorage } from "../utils/storage";

export default function HomeScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const profiles = useSelector((state: RootState) => state.profile.profiles);

  useEffect(() => {
    const loadData = async () => {
      const storedProfiles = await loadProfilesFromStorage();
      dispatch(setProfiles(storedProfiles));
    };

    loadData();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALVION Profiles</Text>

      <Button
        title="Add Profile"
        onPress={() => navigation.navigate("BasicInfo")}
      />

      {profiles.length === 0 ? (
        <Text style={styles.empty}>No profiles added yet.</Text>
      ) : (
        <FlatList
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.fullName}</Text>
              <Text style={styles.sub}>{item.email}</Text>

              <Button
                title="Delete"
                color="#c0392b"
                onPress={() => dispatch(deleteProfile(item.id))}
              />
            </View>
          )}
        />
      )}
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
    marginBottom: 15,
    textAlign: "center",
  },
  empty: {
    marginTop: 30,
    textAlign: "center",
    color: "#666",
  },
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  sub: {
    color: "#555",
    marginBottom: 6,
  },
});
