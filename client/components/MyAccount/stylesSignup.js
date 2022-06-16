import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    alignItems: "center",
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },

  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "deepskyblue",
    fontWeight: "bolder",
    color: "white",
  },
  buttonNoComplete: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "gainsboro",
    color: "gray",
    fontWeight: "bolder",
  },
  signuphook: {
    textAlign: "center",
    fontWeight: "bolder",
    fontSize: "2em",
    marginTop: "12%",
  },
  underSignUpHook: {
    marginTop: "5%",
  },
}));
