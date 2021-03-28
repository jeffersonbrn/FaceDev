import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from "../../../components/PostCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author:{
      name: "Bruno Reis",
      username: "jeffersonbrn",
      avatar: './images/avatars/avatar.png'
    },
    title: "O que fazer: Viver o tempo ou esperar o tempo chegar?",
    date: "Março 27, 2021",
    description: "Pensar na vida como o agora ou pensar na vida como o futuro.",
    hashtags:"#time, #tempo, #thinking",
    image:'./images/posts/tempo.jpg'
  },
  {
    id: 2,
    author:{
      name: "Luana Paula",
      username: "luanapaularn",
      avatar: './images/avatars/avatar2.jpg'
    },
      title: "Eu amo meu futuro marido incondicionalmente",
      date: "Março 27, 2021",
      description: "Ele é quase meu oxigênio",
      hashtags:"#time, #love, #thinking",
      image:'./images/posts/amor.jpg'
  }
];

function Feed() {
  const classes = useStyles();

  return(
  <div className={classes.root} >
    {
      posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))
    }
  </div>
  )
}

export default Feed;
