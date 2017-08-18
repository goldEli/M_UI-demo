/**
 *  create by miaoyu  2017/8/14 
 */
import React from 'react';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

export default class SideLeftMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  showDetail = (options) => {
    const key = options.key,
          text = options.item.props.children;
    
    console.log(key, text)      
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
       
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub2']}
          mode="inline"
          onClick = {this.showDetail}
        >
          <SubMenu key="sub1" title={<span>Get Start</span>}>
            <Menu.Item key="5">Installation</Menu.Item>
            <Menu.Item key="6">Usage</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>Component</span>}>
            <Menu.Item key="9">Button</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }

} 