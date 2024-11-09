import React from "react";
import CircleIcon from "../../../assets/CircleIcon.png";
import { styles } from "./styles";
import { TouchableOpacity, Image, Text } from "react-native";

interface SkillCardProps {
  id: string;
  title: string;
}

export function SkillCard(props: SkillCardProps) {
  const { id, title } = props;
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
      <Image source={CircleIcon} style={styles.image} />
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
}
