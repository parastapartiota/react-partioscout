import React from 'react';
import renderer from 'react-test-renderer';
import * as T from './typography';

describe('PartioScoutTypography', () => {
  it('is truthy', () => {
    expect(T.PartioScoutTypography).toBeTruthy();
  });

  it('renders <div> by default', () => {
    const wrapper = renderer
      .create(<T.PartioScoutTypography>test</T.PartioScoutTypography>)
      .toJSON();
    expect(wrapper.type).toEqual('div');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });

  it('can render <main>', () => {
    const wrapper = renderer
      .create(<T.PartioScoutTypography el="main">test</T.PartioScoutTypography>)
      .toJSON();
    expect(wrapper.type).toEqual('main');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });
});

describe('Heading', () => {
  it('is truthy', () => {
    expect(T.Heading).toBeTruthy();
  });

  it('renders <h1> by default', () => {
    const wrapper = renderer.create(<T.Heading>test</T.Heading>).toJSON();
    expect(wrapper.type).toEqual('h1');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });

  it('can render <h2>', () => {
    const wrapper = renderer
      .create(<T.Heading el="h2">test</T.Heading>)
      .toJSON();
    expect(wrapper.type).toEqual('h2');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });
});

describe('Text', () => {
  it('is truthy', () => {
    expect(T.Heading).toBeTruthy();
  });

  it('renders <p> by default', () => {
    const wrapper = renderer.create(<T.Text>test</T.Text>).toJSON();
    expect(wrapper.type).toEqual('p');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });

  it('can render <div>', () => {
    const wrapper = renderer.create(<T.Text el="div">test</T.Text>).toJSON();
    expect(wrapper.type).toEqual('div');
    expect(wrapper.props.className).toBeDefined();
    expect(wrapper.children).toMatchSnapshot();
  });
});
