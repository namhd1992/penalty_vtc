import React from 'react'
import { bindActionCreators } from 'redux'
import Pagination from "react-js-pagination";
import Ultilities from '../../../Ultilities/global'
import { Link } from "react-router-dom";
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
	gds,
	getItemAward,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	sessionInPlay,
	sessionUpcomming,
	betting,
	getBalances
} from '../../../modules/lucky'
import {
	getData
} from '../../../modules/profile'

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
import img_thescoinvoucher from './images/img-thescoinvoucher.png';

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
			type_modeId:0
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
		$('#Modalbanner').modal('show');


		// localStorage.setItem("update29", true);
	

		this.getVinhDanh(1,0);
		$('.popover-visible-trigger').popover('show').off('click'); 


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


	showModalChuyenTieu=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		document.getElementById("code").value="";
		document.getElementById("username").value="";
		document.getElementById("numberDart").value="";
		if (user !== null) {
			this.props.getInfoDonate(user.access_token).then(()=>{
				var data=this.props.dataInfoDonate;
				if(data!==undefined){
					if(data.Status===0){
						this.setState({dataInfoDonate:data.Data}, ()=>{
							$('#Modalchuyenphitieu').modal('show');
						})
					}
				}
			})
		}else {
			$('#tb').modal('show');
		}
	}

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
		data.pageIndex=pageNumber;
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
						
						this.setState({message_error:'Không lấy được dữ liệu bảng vinh danh.'}, ()=>{
							$('#tb_err').modal('show');
						})
					}
				}else{
					this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
						$('#tb_err').modal('show');
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
		if (user !== null) {
			this.props.sessionUpcomming(user.access_token, data).then(()=>{
				var data=this.props.dataSessionUpcomming;
				var room=data.data.room;
				var new_room=[];
				var awards=data.data.rewards;
				for (let i = 0; i < room.length; i++) {
					var award=awards.filter(v=>v.id===room[i].id)
					room[i].award=award;
					new_room.push(room[i])
				}
				console.log(new_room)
				if(data!==undefined){
					if(data.code > 0){
						this.setState({listSesstions: new_room},()=>{
							$('#gt_web').modal('show');
						})
					}else{
						this.setState({message_error:'Không lấy được dữ liệu.'},()=>{
							$('#tb_err').modal('show');
						})
					}
				}else{
					this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
						$('#tb_err').modal('show');
					})
				}
			});
		}else {
			$('#tb').modal('show');
		}
	}
  
	getSessionInPlay=(type)=>{
		var user = JSON.parse(localStorage.getItem("user"));
		var data= {...info}
		data.gameId=1;
		data.serverId=1;
		data.modeId=type;
		localStorage.removeItem("info_seesion");
		if (user !== null) {
			this.props.sessionInPlay(user.access_token, data).then(()=>{
				var data=this.props.dataSessionInplay;
				if(data!==undefined){
					if(data.code > 0){
						if(data.data!==null){
							
							var info_seesion=data.data.room;
							this.setState({info_seesion:info_seesion})
							localStorage.setItem("info_seesion", JSON.stringify(info_seesion));
							switch (type) {
								case 1:
									window.location.replace('/duatop')
									break;
								case 2:
									this.checkBetting(2, 'GIẬT HŨ VÀNG');
									break;
								case 3:
									this.checkBetting(3, 'LOẠI TRỰC TIẾP');
									// window.location.replace('/loaitructiep')
									break;
							
								default:
									window.location.replace('/duatop')
									break;
							}
						}else{
							this.setState({message_error:"Hiện chưa có phiên nào."}, ()=>{
								$('#tb_err').modal('show');
							})
						}
					
					}else{
						this.setState({message_error:'Không lấy được dữ liệu.'},()=>{
							$('#tb_err').modal('show');
						})
					}
				}else{
					this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
						$('#tb_err').modal('show');
					})
				}
			});
		}else {
			$('#tb').modal('show');
		}
	}


	checkBetting=(type, title_module)=>{
		const {info_seesion}=this.state;
		var time=Date.now();
		var user = JSON.parse(localStorage.getItem("user"));
		var data= {...info}
		data.userId= user.uid;
		data.type=21;
		this.setState({type_modeId: type, title_module:title_module})
		if(time < info_seesion.betsStartTime){
			this.setState({message_error:'Chưa tới thời gian đặt cược .'},()=>{
				$('#tb_err').modal('show');
			})
			return;
		}
		
		if(time > info_seesion.betsEndTime){
			this.setState({message_error:'Thời gian đặt cược đã hết.'},()=>{
				$('#tb_err').modal('show');
			})
			return;
		}
		
		if(type===3){

		}

		if (user !== null) {
			this.props.getBalances(user.access_token, data).then(()=>{
				var data=this.props.dataBalances;
				console.log(data)
				if(data!==undefined){
					if(data.code > 0){
						this.setState({points: data.data.balance},()=>{
							$('#datcuoc').modal('show');
						})
					}else{
						this.setState({message_error:'Không lấy được dữ liệu.'},()=>{
							$('#tb_err').modal('show');
						})
					}
				}else{
					this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
						$('#tb_err').modal('show');
					})
				}
			});
		}else {
			$('#tb').modal('show');
		}
			
	
	}

	onBest=()=>{

		const {info_seesion}=this.state;
		var user = JSON.parse(localStorage.getItem("user"));
		var data= {...info}
		data.gameId=1;
		data.serverId=1;
		data.limit=10;
		data.modeId=2;
		data.roomId=info_seesion.id;
		data.userId=user.uid;
		data.price=info_seesion.minBet;
		data.source=21;

		if (user !== null) {
			this.props.betting(user.access_token, data).then(()=>{
				var data=this.props.dataBetting;
				console.log(data)
				if(data!==undefined){
					if(data.code > 0){
						window.location.replace('/giathuvang')
					}else{
						this.setState({message_error:'Không lấy được dữ liệu.'},()=>{
							$('#tb_err').modal('show');
						})
					}
				}else{
					this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
						$('#tb_err').modal('show');
					})
				}
			});
		}else {
			$('#tb').modal('show');
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
		var data= {...info}
		data.userId= bigInt(user.uid);
		console.log(data)
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



	timeRemain=(times)=>{
		var _this=this;
		setInterval(()=>{
			var time=(times-Date.now())/1000;
			if(time>0){
				var day=Math.floor(time/86400) > 9 ? Math.floor(time/86400) : `0${Math.floor(time/86400)}`;
				var hour=Math.floor((time%86400)/3600) > 9 ? Math.floor((time%86400)/3600) : `0${Math.floor((time%86400)/3600)}`;
				var minute=Math.floor(((time%86400)%3600)/60) > 9 ? Math.floor(((time%86400)%3600)/60) : `0${Math.floor(((time%86400)%3600)/60)}`;
				var second=Math.ceil(((time%86400)%3600)%60) > 9 ? Math.ceil(((time%86400)%3600)%60) : `0${Math.ceil(((time%86400)%3600)%60)}`;
				_this.setState({day:day, hour: hour, minute: minute, second:second})
				// _this.setState({hour_live: hour, minute_live: minute, second_live:second})
			}
		}, 1000);
	}


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


	showModalRules=()=>{
		$('#myModal1').modal('show'); 
	}

	hideModalRules=()=>{
		$('#myModal1').modal('hide');
	}

	showModalTuDo=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.getDataTuDo(user);
		}else {
			$('#tb').modal('show');
		}
	}



	showModalHuongDan=()=>{
		$('#huongdan_web').modal('show');
	}

  
	getDataTuDo=(user)=>{
		const {limit, activeTuDo}=this.state;
		var data= {...info}
		data.gameId=1;
		data.serverId=1;
		data.modeId=1;
		data.userId= user.uid;
		data.type=5;
		data.fromDate=-1;
		data.toDate=-1;
		data.pageIndex=activeTuDo;
		data.pageSize=limit;
		this.setState({tab_tudo: true})
		this.props.getTuDo(user.access_token, data).then(()=>{
			var d=this.props.dataTuDo;
			if(d!==undefined){
				if(d.code>0){
					this.setState({listTuDo:d.data.items, countTuDo:d.data.totalItems, noti_tudo:false}, ()=>{
						$('#td_web').modal('show');
					})
				}else if(d.Status===3){
					this.logoutAction();
				}else{
				
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
						$('#tb_err').modal('show');
					})
				}
			}else{
				this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
					$('#tb_err').modal('show');
				})
			}
			
		});
	}

	getHistory=(user)=>{
		const {limit, activeHistory}=this.state;
		var offsetHistory=(activeHistory-1)*limit;
		// $('#Loading').modal('show');
		this.setState({tab_tudo: false})
		// this.props.getHistoryTuDo(user.access_token, limit, offsetHistory).then(()=>{
		// 	// $('#Loading').modal('hide');
		// 	var data=this.props.dataHistoryTuDo;
		// 	if(data!==undefined){
		// 		if(data.Status===0){
		// 			this.setState({listHistory:data.Data, countHistory:data.Totals})
		// 		}else if(data.Status===3){
		// 			this.logoutAction();
		// 		}else{
		// 			$('#myModal11').modal('show');
		// 			this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
		// 		}
		// 	}else{
		// 		$('#myModal12').modal('show');
		// 		this.setState({server_err:true})
		// 	}
		// });
	}

	getItem=(user, item)=>{
		this.props.getItemAward(user.access_token, item.AwardId).then(()=>{
			// $('#Loading').modal('hide');
			var data=this.props.dataItemAward;
			if(data!==undefined){
				if(data.Status===0){
					this.getDataTuDo(user)
					// this.setState({listHistory:data.Data, countHistory:data.Totals})
					if(data.Data.Type ==='BankTransferVoucher'){
						this.setState({dataItem:data.Data},()=>{
							$("#Modalmoquavoucher").modal('show');
						})
					}else{
						this.setState({dataItem:data.Data},()=>{
							$("#Modalmoqua").modal('show');
						})
					}
					
				}else if(data.Status===1){
					$('#myModal11').modal('show');
					this.setState({message_error:data.Message})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				this.setState({message_error:'Server đang lỗi, vui lòng truy cập lại sau.'},()=>{
					$('#tb_err').modal('show');
				})
			}
		});
	}


	closePopupAuto=()=>{
		clearInterval(this.state.intervalId);
		this.setState({ isSpin:false, closeAuto:false});
		$('#myModal9').modal('hide');
	}

	showModalDetailBonus=()=>{
		$('#myModal4').modal('show');
	}

	hideModalDetailBonus=()=>{
		$('#myModal4').modal('hide');
	}
	closeServerErr=()=>{
		$('#myModal12').modal('hide');
	}



	handlePageChangeTuDo=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeTuDo: pageNumber},()=>{
			this.getDataTuDo(user)
		})
	}

	handlePageChangeHistory=(pageNumber)=> {
		var user = JSON.parse(localStorage.getItem("user"));
		this.setState({activeHistory: pageNumber},()=>{
			this.getHistory(user)
		})
	}


	handlePageChangeVinhDanh=(type, pageNumber)=> {
		this.setState({activeVinhDanh: pageNumber},()=>{
			this.getVinhDanh(type, pageNumber)
		})

	}

	openTabNapScoin=(url)=> {
		window.open(url, '_blank').focus();
	}

	xacThuc=(url)=> {
		localStorage.removeItem("user");
		document.location.reload(true);
		$('#myModal8').modal('hide');
		window.open(url, '_blank').focus();
	}



	randomItemIndex=()=>{
		// var item = items[Math.floor(Math.random()*items.length)];
	}

	numberWithCommas=(x)=> {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	sanqua=()=>{
		$('#Modalthele').modal('show');
	}

	dangNhap=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			$('#activeVip').modal('show');
		}else {
			$('#tb').modal('show');
		}
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
				obj=img_card10k;
				break;
			case 6:
				obj=img_card10k;
				break;
			case 11:
				obj=img_card10k;
				break;
			case 21:
				obj=logo_scoin;
				break;
			case 22:
				obj=img_card50k;
				break;
			case 31:
				obj=img_thescoinvoucher;
				break;
			case 32:
				obj=logo_scoin;
				break;
			default:
				obj=logo_scoin;
				break;
		}
		return obj;
	}

	timeModalGiaiThuowng=(time)=>{
		var start=time.substring(time.indexOf("(") +1,time.indexOf(")"));
		var times=(start-Date.now())/1000;
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
		var start=time.substring(time.indexOf("(") +1,time.indexOf(")"));
		var a = new Date(+start);
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
		var t=Date.now();
		var startTime=obj.startTime;
		var endTime=obj.endTime;
		if(startTime > t){
			return <p class="font-3vw mb-0">Còn: {this.timeModalGiaiThuowng(obj.startTime)}</p>;
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

	tab1=()=>{
		this.setState({tab_1:true, tab_2:false, tab_3:false, tab_4:false, tab_5:false})
	}

	tab2=()=>{
		this.setState({tab_1:false, tab_2:true, tab_3:false, tab_4:false, tab_5:false})
	}

	tab3=()=>{
		this.setState({tab_1:false, tab_2:false, tab_3:true, tab_4:false, tab_5:false})
	}

	tab4=()=>{
		this.setState({tab_1:false, tab_2:false, tab_3:false, tab_4:true, tab_5:false})
	}

	tab5=()=>{
		this.setState({tab_1:false, tab_2:false, tab_3:false, tab_4:false, tab_5:true})
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
						this.setState({rollup:true, message_rollup: data.message, type_action:'Điểm danh', showRollup:false}, ()=>{
							$('#diemdanh').modal('show');
						})
					}else{
						this.setState({rollup:false, message_rollup: data.message}, ()=>{
							$('#diemdanh').modal('show');
						})
					}
				}
			})
		}else {
			$('#tb').modal('show');
		}

	}

	comfirmDonate=()=>{
		var code=document.getElementById('code').value;
		var username=document.getElementById('username').value;
		var numberDart=document.getElementById('numberDart').value;

		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.props.getDonate(user.access_token, username, numberDart, code).then(()=>{
				var data=this.props.dataDonate;
				console.log(data)
				if(data!==undefined){
					if(data.Status===0){
						this.setState({rollup:true, message_rollup: data.Message, type_action:'Chuyển tiêu'}, ()=>{
							$('#Modalchuyenphitieu').modal('hide');
							$('#Modalddthanhcong').modal('show');
						})
					}else{
						this.setState({rollup:false, message_rollup: data.Message}, ()=>{
							$('#Modalchuyenphitieu').modal('hide');
							$('#Modalddthanhcong').modal('show');
						})
					}
				}
			})
		}else {
			$('#tb').modal('show');
		}
	}


	getListSanQua=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.props.getListSanQua(user.access_token).then(()=>{
				var data=this.props.dataSanqua;
				if(data!==undefined){
					if(data.Status===0){
						this.setState({listSanqua:data.Data}, ()=>{
							$('#Modalchonroom').modal('show');
						})
					}else{
						this.setState({message_sanqua_empty:data.Message}, ()=>{
							$('#ModalListEmpty').modal('show');
						})
					}
				}
			})
		}else {
			$('#tb').modal('show');
		}
	}

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
		$('#huongdan_web').modal('hide');
	}

	closeGT=()=>{
		$('#gt_web').modal('hide');
	}

	closeTD=()=>{
		$('#td_web').modal('hide');
	}

	closeDatCuoc=()=>{
		$('#datcuoc').modal('hide');
	}


	render() {
		const {type_modeId, title_module,points,info_seesion, bxh_tab_1, bxh_tab_2, bxh_tab_3, message_sanqua_empty, listSanqua, showRollup,type_action, dataInfoDonate, rollup, message_rollup, content, warning_tudo,tab_1, tab_2, tab_3, tab_4,tab_5, tab_tudo ,type,numberPage, isLogin,message_error,dataItem,listSesstions,
			waiting, activeTuDo, activeHistory, activeVinhDanh, limit, countTuDo, countHistory, countVinhDanh, listHistory, listTuDo, listVinhDanh, user}=this.state;
		return (<div>	
					<div class="page-fluid_web">
						<div class="wrap_web mx-auto">
							<div class="s-top_web position-relative">
								<ul class="nav justify-content-between align-items-center flex-nowrap font-3vw">
									<li class="nav-item text-nowrap" style={{width: "16%"}}>
										<a class="nav-link p-0 text-nowrap text-center text-white pt-1 font-UTMFacebookKT" onClick={this.showModalHuongDan} title="Hướng dẫn" style={{cursor: "pointer"}}>Hướng dẫn</a>
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
									<a class="text-center" title="Giật Hũ Vàng" onClick={()=>this.getSessionInPlay(2)} style={{cursor:'pointer'}}><img src={btn_giathuvang} alt="Đua TOP" width="80%" /></a>
									<a class="text-center" title="Loại Trực Tiếp" onClick={()=>this.getSessionInPlay(3)} style={{cursor:'pointer'}}><img src={btn_loaitructiep} alt="Đua TOP" width="80%" /></a>
								</div>
							</div>
							<div class="s-bvd_web position-relative">
								<ul class="nav justify-content-center flex-nowrap font-3vw_web">
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_1 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Đua TOP" onClick={()=>this.getVinhDanh(1,0)}>ĐUA TOP</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_2 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Giật Hũ Vàng" onClick={()=>this.getVinhDanh(2,0)}>GIẬT HŨ VÀNG</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
										<a class={bxh_tab_3 ? "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" : "nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT"} style={{cursor: "pointer"}} title="Loại Trực Tiếp" onClick={()=>this.getVinhDanh(3,0)}>LOẠI TRỰC TIẾP</a>
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
										<div className="pagination justify-content-center pag-custom">
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
										</div> 
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
								<div class="modal-content modal-huongdan bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-hd-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" onClick={this.closeHD} style={{marginRight: "3%"}}></button>
									<div class="tab-hd w-100">
										<ul class="nav justify-content-center">
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_1 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Tham gia" onClick={this.tab1}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_2 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Đua TOP" onClick={this.tab2}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "18%"}}>
											<a class={tab_3 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Loại Trực Tiếp" onClick={this.tab3}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "18%"}}>
											<a class={tab_4 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Giật Hũ Vàng" onClick={this.tab4}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "17%"}}>
											<a class={tab_5 ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}} title="Sử Dụng Giải Thưởng" onClick={this.tab5}>&nbsp;</a>
										</li>
										</ul> 
									</div>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-hd-body p-2rem py-1 font-3vw text-white">
									{/* <!-- Tab panes --> */}
									<div class="tab-content">
									<div class="tab-pane container active" id="tg">
										1. Về đối tượng tham gia bảo hiểm xã hội bắt buộc
										
										Tại khoản 1 Điều 1 Thông tư 06/2021 sửa đổi khoản 1 Điều 2 Thông tư 59/2015 như sau:
										
										Người hoạt động không chuyên trách ở xã, phường, thị trấn đồng thời là người giao kết hợp đồng lao động quy định tại điểm a và điểm b khoản 1 Điều 2 Luật Bảo hiểm xã hội thì tham gia BHXH bắt buộc theo đối tượng quy định tại điểm a và điểm b khoản 1 Điều 2 Luật Bảo hiểm xã hội.
										
										Cụ thể, điểm a, b khoản 1 Điều 2 Luật Bảo hiểm xã hội quy định:
										
										Cụ thể, điểm a, b khoản 1 Điều 2 Luật Bảo hiểm xã hội quy định:
										
										"Điều 2. Đối tượng áp dụng
										
										1. Người lao động là công dân Việt Nam thuộc đối tượng tham gia bảo hiểm xã hội bắt buộc, bao gồm:
										
										a) Người làm việc theo hợp đồng lao động không xác định thời hạn, hợp đồng lao động xác định thời hạn, hợp đồng lao động theo mùa vụ hoặc theo một công việc nhất định có thời hạn từ đủ 03 tháng đến dưới 12 tháng, kể cả hợp đồng lao động được ký kết giữa người sử dụng lao động với người đại diện theo pháp luật của người dưới 15 tuổi theo quy định của pháp luật về lao động;
										. Về đối tượng tham gia bảo hiểm xã hội bắt buộc
										
										Tại khoản 1 Điều 1 Thông tư 06/2021 sửa đổi khoản 1 Điều 2 Thông tư 59/2015 như sau:
										
										Người hoạt động không chuyên trách ở xã, phường, thị trấn đồng thời là người giao kết hợp đồng lao động quy định tại điểm a và điểm b khoản 1 Điều 2 Luật Bảo hiểm xã hội thì tham gia BHXH bắt buộc theo đối tượng quy định tại điểm a và điểm b khoản 1 Điều 2 Luật Bảo hiểm xã hội.
										
										Cụ thể, điểm a, b khoản 1 Điều 2 Luật Bảo hiểm xã hội quy định:
										
										Cụ thể, điểm a, b khoản 1 Điều 2 Luật Bảo hiểm xã hội quy định:
										
										"Điều 2. Đối tượng áp dụng
										
										1. Người lao động là công dân Việt Nam thuộc đối tượng tham gia bảo hiểm xã hội bắt buộc, bao gồm:
										
										a) Người làm việc theo hợp đồng lao động không xác định thời hạn, hợp đồng lao động xác định thời hạn, hợp đồng lao động theo mùa vụ hoặc theo một công việc nhất định có thời hạn từ đủ 03 tháng đến dưới 12 tháng, kể cả hợp đồng lao động được ký kết giữa người sử dụng lao động với người đại diện theo pháp luật của người dưới 15 tuổi theo quy định của pháp luật về lao động;
									</div>
									<div class="tab-pane container fade" id="dt">...</div>
									<div class="tab-pane container fade" id="ltt">...</div>
									<div class="tab-pane container fade" id="ghv">...</div>
									<div class="tab-pane container fade" id="sdgt">...</div>
									</div>
									
								</div>
								{/* <!-- Modal footer --> */}
								<div class="modal-footer bg-pop-hd-bottom border-0">
									
								</div>

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Hướng dẫn --> */}


						{/* <!-- The Modal Giải thưởng --> */}
						<div class="modal fade" id="gt_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-gt bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-gt-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" onClick={this.closeGT} style={{marginRight: "3%"}}></button>
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
								<div class="modal-content modal-td bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-td-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" onClick={this.closeTD} style={{marginRight: "3%"}}></button>
									{/* <div class="tab-hd w-100">
										<ul class="nav justify-content-center">
										<li class="nav-item" style={{width: "43%"}}>
											<a class={tab_tudo ? "nav-link text-white font-3vw px-0 py-1 active" : "nav-link text-white font-3vw px-0 py-1"} style={{height: 45}}  title="Phần Thưởng" onClick={()=>this.getDataTuDo(user)}>&nbsp;</a>
										</li>
										<li class="nav-item" style={{width: "43%"}}>
											<a class={tab_tudo ? "nav-link text-white font-3vw px-0 py-1" : "nav-link text-white font-3vw px-0 py-1 active"} style={{height: 45}} title="Lịch Sử" onClick={()=>this.getHistory(user)}>&nbsp;</a>
										</li>
										</ul> 
									</div> */}
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-td-body p-2rem py-1 font-3vw text-white">
									{/* <!-- Tab panes --> */}
									<div class="tab-content">
										<div class="tab-pane container active" id="pt">
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
															<td class="border-start-0 py-1">{obj.AwardName}</td>
															<td class="ps-1 py-1">{obj.AwardDisplay}</td>
															<td className="ps-1 py-1">{this.timeConverter(obj.RewardTime)}</td>
															{(obj.Status===1)?(<td class="border-end-0 ps-1 py-1"><a class="text-primary"  style={{cursor:'pointer'}} onClick={()=>this.getItem(user, obj)}>Mở quà</a></td>):(<td class="p-1 w-auto valign-middle position-relative"><a class="text-primary"  style={{cursor:'pointer'}} onClick={()=>this.getItem(user, obj)}>Mở quà</a><span class="badge badge-pill badge-danger position-absolute noti-tudo">!</span></td>)}
															
														</tr>
													))}		
												
												</tbody>
											</table>
											<div className="pagination justify-content-center pag-custom mt-1">
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
											</div> 
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
						<div class="modal fade" id="tb">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-tb bg-transparent">

									{/* <!-- Modal Header --> */}
									<div class="modal-header bg-pop-tb-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
										<button type="button" class="btn-close float-end pe-5" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
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

								</div>
							</div>
						</div>
						{/* <!-- End The Modal Đăng nhập --> */}

						{/* <!-- The Modal Mở quà --> */}
						<div class="modal fade" id="mq_web">
							<div class="modal-dialog modal-dialog-scrollable">
								<div class="modal-content modal-mq bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-mq-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-mq-body p-2rem py-1 font-3vw text-white">
									<div class="tab-content">
									<div class="container text-center p-5 font-UTMFacebookKT">
										<p class="h4">Thẻ Scoin mệnh giá: <br /> 5.000.000 vnđ</p>
										<table class="table table-borderless text-white">
											<tbody>
											<tr class="border-bottom">
												<td class="p-1">Mã code:</td>
												<td class="p-1">xxxxxxxxxxxx</td>
											</tr>
											<tr class="border-bottom">
												<td class="p-1">Serial:</td>
												<td class="p-1">xxxxxxxxxxxx</td>
											</tr>
											</tbody>
										</table>
										<p class="card-text text-white">Hạn sử dụng: xx/xx/20xx</p>
										<p class="card-text"></p>
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
					<div class="modal fade" id="tb_err">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content modal-tb bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-tb-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-tb-body p-2rem py-1 font-3vw text-white">
									<div class="tab-content">
									<div class="container text-center p-5">
										<h4 class="pt-1 pb-3 font-UTMFacebookKT">{message_error}</h4>
									</div>
									</div>
									
								</div>

							</div>
						</div>
					</div>
					{/* <!-- End The Modal --> */}

					
					{/* <!-- The Modal Điểm danh --> */}
					<div class="modal fade" id="diemdanh">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content modal-tb bg-transparent">

								{/* <!-- Modal Header --> */}
								<div class="modal-header bg-pop-tb-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
									<button type="button" class="btn-close float-end pe-5" data-bs-dismiss="modal" style={{marginRight: "3%"}}></button>
								</div>
								

								{/* <!-- Modal body --> */}
								<div class="modal-body bg-pop-tb-body p-2rem py-1 font-3vw text-white">
									<div class="tab-content">
									<div class="container text-center p-5">
										<h4 class="pt-1 pb-3 font-UTMFacebookKT">{message_rollup}</h4>
									</div>
									</div>
									
								</div>

							</div>
						</div>
					</div>
					{/* <!-- End The Modal --> */}

					{/* <!-- The Modal Đặt cược --> */}
					<div class="modal fade" id="datcuoc">
						<div class="modal-dialog modal-dialog-scrollable">
							<div class="modal-content border-0 modal-datcuoc_web bg-transparent">

							{/* <!-- Modal Header --> */}
							<div class="modal-header bg-pop-datcuoc-top border-0 d-block pb-0 position-relative" style={{height: 117}}>
								<button type="button" class="btn-close-white btn-close float-end m-0" data-bs-dismiss="modal"></button>
							</div>
							

							{/* <!-- Modal body --> */}
							<div class="modal-body bg-pop-datcuoc-body p-2rem py-1 font-3vw text-white">
								<div class="tab-content">
								<div class="container p-4 font-UTMFacebookKT">
									<div class="d-flex justify-content-center pt-0 pb-3">
										<img src={avatar} alt={user.nick_name} class="flex-shrink-0 me-3 rounded-circle" style={{height: 60}} />
										<div>
											<h5>Tài khoản: {user.nick_name}</h5>
											<p>Số điểm: {points}</p>
										</div>
									</div>
									<div class="text-center pb-4">
										<p class="mb-2">Để tham gia {title_module} bạn cần đặt cược số điểm: <span class="text-warning h4">{info_seesion.minBet} Điểm</span></p>
										<p>Khi đã đặt cược số điểm sẽ không được hoàn lại.</p>
									</div>
									<div class="text-center">
										<button type="button" class="btn btn-danger w-25" style={{marginRight:10}} onClick={()=>this.onBest(type_modeId)}>Đồng ý</button>
										<button type="button" class="btn btn-light w-25" style={{marginLeft:10}} onClick={this.closeDatCuoc}>Thoát</button>
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



				<ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} />


		</div>)
	}
}

const mapStateToProps = state => ({
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
	getHistoryTuDo,
	getData,
	getTuDo,
	getVinhDanh,
	getLuckyInfo,
	userLogout,
	gds,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua,
	sessionInPlay,
	sessionUpcomming,
	getBalances
}, dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lucky_Rotation)
