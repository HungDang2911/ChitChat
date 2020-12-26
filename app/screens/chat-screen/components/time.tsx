/* eslint-disable react-native/no-color-literals */
import React from "react"
import moment from "moment"
import { StyleSheet, Text } from "react-native"

interface Props {
  time: string
  preTime?: string
}

const styles = StyleSheet.create({
  container: {
    color: "grey",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },
})

export const MessageTime: React.FunctionComponent<Props> = (props: Props) => {
  const nowDifference = moment(props.time).diff(moment(), "hours")

  if (props.preTime) {
    const preDifference = moment(props.time).diff(moment(props.preTime), "minutes")
    if (nowDifference < 24) {
      if (preDifference < 10) return <></>
      else {
        return (
          <>
            <Text style={styles.container}>{moment(props.time).format("HH:mm")}</Text>
          </>
        )
      }
    } else {
      return (
        <>
          <Text style={styles.container}>{moment(props.time).format("MMM dd HH:mm")}</Text>
        </>
      )
    }
  } else {
    return (
      <>
        <Text style={styles.container}>{moment(props.time).format("MMM d HH:mm")}</Text>
      </>
    )
  }
}
