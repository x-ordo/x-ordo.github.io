"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration, Noise } from "@react-three/postprocessing";
import * as THREE from "three";
import { BlendFunction } from "postprocessing";

interface GridScanProps {
  sensitivity?: number;
  lineThickness?: number;
  linesColor?: string;
  gridScale?: number;
  scanColor?: string;
  scanOpacity?: number;
  enablePost?: boolean;
  bloomIntensity?: number;
  chromaticAberration?: number;
  noiseIntensity?: number;
}

function ScanningGrid({
  linesColor = "#392e4e",
  scanColor = "#FF9FFC",
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineThickness = 1,
}: {
  linesColor: string;
  scanColor: string;
  scanOpacity: number;
  gridScale: number;
  lineThickness: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const scanLineRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const gridMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(linesColor) },
        uGridScale: { value: gridScale },
        uLineThickness: { value: lineThickness * 0.001 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uGridScale;
        uniform float uLineThickness;
        varying vec2 vUv;

        float grid(vec2 uv, float scale, float thickness) {
          vec2 grid = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
          float line = min(grid.x, grid.y);
          return 1.0 - min(line, 1.0);
        }

        void main() {
          float gridValue = grid(vUv, 1.0 / uGridScale, uLineThickness);
          float alpha = gridValue * 0.3;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [linesColor, gridScale, lineThickness]);

  const scanMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(scanColor) },
        uOpacity: { value: scanOpacity },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;

        void main() {
          float scanLine = smoothstep(0.0, 0.1, vUv.y - mod(uTime * 0.3, 1.4) + 0.2);
          scanLine *= 1.0 - smoothstep(0.1, 0.3, vUv.y - mod(uTime * 0.3, 1.4) + 0.2);

          float glow = exp(-pow(abs(vUv.y - mod(uTime * 0.3, 1.4) + 0.1) * 5.0, 2.0));

          float alpha = (scanLine * 0.8 + glow * 0.5) * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [scanColor, scanOpacity]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (gridMaterial.uniforms) {
      gridMaterial.uniforms.uTime.value = time;
    }
    if (scanMaterial.uniforms) {
      scanMaterial.uniforms.uTime.value = time;
    }
  });

  const width = viewport.width * 1.5;
  const height = viewport.height * 1.5;

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, -1]}>
        <planeGeometry args={[width, height, 1, 1]} />
        <primitive object={gridMaterial} attach="material" />
      </mesh>
      <mesh ref={scanLineRef} position={[0, 0, -0.5]}>
        <planeGeometry args={[width, height, 1, 1]} />
        <primitive object={scanMaterial} attach="material" />
      </mesh>
    </>
  );
}

function PostProcessingEffects({
  bloomIntensity = 0.6,
  chromaticAberration = 0.002,
  noiseIntensity = 0.01,
}: {
  bloomIntensity: number;
  chromaticAberration: number;
  noiseIntensity: number;
}) {
  return (
    <EffectComposer>
      <Bloom
        intensity={bloomIntensity}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        mipmapBlur
      />
      <ChromaticAberration
        blendFunction={BlendFunction.NORMAL}
        offset={new THREE.Vector2(chromaticAberration, chromaticAberration)}
      />
      <Noise
        premultiply
        blendFunction={BlendFunction.ADD}
        opacity={noiseIntensity}
      />
    </EffectComposer>
  );
}

export default function GridScan({
  linesColor = "#392e4e",
  scanColor = "#FF9FFC",
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineThickness = 1,
  enablePost = true,
  bloomIntensity = 0.6,
  chromaticAberration = 0.002,
  noiseIntensity = 0.01,
}: GridScanProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ScanningGrid
          linesColor={linesColor}
          scanColor={scanColor}
          scanOpacity={scanOpacity}
          gridScale={gridScale}
          lineThickness={lineThickness}
        />
        {enablePost && (
          <PostProcessingEffects
            bloomIntensity={bloomIntensity}
            chromaticAberration={chromaticAberration}
            noiseIntensity={noiseIntensity}
          />
        )}
      </Canvas>
    </div>
  );
}
