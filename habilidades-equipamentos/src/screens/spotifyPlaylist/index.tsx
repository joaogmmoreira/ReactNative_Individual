import React, { useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/Feather";
import Icon6 from "react-native-vector-icons/AntDesign";
import you6 from "../../../assets/you6.jpg";
import disturbed from "../../../assets/disturbed.jpg";
import deOndeViemos from "../../../assets/deOndeViemos.jpg";
import salaDeControle from "../../../assets/salaDeControle.jpg";
import alemDaquiloQueTeCega from "../../../assets/alemDaquiloQueTeCega.jpg";
import realidadeVidaeFe from "../../../assets/realidadeVidaeFe.jpg";
import u2 from "../../../assets/u2.jpg";
import limpBizkit from "../../../assets/album-art.jpg";
import angelsCry from "../../../assets/angelsCry.jpg";
import dmb from "../../../assets/dmb.jpg";
import benHarper from "../../../assets/benHarper.jpg";
import { SongCard } from "../../components/songCard";
import { styles } from "../spotifyPlaylist/styles";

export const Playlist = () => {
  const [songs, setSongs] = useState([
    {
      id: "1",
      title: "Stay With Me - Acoustic Version",
      artist: "You me At Six",
      albumCover: you6,
    },
    {
      id: "2",
      title: "Land of Confusion",
      artist: "Disturbed",
      albumCover: disturbed,
    },
    {
      id: "3",
      title: "De Onde Viemos",
      artist: "Pense",
      albumCover: deOndeViemos,
    },
    {
      id: "4",
      title: "Sala De Controle",
      artist: "Pense",
      albumCover: salaDeControle,
    },
    {
      id: "5",
      title: "Seguro Demais",
      artist: "Pense",
      albumCover: alemDaquiloQueTeCega,
    },
    {
      id: "6",
      title: "Revitalizar",
      artist: "Pense",
      albumCover: realidadeVidaeFe,
    },
    {
      id: "7",
      title: "Beautiful Day",
      artist: "U2",
      albumCover: u2,
    },
    {
      id: "8",
      title: "Take A Look Around",
      artist: "Limp Bizkit",
      albumCover: limpBizkit,
    },
    {
      id: "9",
      title: "Wuthering Heights",
      artist: "Angra",
      albumCover: angelsCry,
    },
    {
      id: "10",
      title:
        "Tripping Billies live at Wrighley Field, Chicago, IL - July 11, 2014",
      artist: "Dave Matthews Band",
      albumCover: dmb,
    },
    {
      id: "11",
      title: "Faithfully Remain",
      artist: "Ben Harper",
      albumCover: benHarper,
    },
  ]);
  return (
    <LinearGradient
      colors={["#000061", "#000", "#000", "#0000"]}
      style={styles.container}
    >
      <View style={styles.containerHeader}>
        <Icon2 name="arrow-left" size={20} color="#999" />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.pageTitle}>Músicas Curtidas</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.songsQty}>235 músicas</Text>
      </View>
      <View style={styles.containerHeaderMenu}>
        <View>
          <Icon3 name="arrow-down-circle-outline" size={20} color="#999" />
        </View>
        <View style={styles.containerHeaderMenuButtons}>
          <Icon style={styles.controlButtonShuffle} name="shuffle" />
          <Icon style={styles.controlButtonPause} name="pause-circle" />
        </View>
      </View>
      <FlatList
        data={songs}
        keyExtractor={(song) => song.id}
        renderItem={({ item }) => {
          return <SongCard {...item} />;
        }}
      />
      <View style={styles.songCardContainer}>
        <View style={styles.songCard}>
          <View style={styles.songButton}>
            <View style={styles.songInfo}>
              <Image source={songs[1].albumCover} style={styles.image} />
              <View style={styles.songTitle}>
                <Text style={styles.songText}>{songs[1].title}</Text>
                <Text style={styles.songArtist}>{songs[1].artist}</Text>
              </View>
            </View>
            <View style={styles.playerButtons}>
              <Icon6 style={styles.laptop} name="laptop" />
              <Icon style={styles.addToLibrary} name="check-circle" />
              <Icon style={styles.pauseButton} name="pause" />
            </View>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
          <View style={styles.progressLine} />
        </View>
      </View>
      <View style={styles.containerMenu}>
        <View style={styles.containerMenuBackground} />
        <View style={styles.buttonContainer}>
          <Icon5 name="home" style={styles.menuButton} />
          <Text style={styles.menuText}>Início</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon5 name="search" style={styles.menuButton} />
          <Text style={styles.menuText}>Buscar</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Icon4 name="playlist-music-outline" style={styles.menuButton} />
          <Text style={styles.menuText}>Sua Biblioteca</Text>
        </View>
      </View>
    </LinearGradient>
    // </View>
  );
};
