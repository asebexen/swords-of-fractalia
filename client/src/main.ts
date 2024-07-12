import App from './App.svelte';
import './index.css';

const appDiv = document.querySelector<HTMLDivElement>('#app');
if (appDiv === null) throw new Error('Missing #app div');

const app = new App({
  target: appDiv
})

export default app
