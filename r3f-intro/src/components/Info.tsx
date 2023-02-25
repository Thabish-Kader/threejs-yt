import { store } from "../store";
import { ColorPicker } from "./ColorPicker";

export const Info = () => {
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
		</section>
	);
};
