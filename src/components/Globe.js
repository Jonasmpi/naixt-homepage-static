"use client";

import createGlobe from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

const classNames = (...classes) => classes.filter(Boolean).join(' ');

const AI_GLOBE_CONFIG = {
    width: 800,
    height: 800,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [255, 255, 255],
    markerColor: [1 / 255, 12 / 255, 128 / 255],
    glowColor: [255, 255, 255],
    offset: [0, 0],
    markers: [
        { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
        { location: [40.7128, -74.006], size: 0.08 },   // New York City
        { location: [51.5074, -0.1278], size: 0.08 },   // London
        { location: [52.52, 13.405], size: 0.07 },      // Berlin
        { location: [35.6895, 139.6917], size: 0.08 },  // Tokyo
        { location: [1.3521, 103.8198], size: 0.07 },   // Singapore
        { location: [19.076, 72.8777], size: 0.07 },    // Mumbai
        { location: [39.9042, 116.4074], size: 0.08 },  // Beijing
        { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
        { location: [48.8566, 2.3522], size: 0.07 },    // Paris
    ],
    onRender: (state) => {
        state.width = state.width || 800;
        state.height = state.height || 800;
    },
};

export default function Globe({ className, config = AI_GLOBE_CONFIG }) {
    const canvasRef = useRef();
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    let phi = 0;  // Initial rotation angle
    let width = 0;

    const updatePointerInteraction = useCallback((value) => {
        pointerInteracting.current = value;
        canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }, []);

    const updateMovement = useCallback((clientX) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
        }
    }, [api]);

    const onRender = useCallback((state) => {
        if (!pointerInteracting.current) phi += 0.0025;
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;

        // Ensure markers are rendered consistently
        state.markers = config.markers;
    }, [r, config.markers]);

    useEffect(() => {
        const onResize = () => {
            width = canvasRef.current?.offsetWidth ?? 0;
        };
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender,
        });

        setTimeout(() => {
            if (canvasRef.current) {
                canvasRef.current.style.opacity = "1";
            }
        }, 0);

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [config, onRender]);

    return (
        <div className={classNames("relative aspect-square w-full max-w-[600px] mx-auto", className)}>
            <div className="text-center mb-8">
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We engage with our clients worldwide, either in person or through all available technological means. We firmly believe that our ability to help is rooted in understanding and addressing our clients' specific requirements and challenges.
                </p>
            </div>
            <canvas
                ref={canvasRef}
                className={classNames("h-full w-full opacity-0 transition-opacity duration-500")}
                onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
            />
        </div>
    );
}
