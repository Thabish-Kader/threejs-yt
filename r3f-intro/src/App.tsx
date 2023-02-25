import { Overlay } from "./components/Overlay";
import { MyCanvas } from "./components/MyCanvas";

function App() {
	return (
		<div className="h-screen ">
			{/* <div className="grid grid-cols-3 h-screen hero-section">
				<Info />
				<div className="col-span-3 lg:col-span-2 ">
					<MyCanvas />
				</div>
			</div> */}
			<Overlay />
			<MyCanvas />
		</div>
	);
}

export default App;
