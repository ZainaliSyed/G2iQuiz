// @flow

const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";
const CANCEL = "CANCEL";

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach(type => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const LOGOUT = "LOGOUT";
export const NETWORK_INFO = "NETWORK_INFO";
export const DEVICE_LOCATION = "DEVICE_LOCATION";

export const USER = createRequestTypes("USER");
export const EMPTY = createRequestTypes("EMPTY");
export const NEARBY = createRequestTypes("NEARBY");
export const EVENT_DETAILS = createRequestTypes("EVENT_DETAILS");

export const MY_FRIENDS_PENDING = createRequestTypes("MY_FRIENDS_PENDING");
export const MY_FRIENDS_CONFIRM = createRequestTypes("MY_FRIENDS_CONFIRM");
export const USER_FRIENDS = createRequestTypes("USER_FRIENDS");

export const SEARCH = createRequestTypes("SEARCH");
export const MY_EVENTS = createRequestTypes("MY_EVENTS");
export const USER_EVENT = createRequestTypes("USER_EVENT");
export const FRIEND_REQUEST = createRequestTypes("FRIEND_REQUEST");
export const ADD_FRIEND_REQUEST = createRequestTypes("ADD_FRIEND_REQUEST");
export const FRIEND_DELETE = createRequestTypes("FRIEND_DELETE");
export const UNFRIEND = createRequestTypes("UNFRIEND");
export const FRIEND_CONFIRM = createRequestTypes("FRIEND_CONFIRM");

export const EVENT_CREATE = createRequestTypes("EVENT_CREATE");
export const EVENT_UPDATE = createRequestTypes("EVENT_UPDATE");
export const EVENT_CANCEL = createRequestTypes("EVENT_CANCEL");

export const GET_EVENT_COMMENTS = createRequestTypes("GET_EVENT_COMMENTS");
export const EVENT_COMMENT = createRequestTypes("EVENT_COMMENTS");
export const LIKE_COMMENT = createRequestTypes("LIKE_COMMENT");
export const LIKE_EVENT_COMMENT = createRequestTypes("LIKE_EVENT_COMMENT");

export const EVENT_CREATE_CLEAR = "EVENT_CREATE_CLEAR";
export const NEARBY_LIKE = "NEARBY_LIKE";

export const TIMELINE = createRequestTypes("TIMELINE");

export const LIKE_EVENT = createRequestTypes("LIKE_EVENT");
export const GOING = createRequestTypes("GOING");

export const ATTACHMENT_FILE = createRequestTypes("ATTACHMENT_FILE");
export const ATTACHMENT_FILE_CLEAR = "ATTACHMENT_FILE";

export const NOTIFICATIONS = createRequestTypes("NOTIFICATIONS");
export const NOTIFICATION_STATUS = createRequestTypes("NOTIFICATION_STATUS");
export const UPDATE_LOCATION = createRequestTypes("UPDATE_LOCATION");

export const REPORT_EVENT = createRequestTypes("REPORT_EVENT");
export const INVITE_FRIENDS = createRequestTypes("INVITE_FRIENDS");

export const USER_STATUS_UPDATE = createRequestTypes("USER_STATUS_UPDATE");
export const USER_DATA_GET = createRequestTypes("USER_DATA_GET");

export const GOING_USER_LIST = createRequestTypes("GOING_USER_LIST");
export const GOING_EVENTS = createRequestTypes("GOING_EVENTS");
export const NEARBY_FRIENDS = createRequestTypes("NEARBY");
export const NEARBY_EVENTS = createRequestTypes("NEARBY_EVENTS");

export const EVENT = createRequestTypes("EVENT");
export const EVENT_UPDATE_LOCALLY = "EVENT_UPDATE_LOCALLY";

// useless
export const USER_LATITUDE_LONGITUDE = createRequestTypes(
  "USER_LATITUDE_LONGITUDE"
);
export const CURRENT_LOCATION = createRequestTypes("CURRENT_LOCATION");
