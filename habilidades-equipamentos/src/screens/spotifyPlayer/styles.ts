import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 25,
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%",
    paddingBottom: 25,
  },
  titleButtonDiv: {
    alignItems: "center",
  },
  titleButton: {
    color: "#999",
    fontSize: 12,
  },
  pageTitle1: {
    fontSize: 10,
    color: "#999",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
  },
  pageTitle2: {
    fontSize: 8,
    color: "#999",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
    marginTop: 5,
  },
  albumCover: {
    width: "90%",
    height: "40%",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  musicInfo: {
    marginTop: 20,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  songTitle: {
    fontSize: 16,
    color: "#999",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  artist: {
    fontSize: 12,
    color: "#999",
    paddingBottom: 10,
  },
  addToLibrary: {
    color: "#1DB954",
    fontSize: 32,
  },
  songControls: {
    width: "90%",
    alignItems: "center",
  },
  progress: {
    height: 5,
    backgroundColor: "#333",
    width: "100%",
    borderRadius: 5,
    marginTop: 10,
  },
  progressLine: {
    justifyContent: "center",
    alignItems: "baseline",
    alignSelf: "flex-start",
    height: 5,
    backgroundColor: "#999",
    width: "3%",
    borderRadius: 5,
    marginTop: -5,
  },
  progressDot: {
    alignSelf: "flex-end",
    height: 8,
    width: 8,
    backgroundColor: "white",
    borderRadius: 5,
    // marginTop: 0,
  },
  progressTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 5,
  },
  time: {
    color: "#888",
    fontSize: 10,
    alignSelf: "flex-start",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    width: "100%",
    marginBottom: 20,
  },
  controlButton: {
    padding: 15,
    color: "white",
    fontSize: 24,
  },
  controlButtonNextPrevious: {
    padding: 15,
    color: "white",
    fontSize: 36,
  },
  controlButtonPause: {
    color: "white",
    fontSize: 64,
  },
  controlButtonShuffle: {
    padding: 15,
    color: "#1DB954",
    fontSize: 24,
  },
  minorControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  minorControlsMinor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  laptop: {
    color: "#1DB954",
    fontSize: 18,
    paddingRight: 5,
  },
  device: {
    color: "#1DB954",
    fontSize: 8,
  },
  share: {
    padding: 15,
    color: "white",
    fontSize: 18,
  },
  aboutContainer: {
    // flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "40%",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  aboutImage: {
    alignSelf: "flex-end",
    width: "95%",
    height: "40%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  about: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
    padding: 5,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
