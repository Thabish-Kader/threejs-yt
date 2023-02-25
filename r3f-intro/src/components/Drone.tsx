import { useGLTF, useTexture } from "@react-three/drei";
import { DroneGLTF } from "../typings";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { store } from "../store";

// https://sketchfab.com/3d-models/robot-cln-r-school-project-9a793a9293fb4ec89936aebfda8fc434
export const Drone = () => {
	const { nodes, materials } = useGLTF("/drone.glb") as DroneGLTF;
	const snap = useSnapshot(store);
	return (
		<group castShadow receiveShadow scale={0.6}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_BlackGlass_0.geometry}
				material={materials.BlackGlass}
				material-color={snap.items.body}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_MetalShiny_0.geometry}
				material={materials.MetalShiny}
				material-color={snap.items.skeleton}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_Metal_0.geometry}
				material={materials.Metal}
				material-color={snap.items.neck}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_Rubber_0.geometry}
				material={materials.Rubber}
				material-color={snap.items.feet}
			/>
			<mesh
				geometry={nodes.pCube43_lambert1_0.geometry}
				material={materials.lambert1}
				material-color={snap.items.body}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_lambert4_0.geometry}
				material={materials.lambert4}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pCube43_pasted__Eyes_0.geometry}
				material-color={snap.items.eyes}
			>
				<meshBasicMaterial />
			</mesh>
		</group>
	);
};
