// layout
import LayerModule from './layout/layerModule';
import FrameModule from './layout/frameModule';
import HeaderModule from './layout/headerModule';
import SectionModule from './layout/sectionModule';
import FooterModule from './layout/footerModule';
// layout

// features 
import ShapeModule from "./features/shapeModule";
import TextModule from "./features/textModule";
import MenuModule from "./features/menuModule";
import SlidesModule from "./features/slidesModule";
import ButtonModule from "./features/buttonModule";
import IconModule from "./features/iconsModule";
import ImageModule from "./features/imagesModule";
// features 

// magic 
import MagicModule from './magic-ai/magicModule';
// magic 

/* React.Suspense
export const LayerModule = React.lazy(() => import('./features/LayerModule'));
*/


export {

    // layer 
    LayerModule,FrameModule,HeaderModule,SectionModule,FooterModule,
    // layer 

    // features
    ShapeModule,TextModule,MenuModule,SlidesModule,ButtonModule,IconModule,ImageModule,
    // features
    
    // magic
    MagicModule
    // magic
};
