import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { MaterialEditorForm } from './MaterialEditorForm/MaterialEditorForm';
import { MaterialList } from './MaterialList/MaterialList';
import * as API from 'services/api';

export class App extends Component {
  state = {
    materials: [],
    // isLoading: false,
    // error: false,
  };
  addMaterial = async values => {
    const materials = await API.addMaterial(values);
    this.setState(state => ({ materials: [...state.materials, materials] }));
  };

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {/* <MaterialList materials={this.state.materials} /> */}
      </Layout>
    );
  }
}
