import React from "react";
import { store } from "../store";

export const ColorPicker = ({ dronePart }: { dronePart: string }) => {
	const changeColor = (color: string) => {
		switch (dronePart) {
			case "Outer":
				store.items.body = color;
				break;

			case "Skeleton":
				store.items.skeleton = color;
		}
	};
	return (
		<div>
			<div className="flex gap-5 mt-2 items-center">
				<h1 className="text-lg text-gray-800 font-bold w-[90px]">
					{dronePart}
				</h1>
				<span
					onClick={() => changeColor("red")}
					className="h-6 w-6 bg-red-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("green")}
					className="h-6 w-6 bg-green-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("yellow")}
					className="h-6 w-6 bg-yellow-500 rounded-full inline-flex cursor-pointer"
				></span>
				<span
					onClick={() => changeColor("white")}
					className="h-6 w-6 bg-white rounded-full inline-flex cursor-pointer"
				></span>
			</div>
		</div>
	);
};
