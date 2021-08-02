import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { contactsReducer } from './contacts';
import { authReducer } from './auth';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ["filter"],
// };


const middleware = [
    ...getDefaultMiddleware({

        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },

    }),
    // logger
];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],

}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        // contacts: persistReducer(contactsPersistConfig, contactsReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',

});

const persistor = persistStore(store)

// export default store;
export default { store, persistor };