import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react';
import BootScene from './bootScene';
import rotate from '../../../../assert/rotate.png';
import btn_fullscreen from '../../../../assert/btn-fullscreen.png';

import {
    isAndroid
  } from "react-device-detect";

var width = window.screen.width-80;
var height = window.screen.height;

export default class duatop extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            horizontal:false,
            innerWidth:0,
            initialize: true,
            fullScreen:false,
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
        this.toggleFullScreen()
	}

    toggleFullScreen() {
		console.log('AAAAAAAAAAAAA', document.fullscreenElement)
		var elem = document.getElementById("game");
		if (elem.requestFullscreen) {
			elem.requestFullscreen().catch(err => {
				console.log("error")
			});
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT).catch(err => {
				console.log("error")
			});
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen().catch(err => {
				console.log("error")
			});
		}
	}

    openFullScreen=()=>{
		this.toggleFullScreen();

		setTimeout(()=>{
			console.log('BBBBBB')
			this.toggleFullScreen();
			this.setState({fullScreen:true})
		}, 200);
	}

    render() {
        const { initialize, game , horizontal, fullScreen} = this.state;
        return (
            <div>
                <div id="game">
                    {(horizontal)?(
                        <div>
                            {(fullScreen)?(<IonPhaser game={game} initialize={initialize} style={{backgroundColor:"#092b2f", marginTop:"0px"}}/>):(
                                <div>
                                    <img src={btn_fullscreen} width="30%" alt="" onClick={this.openFullScreen} style={{marginTop:height/2-100, marginLeft:width/2-100}}/>
                                </div>
                            )}
                        </div>
                        
                    ):(
                        <img src={rotate} width="100%" alt="" />
                    )}
                </div>
            </div>
            
           
        )
    }
}