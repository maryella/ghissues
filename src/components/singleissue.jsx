import React, { Component } from "react";
import { loadData } from "../util/loadData";

export class Issue extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.getIssue(this.props.match.params.id);
  }

  getIssue = async id => {
    const data = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues/${id}`
    );
    const issue = data;

    this.setState({
      data: issue
    });
  };

  render() {
    const { data } = this.state;
    console.log("user: ");
    return (
      <>
        <div>
          <h4>{data.title}</h4>
          <h5>Created by </h5>
          <p>{data.body}</p>
        </div>
      </>
    );
  }
}

export default Issue;
