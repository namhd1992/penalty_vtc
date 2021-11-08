import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react';
import Game from './game';
import Info from './info';
import BootScene from './bootScene';

export default class Duatop extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            initialize: true,
            game: {
                width: 800,
                height: 600,
                type: Phaser.AUTO,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                scene: [BootScene]
            }
          
        }
	}
    render() {
        const { initialize, game } = this.state;
        return (
          <IonPhaser game={game} initialize={initialize} style={{backgroundColor:"#fff"}}/>
        // <div>AAAA</div>
        )
    }
}