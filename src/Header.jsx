import React from 'react';
import logo from './images/logo.png';
export default class Header extends React.PureComponent {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className={"header"}>
				<div className={"headerbody"}>
						<div className={"headerlogo"}>
							<img src={logo} alt={"念世情纪念钻石-永恒的爱"}/> 
						</div>
						<div className={"navbar"}>
							<ul>
								<li>首页</li>
								<li>念世怀钻石</li>
								<li>技术与流程</li>
								<li>权威认证</li>
								<li>产品目录</li>
								<li>服务中心</li>
								<li>行业资讯</li>
							</ul>
						</div>
				</div>
			</div>
		);
	}
}
