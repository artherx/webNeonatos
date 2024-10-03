import Spline from '@splinetool/react-spline';

export default function Fondo() {
  return (
    <div className="w-full h-90 flex items-center justify-center absolute">
      <Spline 
        style={{ 
          width: '100%', 
          height: '100%', 
          maxWidth: '100%', 
          maxHeight: '100%'
        }} 
        scene="https://prod.spline.design/RDB5rd9PdUy0G91W/scene.splinecode" 
      />
    </div>
  );
}
