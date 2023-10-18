export default function ComputerWindow({ width, height, color }) {
  return (
		<div>
		  <div className="container">
			<div className="topbar">
			  <ul>
				<li className="topbar-red-button"></li>
				<li className="topbar-yellow-button"></li>
				<li className="topbar-green-button"></li>
			  </ul>
			</div>
		  </div>
		  <style jsx>{`
			.container {
			    background-color: white;
			    border-radius: 1rem;
			    display: flex;
			    height: ${height};
			    overflow: hidden;
			    width: ${width};
			}
	
			.topbar {
			    background-color: ${color};
			    height: 2rem;
			    width: 100%;
			    position: relative;
			}
	
			.topbar ul li {
                border-radius: 100%;
                height: 0.5rem;
				list-style: none;
			    position: absolute;
			    top: 0.75rem;
			    width: 0.5rem;
			}
	
			.topbar-red-button {
				background-color: red;
			    left: 0.5rem;
			}
	
			.topbar-yellow-button {
				background-color: yellow;
			    left: 1.5rem;
			}
	
			.topbar-green-button {
				background-color: lime;
			    left: 2.5rem;
			}
		  `}</style>
		</div>
	  );
}