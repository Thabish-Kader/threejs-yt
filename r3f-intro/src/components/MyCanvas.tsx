import {
	ContactShadows,
	Environment,
	Float,
	OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Drone } from "./Drone";

export const MyCanvas = () => {
	return (
		<Canvas
			shadows
			camera={{
				position: [
					6.909913634975045, 2.198230225266069, -7.993475110578021,
				],
			}}
		>
			<ambientLight />
			<OrbitControls />
			<Float
				speed={2} // Animation speed, defaults to 1
				rotationIntensity={2} // XYZ rotation intensity, defaults to 1
				floatIntensity={2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
				floatingRange={[0, 0.5]}
			>
				<Drone />
			</Float>
			<ContactShadows position={[0, -0.8, 0]} opacity={1} blur={0.8} />
			<Environment background preset="sunset" blur={1} />
		</Canvas>
	);
};
