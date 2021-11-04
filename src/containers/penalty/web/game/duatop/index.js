import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react';

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
                scene: {
                    init: function() {
                        // this.cameras.main.setBackgroundColor('#24252A')
                    },
                    create: function() {
                        this.helloWorld = this.add.text(
                            this.cameras.main.centerX, 
                            this.cameras.main.centerY, 
                            "Hello World", { 
                            font: "40px Arial", 
                            fill: "#ffffff" 
                            }
                        );
                        this.helloWorld.setOrigin(0.5);
                    },
                    update: function() {
                        // this.helloWorld.angle += 2;
                        this.helloWorld.rotation += 0.05;
                    }
                }
            }
          
        }
	}
    render() {
        const { initialize, game } = this.state;
        return (
          <IonPhaser game={game} initialize={initialize} />
        // <div>AAAA</div>
        )
    }
}