import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import Icon3 from "react-native-vector-icons/Entypo";
import Icon4 from "react-native-vector-icons/AntDesign";
import Icon5 from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export const Player = () => {
  return (
    <LinearGradient
      colors={["#333", "#222", "#111", "#000"]}
      style={styles.container}
    >
      <View style={styles.containerTitle}>
        <View style={styles.titleButtonDiv}>
          <TouchableOpacity>
            <Icon2 style={styles.titleButton} name="chevron-down" />
          </TouchableOpacity>
        </View>
        <View style={styles.titleButtonDiv}>
          <Text style={styles.pageTitle1}>TOCANDO DA SUA BIBLIOTECA</Text>
          <Text style={styles.pageTitle2}>Músicas Curtidas</Text>
        </View>
        <View style={styles.titleButtonDiv}>
          <TouchableOpacity>
            <Icon3 style={styles.titleButton} name="dots-three-vertical" />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("../../../assets/album-art.jpg")}
        style={styles.albumCover}
      />
      <View style={styles.musicInfo}>
        <View>
          <Text style={styles.songTitle}>Take A Look Around</Text>
          <Text style={styles.artist}>Limp Bizkit</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon style={styles.addToLibrary} name="check-circle" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.songControls}>
        <View style={styles.progress} />
        <View style={styles.progressLine}>
          <View style={styles.progressDot} />
        </View>
        {/* <View style={styles.progressDot} /> */}
        <View style={styles.progressTime}>
          <Text style={styles.time}>0:07</Text>
          <Text style={styles.time}>5:21</Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity>
            <Icon style={styles.controlButtonShuffle} name="shuffle" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.controlButtonNextPrevious}
              name="skip-previous"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.controlButtonPause} name="pause-circle" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.controlButtonNextPrevious} name="skip-next" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.controlButton} name="repeat" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.minorControls}>
        <View style={styles.minorControlsMinor}>
          <TouchableOpacity>
            <Icon4 style={styles.laptop} name="laptop" />
          </TouchableOpacity>
          <Text style={styles.device}>JUCAPC</Text>
        </View>
        <View style={styles.minorControlsMinor}>
          <TouchableOpacity>
            <Icon5 style={styles.share} name="share-2" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon3 style={styles.share} name="menu" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <ImageBackground
          source={require("../../../assets/fredDurst.jpg")}
          style={styles.aboutImage}
          imageStyle={{
            borderRadius: 10,
          }}
        >
          <Text style={styles.about}>Sobre o artista</Text>
        </ImageBackground>
      </View>
    </LinearGradient>
  );
};
