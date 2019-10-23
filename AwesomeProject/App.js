import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NoticiaView from './views/NoticiaView.js';
import Noticia from './components/Noticia.js';

export default class Ejemplo1 extends Component {
  
  render() {
    n = new Noticia("1",
                    "Lorem ipsum",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue elit ut purus porttitor ornare. Mauris vel pellentesque velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean mi eros, vehicula in euismod id, faucibus nec velit. Aliquam erat volutpat. Cras ultricies, dolor in ornare congue, ex dolor maximus est, non rutrum tellus lectus ultrices lectus. Quisque rhoncus, nisi in dictum fringilla, urna metus blandit lorem, sed pharetra dolor massa porta tortor. Morbi rhoncus velit a pharetra tincidunt. Curabitur ultricies dolor a tellus condimentum, vel consectetur leo condimentum. Etiam volutpat mi at ante efficitur, non bibendum augue posuere.\
\
                    Fusce fermentum porttitor erat a ultrices. Nullam vitae sem rutrum, placerat elit quis, faucibus quam. Donec quis nisi non neque pellentesque lobortis vel ac odio. Nulla in nunc vehicula, sollicitudin ligula vitae, gravida felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam lorem dolor, porttitor ac elit ullamcorper, cursus elementum enim. Nam non fringilla elit. Vestibulum elementum malesuada malesuada. Aliquam hendrerit dapibus nisi ac tincidunt. Integer mauris ligula, euismod vel vulputate id, rutrum at lectus. Proin ut rhoncus velit. Etiam vulputate mi ac turpis finibus, eleifend iaculis velit pellentesque. Nunc tempor diam vestibulum orci cursus ultricies in molestie nibh. Pellentesque sed pretium sem. Sed ex dui, ultrices non accumsan eu, tempor sit amet diam.\
                    \
                    Pellentesque leo lacus, dictum eget tempus at, malesuada eget tortor. Quisque tempor eu ante eu pretium. Morbi justo lorem, ornare ut erat sit amet, pretium sodales purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non nunc et ante blandit commodo. Phasellus a leo ut mauris lacinia scelerisque. Sed non accumsan massa. Cras placerat ac libero sit amet condimentum. Ut velit lacus, vulputate a pretium a, ultrices in enim.",
                     "crimen",
                     "Autor",
                     "23/10/2019")
    return (
      <View style={{ flex: 1}}>
        <NoticiaView noticia = {n} />
      </View>
    );
  }
}
