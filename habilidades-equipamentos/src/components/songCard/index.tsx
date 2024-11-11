import React from "react";
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { styles } from "./styles";

interface SongCardProps {
  id: string;
  title: string;
  artist: string;
  albumCover: ImageSourcePropType;
}

export function SongCard(props: SongCardProps) {
  const { id, title, artist, albumCover } = props;

  return (
    <View style={styles.songCard}>
      <TouchableOpacity activeOpacity={0.7} style={styles.songButton}>
        <View style={styles.songInfo}>
          <Image source={albumCover} style={styles.image} />
          <View style={styles.songTitle}>
            <Text style={styles.songText}>{title}</Text>
            <Text style={styles.songArtist}>{artist}</Text>
          </View>
        </View>
        <Icon style={styles.songText} name="dots-three-vertical" />
      </TouchableOpacity>
    </View>
  );
}
