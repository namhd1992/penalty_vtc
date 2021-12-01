import React from 'react'
import loading from './loading.gif';

class Login extends React.Component {

	render() {

		return (
			<div class="modal fade show modal-backdrop" style={{zIndex: 10015, display: "block", paddingRight: 4}} aria-modal="true" role="dialog">
				<div class="modal-dialog d-flex justify-content-center align-items-center h-75">
					<img src={loading} width="32" />
				</div>
			</div>
		);
	}
}


export default Login