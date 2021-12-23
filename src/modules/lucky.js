import axios from 'axios'
import Ultilities from '../Ultilities/global'
// import crypto from './crypto'
import {SERVER_ERROR} from './server'
export const LUCKY_REQUEST = 'lucky/LUCKY_REQUEST'
export const LUCKY_RESPONSE = 'lucky/LUCKY_RESPONSE'
export const LUCKY_TU_DO='lucky/LUCKY_TU_DO';
export const LUCKY_HISTORY_TU_DO='lucky/LUCKY_HISTORY_TU_DO';
export const LUCKY_VINH_DANH='lucky/LUCKY_VINH_DANH';
export const LUCKY_INFO='lucky/LUCKY_INFO'
export const DATA_USER_SPIN='lucky/DATA_USER_SPIN';
export const ITEM_AWARD='lucky/ITEM_AWARD';
export const VIEW_ITEM_AWARD='lucky/VIEW_ITEM_AWARD';
export const LUCKY_SESSIONS='lucky/LUCKY_SESSIONS';
export const INFO_USER_RESPONSE='lucky/INFO_USER_RESPONSE';
export const DONATE='lucky/DONATE';
export const INFO_DONATE='lucky/INFO_DONATE';
export const CHECK_ROLLUP='lucky/CHECK_ROLLUP';
export const LIST_SANQUA='lucky/LIST_SANQUA';
export const SET_PHIEN_SANQUA='lucky/SET_PHIEN_SANQUA';

export const SESSION_UPCOMMING='lucky/SESSION_UPCOMMING';
export const SESSION_INPLAY='lucky/SESSION_INPLAY';
export const RACE_CONNECT='lucky/RACE_CONNECT';
export const RACE_PLAYING='lucky/RACE_PLAYING';
export const RACE_STATE="lucky/RACE_STATE";
export const RACE_SUMMARY="lucky/RACE_SUMMARY";

export const JACKPOT_CONNECT='lucky/JACKPOT_CONNECT';
export const JACKPOT_PLAYING='lucky/JACKPOT_PLAYING';
export const JACKPOT_STATE="lucky/JACKPOT_STATE";
export const JACKPOT_SUMMARY="lucky/JACKPOT_SUMMARY";

export const KNOCKOUT_CONNECT='lucky/KNOCKOUT_CONNECT';
export const KNOCKOUT_PLAYING='lucky/KNOCKOUT_PLAYING';
export const KNOCKOUT_STATE="lucky/KNOCKOUT_STATE";
export const KNOCKOUT_SUMMARY="lucky/KNOCKOUT_SUMMARY";

export const BETTING="lucky/BETTING";

export const CHECK_PLACE="lucky/CHECK_PLACE";
export const BALANCES="lucky/BALANCES";
export const CONTENT_GUIDE ="lucky/CONTENT_GUIDE";




const initialState = {
	data: [], 
	waiting: false
}

var keySize = 256;
var ivSize = 128;
var saltSize = 256;
var iterations = 1000;


