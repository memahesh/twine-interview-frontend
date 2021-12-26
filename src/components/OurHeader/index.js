import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useHistory } from "react-router-dom";

import routes from "routes";

const OurHeader = () => {
  const history = useHistory();
  return (
    <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item
            key="polls"
            onClick={() => history.push(routes.cpoHqPolls)}
          >
            Polls
          </Menu.Item>
          <Menu.Item
            key="forum"
            onClick={() => history.push(routes.cpoHqForum)}
          >
            Forum
          </Menu.Item>
          <Menu.Item
            key="dashboard"
            onClick={() => history.push(routes.dashboard)}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="explorer"
            onClick={() =>
              history.push(routes.explorer.replace("/:reportId?", ""))
            }
          >
            Explorer
          </Menu.Item>
        </Menu>
      </Header>
      );
}

export default OurHeader;