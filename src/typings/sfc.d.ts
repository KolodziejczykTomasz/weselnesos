declare module '*.js' {
    import {defineComponent} from 'vue';
    export default defineComponent;
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }