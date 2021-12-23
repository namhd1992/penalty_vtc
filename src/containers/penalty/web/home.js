import React from 'react'
import { bindActionCreators } from 'redux'
import Pagination from "react-js-pagination";
import Ultilities from '../../../Ultilities/global'
import { Link } from "react-router-dom";
import { Modal } from 'bootstrap'
import axios from 'axios';
import { connect } from 'react-redux';
import bigInt from "big-integer";
import './css/style_web.css';
import {
	getTuDo,
	getHistoryTuDo,
	getMoreSessions,
	getVinhDanh,
	getLuckyInfo,
	userLogout,
	getItemAward,
	viewItemAward,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	sessionInPlay,
	sessionUpcomming,
	betting,
	getBalances,
	checkPlace,
	getContentGuide
} from '../../../modules/lucky'
import {
	getData
} from '../../../modules/profile'

import loading from './images/loading.gif';
import btn_nap_scoin from './images/btn-nap-scoin.png';

import img_ingame from './images/img-ingame.png';
import img_diem from './images/img-diem.png';
import img_giftcode from './images/img-giftcode.png';
import img_toup_scoin from './images/img-toup-scoin.png';
import img_thescoinvoucher from './images/img-thescoinvoucher.png';

import avatar from './images/avatar.png';
import bg_bangxephang from './images/bg-bangxephang.png';
import bg_banthang from './images/bg-banthang.png';
import bg_bottom from './images/bg-bottom.png';
import bg_bvd from './images/bg-bvd.png';
import bg_giaithuong from './images/bg-giaithuong.png';
import bg_logo_group from './images/bg-logo-group.png';
import bg_page from './images/bg-page.png';
import bg_page_play from './images/bg-page-play.png';
import bg_popup_gt_top from './images/bg-popup-gt-top.png';
import bg_popup_hd from './images/bg-popup-hd.png';
import bg_popup_hd_body from './images/bg-popup-hd-body.png';
import bg_popup_hd_bottom from './images/bg-popup-hd-bottom.png';
import bg_popup_hd_top from './images/bg-popup-hd-top.png';
import bg_popup_mq_top from './images/bg-popup-mq-top.png';
import bg_popup_tb_top from './images/bg-popup-tb-top.png';
import bg_popup_td_top from './images/bg-popup-td-top.png';
import bg_taikhoan from './images/bg-taikhoan.png';
import bg_title_loaitructiep from './images/bg-title-loaitructiep.png';
import bg_top from './images/bg-top.png';
import bg_top_menu from './images/bg-top-menu.png';
import btn_dangnhap from './images/btn-dangnhap.png';
import btn_dang_nhap from './images/btn-dang-nhap.png';
import btn_duatop from './images/btn-duatop.png';
import btn_giathuvang from './images/btn-giathuvang.png';
import btn_hdmtscoin from './images/btn-hdmtscoin.png';
import btn_hotline19001104 from './images/btn-hotline19001104.png';
import btn_loaitructiep from './images/btn-loaitructiep.png';
import btn_napgame from './images/btn-napgame.png';
import btn_ntbsk from './images/btn-ntbsk.png';
import btn_suttudong from './images/btn-suttudong.png';
import logo_scoin from './images/logo_scoin.png';
import logo_scoinvip from './images/logo_scoinvip.png';
import logo_splay from './images/logo_splay.png';
import p_bg_bottom from './images/p-bg-bottom.png';
import p_bg_top from './images/p-bg-top.png';
import vip_kimcuong from './images/vip-kimcuong.png';
import vip_bachkim from './images/vip-bachkim.png';
import vip_vang from './images/vip-vang.png';
import vip_bac from './images/vip-bac.png';
import vip_dong from './images/vip-dong.png';
import chuavip from './images/chuavip.png';

import img_card10k from './images/img-card10k.png';
import img_card20k from './images/img-card20k.png';
import img_card50k from './images/img-card50k.png';
import img_card100k from './images/img-card100k.png';
import img_card200k from './images/img-card200k.png';
import img_card300k from './images/img-card300k.png';
import img_card500k from './images/img-card500k.png';
import img_card1000k from './images/img-card1000k.png';
import img_card2000k from './images/img-card2000k.png';
import img_card5000k from './images/img-card5000k.png';


import img_dacochu from './images/img-dacochu.png';




// import muiten from './images/muiten.png';
import ReactResizeDetector from 'react-resize-detector'
// import spin from './images/spin.gif';
import $ from 'jquery';
import 'bootstrap';
import {
	osVersion,
	osName,
	mobileModel
  } from "react-device-detect";

const styles = {
	paper: {
		background: "#fff",
	},
};

const info={
	"lang": "vi",
	"osType": osName.toLocaleUpperCase(),
	"deviceId": "00000000-0000-0000-0000-000000000000",
	"deviceName": mobileModel,
	"osVersion": osVersion,
	"appVersion": "1.0",
	"requestId": 365603310,
}

let modal_datcuoc={};
let modal_huongdan={};
let modal_tudo={};
let modal_giaithuong={};
let modal_tb_err={};
let modal_tb={};
let modal_moqua={};
let modal_moqua_bank={};





