
import example from './example.js';
import index from './index.js';


export default {
    routers: [
        { path: 'example', component: example },
        { path: 'index', component: index }
    ],
    layout: {
        template: `<router-view></router-view>`
    }
} 