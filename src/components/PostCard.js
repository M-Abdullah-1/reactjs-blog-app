import * as Comp from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postActions } from "../store/index";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  actionButtons: {
    display: "flex",
    justifyContent: "end",
  },
}));

const PostCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const editPostUrl = `/editpost/${props.postId}`;
  const postDetailUrl = `/posts/${props.postId}`;

  const cardIconButtonFadeTime = 1000;

  return (
    <Comp.Paper elevation={10}>
      <Comp.Card>
        <Comp.CardHeader
          avatar={
            <Comp.Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7MOL8Bdx7k87oMkbhgJzawHaJ3%26pid%3DApi&f=1"></Comp.Avatar>
          }
          // action={
          //   <Comp.IconButton>
          //     <MoreVertIcon />
          //   </Comp.IconButton>
          // }
          title={props.postTitle}
          // subheader="Sep 4 1992"
        ></Comp.CardHeader>
        <Comp.CardMedia component="img" height="240" image={props.postImg} />
        <Comp.CardContent>
          <Comp.Typography variant="body2" color="textSecondary">
            {props.postDesc.slice(0, 250)}.....
          </Comp.Typography>
        </Comp.CardContent>
        <Comp.CardActions className={classes.actionButtons}>
          <Comp.Tooltip
            title="View"
            placement="top-start"
            TransitionComponent={Comp.Fade}
            TransitionProps={{ timeout: cardIconButtonFadeTime }}
            arrow
          >
            <Comp.IconButton color="primary">
              <Comp.Avatar>
                <PreviewIcon onClick={() => history.push(postDetailUrl)} />
              </Comp.Avatar>
            </Comp.IconButton>
          </Comp.Tooltip>
          <Comp.Tooltip
            title="Edit"
            placement="top-start"
            TransitionComponent={Comp.Fade}
            TransitionProps={{ timeout: cardIconButtonFadeTime }}
            arrow
          >
            <Comp.IconButton>
              <Comp.Avatar>
                <EditIcon onClick={() => history.replace(editPostUrl)} />
              </Comp.Avatar>
            </Comp.IconButton>
          </Comp.Tooltip>
          <Comp.Tooltip
            title="Delete"
            placement="top-start"
            TransitionComponent={Comp.Fade}
            TransitionProps={{ timeout: cardIconButtonFadeTime }}
            arrow
          >
            <Comp.IconButton>
              <Comp.Avatar>
                <DeleteIcon
                  onClick={() => dispatch(postActions.deleteOne(props.postId))}
                />
              </Comp.Avatar>
            </Comp.IconButton>
          </Comp.Tooltip>
        </Comp.CardActions>
      </Comp.Card>
    </Comp.Paper>
  );
};

export default PostCard;
