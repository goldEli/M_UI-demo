/**
 *  create by miaoyu  2017/8/16
 */

import React from 'react';
import { Table } from 'antd';

export default class PropertyTable extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
          columns: [{
                      title: 'Name',
                      dataIndex: 'name',
                      key: 'name',
                    }, {
                      title: 'Type',
                      dataIndex: 'type',
                      key: 'type',
                    }, {
                      title: 'DefaultValue',
                      dataIndex: 'defaultValue',
                      key: 'defaultValue',
                    }, {
                      title: 'Description',
                      dataIndex: 'description',
                      key: 'description',
                    }]  
           , dataSource: []       
      }
    }

    componentWillMount() {
      const { propertys } = this.props;
      if (!propertys) return;

      const arr = [];

      propertys.forEach(function(element, key) {
          let {name, type, defaultValue, description} = element;
          arr.push({       
            key,
            name,
            type,
            defaultValue,
            description
          })  
      }, this);
      
      this.setState({
        dataSource: arr
      }) 
    }

    render() {
        const { dataSource, columns } = this.state;
        return(
           
            <Table pagination = {false} dataSource={dataSource} columns={columns} />

        )
    }
}

