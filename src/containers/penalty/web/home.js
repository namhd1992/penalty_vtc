import React from 'react'
import { bindActionCreators } from 'redux'
import Pagination from "react-js-pagination";
import Ultilities from '../../../Ultilities/global'
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux'
import './css/style_web.css';
import {
	pickCard,
	getTuDo,
	getHistoryTuDo,
	getMoreSessions,
	getVinhDanh,
	getLuckyInfo,
	getLuckyItems,
	getInfoUser,
	userLogout,
	gds,
	getItemAward,
	getRollup,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua
} from '../../../modules/lucky'
import {
	getData
} from '../../../modules/profile'


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




// import muiten from './images/muiten.png';
import ReactResizeDetector from 'react-resize-detector'
// import spin from './images/spin.gif';
import $ from 'jquery';
import 'bootstrap';

const styles = {
	paper: {
		background: "#fff",
	},
};




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
			content:'',
			rollup:true,
			message_rollup:'',
			dataInfoDonate:{},
			type_action:'',
			showRollup:false,
			listSanqua:[],
			message_sanqua_empty:''
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
		

		this.getVinhDanh(1,1);
		$('.popover-visible-trigger').popover('show').off('click'); 


		if (user !== null) {
			this.setState({isLogin:true, user:user})
		} 

		if (user !== null) {
			this.props.checkRollup(user.Token).then(()=>{
				var data=this.props.dataCheckRollup;
				if(data!==undefined){
					if(data.Status===0){
						this.setState({showRollup: true})
					}else{
						this.setState({showRollup: false})
					}
				}
			})
		}else {
			this.setState({showRollup: true})
		}
		
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


	showModalGiaiThuong=()=>{
		this.props.getMoreSessions().then(()=>{
			var data=this.props.dataSesions;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({listSesstions:data.Data}, ()=>{
						$('#Modalgiaithuong').modal('show');
					})
				}else if(data.Status===2){
					this.setState({message_error:data.Message}, ()=>{
						$('#myModal11').modal('show');
					})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
					console.log("Lỗi")
				}
			}
		})
	}

	showModalChuyenTieu=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		document.getElementById("code").value="";
		document.getElementById("username").value="";
		document.getElementById("numberDart").value="";
		if (user !== null) {
			this.props.getInfoDonate(user.Token).then(()=>{
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
			$('#Modaldangnhap').modal('show');
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
		var offsetVinhDanh=(pageNumber-1)*limit;
		this.setState({type:type, listVinhDanh:[], countVinhDanh:0}, ()=>{
			this.props.getVinhDanh(limit, offsetVinhDanh, type).then(()=>{
				var data=this.props.dataVinhDanh;
				if(data!==undefined){
					if(data.Status===0){
						var listVinhDanh=data.Data;
						this.setState({listVinhDanh:data.Data, countVinhDanh:data.Totals})
					}else{
						$('#myModal11').modal('show');
						this.setState({message_error:'Không lấy được dữ liệu bảng vinh danh.'})
					}
				}else{
					$('#myModal12').modal('show');
					this.setState({server_err:true})
				}
			});
		})
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
		if(!server_err){
			if (typeof(Storage) !== "undefined") {
				var currentPath = window.location.pathname;
				localStorage.setItem("currentPath", currentPath);
			} else {
				console.log("Trình duyệt không hỗ trợ localStorage");
			}
			window.location.replace(`http://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}/login&agencyid=0`)
			
			
			// window.location.replace(`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=UH8DN779CWCMnCyeXGrm2BRqiTlJajUyZUEM0Kc&agencyid=0&redirect_uri=${window.location.protocol}//${window.location.host}/`);
		}else{
			$('#myModal12').modal('show');
		}
	}
	logoutAction = () => {
		this.logout();
		localStorage.removeItem("user");
		window.location.replace(
			`https://graph.vtcmobile.vn/oauth/authorize?client_id=92d34808c813f4cd89578c92896651ca&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		);

		// window.location.replace(
		// 	`http://sandbox.graph.vtcmobile.vn/oauth/authorize?client_id=UH8DN779CWCMnCyeXGrm2BRqiTlJajUyZUEM0Kc&redirect_uri=${window.location.protocol}//${window.location.host}&action=logout&agencyid=0`,
		// );
	}

	logout=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		var header = {
			headers: {
				"Content-Type": "application/json",
				"token": user.Token,
			}
		}
		axios.get(Ultilities.base_url() +'darts/user-signout/', header).then(function (response) {
			console.log(response)
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
			if(user.VipLevel!==0){
				this.getDataTuDo(user);
				$('#Modaltudo').modal('show');
			}else{
				$('#activeVip').modal('show');
			}
		}else {
			$('#Modaldangnhap').modal('show');
		}
	}



	showModalHuongDan=()=>{
		$('#Modalhuongdan').modal('show');
	}

	getDataTuDo=(user)=>{
		const {limit, activeTuDo}=this.state;
		var offsetTuDo=(activeTuDo-1)*limit;
		// $('#Loading').modal('show');
		this.setState({tab_tudo: true})
		this.props.getTuDo(user.Token, limit, offsetTuDo).then(()=>{
			// $('#Loading').modal('hide');
			var data=this.props.dataTuDo;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({listTuDo:data.Data, countTuDo:data.Totals, noti_tudo:false})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
				
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'}, ()=>{
						$('#myModal11').modal('show');
					})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
			
		});
	}

	getHistory=(user)=>{
		const {limit, activeHistory}=this.state;
		var offsetHistory=(activeHistory-1)*limit;
		// $('#Loading').modal('show');
		this.setState({tab_tudo: false})
		this.props.getHistoryTuDo(user.Token, limit, offsetHistory).then(()=>{
			// $('#Loading').modal('hide');
			var data=this.props.dataHistoryTuDo;
			if(data!==undefined){
				if(data.Status===0){
					this.setState({listHistory:data.Data, countHistory:data.Totals})
				}else if(data.Status===3){
					this.logoutAction();
				}else{
					$('#myModal11').modal('show');
					this.setState({message_error:'Chưa tải được dữ liệu. Vui lòng thử lại'})
				}
			}else{
				$('#myModal12').modal('show');
				this.setState({server_err:true})
			}
		});
	}

	getItem=(user, item)=>{
		this.props.getItemAward(user.Token, item.AwardId).then(()=>{
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
				$('#myModal12').modal('show');
				this.setState({server_err:true})
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
			$('#Modaldangnhap').modal('show');
		}
	}

	showTooltip=()=>{
		$('[data-toggle="tooltip"]').tooltip();
	}

	getTypeGiaiThuong=(type)=>{
		if(type===1){
			return "Giải thưởng săn quà"
		}else if(type===2){
			return "Giải thưởng đua top"
		}
	}

	// getImgItem=(item)=>{
	// 	var obj;
	// 	switch (item) {
	// 		case "ScoinCard10K":
	// 			obj=img_card10k;
	// 			break;
	// 		case "ScoinCard20K":
	// 			obj=img_card20k;
	// 			break;
	// 		case "ScoinCard50K":
	// 			obj=img_card50k;
	// 			break;
	// 		case "ScoinCard100K":
	// 			obj=img_card100k;
	// 			break;
	// 		case "ScoinCard200K":
	// 			obj=img_card200k;
	// 			break;
	// 		case "ScoinCard300K":
	// 			obj=img_card300k;
	// 			break;
	// 		case "ScoinCard500K":
	// 			obj=img_card500k;
	// 			break;
	// 		case "ScoinCard1000K":
	// 			obj=img_card1000k
	// 			break;
	// 		case "ScoinCard2000K":
	// 			obj=img_card2000k
	// 			break;
	// 		case "ScoinCard5000K":
	// 			obj=img_card5000k;
	// 			break;
	// 		case "TopupScoin50K":
	// 			obj=logo_scoin;
	// 			break;
	// 		case "ScoinVoucher10K":
	// 			obj=img_thescoinvoucher;
	// 			break;
	// 		case "BankTransferVoucher20K":
	// 			obj=img_thescoinvoucher;
	// 			break;
	// 		default:
	// 			obj=logo_scoin;
	// 			break;
	// 	}
	// 	return obj;
	// }

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
			this.props.getRollup(user.Token).then(()=>{
				var data=this.props.dataRollup;
				if(data!==undefined){
					if(data.Status===0){
						this.setState({rollup:true, message_rollup: data.Message, type_action:'Điểm danh', showRollup:false}, ()=>{
							$('#Modalddthanhcong').modal('show');
						})
					}else if(data.Status===1){
						this.setState({rollup:false, message_rollup: data.Message}, ()=>{
							$('#Modalddthanhcong').modal('show');
						})
					}
				}
			})
		}else {
			$('#Modaldangnhap').modal('show');
		}

	}

	comfirmDonate=()=>{
		var code=document.getElementById('code').value;
		var username=document.getElementById('username').value;
		var numberDart=document.getElementById('numberDart').value;

		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.props.getDonate(user.Token, username, numberDart, code).then(()=>{
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
			$('#Modaldangnhap').modal('show');
		}
	}


	getListSanQua=()=>{
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			this.props.getListSanQua(user.Token).then(()=>{
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
			$('#Modaldangnhap').modal('show');
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

	render() {
		const {message_sanqua_empty, listSanqua, showRollup,type_action, dataInfoDonate, rollup, message_rollup, content, warning_tudo,tab_1, tab_2, tab_3, tab_4,tab_5, tab_tudo ,type,numberPage, isLogin,message_error,dataItem,listSesstions,
			waiting, activeTuDo, activeHistory, activeVinhDanh, limit, countTuDo, countHistory, countVinhDanh, listHistory, listTuDo, listVinhDanh, user}=this.state;
		return (<div>	
					<div class="page-fluid_web">
						<div class="wrap_web mx-auto">
							<div class="s-top_web position-relative">
								<ul class="nav justify-content-between align-items-center flex-nowrap font-3vw">
									<li class="nav-item text-nowrap" style={{width: "16%"}}>
									<a class="nav-link p-0 text-nowrap text-center text-white pt-1 font-UTMFacebookKT" href="#huongdan_web" data-bs-toggle="modal" title="Hướng dẫn">Hướng dẫn</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "16%"}}>
									<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" href="#gt_web" data-bs-toggle="modal" title="Giải thưởng">Giải thưởng</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "8%"}}>
									<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" href="#td_web" data-bs-toggle="modal" title="Tủ đồ">Tủ đồ</a>
									</li>
									<li class="nav-item text-center" style={{width: "30%"}}>
									<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" href="#" title="Điểm danh">&nbsp;</a>
									</li>
									<li class="nav-item text-center" style={{width: "24%"}}>
									{/* <!--<a class="nav-link p-0 text-center text-white font-UTMFacebookKT" href="#" title="Đăng nhập"><img src="images/btn-dang-nhap.png" width="100%" alt="Đăng nhập" /></a>--> */}
									<span class="text-warning fw-bold">Ngọc Trinh Sexy</span> <br /><span class="text-white font-2vw_web">Cấp VIP: <img src={vip_kimcuong} width="16" /></span> <a class="fst-italic" href="#tb" data-bs-toggle="modal" title="Thoát">(Thoát)</a>
									</li>
								</ul>
								<div class="s-btn-options_web d-flex justify-content-around">
									<a class="text-center" href="#tb_web"data-bs-toggle="modal" title="Đua TOP"><img src={btn_duatop} alt="Đua TOP" width="80%" /></a>
									<a class="text-center" href="#" title="Giật Hũ Vàng"><img src={btn_giathuvang} alt="Đua TOP" width="80%" /></a>
									<a class="text-center" href="#" title="Loại Trực Tiếp"><img src={btn_loaitructiep} alt="Đua TOP" width="80%" /></a>
								</div>
							</div>
							<div class="s-bvd_web position-relative">
								<ul class="nav justify-content-center flex-nowrap font-3vw_web">
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
									<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT active" data-bs-toggle="pill" href="#duatop" title="Đua TOP">ĐUA TOP</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
									<a class="nav-link p-0 text-center text-blue pt-1 font-UTMFacebookKT" data-bs-toggle="pill" href="#giathuvang" title="Giật Hũ Vàng">GIẬT HŨ VÀNG</a>
									</li>
									<li class="nav-item text-nowrap" style={{width: "30%"}}>
									<a class="nav-link p-0 text-center text-white pt-1 font-UTMFacebookKT" data-bs-toggle="pill" href="#loaitructiep" title="Loại Trực Tiếp">LOẠI TRỰC TIẾP</a>
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
										<tr>
											<td class="border-start-0 py-1">baodenvutxxxx</td>
											<td class="ps-1 py-1">50K Topup Scoin</td>
											<td class="border-end-0 ps-1 py-1">1/08/2021 10:25:01</td>
										</tr>
										</tbody>
									</table>
									<ul class="pagination pagination-sm justify-content-center font-3vw_web font-UTMFacebookKT" style={{margin: "5px 0"}}>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Trước</a></li>
										<li class="page-item active"><a class="page-link bg-transparent text-white border-0" href="#">1</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">2</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">3</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Sau</a></li>
									</ul>
								</div>
								<div class="tab-pane container fade" id="giathuvang">
									<table class="table table-bordered text-white font-3vw_web font-UTMFacebookKT mt-4 mx-auto mb-0" style={{width: "90%"}}>
										<thead>
										<tr class="border-top-0 p-0">
											<th class="border-start-0 border-top-0">TÀI KHOẢN</th>
											<th class="border-top-0 ps-1">GIẢI THƯỞNG</th>
											<th class="border-end-0 border-top-0 ps-1">THỜI GIAN</th>
										</tr>
										</thead>
										<tbody>
									
										<tr>
											<td class="border-start-0 py-1">baodenvutxxxx</td>
											<td class="ps-1 py-1">50K Topup Scoin</td>
											<td class="border-end-0 ps-1 py-1">1/08/2021 10:25:01</td>
										</tr>
										</tbody>
									</table>
									<ul class="pagination pagination-sm justify-content-center font-3vw_web font-UTMFacebookKT" style={{margin: "5px 0"}}>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Trước</a></li>
										<li class="page-item active"><a class="page-link bg-transparent text-white border-0" href="#">1</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">2</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">3</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Sau</a></li>
									</ul>
								</div>
								<div class="tab-pane container fade" id="loaitructiep">
									<table class="table table-bordered text-white font-3vw_web font-UTMFacebookKT mt-4 mx-auto mb-0" style={{width: "90%"}}>
										<thead>
										<tr class="border-top-0 p-0">
											<th class="border-start-0 border-top-0">TÀI KHOẢN</th>
											<th class="border-top-0 ps-1">GIẢI THƯỞNG</th>
											<th class="border-end-0 border-top-0 ps-1">THỜI GIAN</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="border-start-0 py-1">dtueduc0802xxxx</td>
											<td class="ps-1 py-1">Thẻ Scoin 500K</td>
											<td class="border-end-0 ps-1 py-1">30/09/2021 21:58:35</td>
										</tr>
										
										<tr>
											<td class="border-start-0 py-1">baodenvutxxxx</td>
											<td class="ps-1 py-1">50K Topup Scoin</td>
											<td class="border-end-0 ps-1 py-1">1/08/2021 10:25:01</td>
										</tr>
										</tbody>
									</table>
									<ul class="pagination pagination-sm justify-content-center font-3vw_web font-UTMFacebookKT" style={{margin: "5px 0"}}>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Trước</a></li>
										<li class="page-item active"><a class="page-link bg-transparent text-white border-0" href="#">1</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">2</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">3</a></li>
										<li class="page-item"><a class="page-link bg-transparent text-white border-0" href="#">Sau</a></li>
									</ul>
								</div>
								</div>    	
							</div>
							<div class="s-bottom_web position-relative">
								<div class="d-flex justify-content-around pt-5">
									<a style={{width:"30%"}} href="#" title="" target="_blank"><img src={btn_hdmtscoin} alt="Hướng dẫn mua thẻ scoin" width="100%" /></a>
									<a style={{width:"30%"}} href="#" title="" target="_blank"><img src={btn_ntbsk} alt="Nhận thông báo sự kiện" width="100%" /></a>
								</div>
								<div class="d-flex justify-content-around pt-2">
									<a style={{width:"30%"}} href="#" title="" target="_blank"><img src={btn_napgame} alt="Nạp Game" width="100%" /></a>
									<a style={{width:"30%"}} href="tel:19001104" title="" target="_blank"><img src={btn_hotline19001104} alt="19001104" width="100%" /></a>
								</div>
								<div class="d-flex justify-content-center align-items-center group-logo_web mt-5">
									<a class="px-4" style={{width:"20%"}} href="#" title="" target="_blank"><img src={logo_scoin} alt="Scoin" width="100%" /></a>
									<a class="px-4" style={{width:"20%"}} href="#" title="" target="_blank"><img src={logo_splay} alt="Splay" width="100%" /></a>
									<a class="px-4" style={{width:"20%"}} href="#" title="" target="_blank"><img src={logo_scoinvip} alt="Scoin VIP" width="100%" /></a>
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


				<ReactResizeDetector handleWidth={true} handleHeight={true} onResize={this.onResize} />


		</div>)
	}
}

const mapStateToProps = state => ({
	dataSanqua: state.lucky.dataSanqua,
	dataCheckRollup: state.lucky.dataCheckRollup,
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
	getMoreSessions,
	pickCard,
	getInfoUser,
	getItemAward,
	getHistoryTuDo,
	getData,
	getTuDo,
	getVinhDanh,
	getLuckyInfo,
	getLuckyItems,
	userLogout,
	gds,
	getRollup,
	getDonate,
	getInfoDonate,
	checkRollup,
	getListSanQua
}, dispatch)


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lucky_Rotation)
