import React from 'react';
import {Route, Switch} from "react-router";

import BtcConverterPage from "./pages/btc-converter-page/btc-converter-page";

import {ROUTES} from "./constants";

const App: React.FC = () => (
    <div>
        <Switch>
            <Route path={ROUTES.BTC_CONVERTER_PAGE} component={BtcConverterPage} />
        </Switch>
    </div>
);

export default App;
