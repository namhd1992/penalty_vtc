import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react';
import BootScene from './bootScene';
import rotate from '../../../assert/rotate.png';

var width = window.innerWidth;
var height = window.innerHeight;

export default class loaitructiep extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            horizontal:false,
            innerWidth:0,
            initialize: true,
            game: {
                width: width,
                height: height,
                type: Phaser.AUTO,
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
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

    componentWillMount(){
        var user = JSON.parse(localStorage.getItem("user"));
        window.addEventListener("resize", this.setScreenOrientation);
		window.addEventListener("visibilitychange", this.visibilityChange);
        if(user===null){
			window.location.replace("/")
		}
		if(window.innerWidth < window.innerHeight){
			this.setState({horizontal: false})
		}else{
			this.setState({horizontal: true})
		}
        this.setState({innerWidth:window.innerWidth})
	}

    visibilityChange=()=>{
		if (document.hidden){
			this.setState({isChangetab:true})
		} else {
			this.setState({isChangetab:false})
		}
		
	}

	setScreenOrientation=()=>{
		const {innerWidth}=this.state;
		if(Math.abs(innerWidth - window.innerWidth) >100){
			window.location.reload();
			this.setState({innerWidth:window.innerWidth})
		}
	}

    render() {
        const { initialize, game , horizontal} = this.state;
        return (
            <div>
                {(horizontal)?(
                     <IonPhaser game={game} initialize={initialize} style={{backgroundColor:"#fff", marginTop:"0px"}}/>
                ):(
                    <img src={rotate} width="100%" alt="" />
                )}
            </div>
        )
    }
}