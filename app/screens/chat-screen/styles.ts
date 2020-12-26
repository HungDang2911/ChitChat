/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get("window")

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomWidth: 0.25,
    borderColor: "grey",
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  avatar: {
    borderRadius: 35 / 2,
    height: 35,
    width: 35,
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 20,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    maxWidth: width / 2,
  },
  displayName: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
  },
  footer: {
    height: 60,
    width: width,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#F2F3F5",
    borderRadius: 30,
    color: "#000",
    paddingHorizontal: 15,
  },
})