class Lucky_Rotation extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			limit: 10,
			offsetTuDo: 0,
			offsetCode: 0,
			offsetVinhDanh: 0,
			numberShow:15,
			isAll:true,
			stop:true,
			itemOfSpin:[],
			luckySpin:{},
			isLogin:false,
			activeVinhDanh:1,
			activeTuDo:1,
			activeHistory:1,
			countVinhDanh:0,
			countHistory:0,
			countTuDo:0,
			dataVinhDanh:[],
			dataTuDo:[],
			listVinhDanh:[],
			listTuDo:[],
			listHistory:[],
			width:0,
			numberPage:3,
			height:0,
			img_width:0,
			img_height:0,
			inputValue: '',
			isSpin:false,
			closeAuto:true,
			message_error:'',
			server_err:false,
			finished:false,
			user:{},
			dataItem:{},
			waiting:false,
			innerWidth:0,
			type:1, 
			tab_tudo: true,
			listSesstions:[],
			tab_1:true,
			tab_2:false,
			tab_3:false,
			tab_4:false,
			tab_5:false,
			bxh_tab_1:true,
			bxh_tab_2:false,
			bxh_tab_3:false,
			content:'',
			rollup:true,
			message_rollup:'',
			dataInfoDonate:{},
			type_action:'',
			showRollup:false,
			listSanqua:[],
			message_sanqua_empty:'',
			message_diemdanh:'',
			info_seesion:{},
			points:0,
			title_module:'',
			type_modeId:0,
			user_data:{},
			contentGuide:'',
			timeServer:0
		};
	}
	componentWillMount(){
		var user = JSON.parse(localStorage.getItem("user"));
		this.onResize();
		window.addEventListener("resize", this.setScreenOrientation);
		window.removeEventListener('scroll', this.handleScroll);
		this.setState({innerWidth:window.innerWidth});
		if(user!==null){
			if(user.Gifts>0){
				this.setState({content:	`Có <b>${user.Gifts}</b> món quà chưa mở`})
				setTimeout(()=>{
					$('.popover-visible-trigger').popover('hide').off('click'); 
				}, 10000);
				
			}
		}
	}



	componentDidMount(){
		var user = JSON.parse(localStorage.getItem("user"));
		// var update29=localStorage.getItem("update29");
		// if(update29===null){
		// 	$('#Modalbanner').modal('show');
		// }
		// $('#Modalbanner').modal('show');


		// localStorage.setItem("update29", true);
	

		this.getVinhDanh(1,1);
		// $('.popover-visible-trigger').popover('show').off('click'); 


		if (user !== null) {
			this.setState({isLogin:true, user:user})
		} 

		// if (user !== null) {
		// 	this.props.checkRollup(user.access_token).then(()=>{
		// 		var data=this.props.dataCheckRollup;
		// 		if(data!==undefined){
		// 			if(data.Status===0){
		// 				this.setState({showRollup: true})
		// 			}else{
		// 				this.setState({showRollup: false})
		// 			}
		// 		}
		// 	})
		// }else {
		// 	this.setState({showRollup: true})

		// }
		modal_datcuoc = new Modal(document.getElementById('datcuoc_web'));
		modal_giaithuong = new Modal(document.getElementById('gt_web'));
		modal_huongdan = new Modal(document.getElementById('huongdan_web'));
		modal_moqua = new Modal(document.getElementById('mq_web'));
		modal_moqua_bank = new Modal(document.getElementById('mq_bank_web'));
		modal_tb = new Modal(document.getElementById('tb_web'));
		modal_tb_err = new Modal(document.getElementById('tb_err'));
		modal_tudo = new Modal(document.getElementById('td_web'));
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillReceiveProps(nextProps){
		if(this.props.waiting !== nextProps.waiting){
			this.setState({waiting:nextProps.waiting})
			setTimeout(()=>{ 
				this.setState({waiting:false})
			}, 3000);
		}
	}
	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}
	setScreenOrientation=()=>{
		const {innerWidth}=this.state;
		if(Math.abs(innerWidth - window.innerWidth) >100){
			window.location.reload();
			this.setState({innerWidth:window.innerWidth})
		}
	}


	// showModalChuyenTieu=()=>{
	// 	var user = JSON.parse(localStorage.getItem("user"));
	// 	document.getElementById("code").value="";
	// 	document.getElementById("username").value="";
	// 	document.getElementById("numberDart").value="";
	// 	if (user !== null) {
	// 		this.props.getInfoDonate(user.access_token).then(()=>{
	// 			var data=this.props.dataInfoDonate;
	// 			if(data!==undefined){
	// 				if(data.Status===0){
	// 					this.setState({dataInfoDonate:data.Data}, ()=>{
	// 						$('#Modalchuyenphitieu').modal('show');
	// 					})
	// 				}
	// 			}
	// 		})
	// 	}else {
	// 		$('#tb').modal('show');
	// 	}
	// }

	onResize=()=>{
		if (window.innerWidth <= 320) {
			this.setState({ width: 210, height: 235, img_width:170, img_height:170});
		}
		if (window.innerWidth > 320 && window.innerWidth <= 360) {
			this.setState({ width: 252, height: 282, img_width:200, img_height:200});
		}
		if (window.innerWidth > 360 && window.innerWidth <= 380) {
			this.setState({ width: 293, height: 330, img_width:235, img_height:235});
		}
		if (window.innerWidth > 380 && window.innerWidth <= 480) {
			this.setState({ width: 344, height: 383, img_width:275, img_height:275});
		}
		if (window.innerWidth > 480 && window.innerWidth <= 600) {
			this.setState({ width: 335, height: 375, img_width:267, img_height:267});
		}
		if (window.innerWidth > 600 && window.innerWidth <= 640) {
			this.setState({ width: 336, height: 376, img_width:270, img_height:270});
		}
		if (window.innerWidth > 640 && window.innerWidth <= 768) {
			this.setState({ width: 470, height: 525, img_width:375, img_height:375});
		}
		if (window.innerWidth > 768 && window.innerWidth < 780) {
			this.setState({ width: 504, height: 563, img_width:405, img_height:405});
		}

		if (window.innerWidth >= 780 && window.innerWidth <= 790) {
			this.setState({ width: 469, height: 524, img_width:375, img_height:375});
		}

		if (window.innerWidth > 790 && window.innerWidth <= 800) {
			this.setState({ width: 469, height: 522, img_width:372, img_height:372});
		}

		if (window.innerWidth > 800 && window.innerWidth <= 900) {
			this.setState({ width: 504, height: 563, img_width:405, img_height:405});
		}

		if (window.innerWidth > 900 && window.innerWidth < 1024) {
			this.setState({ width: 590, height: 653, img_width:470, img_height:470});
		}

		if (window.innerWidth >= 1024) {
			this.setState({ width: 586, height: 657, img_width:470, img_height:470});
		}
	}

	getVinhDanh=(type, pageNumber)=>{
		const {limit}=this.state;
		var data= {...info}
		data.gameId=1;
		data.serverId=1;
		data.modeId=type;
		data.type=5;
		data.fromDate=-1;
		data.toDate=-1;
		data.pageIndex=pageNumber-1;
		data.pageSize=10;
		switch (type) {
			case 1:
				this.setState({bxh_tab_1:true, bxh_tab_2:false, bxh_tab_3:false})
				break;
			case 2:
				this.setState({bxh_tab_1:false, bxh_tab_2:true, bxh_tab_3:false})
				break;
			case 3:
				this.setState({bxh_tab_1:false, bxh_tab_2:false, bxh_tab_3:true})
				break;
		
			default:
				break;
		}
		this.setState({type:type, listVinhDanh:[], countVinhDanh:0}, ()=>{
			this.props.getVinhDanh(data).then(()=>{
				
				var data=this.props.dataVinhDanh;
				if(data!==undefined){
					if(data.code > 0){
						this.setState({listVinhDanh:data.data.items, countVinhDanh:data.data.totalItems})
					}else{
						this.setState({message_error:data.message}, ()=>{
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tb_err.show();
					})
				}
			});
		})
	}


	getSessionUpcomming=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		var data= {...info}
		data.gameId=1;
		data.serverId=1;
		data.limit=10
		// data.modeId=type;
		this.props.sessionUpcomming(user.access_token, data).then(()=>{
			var data=this.props.dataSessionUpcomming;
			if(data!==undefined){
				if(data.code > 0){
					
					var room=data.data.room;
					var new_room=[];
					var awards=data.data.rewards;
			
					if(room!==null){
						if(room.length>0){
							for (let i = 0; i < room.length; i++) {
								var award=awards.filter(v=>v.gameRoomId===room[i].id)
								room[i].award=award;
								new_room.push(room[i])
							}
							this.setState({listSesstions: new_room, timeServer:data.data.timeServer},()=>{
								modal_giaithuong.show();
							})
						}else{
							this.setState({message_error:'Hiện tại chưa có phiên nào. Bạn quay lại vào lúc khác nhé.'},()=>{
								modal_tb_err.show();
							})
						}
						
					}else{
						this.setState({message_error:'Hiện tại chưa có phiên nào. Bạn quay lại vào lúc khác nhé.'},()=>{
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:data.message},()=>{
						modal_tb_err.show();
					})
				}
			}else{
				this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
					modal_tb_err.show();
				})
			}
		});
	
	}
  
	getSessionInPlay=(type)=>{
		var user = JSON.parse(localStorage.getItem("user"));
		localStorage.removeItem("info_seesion");
		if (user !== null) {
			var data= {...info}
			data.gameId=1;
			data.serverId=1;
			data.modeId=type;
			data.userId= user.uid;
			this.props.sessionInPlay(user.access_token, data).then(()=>{
				var data=this.props.dataSessionInplay;
				if(data!==undefined){
					if(data.code > 0){
						if(data.data!==null){
							if(data.data.room!==null){
								var info_seesion=data.data.room;
								this.setState({info_seesion:info_seesion, user_data: data.data.user, timeServer:data.data.timeServer})
								localStorage.setItem("info_seesion", JSON.stringify(info_seesion));
								switch (type) {
									case 1:
										this.checkBetting(1, '');
										break;
									case 2:
										this.checkBetting(2, 'GIẬT HŨ VÀNG');
										break;
									case 3:
										this.checkBetting(3, 'LOẠI TRỰC TIẾP');
										break;
								
									default:
										this.checkBetting(1, '');
										break;
								}
							}else{
								this.setState({message_error:"Hiện chưa có phiên nào."}, ()=>{
									modal_tb_err.show();
								})
							}
						}else{
							this.setState({message_error:"Hiện chưa có phiên nào."}, ()=>{
								modal_tb_err.show();
							})
						}
					
					}else{
						this.setState({message_error:data.message},()=>{
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tb_err.show();
					})
				}
			});
		}else {
			modal_tb.show();
		}
	}


	checkBetting=(type, title_module)=>{
		const {info_seesion, user_data, user, timeServer}=this.state;
		var time=timeServer;
		this.setState({type_modeId: type, title_module:title_module})
		
		
		if(type===1){
			if(time < info_seesion.startTime){
				this.setState({message_error:'Phiên mới chưa bắt đầu.'},()=>{
					modal_tb_err.show();
				})
				return;
			}
			
			if(time > info_seesion.endTime){
				this.setState({message_error:'Phiên chơi đã kết thúc.'},()=>{
					modal_tb_err.show();
				})
				return;
			}
			if(user_data.points > 0){
				// window.location.replace('/duatop')
				window.location.href=window.location.href+'duatop';
			}else{
				this.setState({message_error:'Bạn không còn điểm để chơi.'},()=>{
					modal_tb_err.show();
				})
			}
			
		}else{
			if(time < info_seesion.betsStartTime){
				this.setState({message_error:'Chưa tới thời gian đặt cược .'},()=>{
					modal_tb_err.show();
				})
				return;
			}
			
		
			if(type===3){
				if (user !== null) {
					var data= {...info}
					data.gameId=1;
					data.serverId=1;
					data.modeId=type;
					data.roomId=info_seesion.id;
					data.userId=user.uid;
		
					this.props.checkPlace(user.access_token, data).then(()=>{
						var data=this.props.dataCheckPlace;
						console.log(data)
						if(data!==undefined){
							if(data.code > 0){
								if(data.data.isBets){
									if(time < info_seesion.startTime){
										var ms=`Phiên chưa diễn ra vui lòng quay lại lúc ${this.timeConverter(info_seesion.startTime)}`
										this.setState({message_error:ms},()=>{
											modal_tb_err.show();
										})
										return;
									}
									
									if(time > info_seesion.endTime){
										this.setState({message_error:'Phiên chơi đã kết thúc.'},()=>{
											modal_tb_err.show();
										})
										return;
									}
									if(data.data.isKnockout){
										this.setState({message_error:'Bạn đã bị loại khỏi phiên đấu hiện tại'},()=>{
											modal_tb_err.show();
										})
									}else{
										window.location.href=window.location.href+'loaitructiep';
									}
									// window.location.href=window.location.href+'loaitructiep';
								}else{
									if(time > info_seesion.betsEndTime){
										this.setState({message_error:'Thời gian đặt cược đã hết.'},()=>{
											modal_tb_err.show();
										})
										return;
									}else{
										this.setState({points:user_data.points},()=>{
											modal_datcuoc.show();
										})
									}
									
								}
								
							}else{
								this.setState({message_error:data.message},()=>{
									modal_tb_err.show();
								})
							}
						}else{
							this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
								modal_tb_err.show();
							})
						}
					});
				}else {
					modal_tb.show();
				}
			}else{
				if(time > info_seesion.betsEndTime){
					this.setState({message_error:'Thời gian đặt cược đã hết.'},()=>{
						modal_tb_err.show();
					})
					return;
				}else if(user_data.points > info_seesion.minBet){
					this.setState({points:user_data.points},()=>{
						modal_datcuoc.show();
					})
				}else{
					this.setState({message_error:'Số điểm của bạn không đủ để cược.'},()=>{
						modal_tb_err.show();
					})
				}
			}
			
		}	
	
	}

	onBest=(type_modeId)=>{

		const {info_seesion}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		
		if (user !== null) {
			var data= {...info}
			data.gameId=1;
			data.serverId=1;
			data.limit=10;
			data.modeId=type_modeId;
			data.roomId=info_seesion.id;
			data.userId=user.uid;
			data.price=info_seesion.minBet;
			data.source=21;

			this.props.betting(user.access_token, data).then(()=>{
				var data=this.props.dataBetting;
				console.log(data)
				if(data!==undefined){
					if(data.code > 0){
						if(type_modeId===2){
							if(data.data.timeServer < info_seesion.startTime){
								var ms=`Bạn đã đặt cược thành công.\nPhiên chưa diễn ra vui lòng quay lại lúc ${this.timeConverter(info_seesion.startTime)}`
								this.setState({message_error:ms},()=>{
									modal_datcuoc.hide();
									modal_tb_err.show();
								})
								return;
							}
							
							if(data.data.timeServer > info_seesion.endTime){
								this.setState({message_error:'Phiên chơi đã kết thúc.'},()=>{
									modal_tb_err.show();
								})
								return;
							}
							
							window.location.href=window.location.href+'giathuvang';
						}else{
							var ms=`Bạn đã đặt cược thành công.\nPhiên chưa diễn ra vui lòng quay lại lúc ${this.timeConverter(info_seesion.startTime)}`
							this.setState({message_error:ms},()=>{
								modal_datcuoc.hide();
								modal_tb_err.show();
							})
							// window.location.href=window.location.href+'loaitructiep';
						}
						
					}else{
						this.setState({message_error:data.message},()=>{
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tb_err.show();
					})
				}
			});
		}else {
			modal_tb.show();
		}
	}

	handleScroll = (event) => {
		if (document.body.getBoundingClientRect().top < -300){
			$("#button").show();
		}else{
			$("#button").hide();
		}
	}

	loginAction = () => {
		const {server_err}=this.state;
		if (typeof(Storage) !== "undefined") {
			var currentPath = window.location.pathname;
			localStorage.setItem("currentPath", currentPath);
		} else {
			console.log("Trình duyệt không hỗ trợ localStorage");
		}
		window.location.replace(`http://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}/login&agencyid=0`)

	}
	
	logoutAction = () => {
		this.logout();
	}

	logout=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		
		if(user!==null){
			var data= {...info}
			data.userId= user.uid;
			var header = {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${user.access_token}`,
					"dataType":"json"
				}
			}
			axios.post(Ultilities.base_url() +'/users/api/v1/account/logout', data, header).then(function (response) {

				if(response.data.code>=0){
					localStorage.removeItem("user");
					window.location.replace(
						`https://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
					);
				}
			})
		}
		
	}



	// timeRemain=(times)=>{
	// 	var _this=this;
	// 	setInterval(()=>{
	// 		var time=(times-Date.now())/1000;
	// 		if(time>0){
	// 			var day=Math.floor(time/86400) > 9 ? Math.floor(time/86400) : `0${Math.floor(time/86400)}`;
	// 			var hour=Math.floor((time%86400)/3600) > 9 ? Math.floor((time%86400)/3600) : `0${Math.floor((time%86400)/3600)}`;
	// 			var minute=Math.floor(((time%86400)%3600)/60) > 9 ? Math.floor(((time%86400)%3600)/60) : `0${Math.floor(((time%86400)%3600)/60)}`;
	// 			var second=Math.ceil(((time%86400)%3600)%60) > 9 ? Math.ceil(((time%86400)%3600)%60) : `0${Math.ceil(((time%86400)%3600)%60)}`;
	// 			_this.setState({day:day, hour: hour, minute: minute, second:second})
	// 			// _this.setState({hour_live: hour, minute_live: minute, second_live:second})
	// 		}
	// 	}, 1000);
	// }


	timeConverter=(time)=>{
		var a = new Date(time);
		var year = a.getFullYear();
		var m=a.getMonth()+1
		var month =m > 9 ? m : `0${m}`;
		var date = a.getDate();
		var hour = a.getHours() > 9 ? a.getHours() : `0${a.getHours()}`;
		var min = a.getMinutes() > 9 ? a.getMinutes() : `0${a.getMinutes()}`;
		var sec = a.getSeconds() > 9 ? a.getSeconds() : `0${a.getSeconds()}`;
		var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec ;
		return time;
	}

	showModalHuongDan=()=>{
		modal_huongdan.show();
		this.getContentGuide();
	}


	getContentGuide=(catalogId)=>{
		const {limit}=this.state;
		var data= {...info}
		data.siteId=2;
		data.catalogId=catalogId;
		data.type=-1;

		switch (catalogId) {
			case 18:
				this.setState({tab_1:true, tab_2:false, tab_3:false, tab_4:false, tab_5:false})
				break;
			case 19:
				this.setState({tab_1:false, tab_2:true, tab_3:false, tab_4:false, tab_5:false})
				break;
			case 20:
				this.setState({tab_1:false, tab_2:false, tab_3:true, tab_4:false, tab_5:false})
				break;
			case 21:
				this.setState({tab_1:false, tab_2:false, tab_3:false, tab_4:true, tab_5:false})
				break;
			case 22:
				this.setState({tab_1:false, tab_2:false, tab_3:false, tab_4:false, tab_5:true})
				break;
		
			default:
				break;
		}
		this.setState({contentGuide:''}, ()=>{
			this.props.getContentGuide(data).then(()=>{
				var data=this.props.dataContentGuide;
				if(data!==undefined){
					if(data.code > 0){
						this.setState({contentGuide: data.data.content})
					}else{
						this.setState({message_error:data.message}, ()=>{
							modal_huongdan.hide();
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_huongdan.hide();
						modal_tb_err.show();
					})
				}
			});
		})
	}

  
	getDataTuDo=(user, pageNumber)=>{
		const {limit, activeTuDo}=this.state;
		if(user!==null){
			var data= {...info}
			data.gameId=1;
			data.serverId=-1;
			data.modeId=-1;
			data.userId= user.uid;
			data.type=-1;
			data.fromDate=-1;
			data.toDate=-1;
			data.pageIndex=pageNumber-1;
			data.pageSize=limit;
			this.setState({tab_tudo: true})
			this.props.getTuDo(user.access_token, data).then(()=>{
				var d=this.props.dataTuDo;
				if(d!==undefined){
					if(d.code>0){
						this.setState({listTuDo:d.data.items, countTuDo:d.data.totalItems, noti_tudo:false})
					}else{
					
						this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
							modal_tudo.hide();
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tudo.hide();
						modal_tb_err.show();
					})
				}
				
			});
		}else {
			modal_tb.show();
		}
		
	}

  
	getHistory=(user, pageNumber)=>{
		
		const {limit, activeHistory}=this.state;
		if(user!==null){
			var data= {...info}
			data.transactionType=-1;
			data.serviceId=1;
			data.paymentMethod=-1;
			data.userId= user.uid;
			data.source=-1;
			data.fromDate=-1;
			data.toDate=-1;
			data.pageIndex=pageNumber-1;
			data.pageSize=limit;
			this.setState({tab_tudo: false})
			this.props.getHistoryTuDo(user.access_token, data).then(()=>{
				var d=this.props.dataHistoryTuDo;
				if(d!==undefined){
					if(d.code>0){
						this.setState({listHistory:d.data.items, countHistory:d.data.totalItems, noti_tudo:false})
					}else{
					
						this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tb_err.show();
					})
				}
				
			});
		}else {
			modal_tb.show();
		}
	}

	showModalTuDo=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.getDataTuDo(user,1);
			modal_tudo.show();
		}else {
			modal_tb.show();
		}
	}

	getItem=(user, item)=>{
		if(user!==null){
			var data= {...info}
			data.userId= user.uid;
			data.id=item.id;
			this.props.getItemAward(user.access_token, data).then(()=>{
				var d=this.props.dataItemAward;
				if(d!==undefined){
					if(d.code>0){
						this.setState({dataItem:data.data}, ()=>{
							if(data.data.rewardType===31){
								modal_tudo.hide();
								modal_moqua_bank.show();
							}else{
								modal_tudo.hide();
								modal_moqua.show();
							}
						})
					}else{
						this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
							modal_tudo.hide();
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tudo.hide();
						modal_tb_err.show();
					})
				}
				
			});
		}else {
			modal_tb.show();
		}
	}

	// "data": {
    //     "createdTime": 1637080550632,
    //     "transactionId": "85",
    //     "rewardType": 11,
    //     "price": 100,
    //     "cardCode": null,
    //     "cardSerial": null,
    //     "cardStartDate": 0,
    //     "cardEndDate": 0,
    //     "responseMesage": "Bạn được cộng 100 điểm từ Tủ đồ. Số điểm hiện tại của bạn là 200."
    // },

	viewItem=(user, item)=>{
		if(user!==null){
			var data= {...info}
			data.userId= user.uid;
			data.id=item.id;
			this.props.viewItemAward(user.access_token, data).then(()=>{
				var d=this.props.dataItemAward;
				if(d!==undefined){
					if(d.code>0){
						var dataItem={};
						dataItem.createdTime=d.data.value.createdTime;
						dataItem.transactionId=d.data.value.transactionId;
						dataItem.rewardType=d.data.gift.rewardType;
						dataItem.price=d.data.value.price;
						dataItem.cardCode=d.data.value.cardCode;
						dataItem.cardSerial=d.data.value.cardSerial;
						dataItem.cardStartDate=d.data.value.cardStartDate;
						dataItem.cardEndDate=d.data.value.cardEndDate;
						dataItem.responseMesage=d.data.value.responseMesage;

						this.setState({dataItem:dataItem}, ()=>{
							if(dataItem.rewardType===31){
								modal_tudo.hide();
								modal_moqua_bank.show();
							}else{
								modal_tudo.hide();
								modal_moqua.show();
							}
						})
					}else{
						this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
							modal_tudo.hide();
							modal_tb_err.show();
						})
					}
				}else{
					this.setState({message_error:'Chưa lấy được dữ liệu, vui lòng thử lại sau.'},()=>{
						modal_tudo.hide();
						modal_tb_err.show();
					})
				}
				
			});
		}else {
			modal_tb.show();
		}
	}


	closePopupAuto=()=>{
		clearInterval(this.state.intervalId);
		this.setState({ isSpin:false, closeAuto:false});
		$('#myModal9').modal('hide');
	}

	closeServerErr=()=>{
		$('#myModal12').modal('hide');
	}



	handlePageChangeTuDo=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeTuDo: pageNumber},()=>{
			this.getDataTuDo(user, pageNumber)
		})
	}

	handlePageChangeHistory=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeHistory: pageNumber},()=>{
			this.getHistory(user, pageNumber)
		})
	}


	handlePageChangeVinhDanh=(type, pageNumber)=> {
		console.log('AAAAAA', pageNumber)
		this.setState({activeVinhDanh: pageNumber},()=>{
			this.getVinhDanh(type, pageNumber)
		})

	}

	openTabNapScoin=(url)=> {
		window.open(url, '_blank').focus();
	}



	randomItemIndex=()=>{
		// var item = items[Math.floor(Math.random()*items.length)];
	}

	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}


	showTooltip=()=>{
		$('[data-toggle="tooltip"]').tooltip();
	}

	getTypeGiaiThuong=(type)=>{
		var name=''
		switch (type) {
			case 1:
				name= "Phiên Đua Top"
				break;
			case 2:
				name= "Phiên Giật Hũ Vàng"
				break;
			case 3:
				name= "Phiên Loại Trực Tiếp"
				break;
			default:
				name= "Phiên Đua Top"
				break;
		}
		return name;
	}

	getImgItem=(item)=>{

// 		11: InGame
// 21: Thẻ scoin
// 22: Topup scoin
// 31: Vochue Banks
// 32: Vochue scoin
// 5: Giftcode
// 6: Điểm thưởng

		var obj;
		switch (item) {
			case 5:
				obj=img_giftcode;
				break;
			case 6:
				obj=img_diem;
				break;
			case 11:
				obj=img_ingame;
				break;
			case 21:
				obj=logo_scoin;
				break;
			case 22:
				obj=img_toup_scoin;
				break;
			case 31:
				obj=img_thescoinvoucher;
				break;
			case 32:
				obj=img_thescoinvoucher;
				break;
			default:
				obj=logo_scoin;
				break;
		}
		return obj;
	}

	timeModalGiaiThuong=(time)=>{
		var times=(time-this.state.timeServer)/1000;
		var s='0h : 0m :0s';
		if(times>0){
			var day=Math.floor(times/86400) > 9 ? Math.floor(times/86400) : `0${Math.floor(times/86400)}`;
			var hour=Math.floor((times%86400)/3600) > 9 ? Math.floor((times%86400)/3600) : `0${Math.floor((times%86400)/3600)}`;
			var minute=Math.floor(((times%86400)%3600)/60) > 9 ? Math.floor(((times%86400)%3600)/60) : `0${Math.floor(((times%86400)%3600)/60)}`;
			var second=Math.ceil(((times%86400)%3600)%60) > 9 ? Math.ceil(((times%86400)%3600)%60) : `0${Math.ceil(((times%86400)%3600)%60)}`;
			s =`${hour}h : ${minute}m : ${second}s` ;
		}
		return s;
	}

	timeEnd=(time)=>{
		var a = new Date(time);
		// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var m=a.getMonth()+1
		var month =m > 9 ? m : `0${m}`;
		var date = a.getDate();
		var hour = a.getHours() > 9 ? a.getHours() : `0${a.getHours()}`;
		var min = a.getMinutes() > 9 ? a.getMinutes() : `0${a.getMinutes()}`;
		var sec = a.getSeconds() > 9 ? a.getSeconds() : `0${a.getSeconds()}`;
		var s = hour + ':' + min + ':' + sec + " ngày " + date + '/' + month + '/' + year ;
		return s;
	}



	TimeModalGiaiThuong=(props)=>{
		var obj=props.obj;
		var t=this.state.timeServer;
		var startTime=obj.startTime;
		var endTime=obj.endTime;
		if(startTime > t){
			return <p class="font-3vw mb-0">Còn: {this.timeModalGiaiThuong(obj.startTime)}</p>;
		}
		if(t > endTime){
			return <p class="font-3vw mb-0 text-danger">Đã kết thúc {this.timeEnd(obj.endTime)}</p>;
		}
		if(t > startTime && t < endTime){
			return <p class="font-3vw mb-0 text-yellow text-blink"><span class="spinner-grow text-yellow" style={{width: ".8rem", height: ".8rem"}}></span> Đang diễn ra ... </p>;
		}
		return <div></div>;
	}

	HetGio=(props)=>{
		var obj=props.obj;
		var t=Date.now();
		var endTime=obj.endTime;
		if(t > endTime){
			return <img class="img-dacochu" src={img_dacochu} alt="" width="30%" />;
		}
		return <div></div>;
	}


	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}





	rollup=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			var obj= {...info}
			obj.gameId=1
			obj.serverId=-1
			obj.modeId=-1
			obj.roomId=-1
			obj.userId=user.uid
			obj.type=1
			this.props.checkRollup(user.access_token, obj).then(()=>{
				var data=this.props.dataRollup;
				console.log(data.message)
				if(data!==undefined){
					if(data.code >0){
						this.setState({rollup:true, message_error: data.message, type_action:'Điểm danh', showRollup:false}, ()=>{
							modal_tb_err.show();
						})
					}else{
						this.setState({rollup:false, message_error: data.message}, ()=>{
							modal_tb_err.show();
						})
					}
				}
			})
		}else {
			modal_tb.show();
		}

	}

	// comfirmDonate=()=>{
	// 	var code=document.getElementById('code').value;
	// 	var username=document.getElementById('username').value;
	// 	var numberDart=document.getElementById('numberDart').value;

	// 	var user = JSON.parse(localStorage.getItem("user"));
	// 	if (user !== null) {
	// 		this.props.getDonate(user.access_token, username, numberDart, code).then(()=>{
	// 			var data=this.props.dataDonate;
	// 			console.log(data)
	// 			if(data!==undefined){
	// 				if(data.Status===0){
	// 					this.setState({rollup:true, message_rollup: data.Message, type_action:'Chuyển tiêu'}, ()=>{
	// 						$('#Modalchuyenphitieu').modal('hide');
	// 						$('#Modalddthanhcong').modal('show');
	// 					})
	// 				}else{
	// 					this.setState({rollup:false, message_rollup: data.Message}, ()=>{
	// 						$('#Modalchuyenphitieu').modal('hide');
	// 						$('#Modalddthanhcong').modal('show');
	// 					})
	// 				}
	// 			}
	// 		})
	// 	}else {
	// 		$('#tb').modal('show');
	// 	}
	// }


	// getListSanQua=()=>{
	// 	var user = JSON.parse(localStorage.getItem("user"));
	// 	if (user !== null) {
	// 		this.props.getListSanQua(user.access_token).then(()=>{
	// 			var data=this.props.dataSanqua;
	// 			if(data!==undefined){
	// 				if(data.Status===0){
	// 					this.setState({listSanqua:data.Data}, ()=>{
	// 						$('#Modalchonroom').modal('show');
	// 					})
	// 				}else{
	// 					this.setState({message_sanqua_empty:data.Message}, ()=>{
	// 						$('#ModalListEmpty').modal('show');
	// 					})
	// 				}
	// 			}
	// 		})
	// 	}else {
	// 		$('#tb').modal('show');
	// 	}
	// }

	showGiaithuong=(data)=>{
		var n=data.length;
		var items=''
		for (let i = 0; i < n; i++) {
			if(i < n-1){
				items=data[i].Description + ' + ' +items
			}else{
				items=items + ' ' + data[i].Description
			}
			
		}
		return items;
	}

	playSanqua=(obj)=>{
		localStorage.setItem("obj", JSON.stringify(obj));
		window.location.replace('/sanqua')
	}

	closeHD=()=>{
		modal_huongdan.hide();;
	}

	closeGT=()=>{
		modal_giaithuong.hide();
	}

	closeTD=()=>{
		modal_tudo.hide();
	}

	closeTb=()=>{
		modal_tb.hide();
	}

	closeTbErr=()=>{
		modal_tb_err.hide();
	}

	closeDatCuoc=()=>{
		modal_datcuoc.hide();
	}


	render() {
		const {contentGuide, type_modeId, title_module,points,info_seesion, bxh_tab_1, bxh_tab_2, bxh_tab_3, message_sanqua_empty, listSanqua, showRollup,type_action, dataInfoDonate, rollup, message_rollup, content, warning_tudo,tab_1, tab_2, tab_3, tab_4,tab_5, tab_tudo ,type,numberPage, isLogin,message_error,dataItem,listSesstions,
			waiting, activeTuDo, activeHistory, activeVinhDanh, limit, countTuDo, countHistory, countVinhDanh, listHistory, listTuDo, listVinhDanh, user}=this.state;
		return (<div>	
					<div class="page-fluid_web">
						<div class="wrap_web mx-auto">
							<div class="s-top_web position-relative">
								<ul class="nav justify-content-between align-items-center flex-nowrap font-3vw">
									<li class="nav-item text-nowrap" style={{width: "16%"}}>
										<a class="nav-link p-0 text-nowrap text-center text-white pt-1 font-UTMFacebookKT" onClick={()=>this.showModalHuongDan(18)} title="Hướng dẫn" style={{cursor: "pointer"}}>Hướng dẫn</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "16%"}}>
										<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" onClick={this.getSessionUpcomming} title="Giải thưởng" style={{cursor: "pointer"}}>Giải thưởng</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "8%"}}>
										<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" onClick={this.showModalTuDo} data-bs-toggle="modal" title="Tủ đồ" style={{cursor: "pointer"}}>Tủ đồ</a>
									</li>
									<li class="nav-item text-center" style={{width: "30%"}}>
										<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" onClick={this.rollup} title="Điểm danh" style={{cursor: "pointer"}}>&nbsp;</a>
									</li>
									<li class="nav-item text-center" style={{width: "24%"}}>
										{isLogin ? (<div>
											<span class="text-warning fw-bold">{user.nick_name}</span> <br />
											<a class="fst-italic" onClick={this.logoutAction} style={{cursor:'pointer'}} title="Thoát">(Thoát)</a>
											</div>): (
											<a class="nav-link p-0 text-center text-white font-UTMFacebookKT"  onClick={this.loginAction} style={{cursor:'pointer'}} title="Đăng nhập"><img src={btn_dang_nhap} width="100%" alt="Đăng nhập" /></a>
										)}
									
									
									</li>
								</ul>
								<div class="s-btn-options_web d-flex justify-content-around">
									<a class="text-center" title="Đua TOP" onClick={()=>this.getSessionInPlay(1)} style={{cursor:'pointer'}}><img src={btn_duatop} alt="Đua TOP" width="80%" /></a>
									<a class="text-center" title="Giật Hũ Vàng" onClick={()=>this.getSessionInPlay(2)} style={{cursor:'pointer'}}><img src={btn_giathuvang} alt="Giật Hũ Vàng" width="80%" /></a>
									<a class="text-center" title="Loại Trực Tiếp" onClick={()=>this.getSessionInPlay(3)} style={{cursor:'pointer'}}><img src={btn_loaitructiep} alt="Loại Trực Tiếp" width="80%" /></a>
								</div>
							</div>
							<div class="s-bvd_web position-relative">
								<ul class="nav justify-content-center flex-nowrap font-3vw_web">
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_1 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Đua TOP" onClick={()=>this.getVinhDanh(1,1)}>ĐUA TOP</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_2 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Giật Hũ Vàng" onClick={()=>this.getVinhDanh(2,1)}>GIẬT HŨ VÀNG</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_3 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Loại Trực Tiếp" onClick={()=>this.getVinhDanh(3,1)}>LOẠI TRỰC TIẾP</a>
									</li>
								</ul>
								<div class="tab-content">
									<div class="tab-pane container active" id="duatop">
										<table class="table table-bordered text-white font-3vw_web font-UTMFacebookKT mt-4 mx-auto mb-0" style={{width: "90%"}}>
											<thead>
											<tr class="border-top-0 p-0">
												<th class="border-start-0 border-top-0">TÀI KHOẢN</th>
												<th class="border-top-0 ps-1">GIẢI THƯỞNG</th>
												<th class="border-end-0 border-top-0 ps-1">THỜI GIAN</th>
											</tr>
											</thead>
											<tbody>
												{listVinhDanh.map((obj, key) => (
													<tr key={key}>
														<td className="border-start-0 py-1">{obj.userName}</td>
														<td class="ps-1 py-1">{obj.rewardName}</td>
														<td className="border-end-0 ps-1 py-1">{this.timeConverter(obj.winTime)}</td>
													</tr>
												))}
											</tbody>
										</table>
										{(countVinhDanh > 11)?(<div className="pagination justify-content-center pag-custom">
											<Pagination
												activePage={activeVinhDanh}
												itemsCountPerPage={10}
												totalItemsCount={countVinhDanh}
												pageRangeDisplayed={numberPage}
												lastPageText={'Trang cuối'}
												firstPageText={'Trang đầu'}
												itemClass={"page-item"}
												linkClass={"page-link"}
												onChange={(v) => this.handlePageChangeVinhDanh(type,v)}
											/>
										</div> ):(<div></div>)}
										
									</div>
								</div>    	
							</div>
							<div class="s-bottom_web position-relative">
								<div class="d-flex justify-content-around pt-5">
									<a style={{width:"30%"}} href="https://daily.scoin.vn/huong-dan-mua-the/" title="" target="_blank"><img src={btn_hdmtscoin} alt="Hướng dẫn mua thẻ scoin" width="100%" /></a>
									<a style={{width:"30%"}} href="https://www.facebook.com/scoinvtcmobile" title="" target="_blank"><img src={btn_ntbsk} alt="Nhận thông báo sự kiện" width="100%" /></a>
								</div>
								<div class="d-flex justify-content-around pt-2">
									<a style={{width:"30%"}} href="https://scoin.vn/nap-game" title="" target="_blank"><img src={btn_napgame} alt="Nạp Game" width="100%" /></a>
									<a style={{width:"30%"}} href="tel:19001104" title="" target="_blank"><img src={btn_hotline19001104} alt="19001104" width="100%" /></a>
								</div>
								<div class="d-flex justify-content-center align-items-center group-logo_web mt-5">
									<a class="px-4" style={{width:"20%"}} href="https://scoin.vn/" title="" target="_blank"><img src={logo_scoin} alt="Scoin" width="100%" /></a>
									<a class="px-4" style={{width:"20%"}} href="#" title="" target="_blank"><img src={logo_splay} alt="Splay" width="100%" /></a>
									<a class="px-4" style={{width:"20%"}} href="https://vip.scoin.vn/" title="" target="_blank"><img src={logo_scoinvip} alt="Scoin VIP" width="100%" /></a>
								</div>
								<div class="footer text-white font-3vw_web mt-5">
									<p class="text-center">
										Hệ thống phát hành game VTC Mobile
										<br />
										Copyright &copy;2021 VTC Mobile. All rights reserved
									</p>
									<p class="text-center mb-0 pb-1">
										<span class="text-blue_web">Công ty Cổ Phần VTC Dịch Vụ Di Động</span> <br></br>
										Tầng 11, Tòa nhà VTC Online, số 18 Tam Trinh, Hai Bà Trưng, Hà Nội <br></br>
										SĐT : (84-4).39877470 | Email : vtcmobile@vtc.vn <br></br>
										Người chịu trách nhiệm quản lý nội dung: Ông Nguyễn Viết Quang Minh <br></br>
										Tổng đài hỗ trợ 1900 1104
									</p>
								</div>
							</div>
							

						</div>
					</div>

					{/* <!-- The Modal Hướng dẫn --> */}
						<div class="modal fade" id="huongdan_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-huongdan_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-hd_web-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
									<div class="tab-hd_web w-100">
										<ul class="nav justify-content-center">
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_1 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Tham gia" onClick={()=>this.getContentGuide(18)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_2 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Đua TOP" onClick={()=>this.getContentGuide(19)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "18%"}}>
											<a class={tab_3 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Loại Trực Tiếp" onClick={()=>this.getContentGuide(20)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "18%"}}>
											<a class={tab_4 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Giật Hũ Vàng" onClick={()=>this.getContentGuide(21)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_5 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Sử Dụng Giải Thưởng" onClick={()=>this.getContentGuide(22)}>&nbsp;</a>
										</li>
										</ul> 
									</div>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-hd_web-body p-2rem py-1 font-3vw text-white">
									{/* <!-- Tab panes --> */}
									<div class="tab-content">
										<div class="tab-pane container active" id="tg">
											<div class="text-red font-size-18" dangerouslySetInnerHTML={{__html: contentGuide}}></div>
										</div>
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-hd_web-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Hướng dẫn --> */}


						{/* <!-- The Modal Giải thưởng --> */}
						<div class="modal fade" id="gt_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-gt_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-gt-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-gt-body p-2rem py-1 font-3vw_web text-white">
									<div class="tab-content">
										<div class="container">
											{listSesstions.map((obj, key) => (
												<div class="row mx-0 mb-1 border-giaithuong-web position-relative d-flex justify-content-center" key={key}>
													<div class="col-12 text-center text-brown pt-1 mb-2">
														<h2 class="font-weight-bold text-uppercase mb-0" style={{fontSize:18}}>{this.getTypeGiaiThuong(obj.gameModeId)}</h2>
														<this.TimeModalGiaiThuong obj={obj} />
													</div>

													{obj.award.map((v, j) => (
														<div class="col-4 text-center" key={j}>
															<p class="m-0"><img src={this.getImgItem(v.rewardType)} alt="" width="60%" /></p>
															<p class="font-3vw_web text-yellow">{v.name}</p>
														</div>
													))}
													<this.HetGio obj={obj} />
													
												</div>
											))}
										</div>
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-gt-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Giải thưởng --> */}

						{/* <!-- The Modal Tủ đồ --> */}
						<div class="modal fade" id="td_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-td_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-td_web-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
									<div class="tab-hd_web w-100">
										<ul class="nav justify-content-center">
										<li class="nav-item" style={{width: "43%"}}>
											<a class={tab_tudo ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45, cursor:'pointer'}}  title="Phần Thưởng" onClick={()=>this.getDataTuDo(user, 1)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "43%"}}>
											<a class={tab_tudo ? "nav-link text-white font-3vw px-0 py-1" : "nav-link text-white font-3vw px-0 py-1 active"} style={{height: 45, cursor:'pointer'}} title="Lịch Sử" onClick={()=>this.getHistory(user, 1)}>&nbsp;</a>
										</li>
										</ul> 
									</div>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-td-body p-2rem py-1 font-3vw text-white">
									{/* <!-- Tab panes --> */}
									<div class="tab-content">
										<div class="tab-pane container active" id="pt">
											{(tab_tudo)?(<div>
												<table class="table table-bordered text-white font-3vw font-UTMFacebookKT mt-2 mx-auto mb-0">
												<thead>
												<tr class="border-top-0 p-0">
													<th class="border-start-0 border-top-0">PHẦN THƯỞNG</th>
													<th class="border-top-0 ps-1">NỘI DUNG</th>
													<th class="border-top-0 ps-1">THỜI GIAN</th>
													<th class="border-end-0 border-top-0 ps-1">MỞ QUÀ</th>
												</tr>
												</thead>
												<tbody>
													{listTuDo.map((obj, key) => (
														<tr key={key} class="bg-border-bottom">
															<td class="border-start-0 py-1">{obj.rewardName}</td>
															<td class="ps-1 py-1">{obj.amount}</td>
															<td className="ps-1 py-1">{this.timeConverter(obj.createdTime)}</td>
															{(obj.receiverStatus===2)?(<td class="border-end-0 ps-1 py-1"><a class="text-primary"  style={{cursor:'pointer'}} onClick={()=>this.viewItem(user, obj)}>Xem quà</a></td>):(<td class="border-end-0 ps-1 py-1"><a class="text-primary"  style={{cursor:'pointer'}} onClick={()=>this.getItem(user, obj)}>Mở quà</a></td>)}
															
														</tr>
													))}		
												
												</tbody>
											</table>
											{(countTuDo > 11) ? (<div className="pagination justify-content-center pag-custom mt-1">
												<Pagination
													activePage={activeTuDo}
													itemsCountPerPage={limit}
													totalItemsCount={countTuDo}
													pageRangeDisplayed={numberPage}
													lastPageText={'Trang cuối'}
													firstPageText={'Trang đầu'}
													itemClass={"page-item"}
													linkClass={"page-link"}
													onChange={(v) => this.handlePageChangeTuDo(v)}
												/>
											</div> ):(<div></div>)}
											</div>):(<div>
												<table class="table table-bordered text-white font-3vw font-UTMFacebookKT mt-2 mx-auto mb-0">
												<thead>
												<tr class="border-top-0 p-0">
													<th class="border-start-0 border-top-0">PHẦN THƯỞNG</th>
													<th class="border-top-0 ps-1">NỘI DUNG</th>
													<th class="border-top-0 ps-1">THỜI GIAN</th>
												</tr>
												</thead>
												<tbody>
													{listHistory.map((obj, key) => (
														<tr key={key} class="bg-border-bottom">
															<td class="border-start-0 py-1">{obj.title}</td>
															<td class="ps-1 py-1">{obj.description}</td>
															<td className="ps-1 py-1">{this.timeConverter(obj.createdTime)}</td>	
														</tr>
													))}		
												
												</tbody>
											</table>
											{(countHistory > 11) ? (<div className="pagination justify-content-center pag-custom mt-1">
												<Pagination
													activePage={activeHistory}
													itemsCountPerPage={limit}
													totalItemsCount={countHistory}
													pageRangeDisplayed={numberPage}
													lastPageText={'Trang cuối'}
													firstPageText={'Trang đầu'}
													itemClass={"page-item"}
													linkClass={"page-link"}
													onChange={(v) => this.handlePageChangeHistory(v)}
												/>
											</div> ):(<div></div>)}
											</div>)}
											
											
										</div>
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-td-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Tủ đồ --> */}

						{/* <!-- The Modal Đăng nhập --> */}
						<div class="modal fade" id="tb_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-tb_web bg-transparent border-0">

									{/* <!-- Modal Header --> */}
									<div class="modal-header bg-pop-tb-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
										<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
									</div>
									

									{/* <!-- Modal body --> */}
									<div class="modal-body bg-pop-tb-body p-2rem py-1 font-3vw text-white">
										<div class="tab-content">
										<div class="container text-center p-5">
											<h4 class="pt-1 pb-3 font-UTMFacebookKT">Bạn vẫn chưa đăng nhập</h4>
											<a title="Đăng nhập" onClick={this.loginAction}><img src={btn_dangnhap} alt="" width="160" /></a>
										</div>
										</div>
										
									</div>

									{/* <!-- Modal footer --> */}
									<div class="modal-footer bg-pop-tb-bottom border-0">
									
									</div>

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Đăng nhập --> */}

						{/* <!-- The Modal Mở quà --> */}
						<div class="modal fade" id="mq_web"  style={{zIndex:99999}}>
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-mq_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-mq-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
								</div>
								
								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-mq-body p-2rem py-1 font-3vw text-white">
									<div class="container text-center p-3 font-UTMFacebookKT">
										{(dataItem.rewardType===6 || dataItem.rewardType===22)?(<p style={{textAlign:'center', fontSize:20, color:'green'}}>{dataItem.responseMesage}</p>):(<div></div>)}
										{(dataItem.rewardType===21)?(<div class="card-body text-center">
											<p class="card-text mb-4 h6 font-weight-bold text-shadow">Thẻ Scoin mệnh giá: <br /> {dataItem.price ? this.numberWithCommas(dataItem.price) : 0} vnđ</p>
											<table class="table table-borderless text-white">
												<tbody>
												<tr class="border-bottom">
													<td class="p-1">Mã code:</td>
													<td class="p-1">{dataItem.cardCode}</td>
												</tr>
												<tr class="border-bottom">
													<td class="p-1">Serial:</td>
													<td class="p-1">{dataItem.cardSerial}</td>
												</tr>
												</tbody>
											</table>
											<p class="card-text text-secondary">Hạn sử dụng: {this.timeConverter(dataItem.cardEndDate)} </p>
											<p class="card-text"></p>
										</div>):(<div></div>)}

										{(dataItem.rewardType===32)?(<div class="card-body text-center">
											<p class="card-text mb-4 h6 font-weight-bold text-shadow">Thẻ ScoinVoucher mệnh giá: <br /> {dataItem.price ? this.numberWithCommas(dataItem.price) : 0} vnđ</p>
											<table class="table table-borderless text-white">
												<tbody>
												<tr class="border-bottom">
													<td class="p-1">Mã code:</td>
													<td class="p-1">{dataItem.cardCode}</td>
												</tr>
												<tr class="border-bottom">
													<td class="p-1">Serial:</td>
													<td class="p-1">{dataItem.cardSerial}</td>
												</tr>
												</tbody>
											</table>
											<p class="card-text text-secondary">Ngày bắt đầu: {this.timeConverter(dataItem.cardStartDate)} <br />Ngày kết thúc: {this.timeConverter(dataItem.cardEndDate)}</p>
											<p class="card-text"></p>
										</div>):(<div></div>)}
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-mq-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
					{/* <!-- End The Modal Mở quà --> */}

					{/* <!-- The Modal Mở quà Modalmoquavoucher--> */}
						<div class="modal fade" id="mq_bank_web"  style={{zIndex:99999}}>
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-mq_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-mq-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
								</div>
								
								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-mq-body p-2rem py-1 font-3vw text-white">
									<div class="container text-center p-3 font-UTMFacebookKT">
										<div class="card-body text-center">
											<p class="card-text mb-4 font-size-18 font-weight-bold text-shadow">Tài khoản <span class="text-dark">{user.nick_name}</span> nhận được thẻ Scoin Voucher 20K khi nạp Scoin qua Chuyển khoản Ngân hàng. </p>
											<table class="table table-borderless">
												<tbody>
												<tr class="border-bottom">
													<td class="p-1 font-size-18">Bạn hãy nạp Scoin để nhận khuyến mại nhé!</td>
												</tr>
												<tr class="border-bottom">
													<td class="p-1 text-secondary">Hạn sử dụng: {dataItem.cardEndDate}</td>

												</tr>
												</tbody>
											</table>
											<p class="text-center"><a href="https://scoin.vn/nap-tien#9" title="Nạp Scoin" target="_blank"><img src={btn_nap_scoin} width="100" hspace="10" alt="" /></a></p>
										</div>
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-mq-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
					{/* <!-- End The Modal Mở quà --> */}

					{/* <!-- The Modal Thông báo --> */}
					<div class="modal fade" id="tb_err" style={{zIndex:999999}}>
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content modal-tb_err_web bg-transparent border-0">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-tb_err-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-tb_err-body p-2rem py-1 font-3vw text-white">
									<div class="tab-content">
									<div class="container text-center p-5">
										<h4 class="pt-1 pb-3 font-UTMFacebookKT">{message_error}</h4>
									</div>
									</div>
									
								</div>

								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-tb_err-bottom border-0">
									
								</div>

							</div>
						</div>
					</div>
					{/* <!-- End The Modal --> */}

					
					{/* <!-- The Modal Điểm danh --> */}
					{/* <div class="modal fade" id="diemdanh">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content modal-tb_web bg-transparent border-0">

								<div class="modal-header bg-pop-tb-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
								</div>
								

								<div class="modal-body bg-pop-tb-body p-2rem py-1 font-3vw text-white">
									<div class="tab-content">
									<div class="container text-center p-5">
										<h4 class="pt-1 pb-3 font-UTMFacebookKT">{message_rollup}</h4>
									</div>
									</div>
									
								</div>

								<div class="modal-footer bg-pop-hd-bottom border-0">
									
								</div>

							</div>
						</div>
					</div> */}
					{/* <!-- End The Modal --> */}

					{/* <!-- The Modal Đặt cược --> */}
					<div class="modal fade" id="datcuoc_web">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content border-0 modal-datcuoc_web bg-transparent border-0">

							{/* <!-- Modal Header --> */}
							<div class="modal-header bg-pop-datcuoc-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
								<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
							</div>
							
							{/* <!-- Modal body --> */}
							<div class="modal-body bg-pop-datcuoc-body p-2rem py-1 font-3vw text-white">
								<div class="tab-content">
									<div class="container p-4 font-UTMFacebookKT">
										<div class="d-flex justify-content-center pt-0 pb-3">
											<img src={avatar} alt={user.nick_name} class="flex-shrink-0 me-3 rounded-circle" style={{width: 70}} />
											<div>
												<h5>Tài khoản: {user.nick_name}</h5>
												<p>Số điểm đang có: <span class="text-warning h5">{points}</span></p>
											</div>
										</div>
										<div class="text-center pb-4">
											<p class="text-white">Để tham gia GIẬT HŨ VÀNG bạn cần phải đặt cược điểm.</p>                
											<div class="btn btn-warning mb-2 w-75 p-3"><h4>ĐIỂM CƯỢC</h4><span class=" mt-2 badge rounded-pill bg-danger" style={{fontSize: "20px"}}>{info_seesion.minBet} Điểm</span></div>
											<p class="fst-italic text-danger">**Lưu ý: Khi đã đặt cược số điểm sẽ không được hoàn lại.</p>
										</div>
										<div class="text-center">
											<button type="button" class="btn btn-danger w-25 me-2" onClick={()=>this.onBest(type_modeId)}>Đặt cược</button>
											<button type="button" class="btn btn-light w-25 ms-2" onClick={this.closeDatCuoc}>Thoát</button>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- Modal footer --> */}
							<div class="modal-footer bg-pop-datcuoc-bottom border-0">
								
							</div>

							</div>
						</div>
					</div>
					{/* <!-- End The Modal Đặt cược --> */}

					{/* <!-- The Modal Loading--> */}
				{(waiting)?(<div class="modal fade show modal-backdrop" style={{zIndex: 10015, display: "block", paddingRight: 4}} aria-modal="true" role="dialog">
					<div class="modal-dialog d-flex justify-content-center align-items-center h-75">
						<img src={loading} width="32" />
					</div>
				</div>):(<div class="modal fade" id="Loading" style={{zIndex: 10015, display: "none"}} aria-hidden="true">
					<div class="modal-dialog d-flex justify-content-center align-items-center h-75">
						<img src={loading} width="32" />
					</div>
				</div>)}



				<ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} />


		</div>)
	}
}

