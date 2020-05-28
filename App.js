import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: ['satu', 'dua', 'tiga'],
  },
];

export default class App extends Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = (section) => {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = (section, _, isActive) => {
    const arrow = isActive ? (
      <Image
        source={{
          uri:
            'https://i7.uihere.com/icons/485/534/377/ic-arrowup-8fb79883b935f092f363c5f7f6421b2d.png',
        }}
        style={{height: 24, width: 24}}
      />
    ) : (
      <Image
        source={{uri: 'https://cdn.onlinewebfonts.com/svg/img_365811.png'}}
        style={{height: 24, width: 24}}
      />
    );
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{section.title}</Text>
        {arrow}
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View>
        {section.content.map((item, index) => (
          <Text>{item}</Text>
        ))}
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  render() {
    return (
      <View style={Styles.container}>
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
          touchableComponent={TouchableNativeFeedback}
          duration={100}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
