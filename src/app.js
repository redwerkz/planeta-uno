import './reset.css'
import './styles.css'
import createGlobe from "cobe";

let phi = 10;
let canvas = document.getElementsByTagName("canvas")[0];

let width = 0;
const onResize = () => canvas.current && (width = canvas.current.offsetWidth)
window.addEventListener('resize', onResize)
onResize()

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 3,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [1, 0, 0],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
    { location: [48.5975, 7.7691], size: 0.03 }
    ],
    onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
    }
});
