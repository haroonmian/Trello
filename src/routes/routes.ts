import Board from "pages/board"
import Home from "pages/home"
import { RoutesConstent } from "constants/routes"
import AddGroup from "pages/addGroup";

const routes = [{
    path: RoutesConstent.home,
    Component: Home,
    children: []
}, {
    path: RoutesConstent.board + RoutesConstent.boardquery,
    Component: Board,
    children: []
}, {
    path: RoutesConstent.other,
    Component: Home,
    children: []
}, {
    path: RoutesConstent.addGroup,
    Component: AddGroup,
    children: []
}, 

]

export default routes;