export default (state = initialState, action) => { 
	switch (action.type) {
		case LUCKY_REQUEST:
			return {
				...state,
				waiting: true
			}
		case LUCKY_RESPONSE:
			return {
				...state,
				data: action.data,
				totalRecords: action.totalRecords,
				waiting: false
			}
		case INFO_USER_RESPONSE:
			return {
				...state,
				dataInfoUser: action.data,
				waiting: false
			}
		case LUCKY_TU_DO:
			return {
				...state,
				dataTuDo: action.data,
				waiting: false
			}
		case LUCKY_HISTORY_TU_DO:
			return {
				...state,
				dataHistoryTuDo: action.data,
				waiting: false
			}
		case LUCKY_VINH_DANH:
			return {
				...state,
				dataVinhDanh: action.data,
				waiting: false
			}
		case LUCKY_INFO:
			return {
				...state,
				dataLuckyInfo: action.data,
				waiting: false
			}
		case DATA_USER_SPIN:
			return {
				...state,
				dataUserSpin: action.data,
				waiting: false
			}
		case ITEM_AWARD:
			return {
				...state,
				dataItemAward: action.data,
				waiting: false
			}
		case VIEW_ITEM_AWARD:
			return {
				...state,
				dataViewItemAward: action.data,
				waiting: false
			}
		case LUCKY_SESSIONS:
			return {
				...state,
				dataSesions: action.data,
				waiting: false
			}
		case INFO_DONATE:
			return {
				...state,
				dataInfoDonate: action.data,
				waiting: false
			}
		case DONATE:
			return {
				...state,
				dataDonate: action.data,
				waiting: false
			}
		case CHECK_ROLLUP:
			return {
				...state,
				dataRollup: action.data,
				waiting: false
			}
		case LIST_SANQUA:
			return {
				...state,
				dataSanqua: action.data,
				waiting: false
			}
		case SET_PHIEN_SANQUA:
			return {
				...state,
				phienSanqua: action.data,
				waiting: false
			}
		case SESSION_UPCOMMING:
			return {
				...state,
				dataSessionUpcomming: action.data,
				waiting: false
			}
		case SESSION_INPLAY:
			return {
				...state,
				dataSessionInplay: action.data,
				waiting: false
			}
		case RACE_CONNECT:
			return {
				...state,
				dataRaceConnect: action.data,
				waiting: false
			}
		case RACE_PLAYING:
			return {
				...state,
				dataRacePlaying: action.data,
				waiting: false
			}
		case RACE_STATE:
			return {
				...state,
				dataRaceState: action.data,
				waiting: false
			}
		case RACE_SUMMARY:
			return {
				...state,
				dataRaceSummary: action.data,
				waiting: false
			}
		case JACKPOT_CONNECT:
			return {
				...state,
				dataJackpotConnect: action.data,
				waiting: false
			}
		case JACKPOT_PLAYING:
			return {
				...state,
				dataJackpotPlaying: action.data,
				waiting: false
			}
		case JACKPOT_STATE:
			return {
				...state,
				dataJackpotState: action.data,
				waiting: false
			}
		case JACKPOT_SUMMARY:
			return {
				...state,
				dataJackpotSummary: action.data,
				waiting: false
			}
		case KNOCKOUT_CONNECT:
			return {
				...state,
				dataKnockoutConnect: action.data,
				waiting: false
			}
		case KNOCKOUT_PLAYING:
			return {
				...state,
				dataKnockoutPlaying: action.data,
				waiting: false
			}
		case KNOCKOUT_STATE:
			return {
				...state,
				dataKnockoutState: action.data,
				waiting: false
			}
		case KNOCKOUT_SUMMARY:
			return {
				...state,
				dataKnockoutSummary: action.data,
				waiting: false
			}
		case BETTING:
			return {
				...state,
				dataBetting: action.data,
				waiting: false
			}
		case CHECK_PLACE:
			return {
				...state,
				dataCheckPlace: action.data,
				waiting: false
			}
		case BALANCES:
			return {
				...state,
				dataBalances: action.data,
				waiting: false
			}
		case CONTENT_GUIDE:
			return {
				...state,
				dataContentGuide: action.data,
				waiting: false
			}
			
		default:
			return state
	}
}


