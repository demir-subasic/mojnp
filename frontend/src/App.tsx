import './App.css';
import { useViewportSize } from '@mantine/hooks';
import DesktopUI from './components/DesktopUI/DesktopUI';
import MobileUI from './components/MobileUI/MobileUI';

function App() {
  const { width } = useViewportSize();
  return <>{width <= 768 ? <MobileUI /> : <DesktopUI />}</>;
}

export default App;
