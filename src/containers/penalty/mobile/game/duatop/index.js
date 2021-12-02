import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react';
import Game from './game';
import Info from './info';
import BootScene from './bootScene';

var width = window.screen.width;
var height = window.screen.height;

export default class Duatop extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            initialize: true,
            game: {
                width: width,
                height: height,
                type: Phaser.AUTO,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                scene: [BootScene],
                physics:{
                    default:'arcade',
                    arcade:{
                        gravity:{y:0},
                        debug:false
                    }
                }
            }
          
        }
	}
    render() {
        const { initialize, game } = this.state;
        return (
          <IonPhaser game={game} initialize={initialize} style={{backgroundColor:"#fff", marginTop:"0px"}}/>
        // <div>AAAA</div>
        )
    }
}