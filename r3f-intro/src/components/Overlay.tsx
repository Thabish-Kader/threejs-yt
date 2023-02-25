import { store } from "../store";
import { ColorPicker } from "./ColorPicker";

export const Overlay = () => {
	const handleBuy = () => {
		alert(
			"Congrats on buying a robot dog! Now you can finally experience the joys of pet ownership without any of the inconveniences of having to leave your house or make physical contact with another living being. Who needs a real dog when you can have a robot dog that doesn't shed, bark, or judge you for eating ice cream straight out of the tub? It's loneliness at its finest!"
		);
	};
	return (
		<section className="absolute top-[30%] left-32 z-50 hidden lg:block">
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
			<button
				onClick={handleBuy}
				className="p-2 border rounded-lg w-full mt-4 hover:bg-black hover:text-white transition-colors duration-300"
			>
				Buy Now
			</button>
		</section>
	);
};
