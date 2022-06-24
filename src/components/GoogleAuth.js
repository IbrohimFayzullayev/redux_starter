import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id:
            "251127099104-c8j5ofh18h7jh9j63hp612rogqu0abto.apps.googleusercontent.com",
          plugin_name: "Twitch Clone",
          scope: "email",
        })
        .then(() => {
          this.a = window.gapi.auth2.getAuthInstance();
          this.changeIsSigned(this.a.isSignedIn.get());
          this.a.isSignedIn.listen(this.changeIsSigned());
        });
    });
  }

  changeIsSigned = (qanday) => {
    // console.log(this.props);
    const userId = this.a.currentUser.get().getBasicProfile().getId();
    const fullName = this.a.currentUser.get().getBasicProfile().getName();
    const img = this.a.currentUser.get().getBasicProfile().getImageUrl();
    if (qanday) {
      this.props.signInAction(userId, fullName, img);
    } else if (!qanday) {
      this.props.signOutAction();
    }
  };

  renderHTML() {
    console.log(this.props);
    if (this.props.kirganmi === null) {
      return <div>Kuting !</div>;
    } else if (this.props.kirganmi === true) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => {
              this.signOutCLick();
            }}
            className="ui button google red"
          >
            <i className="google icon"></i> Sign Out
          </button>
          <img
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            alt=""
            src={this.a.currentUser.get().getBasicProfile().getImageUrl()}
          />
          <h3 style={{ marginTop: "0" }}>
            {this.a.currentUser.get().getBasicProfile().getName()}
          </h3>
        </div>
      );
    } else if (this.props.kirganmi === false) {
      return (
        <button
          onClick={() => {
            this.signInCLick();
          }}
          className="ui button google green"
        >
          <i className="google icon"> Sign In</i>{" "}
        </button>
      );
    }
  }
  signInCLick = () => {
    this.a.signIn();
  };
  signOutCLick = () => {
    this.a.signOut();
  };
  render() {
    return <div className="ui item">{this.renderHTML()}</div>;
  }
}

export default GoogleAuth;
