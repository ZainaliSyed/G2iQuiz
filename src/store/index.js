// @flow

import * as storage from "redux-storage";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import filter from "redux-storage-decorator-filter";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import createEngine from "redux-storage-engine-reactnativeasyncstorage";

import sagas from "../sagas";
import reducers from "../reducers";

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true
});

export default function configureStore(onComplete: Function) {
  const engine = filter(
    createEngine("AppTree"),
    [
      "whitelisted-key",
      ["user", "data"],
      ["timeline", "data"],
      ["myEvent", "data"],
      ["userDataGet", "data"],
      ["userStatusUpdate", "userStatus"],
      ["going", "data"],
      ["reportEvent", "data"],
      ["inviteFriends", "data"],
      ["notifications", "data"],
      ["friendDelete", "data"],
      ["myFriends", "data"],
      ["myEvents", "data"],
      ["userFriends", "data"],
      ["userEvents", "data"],
      ["nearByEvents", "data"],
      ["eventComments", "data"],
      ["events", "data"],
      ["deviceLocation", "location"]
    ],
    []
  );
  const storeMiddleware = storage.createMiddleware(engine);
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    storage.reducer(reducers),
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, storeMiddleware, logger)
    )
  );

  if (isDebuggingInChrome) {
    window.store = store;
  }

  const load = storage.createLoader(engine);
  load(store)
    .then(onComplete)
    .catch(() =>
      console.log("Failed to load previous state @ configureStore.js#44")
    );

  sagaMiddleware.run(sagas);

  return store;
}
