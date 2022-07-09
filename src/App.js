import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
    // const [active, setActice] = useState("home");
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>

                <Switch>
                    <Route exact path="/">
                        <Header></Header>
                        <Tabs></Tabs>
                        <Home category="all"></Home>
                    </Route>
                    <Route path="/tech">
                        <Header></Header>
                        <Tabs></Tabs>
                        <Home category="tech"></Home>
                    </Route>
                    <Route path="/sports">
                        <Header></Header>
                        <Tabs></Tabs>
                        <Home category="sports"></Home>
                    </Route>
                    <Route path="/health">
                        <Header></Header>
                        <Tabs></Tabs>
                        <Home category="health"></Home>
                    </Route>
                    <Route path="/politics">
                        <Header></Header>
                        <Tabs></Tabs>
                        <Home category="politics"></Home>
                    </Route>
                    <Route path="/create">
                        <Create></Create>
                    </Route>
                    <Route path="/blog/:id">
                        <BlogDetail></BlogDetail>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
