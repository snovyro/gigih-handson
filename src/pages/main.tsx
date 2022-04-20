import * as React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Trending from "./trend";
import SearchBar from "./search";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../components/CSS/style.css";

export default function Main() {
  return (
    <div className="base">
      <Router>
        <Stack className="upperbar" direction="row" spacing={2}>
          <Button variant="outlined">
            <Link className="nodeco" to="/">Search</Link>
          </Button>
          <br></br>
          <Button variant="outlined">
            <Link className="nodeco" to="/trending-giphy">Trending</Link>
          </Button>
        </Stack>
        <Switch>
          <Route path="/trending-giphy">
            <Trending />
          </Route>
          <Route path="/">
            <SearchBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
