export function Hinge({ top, side }) {
  const isLeft = side === 'left';
  
  const style = {
    width: '12px',
    height: '24px',
    backgroundColor: '#3b3a36',
    borderRadius: '2px',
    position: 'absolute',
    [top ? 'top' : 'bottom']: '15%',
    [isLeft ? 'left' : 'right']: '-6px'
  };

  return <div style={style} title="<Hinge />" />;
}
