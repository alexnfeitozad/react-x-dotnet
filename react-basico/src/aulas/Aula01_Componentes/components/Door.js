import { Hinge } from './Hinge';

export function Door({ side }) {
  const isLeft = side === 'left';
  
  const style = {
    width: '140px',
    height: '300px',
    backgroundColor: '#ba885a',
    border: '2px solid #643f25',
    position: 'relative',
    borderRadius: '2px'
  };

  const handleStyle = {
    width: '10px',
    height: '40px',
    backgroundColor: '#3b3a36',
    borderRadius: '5px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [isLeft ? 'right' : 'left']: '10px'
  };

  return (
    <div style={style}>
      <span style={{ position: 'absolute', top: '2px', left: '2px', backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', fontSize: '10px', padding: '2px 4px', borderRadius: '3px', fontFamily: 'monospace', zIndex: 10 }}>
        &lt;Door /&gt;
      </span>
      <Hinge top side={side} />
      <Hinge side={side} />
      <div style={handleStyle} title="Handle" />
    </div>
  );
}