export const checkRollup = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`,
			"dataType":"json"
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/pay/api/v1/bonus/rollup"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: CHECK_ROLLUP,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const sessionUpcomming = (token, data) => {


	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/catalog/api/v1/rooms/upcoming-eachroom"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: SESSION_UPCOMMING,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const sessionInPlay = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/catalog/api/v1/rooms/inplay"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: SESSION_INPLAY,
				data: response.data
			})
		}).catch(function (error) {
			console.log(error.info)
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getVinhDanh = (data) => {

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/catalog/api/v1/rewards/winners"
		return axios.post(url, data).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_VINH_DANH,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getTuDo = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/users/api/v1/giftbox/history"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_TU_DO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getHistoryTuDo = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/pay/api/v1/transaction/history"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_HISTORY_TU_DO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



export const getItemAward = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/users/api/v1/giftbox/open"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: ITEM_AWARD,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const viewItemAward = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/users/api/v1/giftbox/view"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: VIEW_ITEM_AWARD,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}









export const raceConnect = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/race/connect"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: RACE_CONNECT,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const racePlaying = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/race/playing"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: RACE_PLAYING,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const raceState = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/race/state"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: RACE_STATE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const raceSummary = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/race/summary"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: RACE_SUMMARY,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



export const jackpotConnect = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/jackpot/connect"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: JACKPOT_CONNECT,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const jackpotPlaying = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/jackpot/playing"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: JACKPOT_PLAYING,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const jackpotState = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/jackpot/state"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: JACKPOT_STATE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const jackpotSummary = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/jackpot/summary"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: JACKPOT_SUMMARY,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const knockoutConnect = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/knockout/connect"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: KNOCKOUT_CONNECT,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const knockoutPlaying = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/knockout/playing"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: KNOCKOUT_PLAYING,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const knockoutState = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/knockout/state"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: KNOCKOUT_STATE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const knockoutSummary = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/lobby/api/v1/race/summary"
		return axios.post(url, data, header).then(function (response) {
			dispatch({
				type: KNOCKOUT_SUMMARY,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



export const betting = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/pay/api/v1/bets/place"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: BETTING,
				data: response.data
			})
		}).catch(function (error) {
			console.log(error)
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const checkPlace = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/pay/api/v1/bets/check-place"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: CHECK_PLACE,
				data: response.data
			})
		}).catch(function (error) {
			console.log(error.response)
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getBalances = (token, data) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/pay/api/v1/wallet/getbalances"
		return axios.post(url, data, header).then(function (response) {
			console.log(response)
			dispatch({
				type: BALANCES,
				data: response.data
			})
		}).catch(function (error) {
			console.log(error)
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getContentGuide = (data) => {

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "/content/api/v1/news/firstordefault"
		return axios.post(url, data).then(function (response) {
			dispatch({
				type: CONTENT_GUIDE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

















export const getListSanQua = (token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url =Ultilities.base_url() + "darts/user-get-current-gift-hunter-sessions/"
		return axios.get(url, header).then(function (response) {
			console.log(response)
			dispatch({
				type: LIST_SANQUA,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getInfoDonate = (token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-request-darts-giving/"
		return axios.get(url, header).then(function (response) {
			console.log(response)
			dispatch({
				type: INFO_DONATE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getDonate = (token, receiver, darts, confirmCode) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
			"receiver":receiver,
			"darts":darts,
			"confirmCode":confirmCode
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-give-darts/"
		return axios.get(url, header).then(function (response) {
			console.log(response)
			dispatch({
				type: DONATE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


export const getLuckyInfo = (type, token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/user-get-current-session/?type="+type
		return axios.get(url, header).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_INFO,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}

export const getMoreSessions= () => {

	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "darts/current-sessions"
		return axios.get(url).then(function (response) {
			console.log(response)
			dispatch({
				type: LUCKY_SESSIONS,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}


// export const gds = (type,sessionId,  token, code_key, type_device, x, y, i, delta) => {

// 	var code=encrypt(`t=${type}&s=${sessionId}&x=${x}&y=${y}&c=${type_device}&i=${i}&d=${delta}`, code_key)


// 	var myHeaders = new Headers();
// 	myHeaders.append("token", token);

// 	var formdata = new FormData();
// 	formdata.append("code", code);

// 	var requestOptions = {
// 		method: 'POST',
// 		headers: myHeaders,
// 		body: formdata,
// 		redirect: 'follow'
// 	  };
	

// 	return dispatch => {
// 		dispatch({
// 			type: LUCKY_REQUEST
// 		})
// 		var url = Ultilities.base_url() + `darts/user-throw/`;
// 		return fetch(url, requestOptions)
// 		.then(response => response.json())
// 		.then(result => {
// 			dispatch({
// 				type: DATA_USER_SPIN,
// 				data: result
// 			})
// 		}).catch(function (error) {
// 			dispatch({
// 				type: SERVER_ERROR
// 			})
// 		})
// 	}
// }



// export const gdssssss = (type, points,sessionId,  token, code_key) => {
// 	var header = {
// 		headers: {
// 			"Content-Type": "application/json",
// 			"token": token,
// 		}
// 	}
	
// 	return dispatch => {
// 		dispatch({
// 			type: LUCKY_REQUEST
// 		})
// 		var url = Ultilities.base_url() + `darts/user-throw/?type=${type}&points=${points}&sessionId=${sessionId}`;
// 		return axios.get(url, header).then(function (response) {
// 			dispatch({
// 				type: DATA_USER_SPIN,
// 				data: response.data
// 			})
// 		}).catch(function (error) {
// 			dispatch({
// 				type: SERVER_ERROR
// 			})
// 		})
// 	}
// }








export const userLogout = (token) => {
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	var url = Ultilities.base_url() + "darts/user-signout";
	return axios.get(url, header).then(function (response) {
		console.log(response)
	}).catch(function (error) {
		console.log(error)
	})
}


export const getInfoUser = (token) => {
	
	var header = {
		headers: {
			"Content-Type": "application/json",
			"token": token,
		}
	}
	return dispatch => {
		dispatch({
			type: LUCKY_REQUEST
		})
		var url = Ultilities.base_url() + "user-signin";
		return axios.get(url, header).then(function (response) {
			console.log("response.data:",response.data)
			dispatch({
				type: INFO_USER_RESPONSE,
				data: response.data
			})
		}).catch(function (error) {
			dispatch({
				type: SERVER_ERROR
			})
		})
	}
}



// function encrypt(msg, pass) {
//     var salt = window.CryptoJS.lib.WordArray.random(saltSize / 8);

//     var key = window.CryptoJS.PBKDF2(pass, salt, {
//         keySize: keySize / 32,
//         iterations: iterations
//     });

//     var iv = window.CryptoJS.lib.WordArray.random(ivSize / 8);

//     var encrypted = window.CryptoJS.AES.encrypt(msg, key, {
//         iv: iv,
//         padding: window.CryptoJS.pad.Pkcs7,
//         mode: window.CryptoJS.mode.CBC

//     });

//     var encryptedHex = base64ToHex(encrypted.toString());
//     var base64result = hexToBase64(salt + iv + encryptedHex);


//     return base64result;
// }

// function hexToBase64(str) {
//     return btoa(String.fromCharCode.apply(null,
//         str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
//     );
// }

// function base64ToHex(str) {
//     for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
//         var tmp = bin.charCodeAt(i).toString(16);
//         if (tmp.length === 1) tmp = "0" + tmp;
//         hex[hex.length] = tmp;
//     }
//     return hex.join("");
// }
