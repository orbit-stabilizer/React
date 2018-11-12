import React, { Component } from 'react';

import Operand from '../containers/operand';
import Operator from '../containers/operator';
import Display from '../containers/display';

export default class App extends Component {
	render() {
		return (
			<div>
				<table className="table text-center mt-5">
					<tbody>
						<tr>
							<td />
							<td />
							<td />
							<Display />
						</tr>
						<tr>
							<Operand value={1} />
							<Operand value={2} />
							<Operand value={3} />
							<Operator value={'+'} />
						</tr>
						<tr>
							<Operand value={4} />
							<Operand value={5} />
							<Operand value={6} />
							<Operator value={'-'} />
						</tr>
						<tr>
							<Operand value={7} />
							<Operand value={8} />
							<Operand value={9} />
							<Operator value={'x'} />
						</tr>
						<tr>
							<Operand value={0} />
							<Operand value={0} hidden={true} />
							<Operand value={0} hidden={true} />
							<Operator value={'/'} />
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
