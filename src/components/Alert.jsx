import PropTypes from 'prop-types';

const alertStyles = {
    base: 'p-4 rounded-md flex items-start space-x-3',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
};

export const Alert = ({ type = 'info', children }) => {
    return (
        <div className={`${alertStyles.base} ${alertStyles[type]}`}>
            {children}
        </div>
    );
};

export const AlertTitle = ({ children }) => (
    <h4 className="font-semibold">{children}</h4>
);

export const AlertDescription = ({ children }) => (
    <p className="text-sm">{children}</p>
);

// PropTypes for type checking
Alert.propTypes = {
    type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
    children: PropTypes.node.isRequired,
};

AlertTitle.propTypes = {
    children: PropTypes.node.isRequired,
};

AlertDescription.propTypes = {
    children: PropTypes.node.isRequired,
};
