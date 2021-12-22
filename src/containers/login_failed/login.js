import React from 'react'

class Login extends React.Component {

	render() {

		return (
			<div class="modal fade show modal-backdrop" style={{zIndex: 10015, display: "block", paddingRight: 4}} aria-modal="true" role="dialog">
				<div class="modal-dialog d-flex justify-content-center align-items-center h-75">
					<p style={{fontSize:25, color:'#fff'}}>Bạn đã đăng nhập trên một thiết bị khác.</p>
				</div>
			</div>
		);
	}
}


export default Login