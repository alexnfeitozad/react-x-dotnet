import { Door } from './Door';
import { Shelf } from './Shelf';

export function Cabinet({ frameworkName }) {
  return (
    <div className="modern-card" style={{ maxWidth: '450px', width: '100%', textAlign: 'center' }}>
      <h2 style={{ color: '#0f3460', marginBottom: '25px', fontSize: '22px' }}>
        Armário {frameworkName}
      </h2>
      
      <div style={{
        position: 'relative',
        backgroundColor: '#d3a87c',
        border: '8px solid #643f25',
        borderRadius: '12px',
        width: '100%',
        height: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        boxSizing: 'border-box',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
      }}>
        <span style={{ position: 'absolute', top: '-12px', left: '-12px', backgroundColor: '#e94560', color: 'white', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', fontWeight: 'bold', zIndex: 10 }}>
          &lt;Cabinet /&gt;
        </span>
        
        <Shelf />
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4px'
        }}>
          <Door side="left" />
          <Door side="right" />
        </div>
        
        <Shelf />
      </div>

      <p style={{ marginTop: '25px', fontSize: '14px', color: '#777', fontStyle: 'italic', marginBottom: 0 }}>
        Este componente é formado pela composição de pequenas peças!
      </p>
    </div>
  );
}
