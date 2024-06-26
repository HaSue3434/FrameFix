// layout //
import LayerModule from './layout/layerModule';
import FrameModule from './layout/frameModule';
import HeaderModule from './layout/headerModule';
import SectionModule from './layout/sectionModule';
import FooterModule from './layout/footerModule';
// layout //

// features //
import ShapeModule from "./features/shapeModule";
import TextModule from "./features/textModule";
import MenuModule from "./features/menuModule";
import SlidesModule from "./features/slidesModule";
import ButtonModule from "./features/buttonModule";
import IconModule from "./features/iconsModule";
import ImageModule from "./features/imagesModule";
// features //

// magic //
import MagicModule from './magic-ai/magicModule';
// magic //

/* React.Suspense
export const LayerModule = React.lazy(() => import('./features/LayerModule'));
*/


// panel //
import Design from "./tab-panel/tabDesign";
import Prototype from "./tab-panel/prototype";
import HandOff from './tab-panel/handoff';
// panel //

// selected element //
import Default from './tab-panel/selected-element/default';
import FrameSeleted from './tab-panel/selected-element/frame-seleted';
import ShapeSelected from './tab-panel/selected-element/shapeSelected';
import tSelected from './tab-panel/selected-element/t-selected';
// selected element //

export {

    // layer //
    LayerModule,FrameModule,HeaderModule,SectionModule,FooterModule,
    // layer 

    // features //
    ShapeModule,TextModule,MenuModule,SlidesModule,ButtonModule,IconModule,ImageModule,
    // features
    
    // magic //
    MagicModule,
    // magic //

    // panel //
    Design,Prototype,HandOff,
    // panel //

    // selected element //
    Default,FrameSeleted,ShapeSelected,tSelected,
    // selected element //

};
