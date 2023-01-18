import { Box, GlobalStyles } from '@bigcommerce/big-design';
import { theme as defaultTheme } from '@bigcommerce/big-design-theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Header from '../components/header';
import SessionProvider from '../context/session';

import  {configureStore, combineReducers} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import authReducer from "../redux/authRedux";
import bigcommerceProductsReducer from "../redux/bigcommerceProductsRedux";
import bigcommerceCategoriesReducer from "../redux/bigcommerceCategoriesRedux";
import netsuiteProductsReducer from "../redux/netsuiteProductsRedux";
import webhookReducer from "../redux/webhookRedux.js"
import bigcommerceWidgetsReducer from "../redux/bigcommerceWidgetsRedux";

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const logTitle = " MyApp() ";
    try {
        const persistConfig = {
            key: 'root',
            storage
        };
        const rootReducer = combineReducers({ 
            auth: authReducer,
            bigcommerceProducts: bigcommerceProductsReducer,
            bigcommerceCategories: bigcommerceCategoriesReducer,
            bigcommerceWidgets: bigcommerceWidgetsReducer,
            netsuiteProducts: netsuiteProductsReducer,
            webhook: webhookReducer
        });
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = configureStore({
            reducer: persistedReducer,
            middleware: [thunk]
        });
        const persistor = persistStore(store)
    
        console.log(logTitle, "EXECUTED!")
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <ThemeProvider theme={defaultTheme}>
                        <GlobalStyles />
                        <Box
                            marginHorizontal={{ mobile: 'none', tablet: 'xxxLarge' }}
                            marginVertical={{ mobile: 'none', tablet: "xxLarge" }}
                        >
                            <Header />
                            <SessionProvider>
                                <Component {...pageProps} />
                            </SessionProvider>
                        </Box>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        );

    } catch(e) {
        console.error("ERROR IN"+logTitle, e)
    }
};

export default MyApp;
