import React, { Component } from "react";
import { loadData } from "../util/loadData";

export class IssueList extends Component {
  state = {
    issues: []
  };

  async componentDidMount() {
    const issue_data = await loadData(
      `https://api.github.com/repos/facebook/create-react-app/issues`
    );
    this.setState({
      issues: issue_data
    });
  }

  render() {
    const issues = this.state.issues;
    console.log(issues[0]);

    return (
      <>
        <ul className="list-group">
          {issues.map(issue => {
            return (
              <li key={issue.id} className="list-group-item">
                <a
                  href={issue.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>{issue.title}</h5>
                </a>
                <p>
                  Created by {issue.user.login} at {issue.created_at}
                </p>
              </li>
            );
          })}
        </ul>
        )
      </>
    );
  }
}

export default IssueList;
