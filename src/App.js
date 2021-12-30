import { Route, Switch } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";
import MainHeader from "./components/MainHeader";

function App() {
  let DUMMY_POSTS = [
    {
      title: "This is note",
      desc: `This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.`,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VULsR6qyw_mkfi7EcKye9wHaD4%26pid%3DApi&f=1",
    },
    {
      title: "This is note",
      desc: `This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.`,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VULsR6qyw_mkfi7EcKye9wHaD4%26pid%3DApi&f=1",
    },
    {
      title: "This is note",
      desc: `This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.`,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VULsR6qyw_mkfi7EcKye9wHaD4%26pid%3DApi&f=1",
    },
  ];

  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/posts" exact>
          <Posts items={DUMMY_POSTS} />
        </Route>
        <Route path="/posts/:postId">
          <PostDetail />
        </Route>
        <Route path="/newpost">
          <NewPost />
        </Route>
        <Route path="/editpost/:postId">
          <EditPost />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