const mapStateToProps = state => ({
	dataViewItemAward:state.lucky.dataViewItemAward,
	dataContentGuide: state.lucky.dataContentGuide,
	dataCheckPlace:state.lucky.dataCheckPlace,
	dataBalances:state.lucky.dataBalances,
	dataBetting:state.lucky.dataBetting,
	dataSessionInplay:state.lucky.dataSessionInplay,
	dataSessionUpcomming:state.lucky.dataSessionUpcomming,
	dataSanqua: state.lucky.dataSanqua,
	dataRollup: state.lucky.dataRollup,
	dataInfoDonate: state.lucky.dataInfoDonate,
	dataDonate: state.lucky.dataDonate,
	dataProfile: state.profile.data,
	dataSesions: state.lucky.dataSesions,
	dataLuckyInfo: state.lucky.dataLuckyInfo,
	dataLuckyItems:state.lucky.dataLuckyItems,
	dataInfoUser:state.lucky.dataInfoUser,
	dataUserSpin:state.lucky.dataUserSpin,
	dataItemAward:state.lucky.dataItemAward,
	dataRotation:state.lucky.dataRotation,
	dataRotationWithUser:state.lucky.dataRotationWithUser,
	dataPick: state.lucky.dataPick,
	dataDetail: state.lucky.dataDetail,
	dataTurn: state.lucky.dataTurn,
	dataTuDo: state.lucky.dataTuDo,
	dataHistoryTuDo: state.lucky.dataHistoryTuDo,
	dataVinhDanh: state.lucky.dataVinhDanh,
	server:state.server.serverError,
	waiting: state.lucky.waiting,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	betting,
	getMoreSessions,
	getItemAward,
	viewItemAward,
	getHistoryTuDo,
	getData,
	getTuDo,
	getVinhDanh,
	getLuckyInfo,
	userLogout,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	sessionInPlay,
	sessionUpcomming,
	getBalances,
	checkPlace,
	getContentGuide
}, dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lucky_Rotation)
