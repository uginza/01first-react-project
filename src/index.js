import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./redux/State";

rerenderEntireTree(state);
