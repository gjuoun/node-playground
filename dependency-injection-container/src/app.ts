import { bootstrap } from './di-container';
import { RenderingEngine } from './rendering-engine';



const [renderinEngine1, release1] = bootstrap<RenderingEngine>(RenderingEngine);
