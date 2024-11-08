import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import CircleIcon from "./assets/CircleIcon.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#555"}
        placeholder="New Skill"
      ></TextInput>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={CircleIcon} style={styles.image} />
        <Text style={styles.textSkill}>Habilidade1</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={CircleIcon} style={styles.image} />
        <Text style={styles.textSkill}>Habilidade2</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={CircleIcon} style={styles.image} />
        <Text style={styles.textSkill}>Habilidade3</Text>
      </TouchableOpacity>
    </View>
  );
}
