import _ from "lodash";
import moment from "moment";
import { Platform, Share, Linking, Alert } from "react-native";
import { MessageBarManager } from "react-native-message-bar";
import {
  TIME_ZONE,
  DAY_DATE_FORMAT,
  DATE_FORMAT,
  APP_URL,
  GOOGLE_URL,
  GOOGLE_ADDRESS_URL,
  GOOGLE_ADDRESS_URl_END
} from "../constants";

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

let location;
let deviceToken;
let deviceUserId;
class Util {
  isEmpty = value => _.isEmpty(value);
  keyExtractor = (item, index) => index;
  getPlatform = () => Platform.OS;
  isPlatformAndroid = () => Platform.OS === "android";

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  getLocation() {
    return location;
  }
  setLocation(region) {
    location = region;
  }

  setDeviceToken(token: String) {
    deviceToken = token;
  }
  getDeviceToken() {
    return deviceToken;
  }

  setUserId(userId: String) {
    deviceUserId = userId;
  }
  getUserId() {
    return deviceUserId;
  }
  calculateDistance(
    lat2,
    lon2,
    lat1 = location.latitude,
    lon1 = location.longitude
  ) {
    if (!lat1 || !lon1 || !lat2 || !lon2) {
      return NaN;
    }

    const R = 6371;

    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = Math.round(R * c);

    return d;
  }
  convertKm2Miles(km: number) {
    return _.isNumber(km) ? km * 0.621371 : NaN;
  }
  distanceUnit(distance: number) {
    return `${distance} KM`;
  }
  onShare = (title, message) => {
    Share.share({
      title,
      message
    });
  };

  noInternetMessage = () => {
    MessageBarManager.showAlert({
      title: "No Internet Connection Found",
      message: "Make sure wi-fi or celluar data is turned on",
      alertType: "error"
    });
  };

  eventDeleteMessage = () => {
    Alert.alert(
      "Alert",
      "Canceling the Event will get Event deleted ! Do you want to continue ?",
      [
        {
          text: "No",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Yes", onPress: this.eventDeletePayload }
      ]
    );
  };
  friendRequestConformationMessage() {
    Alert.alert("Alert", "Your Request has been sent successfully", [
      {
        text: "Ok",
        onPress: () => null,
        style: "cancel"
      }
    ]);
  }

  removeWhiteSpaces(value) {
    return value.replace(/^\s+|\s+$/gm, "");
  }
  lineCounter(value = "") {
    return value.split(/\r\n|\r|\n/).length;
  }
  getUserProfile(fbId) {
    return `http://graph.facebook.com/${fbId}/picture?type=large`;
  }
  getDate(givenDate) {
    return moment(givenDate)
      .add(TIME_ZONE, "hours")
      .format(DAY_DATE_FORMAT);
  }
  getDateCreateEvent(givenDate) {
    return moment(givenDate)
      .add(TIME_ZONE, "hours")
      .format(DATE_FORMAT);
  }
  getCurrentDayDate() {
    return moment(Date.now()).format(DATE_FORMAT);
  }

  getCurrentDate() {
    return moment(Date.now()).format(DAY_DATE_FORMAT);
  }

  getDateFrom(givenDate) {
    return moment(givenDate)
      .add(TIME_ZONE, "hours")
      .fromNow();
  }
  getShareDetail(title, sDate, eventLocation) {
    return `Event Name: ${title} \nEvent Date: ${sDate} \nEvent Location: ${eventLocation} \nApp Url: ${APP_URL} `;
  }
  getGoogleUrl(latitude, longitude) {
    return `${GOOGLE_URL},
    /?daddr=${latitude},${longitude}`;
  }
  getGoogleAddress(latitude, longitude) {
    return `${GOOGLE_ADDRESS_URL},${latitude},${longitude},${GOOGLE_ADDRESS_URl_END}`;
  }
  getLinking(googleUrl) {
    return Linking.canOpenURL(googleUrl).then(supported => {
      if (supported) {
        Linking.openURL(googleUrl);
      }
    });
  }

  isDatePast(date) {
    return moment(date).format(DAY_DATE_FORMAT) < this.getCurrentDate();
  }
}

export default new Util();
