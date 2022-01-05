const Tags = ({ children, pill = false, color = 'primary', className = '' }) => {
  return (
    <span className={`badge bg-${color}${pill ? ' badge-pill' : ''} ${className}`}>{children}</span>
  );
};

export default Tags;
