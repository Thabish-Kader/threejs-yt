import { store } from "../store";
import { ColorPicker } from "./ColorPicker";
import PopUp from "./Popup";

export const Overlay = () => {
	const handleBuy = () => {
		alert(
			"Congratulations to me on buying a robot dog! I can now proudly say that I have a pet that won't judge me for eating a whole pizza by myself on a Friday night. And if anyone tells me that having a robot dog is a sign of loneliness, I'll just tell them it's better than talking to my houseplants. At least the robot dog will respond with more than just a wilted leaf."
		);
	};
	return (
		<section className="absolute top-[30%] left-32 z-10 hidden lg:block">
			<h1 className="text-5xl font-bold text-black tracking-widest">
				thabishLabs .
			</h1>
			<p className="text-lg text-gray-700 mt-2 hidden sm:block w-[500px]">
				Why should I buy a robot dog, you ask? Well, it's simple: I'm
				tired of being a lone wolf and I figured I could use a companion
				who doesn't judge me for binge-watching Netflix all day. Plus,
				with a robot dog, I can finally say I have a "fetch" buddy.
			</p>{" "}
			<h1 className="text-4xl text-gray-800 font-bold mt-10 uppercase">
				Match your Furniture
			</h1>
			<ColorPicker dronePart={"Outer"} />
			<ColorPicker dronePart={"Skeleton"} />
			{/* <button
				onClick={handleBuy}
				className="p-2 border rounded-lg w-full mt-4 hover:bg-black hover:text-white transition-colors duration-300"
			>
				Buy Now
			</button> */}
			<PopUp />
		</section>
	);
};
